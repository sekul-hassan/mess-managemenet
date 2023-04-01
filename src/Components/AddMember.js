import React, {Fragment} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function AddMember({addMember,closeAddMember}) {
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
                                    <Form.Control required  type="text" placeholder="Enter name"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member email</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member Phone</Form.Label>
                                    <Form.Control required type="tel" placeholder="Enter phone"/>
                                </Form.Group>
                                <Button className="btnHover" variant="primary" type="submit">Submit</Button>
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