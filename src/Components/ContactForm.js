import React from 'react';
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";

function ContactForm(props) {
    return (
        <Container fluid={true} className="mt-4 contact">
            <h4 className="subTitle mt-3">To contact our team please fill up this form and submit it.</h4>
            <Form className="text-start mt-3">
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
    );
}

export default ContactForm;