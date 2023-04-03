import React, {Fragment, useContext} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import AddExtraContext from "./Context/AddExtra";

function AddExtraModal(props) {
    const {extra,closeExtra} = useContext(AddExtraContext);
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
                                    <Form.Control required  type="text" placeholder="Enter Wifi Bill"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Fixed Meals</Form.Label>
                                    <Form.Control required  type="number" placeholder="Enter Fixed Meals"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Khala Bill</Form.Label>
                                    <Form.Control required type="number" placeholder="Enter Khala Bill"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btnHover">Submit</Button>
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