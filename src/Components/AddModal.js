import React, {Fragment, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function AddModal({addOpen,close}) {

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
                                  <Form.Control required  type="text" placeholder="Enter Mess Name"/>
                              </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>EmailAddress</Form.Label>
                                  <Form.Control required  type="email" placeholder="Enter E-mail"/>
                              </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Enter Password</Form.Label>
                                  <Form.Control required type="password" placeholder="Enter password"/>
                              </Form.Group>
                                <Button variant="primary" type="submit" className="btnHover">Submit</Button>
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