import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../Assets/PerfilPhoto.jpg';

export default function Header( { activeTab, onTabChange }) {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <img
              src={img}
              alt="Imagen de perfil"
              style={{ width: '30px', height: '30px', borderRadius: '50%', margin: '10px' }}
            />
            <Navbar.Brand href="">
              Elison Corrales Vargas
            </Navbar.Brand>
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
              <Nav.Link onClick={() => onTabChange('Experience')} active={activeTab === 'Experience'}>
                Work Experience
              </Nav.Link>
              <Nav.Link onClick={() => onTabChange('Contact')} active={activeTab === 'Contact'}>
                Contact me
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success"> Search </Button>
            </Form>
          </Container>
        </Navbar>
      );
}
