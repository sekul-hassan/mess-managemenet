import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { Button, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

function UserInfo(props) {
    const messId = localStorage.getItem('messId');
    const [mess, setMess] = useState({
        messId: '',
        messName: '',
        messEmail: ''
    });

    const callMess = useCallback(() => {
        axios.get(`http://localhost:8080/profileInfo/${messId}`).then((res) => {
            console.log(res.data);
            setMess(res.data);
        });
    }, [messId]);

    useEffect(() => {
        callMess();
    }, [callMess]);

    return (
        <Fragment>
            <Container className="mt-3 text-start">
                <Row>
                    <Form>
                        <h2>Your mess Information</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Mess Name is : </Form.Label>
                            <Form.Control name="name" type="text" placeholder={mess.messName} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mess Id is : </Form.Label>
                            <Form.Control name="id" type="text" placeholder={mess.messId} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mess Email is : </Form.Label>
                            <Form.Control name="email" type="email" placeholder={mess.messEmail} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type Your Password : </Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Button className="messUpdateBtn">Update</Button>
                    </Form>
                </Row>
            </Container>
        </Fragment>
    );
}

export default UserInfo;
