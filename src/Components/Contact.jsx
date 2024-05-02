import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../CSS/Contact.css'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { MDBCard } from 'mdb-react-ui-kit';
import TextStyle from './TextStyle';
import Spinner from 'react-bootstrap/Spinner';

export default function Contact() {

  const refForm = useRef();

  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [spinAlert, setSpinAlert] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSummit = (event) => {
    event.preventDefault();
    setSpinAlert(true)
    setButtonDisabled(true);
    const serviceId = 'service_9h6xx25';
    const templateid = 'template_xd5wmfq'
    const apikey = "dVBTXycQaoyyOc4JS"
    emailjs.sendForm(serviceId, templateid, refForm.current, apikey).then(
      (result) => {
        console.log(result.text)
        setShowAlert1(true)
        setSpinAlert(false)
        setButtonDisabled(false);
        setTimeout(() => {
          setShowAlert1(false)
        }, 3000);
      }
    ).catch((error) => {
      console.error(error)
      setShowAlert2(true)
      setSpinAlert(false)
      setButtonDisabled(false);
      setTimeout(() => {
        setShowAlert2(false)
      }, 3000);
    })
  }

  return (
    <div style={{ background: '', minHeight: '90.9vh', display: '', alignItems: 'center', justifyContent: 'center' }} className='fondo2'>

      <div style={{ height: '30vh' }}>
        <div className='imgFondo' style={{ padding: '20px' }}> </div>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', flexDirection: 'column' }} className='contenedorContact'>
          <h1 className='textContact'> Contact me</h1>
          <h6 className='textContact1'>It works on my computer !!!</h6>
        </Container>
      </div>
      <div className='FormContainer'>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }} className='ContenedorEmail'>
          <Container className='formEmail'>
            <Form ref={refForm} action='' onSubmit={handleSummit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>NAME:</Form.Label>
                <Form.Control name='from_name' type="name" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>EMAIL:</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  Please enter your email, for contact to you!!!
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>MESSAGE:</Form.Label>
                <Form.Control name='message' as="textarea" aria-label="With textarea" required />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(16, 89, 55)', border: 'solid 1px green' }} disabled={buttonDisabled}>
                Submit
                {spinAlert && (
                  <Spinner animation="border" role="status" className='spinner'>
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>)}
              </Button>
            </Form>
          </Container>

          <Container style={{ marginTop: '', display: 'flex', justifyContent: '', alignItems: 'center', padding: '40px', flexDirection: 'column', gap: '10px' }} className='formEmail1'>
            {showAlert1 && (
              <MDBCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'transparent', border: 'none' }} className='animate__animated animate__zoomIn'>
                <Alert key='success' variant='success'>
                  <TextStyle type='python' typeText='The message was successfully sent to Elison Corrales Vargas!' ></TextStyle>
                </Alert>
              </MDBCard>
            )}
            {showAlert2 && (
              <MDBCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'transparent', border: 'none' }} className='animate__animated animate__tada'>
                <Alert key='danger' variant='danger'>
                  Oops! A problem occurred, try another contact method
                </Alert>
              </MDBCard>
            )}

            <Container style={{ marginTop: '', display: 'flex', justifyContent: '', alignItems: 'center', padding: '', flexDirection: 'row', gap: '10px' }} className='animate__animated animate__zoomIn'>
              <i className="bi bi-whatsapp" style={{ fontSize: 40, color: '#06bc06' }}></i>
              <h6 style={{ color: 'darkgreen' }}> 87679841 </h6>
            </Container>

            <Container style={{ marginTop: '', display: 'flex', justifyContent: '', alignItems: 'center', padding: '', flexDirection: 'row', gap: '10px' }} className='animate__animated animate__zoomIn'>
              <i className="bi bi-facebook" style={{ fontSize: 40, color: '#0866ff' }}></i>
              <h6><a style={{ color: 'darkgreen' }} href='https://www.facebook.com/elison.corralesvargas'> facebook.com</a>  </h6>
            </Container>
            <Container style={{ marginTop: '', display: 'flex', justifyContent: '', alignItems: 'center', padding: '', flexDirection: 'row', gap: '10px' }} className='animate__animated animate__zoomIn'>
              <i className="bi bi-linkedin" style={{ fontSize: 40, color: '#0a66c2' }}></i>
              <h6><a style={{ color: 'darkgreen' }} href='linkedin.com/in/elison-corrales-vargas-216704265'> linkedin.com</a>  </h6>
            </Container>
          </Container>
        </Container>

      </div>

    </div >
  )
}
