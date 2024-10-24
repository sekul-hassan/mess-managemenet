import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import GlobalForm from "./CustomForm/GlobalForm";
import {registerFormData} from "./CustomForm/FormData";
import {toast} from "react-toastify";

function AddModal({ addOpen, close }) {

    const addMess = (data) => {
        axios.post('http://localhost:8080/saveMess', data).then((res) => {
                toast.success("Registration successful.");
                close();
            })
            .catch((error) => {
                toast.error(error.response.data.message);
                console.log(error);
            });
    };

    return (
        <Modal show={addOpen} aria-modal={false} fullscreen={false}>
            <Modal.Header>Mess Management System</Modal.Header>
            <Modal.Body>
               <GlobalForm formData={registerFormData} onSubmit={addMess}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-danger btnHover" onClick={close}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModal;
