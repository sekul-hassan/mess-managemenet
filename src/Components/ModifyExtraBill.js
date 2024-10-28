import React, {useContext} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import ModifyContext from "./Context/ModifyContext";
import axios from "axios";
import {toast} from "react-toastify";

function ModifyExtraBill({modifyExtraBill, setModifyExtraBill,billData}) {

    const{reloadExtraBill,setReloadExtraBill} = useContext(ModifyContext);
    const handleSet = (e) =>{
        const{name,value} = e.target;
        billData[name]=value;
    }

    const saveUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/updateBill/${billData.id}`,billData).then((response) => {
            toast.success("Bill update successfully.");
            setReloadExtraBill(!reloadExtraBill);
            setModifyExtraBill(!modifyExtraBill);
        }).catch(err=>{
            toast.error("You don't have permission to update");
        })
    }



    return (
        <Container className="modal">
            <Row>
                <Modal show={modifyExtraBill}>
                    <Modal.Header>Modify Extra Bill</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Update wifi bill</Form.Label>
                                <Form.Control name="wifiBill" onChange={handleSet}  type="number" placeholder={billData.wifiBill}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Update khala bill</Form.Label>
                                <Form.Control name="khalaBill" onChange={handleSet} type="number" placeholder={billData.khalaBill}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Update others</Form.Label>
                                <Form.Control name="others" type="number" onChange={handleSet} placeholder={billData.others}/>
                            </Form.Group>

                            <Button className="btnHover" variant="primary" type="submit" onClick={saveUpdate} >Submit</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-danger btnHover" onClick={()=>setModifyExtraBill(!modifyExtraBill)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    );
}

export default ModifyExtraBill;
