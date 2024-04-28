import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import img from '../Assets/Arquitectura.png'
import imgComponent from '../Assets/Componentes.png'
import TextStyle from './TextStyle';
import '../CSS/Projects.css'

export default function Projects() {
  return (
    <div style={{ background: '', minHeight: '90.9vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondo2'>
      <Container fluid className=''>
        <Card style={{ width: '' }} className='projectCard'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>LICEO CAMAQUI</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <h4> Description: </h4>
                  <span className='Text'>  
                  <TextStyle typeText=" This project was done for the Software Engineering Project course at TEC.
                  It consisted in the development of a web page and a virtual platform for a rural high school
                  in the area of Coopevega, Cutris San Carlos. The objective was to find a way to have a virtual
                  portal for students and teachers where they could keep track of evaluations." type="python"></TextStyle>
                  </span>
                  <br />
                  <br />
                  <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>   
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '15%', height: '15%' }} className='imgGit'/>
                    <a href="https://github.com/JordanGS01/ProyectoLiceoCAMAQUI" className='linkGit' target="_blank">Go to code <span><i style={{color:''}} className="bi bi-box-arrow-up-right"> </i> </span></a>
                  </Container>
                  <br />
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <h4> Architecture: </h4>
                  <br />
                  <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor' >
                    <img src={img} alt="" style={{ width: '100%', height: '100%' }} className='imgInfo'/>
                   
                    <p className='Text'>The architecture proposed for the project is based on a layered design 
                    focusing on three main layers: presentation layer, 
                    application layer and data layer.</p>
                   
                  </Container>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <h4> Diagram of system components: </h4>
                  <br />
                  <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className='contenedor'> 
                  <img src={imgComponent} alt="" style={{ width: '100%', height: '100%' }} className='imgInfo'/>
                  <p className='Text'>Below is an image of the layer diagram in more detail.</p>
                  </Container>


                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>BAYESIAN CLASSIFIER</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>SAFETY ZONE MAPS</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>CHAT ONLINE "TECLEGRAM"</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>TECOSTORE</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>


          </Accordion>
        </Card>
      </Container>
    </div>
  )
}
