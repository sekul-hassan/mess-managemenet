import React, {Fragment, useContext} from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddExtraContext from "./Context/AddExtra";
import GlobalForm from "./CustomForm/GlobalForm";
import {addMemberData} from "./CustomForm/FormData";

function AddMember({addMember,closeAddMember}) {
    const {handleLoadAgain} = useContext(AddExtraContext);
    const navigate = useNavigate();
    const messId = localStorage.getItem('messId');


    const memberAdd =  (data)=>{
        axios.post(`http://localhost:8080/addMember/${messId}`, data)
            .then((response) => {
                closeAddMember();
                navigate("match");
                handleLoadAgain();
            })
            .catch((error) => {
                console.error(error);
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