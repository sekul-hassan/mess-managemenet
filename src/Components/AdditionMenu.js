import React, { useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function AdditionMenu({logOut}) {
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
        <Navbar sticky='top' className={scrollClass.navBar} collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Link to="/" className="text-decoration-none"><Navbar.Brand className={scrollClass.brand}>RECURSIVE EDUCATION</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Link className={scrollClass.link} to="/">Home</Link>
                    <Link className={scrollClass.link} to="about">About</Link>
                    <Link className={scrollClass.link} to="contact">Contact</Link>
                    <Link className={scrollClass.link} to="match">Match</Link>
                    <Link className={scrollClass.link} to="bazar">Bazar</Link>
                    <Link className={scrollClass.link} to="profile">Profile</Link>
                    <Link className={scrollClass.link} onClick={logOut} to="/">LogOut</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AdditionMenu;