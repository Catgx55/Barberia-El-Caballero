package com.barberia.dao;

import com.barberia.config.ConexionDB;
import com.barberia.model.Cita;


import java.sql.*;

public class CitaDAO {
    
    public boolean registrarCita(Cita cita, Long serviceId) {
        String sqlAppointment = "INSERT INTO appointments (client_id, barber_id, status_id, appointment_date, start_time, end_time, total_amount, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        String sqlDetail = "INSERT INTO appointment_details (appointment_id, service_id, price) VALUES (?, ?, ?)";

        Connection conn = null;
        PreparedStatement psApp = null;
        PreparedStatement psDet = null;
        ResultSet rsKeys = null;

        try {
            // Obtener la conexion a la BD
            conn = ConexionDB.obtenerConexion();
            if(conn == null) {
                System.err.println("Error: No se puede conectar a la base de datos.");
                return false;
            }

            conn.setAutoCommit(false);

            psApp = conn.prepareStatement(sqlAppointment, Statement.RETURN_GENERATED_KEYS);
            psApp.setLong(1, cita.getClientId());
            psApp.setLong(2, cita.getBarberId());
            psApp.setLong(3, cita.getStatusId());
            psApp.setDate(4, Date.valueOf(cita.getAppointmentDate()));

            // Normalización de tiempos (HH:mm -> HH:mm:ss)
            String start = cita.getStartTime();
            if(start != null && start.length() == 5) start += ":00";
            psApp.setTime(5, Time.valueOf(start));
            
            String end = cita.getEndTime();
            if(end != null && end.length() == 5) end += ":00";
            psApp.setTime(6, Time.valueOf(end));
            
            psApp.setDouble(7, cita.getTotalAmount());
            psApp.setString(8, cita.getNotes());

            int affectedRows = psApp.executeUpdate();
            if(affectedRows == 0) {
                conn.rollback();
                return false;
            }

            // obtener el ID autoincrementable
            rsKeys = psApp.getGeneratedKeys();
            long appointmentId = 0;
            if(rsKeys.next()) {
                appointmentId = rsKeys.getLong(1);
                cita.setId(appointmentId);
            }

            // insertar detalle de la cita
            psDet = conn.prepareStatement(sqlDetail);
            psDet.setLong(1, appointmentId);
            psDet.setLong(2, serviceId);
            psDet.setDouble(3, cita.getTotalAmount());
            psDet.executeUpdate();

            conn.commit(); //confirmar cambios de la base de datos 
            return true;

        } catch (SQLException e) {
            if(conn != null) {
                try { conn.rollback();} catch(SQLException ex) { ex.printStackTrace(); }
            }
            System.err.println("Error en CitaDAO.registrarCita: " + e.getMessage());
            e.printStackTrace();
            return false;
            
        } finally {
            try {
                if(rsKeys != null) rsKeys.close();
                if(psApp != null) psApp.close();
                if(psDet != null) psDet.close();
                if(conn != null) { 
                    conn.setAutoCommit(true);
                    conn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public Cita obtenerPorId(Long id) {
        String sql = "SELECT a.*, " + 
                    "CONCAT(u.first_name, ' ', u.last_name) AS client_name, " +
                    "CONCAT(bu.first_name, ' ', bu.last_name) AS barber_name, " +
                    "s.name AS service_name " +
                    "FROM appointments a " +
                    "JOIN users u ON a.client_id = u.id " +
                    "JOIN barbers b ON a.barber_id = b.id " +
                    "JOIN users bu ON b.user_id = bu.id " +
                    "JOIN appointment_details ad ON a.id = ad.appointment_id " +
                    "JOIN services s ON ad.service_id = s.id " +
                    "WHERE a.id = ?";

        Cita cita = null;

        try (Connection con = ConexionDB.obtenerConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    cita = new Cita();
                    cita.setId(rs.getLong("id"));
                    cita.setClientId(rs.getLong("client_id"));
                    cita.setBarberId(rs.getLong("barber_id"));
                    cita.setStatusId(rs.getLong("status_id"));
                    cita.setAppointmentDate(rs.getDate("appointment_date").toString());
                    cita.setStartTime(rs.getTime("start_time").toString());
                    cita.setEndTime(rs.getTime("end_time").toString());
                    cita.setTotalAmount(rs.getDouble("total_amount"));
                    cita.setNotes(rs.getString("notes"));

                    cita.setClientName(rs.getString("client_name"));
                    cita.setBarberName(rs.getString("barber_name"));
                    cita.setServiceName(rs.getString("service_name"));
                }
            }
            
        } catch (SQLException e) {
            System.err.println("Error en CitaDAO.obtenerPorId: " + e.getMessage());
            e.printStackTrace();
        }

        return cita;
    }
}
