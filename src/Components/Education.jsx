import React, { useState } from 'react'
import '../CSS/Education.css'
import Container from 'react-bootstrap/esm/Container'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import imgGraduation from '../Assets/PhotoGraduation.jpg'

import pdfAverage from '../Assets/AverageTC.pdf'

import TextStyle from './TextStyle';
import pdf from '../Assets/TITLE.pdf'
import Button from 'react-bootstrap/esm/Button';

export default function Education() {

  const [index, setIndex] = useState(0);

  function change(selectedIndex){
    setIndex(selectedIndex)
  }

  return (
    <div style={{ background: '', minHeight: '100vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondoEducation'>
      <Container className='BodyEducation'>
        <Carousel onSelect={change}>
          <Carousel.Item className='carouselItem'>
            <Container style={{ display: 'flex', flexDirection: '', justifyContent: '', alignItems: '' }} className=''>
              <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: '', alignItems: '', background: '', border: 'none' }} className='cardContent cardEducation'>
                <Container style={{ display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: '' }} className='ContendorimgEducation'>
                  <Card.Img variant="" src={imgGraduation} className='imgTittle' />
                </Container>
                <div className="vr" style={{height: '80%', visibility:'hidden  '}}></div>
                <Container className='contenedor1'>
                  <hr style={{ margin: '0 0px', visibility:"visible" }}  className='line'/>
                  <br />
                  <h1 className='animate__animated animate__slideInRight' style={{textAlign:'center'}}> University bachelor's degree</h1>
                  <br />
                  <h5> COMPUTER ENGINEER </h5>
                  <br />
                  <div>
                  { index == 0 ? <div className='TextStyle'><TextStyle  type='php' typeText='I am happy to tell you that I obtained my computer engineering degree from Instituto Tecnologico of Costa Rica in 2024.  '> </TextStyle></div>: <Container></Container>}
                  </div>
                  <br />
                  <br />
                  <Button href={pdf} target='_blank' className='AbrirPDF' >
                    VIEW DOCUMENT
                  </Button>
                </Container>
              </Card>
            </Container>
          </Carousel.Item>

          <Carousel.Item className='carouselItem'>
            <Container style={{ display: 'flex', flexDirection: '', justifyContent: '', alignItems: '' }} className=''>
              <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: '', alignItems: '', background: '', border: 'none' }} className='cardContent cardEducation'>
                <Container style={{ display: 'flex', flexDirection: '', justifyContent: 'center', alignItems: '' }} className='ContendorimgEducation'>
                  <Card.Img variant="" src="https://cdn-icons-png.flaticon.com/512/1164/1164695.png" className='imgTittle' />
                </Container>
                <div className="vr" style={{height: '80%', visibility:'hidden  '}}></div>
                <Container  className='contenedor1'>
                  <hr style={{ margin: '0 0px', visibility:"visible" }}  className='line'/>
                  <br />
                  <h1 className='animate__animated animate__slideInRight' style={{textAlign:'center'}}> Average technician</h1>
                  <br />
                  <h5> Computer networks </h5>
                  <br />
                  <div>
                  { index == 1 ? <div className='TextStyle'><TextStyle  type='php' typeText='I obtained a medium technical degree in computer networking from Colegio Tecnico Profesional Santa Rosa in 2018'></TextStyle></div>: <Container></Container>}
                  </div>
                  <br />
                  <br />
                  <Button href={pdfAverage} target='_blank' className='AbrirPDF' >
                    VIEW DOCUMENT
                  </Button>
                </Container>
              </Card>
            </Container>
          </Carousel.Item>

         
        </Carousel>

      </Container>
    </div>
  )
}
