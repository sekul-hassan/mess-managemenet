import React from 'react';
import {Container, Form} from "react-bootstrap";

function ContactForm(props) {
    return (
        <Container className="mt-4 mb-2 contact">
            <h4 className="title text-uppercase mt-3">Please submit your feed back</h4>
            <Form className="text-start mt-3">
                <Form.Group className="mb-3">
                    <Form.Label className="title">Name</Form.Label>
                    <Form.Control className="title" required  type="name" placeholder="Enter Name"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="title">Email Address</Form.Label>
                    <Form.Control className="title" required  type="email" placeholder="Enter E-mail"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="title">Comments Here</Form.Label>
                    <Form.Control as="textarea" className="title"  placeholder="Leave a comment here" />
                </Form.Group>
                <button onClick={()=>({})} type="submit" className="btnHover">Submit</button>
            </Form>
        </Container>
    );
}

export default ContactForm;