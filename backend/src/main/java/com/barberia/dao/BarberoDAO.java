package com.barberia.dao;

import com.barberia.config.ConexionDB;
import com.barberia.model.Barbero;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BarberoDAO {
    
    public List<Barbero> listarActivos() {
        List<Barbero> barberos = new ArrayList<>();
        String sql = "SELECT b.id, b.user_id, b.specialty, b.is_active, u.first_name, u.last_name " +
                     "FROM barbers b " +
                     "JOIN users u ON b.user_id = u-id" +
                     "WHERE b.is_active = 1";

        try (Connection conn = ConexionDB.obtenerConexion();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Barbero barbero = new Barbero();
                barbero.setId(rs.getLong("id"));
                barbero.setUserId(rs.getLong("user_id"));
                barbero.setSpecialty(rs.getString("specialty"));
                barbero.setIsActive(rs.getBoolean("is_active"));
                barbero.setFirstName(rs.getString("first_name"));
                barbero.setLastName(rs.getString("last_name"));
                barberos.add(barbero);
            }
        } catch (SQLException e) {
            System.err.println("Error en BarberoDAO.listarActivos: " + e.getMessage());
            e.printStackTrace();
        }
        return barberos;
    }
}
