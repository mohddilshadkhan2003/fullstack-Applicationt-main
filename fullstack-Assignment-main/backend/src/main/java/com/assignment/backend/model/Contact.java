package com.assignment.backend.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contacts")
public class Contact {
    @Id private String id;
    @NotBlank @Size(max = 100) private String fullName;
    @NotBlank @Email private String email;
    @NotBlank @Size(max = 20) private String mobile;
    @NotBlank @Size(max = 100) private String city;

    public Contact() {}
    public String getId() { return id; }
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getMobile() { return mobile; }
    public String getCity() { return city; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setEmail(String email) { this.email = email; }
    public void setMobile(String mobile) { this.mobile = mobile; }
    public void setCity(String city) { this.city = city; }
}
