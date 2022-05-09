/**
 * A continuación veremos un crud encargado de elaborar listas y tareas
 * @author: Sara Oquendo Valle
 * Este proyecto de listas fue elaborado con una base del coach Raúl
 */

import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import ListaTareas from "./Components/ListaTareas";
import ListaPrincipal from "./Components/ListaPrincipal";
import axios from "axios";
import FormularioTarea from "./Components/FormularioTarea";

/**
 *
 * @returns devuelve los componentes, el formulario  de tareas dentro de la lista principal, para que el usuario pueda crear varias listas.
 */
function App() {
  const [listas, setListas, setTareas, tareas] = useState([]);

  /**
   * Encargado de traer la lista principal
   */
  const cargarLista = () => {
    axios
      .get("http://localhost:8080/tareas")
      .then(({ data }) => setListas(data));
  };

  useEffect(cargarLista, []);

  /**
   * Encargado de guardar los valores cargados anteriormente
   * @param {*} values
   */
  const onSubmitL = (values) => {
    axios
      .post("http://localhost:8080/tareas", values)
      .then(() => cargarLista());
  };

  /**
   * Elimina una lista seleccionada
   * @param {*} listasllama al contenido en la lista
   */
  const eliminarLista = (listas) => {
    axios
      .delete("http://localhost:8080/tareas/${tarea.id}")
      .then(() => cargarLista());
  };

  /**
   * Encargado de llamar el formulario de tareas
   */
  const cargarTareas = () => {
    axios
      .get("http://localhost:8080/tareas")
      .then(({ data }) => setTareas(data));
  };

  useEffect(cargarTareas, []);

  /**
   * Encargado de guardar los valores cargados anteriormente
   * @param {*} values
   */
  const onSubmit = (values) => {
    axios
      .post("http://localhost:8080/tareas", values)
      .then(() => cargarTareas());
  };

  /**
   * Elimina una tarea completada o que ya no se desee realizar
   * @param {*} tarea llama al contenido en la lista
   */
  const eliminarTarea = (tarea) => {
    axios
      .delete("http://localhost:8080/tareas/${tarea.id}")
      .then(() => cargarTareas());
  };

  return (
    <Fragment>
      <Row>
        <Col md={6}>
          <ListaPrincipal listas={listas} onDelete={eliminarTarea} />
        </Col>
        <Col md={6}>
          <ListaPrincipal onSubmitL={onSubmitL} />
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={6}>
            <ListaTareas tareas={tareas} onDelete={eliminarTarea} />
          </Col>
          <Col md={6}>
            <FormularioTarea onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
