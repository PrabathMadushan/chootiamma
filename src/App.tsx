import React from 'react';
import './App.scss';
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Row className={"justify-content-center mt-5"}>
                <Col lg={6} className="form-container p-4 rounded">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පැමිණිලි කරු</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>විත්ති කරු</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණය කරු</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරු 01</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරු 02</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණයකරුගේ ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරුගේ (01) ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරුගේ (02) ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණය මුදල</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>බේරුම් කරුගේ නම</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>බේරුම් කරුගේ ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>සහකාර කොමසාරිස්ගේ නම</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>අරමුදලේ ස්වභාවය</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පෝලී මුදල</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <FormGroup>
                            <Button>Generate</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
