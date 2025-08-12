package com.resume.backend.service;

import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public interface ResumeService {
    JsonNode generateResumeResponse(String userResumeDescription) throws IOException;

}
