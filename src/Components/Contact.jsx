import React, { useRef } from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../CSS/Contact.css'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {

  const refForm = useRef();

  const handleSummit = (event) => {
    event.preventDefault();

    const serviceId = 'service_9h6xx25';
    const templateid = 'template_xd5wmfq'
    const apikey = "dVBTXycQaoyyOc4JS"

    emailjs.sendForm(serviceId, templateid, refForm.current, apikey).then(
      result => console.log(result.text)
    ).catch(error => console.error(error))

  }

  return (
    <div style={{ background: '', minHeight: '90.9vh', display: '', alignItems: 'center', justifyContent: 'center' }} className='fondo2'>

      <div style={{ height: '30vh' }}>
        <div className='imgFondo' style={{ padding: '20px' }}> </div>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', flexDirection: 'column' }} className='contenedorContact'>
          <h1> Contact me</h1>
          <h6>It works on my computer !!!</h6>
        </Container>
      </div>
      <div className='FormContainer'>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: '', padding: '40px', flexDirection: 'column', gap: '40px' }} className='ContenedorEmail'>
          <Container className='formEmail'>
            <Form ref={refForm} action='' onSubmit={handleSummit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='from_name' type="name" placeholder="Enter your name" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                  Please enter your email, for contact to you!!!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control name='message' as="textarea" aria-label="With textarea" required/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>

          <Container style={{ marginTop: '', display: 'flex', justifyContent: '', alignItems: '', padding: '40px', flexDirection: 'column', gap: '10px' }} className='formEmail1'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-whatsapp"></i>

          </Container>

        </Container>
      </div>

    </div>
  )
}
