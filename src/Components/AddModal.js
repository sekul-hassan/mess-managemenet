import React, {Fragment, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";

function AddModal({addOpen,close}) {

    const [user,setUser] = useState({
        messId:"",
        messName:"",
        messEmail:"",
        messPassword:""

    });

    const inputChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }

    const addMess = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/saveMess",user).then((res)=>{
            console.log(res.data);
        })
    }

    return (
        <Fragment>
           <Container className="modal">
               <Row>
                   <Modal show={addOpen}>
                       <Modal.Header>Mess Management System</Modal.Header>
                        <Modal.Body>
                            <Form>
                              <Form.Group className="mb-3">
                                  <Form.Label>Enter Mess Name</Form.Label>
                                  <Form.Control required onChange={inputChange} name="messName"  type="text" placeholder="Enter Mess Name"/>
                              </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Enter Mess Id</Form.Label>
                                  <Form.Control onChange={inputChange} name="messId" required  type="text" placeholder="Enter Mess Id"/>
                              </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>EmailAddress</Form.Label>
                                  <Form.Control required onChange={inputChange} name="messEmail" type="email" placeholder="Enter E-mail"/>
                              </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Enter Password</Form.Label>
                                  <Form.Control required onChange={inputChange} name="messPassword" type="password" placeholder="Enter password"/>
                              </Form.Group>
                                <Button variant="primary" type="submit" className="btnHover" onClick={addMess}>Submit</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={close}>Close</Button>
                        </Modal.Footer>
                   </Modal>
               </Row>
           </Container>
        </Fragment>
    );
}

export default AddModal;