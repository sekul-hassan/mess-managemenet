import React, {Fragment} from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import GlobalForm from "./CustomForm/GlobalForm";
import {loginFormData} from "./CustomForm/FormData";

function LoginModal({loginOpen,close1,login,setData}) {

    return (
        <Fragment>
            <Container className="modal">
                <Row>
                    <Modal show={loginOpen}>
                        <Modal.Header>Mess Login Form</Modal.Header>
                        <Modal.Body>
                            {/*<Form>*/}
                            {/*    <Form.Group className="mb-3">*/}
                            {/*        <Form.Label>Mess Id</Form.Label>*/}
                            {/*        <Form.Control name="messId" required onChange={setData} type="text" placeholder="Enter Mess Id"/>*/}
                            {/*    </Form.Group>*/}
                            {/*    <Form.Group className="mb-3">*/}
                            {/*        <Form.Label>Enter Password</Form.Label>*/}
                            {/*        <Form.Control name="messPassword" required onChange={setData} type="password" placeholder="Enter password"/>*/}
                            {/*    </Form.Group>*/}
                            {/*    <Link className="btnToLink btnHover" variant="primary" type="submit" onClick={login} to="match">Submit</Link>*/}
                            {/*</Form>*/}
                            <GlobalForm formData={loginFormData} onSubmit={login}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-danger btnHover" onClick={close1}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </Fragment>
    );
}

export default LoginModal;