import React, {Fragment, useContext, useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import BazarContext from "./Context/BazarContext";
import axios from "axios";

function ModifyCost() {

    const {set,handleSet1,idx,bills,load,setLoad} = useContext(BazarContext);
    const bill = bills[idx]?.bill;

    const [data,setData] = useState({bill:0.0});

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:parseFloat(e.target.value)});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id = bills[idx].id;
        axios.put(`http://localhost:8080/saveCost/${id}`,data).then((res)=>{
            const data = res.data;
            if(data){
                setLoad(!load);
                handleSet1();
            }
        })
    }


    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={set}>
                        <Modal.Header>Cost Modify Form</Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Modifying cost</Form.Label>
                                    <Form.Control name="bill" onChange={handleChange} type="number" placeholder={bill}/>
                                </Form.Group>
                                <Button className="btnHover" variant="primary" onClick={handleSubmit} type="submit">Submit</Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={handleSet1}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ModifyCost;
