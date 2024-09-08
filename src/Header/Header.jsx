import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../Assets/PerfilPhoto.jpg';

import '../CSS/Header.css'

export default function Header({ activeTab, onTabChange }) {
    return (
        <Navbar className='NavBarPrincipal' 
        expand="lg"
        variant="dark"
        >
            <Container className='containerNavbar'>
                {/* <img
                    src={img}
                    alt="Imagen de perfil"
                    style={{ width: '30px', height: '30px', borderRadius: '50%', margin: '10px' }}
                /> */}
                
                <Navbar.Brand href="">
                <strong> SOFTWARE ENGINEER </strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => onTabChange('Bibliography')} active={activeTab === 'Bibliography'}>
                            BIBLIOGRAPHY
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Skills')} active={activeTab === 'Skills'}>
                            SKILLS
                        </Nav.Link>
                        {/* <Nav.Link onClick={() => onTabChange('Projects')} active={activeTab === 'Projects'}>
                            PROJECTS
                        </Nav.Link> */}
                        <Nav.Link onClick={() => onTabChange('Education')} active={activeTab === 'Education'}>
                            EDUCATION
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Work Experience')} active={activeTab === 'Work Experience'}>
                            WORK EXPERIENCE
                        </Nav.Link>
                        <Nav.Link onClick={() => onTabChange('Contact')} active={activeTab === 'Contact'}>
                            CONTACT ME
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
