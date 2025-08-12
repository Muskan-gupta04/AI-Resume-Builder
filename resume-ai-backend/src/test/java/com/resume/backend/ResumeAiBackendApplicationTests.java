package com.resume.backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.resume.backend.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResumeAiBackendApplicationTests {
	@Autowired
	private ResumeService resumeService;
	@Test
	void contextLoads() throws IOException {
//		String userResumeDescription = "I am Dungesh tjwapi with 2 years of Java experience.";
//
//		JsonNode response = resumeService.generateResumeResponse(userResumeDescription);
//        System.out.println(response);

	}

}
