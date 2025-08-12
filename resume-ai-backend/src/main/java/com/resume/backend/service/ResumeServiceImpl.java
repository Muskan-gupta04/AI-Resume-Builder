package com.resume.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.util.retry.Retry;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@Service
public class ResumeServiceImpl implements ResumeService {
    private static final Logger logger = Logger.getLogger(ResumeServiceImpl.class.getName());
    private final WebClient webClient;
    private final String apiUrl;
    private final String apiKey;
    private final ObjectMapper objectMapper;

    public ResumeServiceImpl(WebClient.Builder webClientBuilder,
                             @Value("${deepseek.api.url}") String apiUrl,
                             @Value("${deepseek.api.key}") String apiKey,
                             ObjectMapper objectMapper) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.objectMapper = objectMapper;

        this.webClient = webClientBuilder
                .baseUrl(apiUrl)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .defaultHeader("HTTP-Referer", "https://www.webstylepress.com")
                .defaultHeader("X-Title", "WebStylePress")
                .build();
    }

    @Override
    public JsonNode generateResumeResponse(String userResumeDescription) {
        try {
            // Load prompt from file
            String promptString = loadPromptFromFile("resume_prompt.txt");

            // Format prompt with user data
            String promptContent = putValuesToTemplate(promptString,
                    Map.of("userDescription", userResumeDescription));

            // Create request body
            ObjectNode requestBody = objectMapper.createObjectNode();
            requestBody.put("model", "deepseek/deepseek-r1:free");
            requestBody.putArray("messages").addObject()
                    .put("role", "user")
                    .put("content", promptContent);

            // API call using WebClient
            String response = webClient.post()
                    .uri(apiUrl)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .retryWhen(Retry.fixedDelay(3, Duration.ofSeconds(2)))
                    .block();

            // Process response
            JsonNode jsonResp = objectMapper.readTree(response);
            String extractedMessage = extractMessage(jsonResp);
            System.out.println(extractedMessage);
            JsonNode jsonResponse = extractJson(extractedMessage);
            System.out.println(jsonResponse);
            return jsonResponse != null ? jsonResponse
                    : objectMapper.createObjectNode().put("status", "invalid_response");

        } catch (Exception e) {
            logger.severe("API request failed: " + e.getClass().getSimpleName());
            return objectMapper.createObjectNode().put("status", "error");
        }
    }


    private String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }

    private static String putValuesToTemplate(String template, Map<String, String> values) {
        String result = template;
        for (Map.Entry<String, String> entry : values.entrySet()) {
            result = result.replace("{" + entry.getKey() + "}", entry.getValue());
        }
        return result;
    }

    private String extractMessage(JsonNode response) {
        try {
            JsonNode choices = response.get("choices");
            if (choices != null && choices.isArray() && choices.size() > 0) {
                JsonNode message = choices.get(0).get("message");
                return message.get("content").asText();
            }
        } catch (Exception e) {
            logger.severe("Error parsing AI response: " + e.getMessage());
            return "Error parsing DeepSeek AI response";
        }
        return "No response from DeepSeek AI";
    }

    public JsonNode extractJson(String response) {
        try {
            // First try to parse the entire response as JSON
            try {
                return objectMapper.readTree(response);
            } catch (JsonProcessingException e) {
                // If that fails, look for code blocks
            }

            // Look for JSON code block with flexible markers
            int jsonStart = response.indexOf("```json");
            if (jsonStart == -1) jsonStart = response.indexOf("```");
            if (jsonStart != -1) jsonStart += (response.startsWith("```json") ? 7 : 3);

            int jsonEnd = response.lastIndexOf("```");
            if (jsonEnd == -1) jsonEnd = response.length();

            if (jsonStart != -1 && jsonEnd > jsonStart) {
                String jsonContent = response.substring(jsonStart, jsonEnd)
                        .trim()
                        .replaceAll("^json", "") // Remove leading 'json' if present
                        .replaceAll("^`*", "")  // Remove any remaining backticks
                        .trim();

                return objectMapper.readTree(jsonContent);
            }

            // Final fallback - try parsing the whole response
            return objectMapper.readTree(response);
        } catch (JsonProcessingException e) {
            logger.severe("JSON Parsing Error: " + e.getMessage());
            logger.severe("Problematic content: " + response);
            return null;
        }

    }
}


