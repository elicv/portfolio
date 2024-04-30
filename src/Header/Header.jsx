import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../Assets/PerfilPhoto.jpg';

export default function Header({ activeTab, onTabChange }) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ borderBottom: 'solid 2px #198754', position:''}}>
            <Container>
                <img
                    src={img}
                    alt="Imagen de perfil"
                    style={{ width: '30px', height: '30px', borderRadius: '50%', margin: '10px' }}
                />
                
                <Navbar.Brand href="">
                    Elison Corrales Vargas
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => onTabChange('Bibliography')} active={activeTab === 'Bibliography'}>
                            Bibliography
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Skills')} active={activeTab === 'Skills'}>
                            Skills
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Projects')} active={activeTab === 'Projects'}>
                            Projects
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Education')} active={activeTab === 'Education'}>
                            Education
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Work Experience')} active={activeTab === 'Work Experience'}>
                            Work Experience
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Contact')} active={activeTab === 'Contact'}>
                            Contact me
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
