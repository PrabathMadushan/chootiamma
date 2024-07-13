import React, {useState} from 'react';
import './App.scss';
import {Button, Col, Container, Form, FormGroup, Row, Spinner} from "react-bootstrap";
import {patchDocument, PatchType, TextRun} from "docx";
import {saveAs} from "file-saver";

interface State{
    paminilikaru:string;
    withthikaru:string;
    nayakaru:string;
    apakarueka:string;
    apakarudeka:string;
    nayakarugelipinaya:string;
    apakaruekalipinaya:string;
    apakarudekalipinaya:string;
    nayamudala:string;
    berumkarugename:string;
    berumkarugelipinaya:string;
    sahakarakomasaris:string;
    paminillelipinaya :string;
    polimudala:string;
    polimudala1:string;
    arwulankaya:string;
    berumkaranweyadm:string;
    mulumudala:string;
    poliprthshathya:string;
    paminilieneyonamalipikhya:string;
}

function App() {

    const [loading,setLoading] = useState(false);
    const [state, setState] = useState<State>({
        paminilikaru:"",
        withthikaru:"",
        nayakaru:"",
        apakarueka:"",
        apakarudeka:"",
        nayakarugelipinaya:"",
        apakaruekalipinaya:"",
        apakarudekalipinaya:"",
        nayamudala:"",
        berumkarugename:"",
        berumkarugelipinaya:"",
        sahakarakomasaris:"",
        paminillelipinaya :"",
        polimudala:"",
        polimudala1:"",
        arwulankaya:"",
        berumkaranweyadm:"",
        mulumudala:"",
        poliprthshathya:"",
        paminilieneyonamalipikhya:"",
    });

    const patchTheDocument = async (data:any) => await patchDocument(data, {
        patches: {
            paminilikaru:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.paminilikaru)],

            },
            withthikaru:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.withthikaru)],
            },
            nayakaru:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.nayakaru)],
            },
            apakarueka:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.apakarueka)],
            },
            apakarudeka:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.apakarudeka)],
            },
            nayakarugelipinaya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.nayakarugelipinaya)],
            },
            apakaruekalipinaya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.apakaruekalipinaya)],
            },
            apakarudekalipinaya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.apakarudekalipinaya)],
            },
            nayamudala:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.nayamudala)],
            },
            berumkarugename:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.berumkarugename)],
            },
            berumkarugelipinaya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.berumkarugelipinaya)],
            },
            sahakarakomasaris:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.sahakarakomasaris)],
            },
            paminillelipinaya :{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.paminillelipinaya)],
            },
            polimudala:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.polimudala)],
            },
            polimudala1:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.polimudala1)],
            },
            arwulankaya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.arwulankaya)],
            },
            berumkaranweyadm:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.berumkaranweyadm)],
            },
            mulumudala:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.mulumudala)],
            },
            poliprthshathya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.poliprthshathya)],
            },
            paminilieneyonamalipikhya:{
                type: PatchType.PARAGRAPH,
                children: [new TextRun(state.paminilieneyonamalipikhya)],
            },
        },
    });

    const handlePatchDocument = async () => {
        try {
            setLoading(true);
            // Fetch the document from the public folder
            const response = await fetch(`${process.env.PUBLIC_URL}/document.docx`);
            let arrayBuffer = await response.arrayBuffer();

            // Patch the document a first time
            let patchedDocxTemplate = await patchTheDocument(arrayBuffer);

            // Patch the document 10 times to avoid the case where multiple same keys are in the template
            for (let i = 0; i < 10; i++) {
                // Convert the patched document to an ArrayBuffer
                const patchedArrayBuffer = patchedDocxTemplate instanceof ArrayBuffer ? patchedDocxTemplate : new Uint8Array(patchedDocxTemplate).buffer;
                patchedDocxTemplate = await patchTheDocument(patchedArrayBuffer);
            }

            // Create a blob from the final patched document
            const blob = new Blob([patchedDocxTemplate], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            // Save the final patched document
            saveAs(blob, "PatchedDocument.docx");
            setLoading(false)
        } catch (error) {
            setLoading(false)
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
                            <Form.Control type="text" value={state.paminilikaru} onChange={e => {
                                setState(ps=>({...ps,paminilikaru:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>විත්ති කරු</Form.Label>
                            <Form.Control type="text" value={state.withthikaru} onChange={e => {
                                setState(ps=>({...ps,withthikaru:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණය කරු</Form.Label>
                            <Form.Control type="text" value={state.nayakaru} onChange={e => {
                                setState(ps=>({...ps,nayakaru:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරු 01</Form.Label>
                            <Form.Control type="text" value={state.apakarueka} onChange={e => {
                                setState(ps=>({...ps,apakarueka:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරු 02</Form.Label>
                            <Form.Control type="text" value={state.apakarudeka} onChange={e => {
                                setState(ps=>({...ps,apakarudeka:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණයකරුගේ ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea" value={state.nayakarugelipinaya} onChange={e => {
                                setState(ps=>({...ps,nayakarugelipinaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරුගේ (01) ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea" value={state.apakaruekalipinaya} onChange={e => {
                                setState(ps=>({...ps,apakaruekalipinaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ඇපකරුගේ (02) ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea" value={state.apakarudekalipinaya} onChange={e => {
                                setState(ps=>({...ps,apakarudekalipinaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ණය මුදල</Form.Label>
                            <Form.Control type="text" value={state.nayamudala} onChange={e => {
                                setState(ps=>({...ps,nayamudala:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>බේරුම් කරුගේ නම</Form.Label>
                            <Form.Control type="text" value={state.berumkarugename} onChange={e => {
                                setState(ps=>({...ps,berumkarugename:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>බේරුම් කරුගේ ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea" value={state.berumkarugelipinaya} onChange={e => {
                                setState(ps=>({...ps,berumkarugelipinaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>සහකාර කොමසාරිස්ගේ නම</Form.Label>
                            <Form.Control type="text" value={state.sahakarakomasaris} onChange={e => {
                                setState(ps=>({...ps,sahakarakomasaris:e.target.value}))
                            }}/>
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">*/}
                        {/*    <Form.Label>අරමුදලේ ස්වභාවය</Form.Label>*/}
                        {/*    <Form.Control type="text" value={state.ar} onChange={e => {*/}
                        {/*        setState(ps=>({...ps,nayakaru:e.target.value}))*/}
                        {/*    }}/>*/}
                        {/*</Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පැමිණිලිකරුගේ ලිපිනය</Form.Label>
                            <Form.Control type="text" value={state.paminillelipinaya} onChange={e => {
                                setState(ps=>({...ps,paminillelipinaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පෝලී මුදල</Form.Label>
                            <Form.Control type="text" value={state.polimudala} onChange={e => {
                                setState(ps=>({...ps,polimudala:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පෝලී මුදල 01</Form.Label>
                            <Form.Control type="text" value={state.polimudala1} onChange={e => {
                                setState(ps=>({...ps,polimudala1:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ආරවුල් අංකය</Form.Label>
                            <Form.Control type="text" value={state.arwulankaya} onChange={e => {
                                setState(ps=>({...ps,arwulankaya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>බේරුම්කරණ වියදම්</Form.Label>
                            <Form.Control type="text" value={state.berumkaranweyadm} onChange={e => {
                                setState(ps=>({...ps,berumkaranweyadm:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>මුළු මුදල</Form.Label>
                            <Form.Control type="text" value={state.mulumudala} onChange={e => {
                                setState(ps=>({...ps,mulumudala:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පොලී ප්‍රතිශතය</Form.Label>
                            <Form.Control type="text" value={state.poliprthshathya} onChange={e => {
                                setState(ps=>({...ps,poliprthshathya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>පැමිණිල්ලේ නියෝ.නම හා ලිපිනය</Form.Label>
                            <Form.Control type="text" as="textarea" value={state.paminilieneyonamalipikhya} onChange={e => {
                                setState(ps=>({...ps,paminilieneyonamalipikhya:e.target.value}))
                            }}/>
                        </Form.Group>
                        <FormGroup>
                            <Button disabled={loading} onClick={() => {
                                handlePatchDocument().then(r => {
                                    console.log(r);
                                });
                            }}>{loading?"Generating":"Generate"}
                                {loading && <Spinner className={"ms-3"} animation="border" role="status" size={"sm"}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>}
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

// const sample = {
//     paminilikaru:"පැමිණිලි කරු",
//     withthikaru:"විත්ති කරු",
//     nayakaru:"විත්ති කරු",
//     apakarueka:"ඇපකරු 01",
//     apakarudeka:"ඇපකරු 02",
//     nayakarugelipinaya:"ණයකරුගේ ලිපිනය,\nණයකරුගේ ලිපිනය",
//     apakaruekalipinaya:"ඇපකරුගේ (01) ලිපිනය,\nඇපකරුගේ (01) ලිපිනය",
//     apakarudekalipinaya:"ඇපකරුගේ (02) ලිපිනය,\nඇපකරුගේ (02) ලිපිනය",
//     nayamudala:"ණය මුදල",
//     berumkarugename:"බේරුම් කරුගේ නම",
//     berumkarugelipinaya:"බේරුම් කරුගේ ලිපිනය,\nබේරුම් කරුගේ ලිපිනය",
//     sahakarakomasaris:"සහකාර කොමසාරිස්ගේ නම",
//     paminillelipinaya :"පැමිණිලිකරුගේ ලිපිනය",
//     polimudala:"පෝලී මුදල",
//     polimudala1:"පෝලී මුදල 01",
//     arwulankaya:"ආරවුල් අංකය",
//     berumkaranweyadm:"බේරුම්කරණ වියදම්",
//     mulumudala:"මුළු මුදල",
//     poliprthshathya:"පොලී ප්‍රතිශතය",
//     paminilieneyonamalipikhya:"පැමිණිල්ලේ නියෝ.නම හා ලිපිනය,\nපැමිණිල්ලේ නියෝ.නම හා ලිපිනය",
// }