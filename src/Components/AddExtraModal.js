import React, {Fragment, useContext} from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import axios from "axios";
import GlobalForm from "./CustomForm/GlobalForm";
import {addExtraData} from "./CustomForm/FormData";
import {toast} from "react-toastify";
import BazarContext from "./Context/BazarContext";

function AddExtraModal(props) {
    const {extra,closeExtra,reloadExtraBill,setReloadExtraBill} = useContext(BazarContext);
    const messId = localStorage.getItem('messId');

    const handleSubmit = (e)=>{
        axios.post(`http://localhost:8080/saveBill/${messId}`,e).then((res)=>{
            toast.success(res.data.message);
            console.log(res.data.message);
            setReloadExtraBill(!reloadExtraBill);
            closeExtra();
        }).catch((err)=>{
            console.log(err);
            toast.error(err.response.data.message);
        })
    }

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={extra}>
                        <Modal.Header>Add Extra Bills Here</Modal.Header>
                        <Modal.Body>
                           <GlobalForm formData={addExtraData} onSubmit={handleSubmit}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={closeExtra}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddExtraModal;