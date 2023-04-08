import React, {Fragment, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMember({addMember,closeAddMember}) {

    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
    });
    const handleChange = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
    }

    const handleSummit =  (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/addMember", user)
            .then((response) => {
                console.log(response.data);
                if(response.data){
                    closeAddMember();

                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={addMember}>
                        <Modal.Header>Member information</Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member name</Form.Label>
                                    <Form.Control onChange={handleChange} name="name" required  type="text" placeholder="Enter name"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member email</Form.Label>
                                    <Form.Control onChange={handleChange} name="email" required type="email" placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member Phone</Form.Label>
                                    <Form.Control onChange={handleChange} name="phone" required type="tel" placeholder="Enter phone"/>
                                </Form.Group>
                                <Button className="btnHover" variant="primary" type="submit" onClick={handleSummit}>Submit</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={closeAddMember}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddMember;