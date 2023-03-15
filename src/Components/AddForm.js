import React, {Fragment} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";

function AddForm(props) {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Form className="form">
                        <Form.Group className="mb-3">
                            <Form.Label>Mess Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter mess name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mess ID</Form.Label>
                            <Form.Control type="id" placeholder="Enter mess id"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                            <Form.Text>Never share your password</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddForm;