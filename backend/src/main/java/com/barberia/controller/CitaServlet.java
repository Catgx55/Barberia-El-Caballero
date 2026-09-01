package com.barberia.controller;

import com.barberia.dao.BarberoDAO;
import com.barberia.dao.CitaDAO;
import com.barberia.dao.ServiceDAO;
import com.barberia.dao.UsuarioDAO;
import com.barberia.model.Cita;
import com.barberia.model.Service;

import java.io.IOException;
import java.time.LocalTime;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/CitaServlet")
public class CitaServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private CitaDAO citaDAO;
    private UsuarioDAO usuarioDAO;
    private ServiceDAO serviceDAO;
    private BarberoDAO barberoDAO;

    @Override
    public void init() throws ServletException {
        // inicializacion de la capa de acceso de datos
        citaDAO = new CitaDAO();
        usuarioDAO = new UsuarioDAO();
        serviceDAO = new ServiceDAO();
        barberoDAO = new BarberoDAO();
    }

    // Metodo GET
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        String accion = request.getParameter("accion");
        String idParam = request.getParameter("id");

        if("consultar".equals(accion) && idParam != null && !idParam.trim().isEmpty()) {
            try {
                Long id = Long.parseLong(idParam);
                Cita citaEncontrada = citaDAO.obtenerPorId(id);

                if(citaEncontrada != null) {
                    request.setAttribute("reservarCita", citaEncontrada);
                    request.getRequestDispatcher("confirmacion.jsp").forward(request, response);
                } else {
                    request.setAttribute("error", "No se encontro ninguna cita con el ID especificado.");
                    request.getRequestDispatcher("reservar-cita.jsp").forward(request, response);
                }
            } catch (NumberFormatException e) {
                request.setAttribute("error", "El ID de la cita debe ser un númeo válido");
                request.getRequestDispatcher("reservar-cita.jsp").forward(request, response);
            }
        } else {
            request.setAttribute("listaServicios", serviceDAO.listarActivos());
            request.setAttribute("listaBarberos", barberoDAO.listarActivos());
            request.getRequestDispatcher("reservar-cita.jsp").forward(request, response);
        }
    }

    // Metodo post
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");

        try {
            // Procesar/crear el cliente en la BD
            String nombreCliente = request.getParameter("nombre");
            String emailCliente = request.getParameter("email");
            String telefonoCliente = request.getParameter("telefono");

            // crear u obtener cliente
            Long clientId = usuarioDAO.obtenerOCrearCliente(nombreCliente, emailCliente, telefonoCliente);

            if(clientId == null) {
                request.setAttribute("error", "No se pudo registrar la información del cliente.");
                refrescarYRedirigirFormulario(request, response);
                return;
            }

            Long barberId = Long.parseLong(request.getParameter("barberId"));
            Long serviceId = Long.parseLong(request.getParameter("serviceId"));
            Long statusId = 1L; //estado pendiente

            String fecha = request.getParameter("fecha");
            String horaInicio = request.getParameter("horaInicio");
            String notas = request.getParameter("notas");

            // consultar precio y calcular hora fin usando duracion real del servicio
            Service servicio = serviceDAO.obtenerPorId(serviceId);
            if(servicio == null) {
                request.setAttribute("error", "El servicio seleccionado no existe.");
                refrescarYRedirigirFormulario(request, response);
                return;
            }

            double precio = servicio.getPrice().doubleValue();

            // Normalización de la hora
            if(horaInicio != null && horaInicio.length() > 5) {
                horaInicio = horaInicio.substring(0, 5);
            }

            LocalTime inicio = LocalTime.parse(horaInicio);
            LocalTime fin = inicio.plusMinutes(servicio.getDurationMinutes());
            String horaFin = fin.toString();

            // Guardar citas
            Cita nuevaCita = new Cita(
                clientId, barberId, statusId, fecha, horaInicio, horaFin, precio, notas
            );

            boolean guardado = citaDAO.registrarCita(nuevaCita, serviceId);

            if(guardado) {
                Cita citaCompleta = citaDAO.obtenerPorId(nuevaCita.getId());
                request.setAttribute("reservarCita", citaCompleta);
                request.getRequestDispatcher("confirmacion.jsp").forward(request, response);
            } else {
                request.setAttribute("error", "Error al procesar la reserva en la base de datos");
                refrescarYRedirigirFormulario(request, response);
            }
        } catch (Exception e) {
            System.err.println("Error en CitasServlet POST: " + e.getMessage());
            e.printStackTrace();
            request.setAttribute("error", "Error al procesar la reserva: " + e.getMessage());
            refrescarYRedirigirFormulario(request, response);
        }
    }

    private void refrescarYRedirigirFormulario(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("listaServicios", serviceDAO.listarActivos());
        request.setAttribute("listaBarberos", barberoDAO.listarActivos());
        request.getRequestDispatcher("reservar-cita.jsp").forward(request, response);
    }
}