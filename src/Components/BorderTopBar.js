import React, {Fragment} from 'react';
import {Container, Nav, Navbar, Row} from "react-bootstrap";

function BorderTopBar(props) {
    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <div className="borderTop">
                    <div className="borderOverlay">
                        <Row>
                            <div className="miniMenu">
                                <Navbar>
                                    <Container fluid={true}>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="me-auto"/>
                                            <Nav>
                                                <Nav.Link className="minMenuLink">Add New</Nav.Link>
                                                <Nav.Link className="minMenuLink">Logout</Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                            <div className="mainContent">
                                <h2 className="content">Your Border List Here...</h2>

                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default BorderTopBar;