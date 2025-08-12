package com.resume.backend.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.resume.backend.ResumeRequest;
import com.resume.backend.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/resume")
public class ResumeController {
    @Autowired
    private ResumeService resumeService;

    @PostMapping("/generate")
    public ResponseEntity<JsonNode> getResumeData(@RequestBody ResumeRequest resumeRequest) throws IOException {
        JsonNode jsonObject=resumeService.generateResumeResponse(resumeRequest.userDescription());
        return ResponseEntity.ok(jsonObject);
    }

}
