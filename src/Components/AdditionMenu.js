import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function AdditionMenu({modalSet,setModalLogin}) {
    return (
        <Fragment>
            <Navbar sticky='top' className="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="link"><Navbar.Brand>SEKUL HASSAN</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav>
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="about">About</Link>
                            <Link className="link" to="contact">Contact</Link>
                            <Link className="link" onClick={modalSet}>Add</Link>
                            <Link className="link" onClick={setModalLogin}>Login</Link>
                            <Link className="link">AddMember</Link>
                            <Link className="link">LogOut</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default AdditionMenu;