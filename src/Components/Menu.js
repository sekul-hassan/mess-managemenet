import React, {Fragment, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu({open,open1}){
    const [scrollClass,setScrollClass] = useState({
        navBar:'navbar',
        link:'link',
    });
    return (
        <Fragment>
            <Navbar sticky='top' className={scrollClass.navBar} collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Link className="link" to="/"><Navbar.Brand>SEKUL HASSAN</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav defaultActiveKey=".active">
                          <Link className={scrollClass.link} to="/">Home</Link>
                          <Link className="link" to="about">About</Link>
                          <Link className="link" to="contact">Contact</Link>
                          <Link className="link" onClick={open} >Add</Link>
                          <Link className="link" onClick={open1} >Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Menu;