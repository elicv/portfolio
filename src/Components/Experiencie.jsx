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
        <Card style={{ width: '100%', padding: '10px' }} className='card1'>
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
              <div className='contenedorh1Experience' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img 
                  src='https://www.construplaza.com/Content/Images/logo.webp' // Ruta al archivo de imagen
                  alt="Logo"
                  style={{ width: '60px', height: '60px' }} // Ajusta el tamaño del logo según sea necesario
                />
                <Card.Title className='text'>Construplaza S.A - Ulloa, Heredia - Software Engineer | June 2024 – Present</Card.Title>
              </div>
              <Card.Text className='text1'>
              I work at Construplaza, a hardware and construction materials sales company,
               where I am in charge of software maintenance and development. I have worked on projects within the company such as:
                <ul>
                  <li>Implementation of a Vmeasure measurement machine with AWS Webhook Lambdas.</li>
                  <li>Development of a mobile application for the maintenance of electronic labels at Construplaza points of sale, combining technologies such as AWS and Frameworks such as react native.</li>
                  <li>Creation and deployment of AWS lambdas CLI interface with YAML.</li>
                  <li>Development of mobile applications in languages ​​such as react native, react, express, typescript, node js.</li>
                  <li>Knowledge of Warehouse Management Systems for inventory control.</li>
                </ul>
              </Card.Text>
            </Container>
            
            <br />
            <hr style={{ margin: '0 0px' }} />
            <br />
            <Container>
              <div className='contenedorh1Experience' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk59M_hxPgMqB4_Fr5YnYKkE15uOxeW8IkYA&s' // Ruta al archivo de imagen
                  alt="Logo"
                  style={{ width: '60px', height: '60px' }} // Ajusta el tamaño del logo según sea necesario
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
