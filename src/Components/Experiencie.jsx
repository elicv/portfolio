import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../CSS/Experience.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import imgwork from '../Assets/PerfilWork.jpg'
import TextStyle from './TextStyle'

import img from '../Assets/ResumeElison.jpg'

export default function Experiencie() {
  return (
    <div style={{ background: '', minHeight: '100vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondoExperience'>

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=''>
        <Card style={{ width: '100%', padding: '40px' }} className='card1'>
          {/* <Container className='ContenedorHeader'>
            <Container className='contenedorImagen'>
              <Card.Img variant="" src={imgwork} style={{ width : '100%', height:'100%'}} className='imgwork' />
            </Container>
            <h6 className='text2'>
              <TextStyle type="sql" typeText='I have experience working in computer systems development as FullStack Developer.'> </TextStyle>
            </h6>
          </Container> */}
          {/* <br />
          <hr style={{ margin: '0 0px' }} />
          <br /> */}
          <Card.Body>

          <Container>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src='https://www.construplaza.com/Content/Images/logo.webp' // Ruta al archivo de imagen
                  alt="Logo"
                  style={{ width: '50px', height: '50px' }} // Ajusta el tamaño del logo según sea necesario
                />
                <Card.Title className='text'>Construplaza S.A - Ulloa, Heredia - Software Engineer | June 2024 – Present</Card.Title>
              </div>
              <Card.Text className='text1'>
              My job consists of providing support and systems development at CEDI Construplaza, which is a main distribution warehouse for other stores.
              I am currently carrying out projects such as:
                <ul>
                  <li>Implementation of a Vmeasure measurement machine with AWS Webhook Lambdas.</li>
                  <li>Lambdas development for SQL query</li>
                  <li>Maintenance of Century ESL electronic labels</li>
                  <li>Creation and deployment of AWS lambdas CLI interface with YAML</li>
                  <li>General support for computers, printers, internet connections, handhelds and more.</li>
                  <li>Knowledge of Warehouse Management Systems for inventory control</li>
                </ul>
        
              </Card.Text>
            </Container>
            
            <br />
            <hr style={{ margin: '0 0px' }} />
            <br />
            <Container>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src='https://media.licdn.com/dms/image/v2/C560BAQFV99S7xnfksg/company-logo_200_200/company-logo_200_200/0/1630647649603/blackvector_logo?e=1733961600&v=beta&t=WAVviWUAOrxDBJE_svTM-vPYDzSwhGldf7BeyFEeL74' // Ruta al archivo de imagen
                  alt="Logo"
                  style={{ width: '50px', height: '50px' }} // Ajusta el tamaño del logo según sea necesario
                />
                <Card.Title className='text'>Blackvector - San Jose, Escazú - Software Engineer | January 2024 – April 2024</Card.Title>
              </div>
              <Card.Text className='text1'>
                Development and support of the BlackVector system provided to Bilco in Costa Rica using technologies such as C#, JavaScript, DevExtreme, GIT, MVC, SQL Server, Jira, BitBucket and SourceTree.
              </Card.Text>
            </Container>
            <Container>
              <Card.Title className='text' >Blackvector - San Jose, Escazú - Software Engineer Intern | June 2023 – December 2023 </Card.Title>
              <Card.Text className='text1'>
                Migration of views utilizing technologies like JavaScript, C#, DevExtreme, Razor, MVC, Bitbucket, SQL Server, Jira, and SourceTree.
              </Card.Text>
            </Container>

            <br />
            <Container >
              <Button href={img} target='_blank' className='AbrirResume'>OPEN RESUME</Button>
            </Container>
          </Card.Body>
        </Card>
      </Container>

    </div>
  )
}
