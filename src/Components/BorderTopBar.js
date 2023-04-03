import React, {Fragment, useContext} from 'react';
import {Button, Container, Nav, Navbar, Row} from "react-bootstrap";
import AddExtraContext from "./Context/AddExtra";

function BorderTopBar(props) {
    const {openExtra} = useContext(AddExtraContext);
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="borderTop">
                    <div className="borderOverlay">
                        <Row>
                            <div className="mainContent">
                                <h2 className="content">Your Border List Here...</h2>
                                <Button className="btnHover" onClick={openExtra}>ADD EXTRA BILL</Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default BorderTopBar;