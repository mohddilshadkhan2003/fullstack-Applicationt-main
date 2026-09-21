package com.assignment.backend.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clients")
public class Client {
    @Id private String id;
    @Size(max = 2048) private String imageUrl;
    @NotBlank @Size(max = 100) private String name;
    @Size(max = 2000) private String description;
    @Size(max = 100) private String designation;

    public Client() {}
    public String getId() { return id; }
    public String getImageUrl() { return imageUrl; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getDesignation() { return designation; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setDesignation(String designation) { this.designation = designation; }
}
