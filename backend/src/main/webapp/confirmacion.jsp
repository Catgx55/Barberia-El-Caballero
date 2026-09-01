<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- Importación del modelo Java Bean en JSP -->
 <%@ page import="com.barberia.model.Cita"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmacion de Reserva - Barberia El Caballero</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <main class="container">
        <h2>Resumen y confirmación de Cita</h2>
            <%
                //Recuperacón del objeto JavaBean adjunto por el Servlet
                Cita cita = (Cita) request.getAttribute("reservarCita");
                if (cita != null) {
            %>
                <div class="card-confirmacion">
                    <div class="card-header">
                        <h3>¡Cita Registrada Exitosamente!</h3>
                        <p class="appointment-id">Código de Cita: <strong>#<%= cita.getId() %></strong></p>
                    </div>

                    <div class="card-body">
                        <ul>
                            <li><strong>Cliente:</strong><%= cita.getClientName() != null ? cita.getClientName() : "ID: " + cita.getClientId() %></li>
                            <li><strong>Barbero:</strong><%= cita.getBarberName() != null ? cita.getBarberName() : "ID: " + cita.getBarberId() %></li>
                            <li><strong>Servicio:</strong><%= cita.getServiceName() != null ? cita.getServiceName() : "Servicio General" %></li>
                            <li><strong>Fecha:</strong><%= cita.getAppointmentDate() %></li>
                            <li><strong>Horario:</strong><%= cita.getStartTime() %> - <%= cita.getEndTime() %></li>
                            <li><strong>Total a Pagar:</strong>$<%= String.format("%.2f", cita.getTotalAmount()) %></li>
                            <li><strong>Estado:</strong><span class="badge-status">Pendiente</span></li>
                            <li><strong>Notas:</strong><%= cita.getNotes() != null && !cita.getNotes().isEmpty() ? cita.getNotes() : "Sin observaciones" %></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <a href="reservar-cita.jsp" class="btn-primary">Reservar otra cita</a>
                    </div>
                </div>        
            <%    } else { %>
                <div class="alert-error">
                    <p>No se encontraron datos de reserva para mostrar</p>
                    <a href="reservar-cita.jsp" class="btn-secondary">Volver al Formulario</a>
                </div>
            <% } %>
    </main>
    
</body>
</html>