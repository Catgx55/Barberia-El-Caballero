package com.barberia.dao;

import com.barberia.config.ConexionDB;
import java.sql.*;


public class UsuarioDAO {
    //Busca un cliente por su correo o lo registra si no existe
    public Long obtenerOCrearCliente(String nombre, String email, String telefono) {
        String sqlSelect = "SELECT id FROM users WHERE email = ?";
        String sqlInsert = "INSERT INTO users (first_name, last_name, email, phone, password, role_id) VALUES (?, '', ?, ?, '123456', 1)";

        try(Connection conn = ConexionDB.obtenerConexion()) {
            if(conn == null) return null;

            // Verificar si el usuario existe
            try(PreparedStatement psSel = conn.prepareStatement(sqlSelect)) {
                psSel.setString(1, email);
                try(ResultSet rs = psSel.executeQuery()) {
                    if(rs.next()) {
                        return rs.getLong("id");
                    }
                }
            }

            // registrar si no existe
            try(PreparedStatement psIns = conn.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
                psIns.setString(1, nombre);
                psIns.setString(2, email);
                psIns.setString(3, telefono);

                int affectedRows = psIns.executeUpdate();
                if(affectedRows > 0) {
                    try(ResultSet rsKeys = psIns.getGeneratedKeys()) {
                        if(rsKeys.next()) {
                            return rsKeys.getLong(1);
                        }
                    }
                }
            }
        } catch (SQLException e) {
            System.err.println("Error en UsuarioDAO.obtenerOCrearCliente: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
}
