import React, {Fragment} from 'react';
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";

function ContactForm(props) {
    return (
        <Fragment>
            <Container fluid={true} className="pt-3 contact">
                <Form className="text-start">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required  type="name" placeholder="Enter Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control required  type="email" placeholder="Enter E-mail"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                        </Form.Group>
                    <Button variant="primary" type="submit" className="btnHover">Submit</Button>
                </Form>
            </Container>
        </Fragment>
    );
}

export default ContactForm;