import React, { useState, useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import RadarChart from '../components/chart/RadarChart';

const ComparationBolide = () => {
    const meteoros = useMemo(() => [
        { id: 1, nombre: 'Bólido A', a: 2.5, e: 0.7, i: 15, Omega: 45, w: 120 },
        { id: 2, nombre: 'Bólido B', a: 3.2, e: 0.5, i: 10, Omega: 60, w: 140 },
        { id: 3, nombre: 'Bólido C', a: 7.2, e: 1.5, i: 40, Omega: 160, w: 440 }
    ], []);

    const [bolido1, setBolido1] = useState(meteoros[meteoros.length - 2].id);
    const [bolido2, setBolido2] = useState(meteoros[meteoros.length - 1].id);
    const [bolidosSeleccionados, setBolidosSeleccionados] = useState([
        meteoros[meteoros.length - 2],
        meteoros[meteoros.length - 1]
    ]);

    useEffect(() => {
        const nuevosBolidos = meteoros.filter(
            (bolido) => bolido.id === bolido1 || bolido.id === bolido2
        );
        setBolidosSeleccionados(nuevosBolidos);
    }, [bolido1, bolido2, meteoros]);

    const handleBolido1Change = (event) => {
        setBolido1(parseInt(event.target.value));
    };

    const handleBolido2Change = (event) => {
        setBolido2(parseInt(event.target.value));
    };

    const handleSubmit = () => {
        const nuevosBolidos = meteoros.filter(
            (bolido) => bolido.id === bolido1 || bolido.id === bolido2
        );
        setBolidosSeleccionados(nuevosBolidos);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <h2 className="text-center mb-4">Comparación de Bólidos</h2>
                    <p className="text-center mb-4">
                        Selecciona dos bólidos para comparar sus características.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center mb-4">
                <Col xs={12} md={4}>
                    <Form.Select
                        aria-label="Selecciona el primer bólido"
                        value={bolido1}
                        onChange={handleBolido1Change}
                    >
                        <option>Selecciona el primer bólido</option>
                        {meteoros.map((bolido) => (
                            <option key={bolido.id} value={bolido.id}>
                                {bolido.nombre}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                <Col xs={12} md={4}>
                    <Form.Select
                        aria-label="Selecciona el segundo bólido"
                        value={bolido2}
                        onChange={handleBolido2Change}
                    >
                        <option>Selecciona el segundo bólido</option>
                        {meteoros.map((bolido) => (
                            <option key={bolido.id} value={bolido.id}>
                                {bolido.nombre}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                {/* <Col xs={12} md={2}>
                    <Button variant="primary" className="w-100" onClick={handleSubmit}>
                        Aplicar
                    </Button>
                </Col> */}
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}> {/* Ajusta los tamaños según necesites */}
                    <RadarChart meteoros={bolidosSeleccionados} />
                </Col>
            </Row>
        </Container>
    );
};

export default ComparationBolide;