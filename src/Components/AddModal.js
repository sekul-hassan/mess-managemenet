import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function AddModal({ addOpen, close }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [user, setUser] = useState({
        messId: '',
        messName: '',
        messEmail: '',
        messPassword: '',
    });

    const inputChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const addMess = (data) => {
        axios
            .post('http://localhost:8080/saveMess', data)
            .then((res) => {
                console.log(res.data);
                close();
                setUser({
                    messId: '',
                    messName: '',
                    messEmail: '',
                    messPassword: '',
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={addOpen}>
                        <Modal.Header>Mess Management System</Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit(addMess)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Mess Name</Form.Label>
                                    <Form.Control
                                        {...register('messName', { required: true })}
                                        onChange={inputChange}
                                        name="messName"
                                        type="text"
                                        placeholder="Enter Mess Name"
                                    />
                                    {errors.messName && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Mess Id</Form.Label>
                                    <Form.Control
                                        {...register('messId', { required: true })}
                                        onChange={inputChange}
                                        name="messId"
                                        type="text"
                                        placeholder="Enter Mess Id"
                                    />
                                    {errors.messId && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        {...register('messEmail', { required: true })}
                                        onChange={inputChange}
                                        name="messEmail"
                                        type="email"
                                        placeholder="Enter E-mail"
                                    />
                                    {errors.messEmail && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter Password</Form.Label>
                                    <Form.Control
                                        {...register('messPassword', { required: true })}
                                        onChange={inputChange}
                                        name="messPassword"
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                    {errors.messPassword && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btnHover">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={close}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddModal;
