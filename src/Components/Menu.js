import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu({open,open1}){
    const [scrollClass,setScrollClass] = useState({
        // navBar:'navbar',
        // link:'link',
        // brand:'link',
        navBar: 'navbarScroll',
        link:'linkScroll',
        brand:'navBrandScroll',
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
                    // navBar: 'navbar',
                    // link:'link',
                    // brand: 'navBrand',
                    navBar: 'navbarScroll',
                    link:'linkScroll',
                    brand:'navBrandScroll',
                }) ;
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    });

    return (
        <Navbar sticky='top' className={scrollClass.navBar} expand="md" variant="dark">
            <Link className="brandLink" to="/"><Navbar.Brand className={scrollClass.brand}>RECURSIVE EDUCATION</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Link className={scrollClass.link} to="/">Home</Link>
                    <Link className={scrollClass.link} to="about">About</Link>
                    <Link className={scrollClass.link} to="contact">Contact</Link>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={scrollClass.link} onClick={open} >Register</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={scrollClass.link} onClick={open1} >Login</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;