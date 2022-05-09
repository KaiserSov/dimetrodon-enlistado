import React from "react";
import {
  faCheckCircle,
  faEdit,
  faTrash,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Se encarga de crear las funciones de las tareas en la lista. Completar y eliminar tareas
 * @param {*tareas, onDelete} tareas es para almacenar valores, onDelete es para eliminar valores en la lista
 * @returns
 */
const ListaTareas = ({ tareas, onDelete }) => {
  return (
    <>
      <h3 className="mb-3">Mi lista de tareas</h3>

      {tareas.map((tarea) => (
        <div className="mb-3 border rounded p 3" key={tarea.id}>
          <div className="d-flex justify-content-between mb-1">
            <div className="fw-bold">{tarea.nombre}</div>
            <div className="text-muted small">
              <FontAwesomeIcon icon={faEdit} className="cursor-pointer" />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer ms-2"
                onClick={() => onDelete(tarea)}
              />
            </div>
          </div>

          <div>
            {tarea.completado ? (
              <div className="text-succes small">
                <FontAwesomeIcon icon={faCheckCircle} /> Completado
              </div>
            ) : (
              <div className="text-secondary small">
                <FontAwesomeIcon icon={faClock} /> Completado
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaTareas;
