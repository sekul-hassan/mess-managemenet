import React, { Fragment, useContext, useState } from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import BazarContext from './Context/BazarContext';
import axios from 'axios';
import {toast} from "react-toastify";

function AddCost(props) {
    const { add, handleSetAdd,setLoad } = useContext(BazarContext);
    const [cost, setCost,] = useState({ bill: 0.0 });
    const messId = localStorage.getItem('messId');

    const handleChange = (e) => {
        setCost({ bill: parseFloat(e.target.value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/saveCost/${messId}`, cost).then((res) => {
            toast.success(res.data.message);
            handleSetAdd();
            setLoad(true);
        }).catch((err) => {
            toast.error("You don't have access to add cost");
        })
    };

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={add}>
                        <Modal.Header>Today Add Cost Form</Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>To day cost</Form.Label>
                                    <Form.Control
                                        name="cost"
                                        step="0.01"
                                        type="number"
                                        onChange={handleChange}
                                        placeholder="Enter Today Cost"
                                    />
                                </Form.Group>
                                <Button
                                    className="btnHover"
                                    variant="primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={handleSetAdd}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddCost;
