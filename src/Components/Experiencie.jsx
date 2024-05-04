import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../CSS/Experience.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import imgwork from '../Assets/PerfilWork.jpg'
import TextStyle from './TextStyle'

import pdf from '../Assets/Resume.jpg'

export default function Experiencie() {
  return (
    <div style={{ background: '', minHeight: '100vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondoExperience'>

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=''>
        <Card style={{ width: '100%', padding: '40px' }} className='card1'>
          <Container className='ContenedorHeader'>
            <Container className='contenedorImagen'>
              <Card.Img variant="" src={imgwork} style={{ width : '100%', height:'100%'}} className='imgwork' />
            </Container>
            <h6 className='text2'>
              <TextStyle type="sql" typeText='I have experience working in computer systems development as FullStack Developer.'> </TextStyle>
            </h6>
          </Container>
          <br />
          <hr style={{ margin: '0 0px' }} />
          <br />
          <Card.Body>
            <Card.Title className='text'>Blackvector - San Jose, Escazú - Software Engineer | January 2024 – April 2024</Card.Title>
            <Card.Text className='text1'>
              Development and support of the BlackVector system provided to Bilco in Costa Rica using technologies such as C#, JavaScript, DevExtreme, GIT, MVC, SQL Server, Jira, BitBucket and SourceTree.
            </Card.Text>
            <Card.Title className='text' >Blackvector - San Jose, Escazú - Software Engineer Intern | June 2023 – December 2023 </Card.Title>
            <Card.Text className='text1'>
              Migration of views utilizing technologies like JavaScript, C#, DevExtreme, Razor, MVC, Bitbucket, SQL Server, Jira, and SourceTree.
            </Card.Text>
            <Button href={pdf} target='_blank' className='AbrirResume'>OPEN RESUME</Button>
          </Card.Body>
        </Card>
      </Container>

    </div>
  )
}
