<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva tu Cita - Barberia El Caballero</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="header">
        <h1>Barberia El Caballero</h1>
        <p>Estilo, tradición y corte premium</p>
    </header>

    <main class="container">
        <section class="card">
            <h2>Agendar Cita</h2>

            <%-- Mensaje de Error si la transación falla --%>
            <%
                String error = (String) request.getAttribute("error");
                if (error != null) {
            %>
                <div class="alert-error">
                    <p><%= error %></p>
                </div>
            <%    }  %>

            <!-- 
                El atributo 'action' apunta a la URL mapeada en el Servlet (CitaServlet).
                El atributo 'method' define la petición HTTP POST exigida en los criterios.
            -->

            <form action="CitaServlet" method="post" class="form-reserva">

                <!-- Datos del cliente -->
                <div class="form-group">
                    <label for="nombre">Nombre Completo:</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Carlos Lopez" required>
                </div>

                <div class="form-group">
                    <label for="email">Correo Electronico:</label>
                    <input type="email" name="email" id="email" placeholder="ejemplo@correo.com" required>
                </div>

                <div class="form-group">
                    <label for="telefono">Teléfono / Celular:</label>
                    <input type="tel" name="telefono" id="telefono" placeholder="3001234567" required>
                </div>

                <!-- Seleccionar el Barbero -->
                <div class="form-group">
                    <label for="barberId">Seleccionar Barbero:</label>
                    <select name="barberId" id="barberId" required>
                        <option value="">>--- Selecione un Profesional ---<</option>
                        <option value="1">Mateo Gómez - Barber Marter</option>
                        <option value="2">Carlos Ruiz - Estilista</option>
                    </select>
                </div>

                <!-- Seleccionar Servicio -->
                <div class="form-group">
                    <label for="serviceId">Servicio:</label>
                    <select name="serviceId" id="serviceId" required>
                        <option value="">>--- Seleccione un Servicio ---<</option>
                        <option value="1">Corte tradicional</option>
                        <option value="2">Perfilado de Barba + Masaje</option>
                        <option value="3">Combo Caballero (Corte + Barba)</option>
                    </select>
                </div>

                 <!-- Fecha de la cita -->
                <div class="form-group">
                    <label for="fecha">Fecha de la Cita:</label>
                    <input type="date" name="fecha" id="fecha" required>
                </div>

                <!-- Hora de inicio -->
                <div class="form-group">
                    <label for="horaInicio">Hora de Inicio:</label>
                    <input type="time" name="horaInicio" id="horaInicio" required>
                </div>

                <!-- Notas adicionales -->
                <div class="form-group">
                    <label for="notas">Nota / Observaciones:</label>
                    <textarea name="notas" id="notas" rows="3" placeholder="Ej: Prefiero el corte con tijeras en los laterales"></textarea>
                </div>

                <button type="submit" class="btn-submit">Confirmar y Reservar Cita</button>
            </form>
        </section>
    </main>

    <script src="js/index.js"></script>
    
</body>
</html>