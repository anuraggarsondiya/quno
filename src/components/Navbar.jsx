import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Navbar
            expand="lg"
            style={{
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 10,
                padding: '1rem'
            }}
        >
            <Container>
                {/* Logo / Brand */}
                <Navbar.Brand href="#home" className="fw-bold text-primary">
                    Qunosis
                </Navbar.Brand>

                {/* Toggler for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Menu items */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#why-us">Why Us?</Nav.Link>
                        <Nav.Link href="#story">Story</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
