package com.project.sofka.proyecto.model;
/**
 * Modelo de tareas
 * @Author Sara Oquendo Valle
 */

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @param id, identificador de tareas
 * @param nombre, nombre de la tares
 * @param completado, chequeador
 */
@Data
@Document
public class Tarea {
    @Id
    private String id;
    private String nombre;
    private boolean completado;
}
