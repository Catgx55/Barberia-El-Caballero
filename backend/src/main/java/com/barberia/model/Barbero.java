package com.barberia.model;

public class Barbero {
    private Long id;
    private Long userId;
    private String specialty;
    private Boolean isActive;

    private String firstName;
    private String lastName;
    private String fullName;

    public Barbero() {}

    public Barbero(Long id, Long userId, String specialty, Boolean isActive) {
        this.id = id;
        this.userId = userId;
        this.specialty = specialty;
        this.isActive = isActive;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getSpecialty() { return specialty; }
    public void setSpecialty(String specialty) { this.specialty = specialty; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getFullName() { 
        if (fullName != null) return fullName;
        return (firstName != null ? firstName : "") + " " + (lastName != null ? lastName : "");
    }
    public void setFullName(String fullName) { this.fullName = fullName; }
}