import React, {Fragment, useContext} from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import axios from "axios";
import AddExtraContext from "./Context/AddExtra";
import GlobalForm from "./CustomForm/GlobalForm";
import {addMemberData} from "./CustomForm/FormData";
import {toast} from "react-toastify";
import ModifyContext from "./Context/ModifyContext";

function AddMember() {
    const {handleLoadAgain} = useContext(AddExtraContext);
    const{addMember,closeAddMember} = useContext(ModifyContext);
    const messId = localStorage.getItem('messId');


    const memberAdd =  (data)=>{
        console.log(messId);
        axios.post(`http://localhost:8080/addMember/${messId}`, data)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message);
                closeAddMember();
                handleLoadAgain();
            })
            .catch((error) => {
                toast.error("Illegal Access.");
                console.log(error);
            });
    }

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={addMember}>
                        <Modal.Header>Member information</Modal.Header>
                        <Modal.Body>
                          <GlobalForm formData={addMemberData} onSubmit={memberAdd}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={closeAddMember}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddMember;