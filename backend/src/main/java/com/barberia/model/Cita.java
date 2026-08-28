package com.barberia.model;

import java.sql.Date;
import java.sql.Time;

// Clase que representa una reserva/cita en la barberia "el caballero"
public class Cita {
    // Atributos de la cita;
    private Long id;
    private Long clientId;
    private Long barberId;
    private Long statusId;
    private String appointmentDate; // YYYY-MM-DD
    private String startTime; //HH:MM
    private String endTime; //HH:MM
    private double totalAmount;
    private String notes;

    // Campos auxiliares para mostrar nombres en el JSP
    private String clientName;
    private String barberName;
    private String serviceName;

    public Cita() {}

    public Cita(Long clientId, Long barberId, Long statusId, String appointmentDate, String startTime, String endTime, double totalAmount, String notes) {

        this.clientId = clientId;
        this.barberId = barberId;
        this.statusId = statusId;
        this.appointmentDate = appointmentDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalAmount = totalAmount;
        this.notes = notes;
    }

    // getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getClientId() { return clientId; }
    public void setClientId(Long clientId) { this.clientId = clientId; }

    public Long getBarberId() { return barberId; }
    public void setBarberId(Long barberId) { this.barberId = barberId; }

    public Long getStatusId() { return statusId; }
    public void setStatusId(Long statusId) { this.statusId = statusId; }

    public String getAppointmentDate() { return appointmentDate; }
    public void setAppointmentDate(String appointmentDate) { this.appointmentDate = appointmentDate; }

    public String getStartTime() { return startTime; }
    public void setStartTime(String startTime) { this.startTime = startTime; }

    public String getEndTime() { return endTime; }
    public void setEndTime(String endTime) { this.endTime = endTime; }

    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getBarberName() { return barberName; }
    public void setBarberName(String barberName) { this.barberName = barberName; }

    public String getServiceName() { return serviceName; }
    public void setServiceName(String serviceName) { this.serviceName = serviceName; }

}