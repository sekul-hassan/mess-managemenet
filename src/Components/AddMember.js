import React, {Fragment, useContext, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddExtraContext from "./Context/AddExtra";

function AddMember({addMember,closeAddMember}) {
    const {handleLoadAgain} = useContext(AddExtraContext);
    const navigate = useNavigate();
    const [nullValue,setNullValue] = useState("");
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
       if(user.name!=="" && user.email!=="" && user.phone!==""){
           axios.post("http://localhost:8080/addMember", user)
               .then((response) => {
                   if(response.data){
                       setUser({name: "", email: "", phone: ""});
                       setNullValue("");
                       closeAddMember();
                       navigate("match");
                       handleLoadAgain();
                   }
               })
               .catch((error) => {
                   console.error(error);
               });
       }
       else{
           setNullValue("All Fields Are Required");
       }
    }


    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={addMember}>
                        <Modal.Header>{nullValue}</Modal.Header>
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