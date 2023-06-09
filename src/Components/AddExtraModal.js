import React, {Fragment, useContext, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import AddExtraContext from "./Context/AddExtra";
import axios from "axios";

function AddExtraModal(props) {
    const {extra,closeExtra} = useContext(AddExtraContext);
    const messId = localStorage.getItem('messId');
    const[extraBill,setExtraBill] = useState({
        wifiBill:0.0,
        fixedMeal:0.0,
        khalaBill:0.0
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setExtraBill({...extraBill,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/updateBill/${messId}`,extraBill).then((res)=>{
            setExtraBill({...extraBill,
                wifiBill:0.0,
                fixedMeal:0.0,
                khalaBill:0.0
            });
            closeExtra();
        });
    }

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={extra}>
                        <Modal.Header>Add Extra Bills Here</Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Wifi Bill</Form.Label>
                                    <Form.Control type="double" name="wifiBill" onChange={handleChange} placeholder="Enter Wifi Bill"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Fixed Meals</Form.Label>
                                    <Form.Control type="double" name="fixedMeal" onChange={handleChange} placeholder="Enter Fixed Meals"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Khala Bill</Form.Label>
                                    <Form.Control type="double" name="khalaBill" onChange={handleChange} placeholder="Enter Khala Bill"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btnHover" onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={closeExtra}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddExtraModal;