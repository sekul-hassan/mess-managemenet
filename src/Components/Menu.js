import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function Menu(props) {
    return (
        <Fragment>
            <Navbar sticky='top' className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SEKUL HASSAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav>
                           <Nav.Link>About Us</Nav.Link>
                           <Nav.Link>Contact Us</Nav.Link>
                           <Nav.Link>Add New</Nav.Link>
                           <Nav.Link>Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Menu;