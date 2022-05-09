import { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import ListaTareas from "./Components/ListaTareas";
import ListaPrincipal from "./Components/ListaPrincipal";
import axios from 'axios';
import FormularioTarea from "./Components/FormularioTarea";

function App() {
    const [listas, setListas] = useState([]);

    const cargarLista = () =>{
        axios.get('http://localhost:8080/tareas')
        .then(({data}) => setListas(data))
    }

    useEffect(cargarLista, []);

    const onSubmitL = (values) => {
        axios.post("http://localhost:8080/tareas", values)
        .then(() => cargarLista());
    }

    const eliminarLista = (tarea) => {
        axios.delete("http://localhost:8080/tareas/${tarea.id}")
        .then(() => cargarLista());
    }



    const cargarTareas = () =>{
        axios.get('http://localhost:8080/tareas')
        .then(({data}) => setTareas(data))
    }

    useEffect(cargarTareas, []);

    const onSubmit = (values) => {
        axios.post("http://localhost:8080/tareas", values)
        .then(() => cargarTareas());
    }

    const eliminarTarea = (tarea) => {
        axios.delete("http://localhost:8080/tareas/${tarea.id}")
        .then(() => cargarTareas());
    }

    return (
        <>
        <Container>
        <Row>
                <Col md={6}>
                  <ListaPrincipal 
                  listas={listas}
                  onDelete={eliminarTarea} />
                </Col>
                <Col md={6}>
                  <ListaPrincipal onSubmitL={onSubmitL}/>
                </Col>
            </Row>

        <Container>
            <Row>
                <Col md={6}>
                  <ListaTareas 
                  tareas={tareas}
                  onDelete={eliminarTarea} />
                </Col>
                <Col md={6}>
                  <FormularioTarea onSubmit={onSubmit}/>
                </Col>
            </Row>
        </Container>
        </Container>
        </>
    );
}

export default App;
