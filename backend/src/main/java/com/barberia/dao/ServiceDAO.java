package com.barberia.dao;

import com.barberia.config.ConexionDB;
import com.barberia.model.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ServiceDAO {

    // obtener un servicio por su id
    public Service obtenerPorId(Long id) {
        String sql = "SELECT id, name, description, price, duration_minutes, is_active FROM services WHERE id = ?";
        Service service = null;

        try(Connection conn = ConexionDB.obtenerConexion();
            PreparedStatement stmt = conn.prepareStatement(sql)){

                stmt.setLong(1, id);
                try(ResultSet rs = stmt.executeQuery()) {
                    if(rs.next()) {
                        service = new Service();
                        service.setId(rs.getLong("id"));
                        service.setName(rs.getString("name"));
                        service.setDescription(rs.getString("description"));
                        service.setPrice(rs.getBigDecimal("price"));
                        service.setDurationMinutes(rs.getInt("duration_minutes"));
                        service.setIsActive(rs.getBoolean("is_active"));
                    }
                }
        }catch(SQLException e) {
            System.err.println("Error en ServiceDAO.obtenerPorId: ");
            e.printStackTrace();
        }
        return service;
    }
    
    /* Create
    public boolean crear(Service servicio) {
        String sql = "INSERT INTO services (name, description, price, duration_minutes, is_active) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = ConexionDB.obtenerConexion(); PreparedStatement stmt = conn.prepareStatement(sql)){

            stmt.setString(1, servicio.getName());
            stmt.setString(2, servicio.getDescription());
            stmt.setBigDecimal(3, servicio.getPrice());
            stmt.setInt(4, servicio.getDurationMinutes());
            stmt.setBoolean(5, servicio.getIsActive());

            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("Error al insertar servicio: " + e.getMessage());
            return false;
        }
    } */

    // Read
    public List<Service> listarActivos() {
        List<Service> servicios = new ArrayList<>();
        String sql = "SELECT id, name, description, price, duration_Minutes, is_active FROM services WHERE is_active = true";

        try (Connection conn = ConexionDB.obtenerConexion(); 
            PreparedStatement stmt = conn.prepareStatement(sql); 
            ResultSet rs = stmt.executeQuery()){
            
            while (rs.next()) {
                Service service = new Service();
                service.setId(rs.getLong("id"));
                service.setName(rs.getString("name"));
                service.setDescription(rs.getString("description"));
                service.setPrice(rs.getBigDecimal("price"));
                service.setDurationMinutes(rs.getInt("duration_minutes"));
                service.setIsActive(rs.getBoolean("is_active"));

                servicios.add(service);
            }
        } catch (SQLException e) {
            System.err.println("Error en ServiceDAO.listarActivos: " + e.getMessage());
        }
        return servicios;
    }

    /*  Update
    public boolean actualizar(Service servicio) {
        String sql = "UPDATE services SET name = ?, description = ?, price = ?, duration_minutes = ? WHERE id = ?";

        try (Connection conn = ConexionDB.obtenerConexion(); PreparedStatement stmt = conn.prepareStatement(sql)){
            
            stmt.setString(1, servicio.getName());
            stmt.setString(2, servicio.getDescription());
            stmt.setBigDecimal(3, servicio.getPrice());
            stmt.setInt(4, servicio.getDurationMinutes());
            stmt.setLong(5, servicio.getId());

            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("Error al actualizar servicio: " + e.getMessage());
            return false;
        }
    }

    // Delete
    public boolean eliminar(Long id) {
        String sql = "DELETE FROM services WHERE id = ?";

        try (Connection conn = ConexionDB.obtenerConexion(); PreparedStatement stmt = conn.prepareStatement(sql)){
            
            stmt.setLong(1, id);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("Error al eliminar un servicio: " + e.getMessage());
            return false;
        }
    } */
}
