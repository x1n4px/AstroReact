import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-5">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">&copy; {new Date().getFullYear()} AstroExample. Todos los derechos reservados.</p>
                    </Col>
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        {/* <p className="mb-2">Síguenos en nuestras redes sociales:</p>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="text-white mx-2">Facebook</a>
                            <a href="#" className="text-white mx-2">Twitter</a>
                            <a href="#" className="text-white mx-2">Instagram</a>
                        </div> */}
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        {/* <p className="mb-0">Contacto: info@astroexample.com</p> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;