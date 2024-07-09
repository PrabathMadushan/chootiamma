import React, {useState} from 'react';
import './App.scss';
import {Button, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import {patchDocument, PatchType, TextRun} from "docx";
import {saveAs} from "file-saver";

function App() {

    const [nayakaru, setNayakaru] = useState("");

    const handlePatchDocument = async () => {
        try {
            // Fetch the document from the public folder
            const response = await fetch(`${process.env.PUBLIC_URL}/document.docx`);
            const arrayBuffer = await response.arrayBuffer();

            // Use the patchDocument function to patch the document
            const patchedDoc = await patchDocument(arrayBuffer, {
                patches: {
                    paminilikaru: {
                        type: PatchType.PARAGRAPH,
                        children: [new TextRun(nayakaru)],
                    }
                },
            });

            // Create a blob from the patched document
            const blob = new Blob([patchedDoc], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            // Save the patched document
            saveAs(blob, "PatchedDocument.docx");
        } catch (error) {
            console.error("Error patching document:", error);
        }
    };

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
                            <Form.Control type="text" value={nayakaru} onChange={e => {
                                setNayakaru(e.target.value);
                            }}/>
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
                            <Button onClick={() => {
                                handlePatchDocument().then(r => {
                                });
                            }}>Generate</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
