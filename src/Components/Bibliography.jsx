import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import img from '../Assets/PerfilPhoto.jpg';
import '../CSS/Bibliography.css'

export default function Bibliography() {
  return (
    <div style={{ background: '', minHeight: '100vh', display: '', alignItems: 'center', justifyContent: 'center', marginTop:'20px'}}>
      <Container fluid className='container'>
        <Card style={{ border: 'solid 1px', borderColor: 'gray' }}>
          <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
            <Card.Img variant="" src={img} style={{ width: '300px', height: '300px', margin: '20px' }} />
            <Card.Body style={{ textAlign: '' }}>
              <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}>BIBLIOGRAPHY</Card.Title>
              <Card.Text style={{ fontFamily: 'cursive' }}>
                Hello, my name is Elison Usiel Corrales Vargas, I am a resident of the community of San Joaquín de Cutris,
                Alajuela, San Carlos. Complete primary school at the San Joaquín de Cutris School and secondary school at the
                Santa Roca Professional Technical School. I just finished my university studies at the Tecnológico
                de Costa Rica (TEC) and I am interested in making myself known so that they can see what I do.
              </Card.Text>
              <Card.Text style={{ fontFamily: 'cursive' }}>
                <strong>Age:</strong> 24<br />
                <strong>Birthday:</strong> 16/6/2000<br />
                <strong>Nationality:</strong> <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1920px-Flag_of_Costa_Rica.svg.png'
                  alt="Costa Rica Flag"
                  style={{ width: '30px', height: '20px', margin: '5px' }}
                />
              </Card.Text>
            </Card.Body>
          </Container>
          <hr style={{ margin: '0 10px' }} />
          <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '', padding: '30px', background:'' }} className='contenedor space'>
            <div style={{ marginBottom: '20px' }}>
              <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}>Hobbies</Card.Title>
              <Card.Text>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li>Go fishing</li>
                  <li>Playing video games</li>
                  <li>Play guitar</li>
                  <li>Drawing</li>
                  <li>Camping</li>
                </ul>
              </Card.Text>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}>Interest</Card.Title>
              <Card.Text>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li>Learn programming languages</li>
                  <li>Improve my English</li>
                  <li>Learn about virtual reality</li>
                  <li>Website development</li>
                </ul>
              </Card.Text>
            </div>
            <div>
              <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}>Strengths</Card.Title>
              <Card.Text>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li>Good communication skills</li>
                  <li>Great learning capacity</li>
                </ul>
              </Card.Text>
            </div>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
