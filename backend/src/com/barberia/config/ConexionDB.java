package com.barberia.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionDB {
    // URL de conexion a la base de datos MySQL en localhost
    private static final String URL = "jdbc:mysql://localhost:3306/barberia_el_caballero_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    private static final String USER = "barberia_user";
    private static final String PASSWORD = "Catgx1402++";

    /* Obtiene la coexion activa a la base de datos MySQL
    @return conexion SQL
    @throws Si ocurre un error en el driver o credenciales */
    public static Connection obtenerConexion() throws SQLException {
        try {
            // Cargar explicitamente el driver de MySQL JDBC
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Error: Driver JDBC de MySQL no encontrado.", e);
        }
    }
}