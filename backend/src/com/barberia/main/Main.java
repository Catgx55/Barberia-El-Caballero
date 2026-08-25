package com.barberia.main;

import com.barberia.dao.ServiceDAO;
import com.barberia.model.Service;

import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Generacion de pruebas ingresando datos de manera manual
        ServiceDAO serviceDAO = new ServiceDAO();

        System.out.println("=== 1. PRUEBA DE INSERCIÓN (CREATE) ===");
        Service nuevoServicio = new Service("Corte Diseñado + Pigmetación", "Diseño urbano personalizado", new BigDecimal("35000.00"), 45,true);
        boolean insertado = serviceDAO.crear(nuevoServicio);
        System.out.println("Servicio insertado correctamente: " + insertado);

        System.out.println("\n=== 2. PRUEBA DE CONSULTA (READ) ===");
        List<Service> servicios = serviceDAO.listar();
        for(Service s : servicios) {
            System.out.println("ID: " + s.getId() + " | Nombre: " + s.getName() + " | Precio: $" + s.getPrice());
        }

        System.out.println("\n=== 3. PRUEBA DE ACTUALIZACIÓN (UPDATE) ===");
        if(!servicios.isEmpty()) {
            Service servicioActualizar = servicios.get(servicios.size() - 1);
            servicioActualizar.setName("Corte Diseñado Premium");
            servicioActualizar.setPrice(new BigDecimal("38000.00"));
            boolean actualizado = serviceDAO.actualizar(servicioActualizar);
            System.out.println("Servicio ID " + servicioActualizar.getId() + " actualizado: " + actualizado);
        }

        System.out.println("\n=== 4. PRUEBA DE ELIMINACIÓN (DELETE) ===");
        if(!servicios.isEmpty()) {
            Long idEliminar = servicios.get(servicios.size() - 1).getId();
            boolean eliminado = serviceDAO.eliminar(idEliminar);
            System.out.println("Servicio ID " + idEliminar + " eliminado: " + eliminado);
        }
    }
}
