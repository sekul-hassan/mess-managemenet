import React, {Fragment, useContext} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import ModifyContext from "./Context/ModifyContext";

function ModifyModal(props) {
    const {openModify,handleModify,user} = useContext(ModifyContext);

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={openModify}>
                        <Modal.Header>Modify Member Information</Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member name</Form.Label>
                                    <Form.Control name="name" required  type="text" placeholder={user.name}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member email</Form.Label>
                                    <Form.Control name="email" required type="email" placeholder={user.email}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Member Phone</Form.Label>
                                    <Form.Control name="phone" required type="tel" placeholder={user.phone}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Add TK</Form.Label>
                                    <Form.Control name="addTk" required type="text" placeholder={user.addTk}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Back TK</Form.Label>
                                    <Form.Control name="backTk" required type="text" placeholder={user.backTk}/>
                                </Form.Group><
                                Form.Group className="mb-3">
                                    <Form.Label>Total Meal</Form.Label>
                                    <Form.Control name="totalMeal" required type="text" placeholder={user.totalMeal}/>
                                </Form.Group>
                                <Button className="btnHover" variant="primary" type="submit" >Submit</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={handleModify}>Close</Button>
                            <Button className="btn-danger btnHover">Delete</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ModifyModal;