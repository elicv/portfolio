import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../Assets/PerfilPhoto.jpg';

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <img
          src={img}
          alt="Imagen de perfil"
          style={{ width: '30px',height: '30px', borderRadius: '50%', margin: '10px' }} // Estilo para la imagen de perfil
        />
      <Navbar.Brand href="">Elison Corrales Vargas</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/bibliography">Bibliography </Nav.Link>
        <Nav.Link href="/skills">Skills</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/education">Education</Nav.Link>
        <Nav.Link href="/experience">Work Experience</Nav.Link>
        <Nav.Link href="/contact">Contact me</Nav.Link>
      </Nav>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Container>
    </Navbar>
 
  )
}
