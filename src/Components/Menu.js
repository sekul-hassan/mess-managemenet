import React, {Fragment, useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu({open,open1}){
    const [scrollClass,setScrollClass] = useState({
        navBar:'navbar',
        link:'link',
        brand:'link',
    });
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        function handleScroll(){
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
            if(!visible){
                setScrollClass({
                    navBar: 'navbarScroll',
                    link:'linkScroll',
                    brand:'navBrandScroll',
                }) ;
            }
            else{
                setScrollClass({
                    navBar: 'navbar',
                    link:'link',
                    brand: 'navBrand',
                }) ;
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    });

    return (
        <Fragment>
            <Navbar sticky='top' className={scrollClass.navBar} collapseOnSelect expand="sm" variant="dark">
                <Container>
                    <Link className="brandLink" to="/"><Navbar.Brand className={scrollClass.brand}>SEKUL HASSAN</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav defaultActiveKey=".active">
                          <Link className={scrollClass.link} to="/">Home</Link>
                          <Link className={scrollClass.link} to="about">About</Link>
                          <Link className={scrollClass.link} to="contact">Contact</Link>
                          <Link className={scrollClass.link} onClick={open} >Add</Link>
                          <Link className={scrollClass.link} onClick={open1} >Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Menu;