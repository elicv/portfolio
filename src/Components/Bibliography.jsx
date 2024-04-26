import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import img from '../Assets/PerfilPhoto.jpg';

export default function Bibliography() {
  return (
    <div style={{ background: '', height: '91vh' }}>
      <Container style={{ background: '', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }} >
        <Card style={{ width: '70rem', border: 'solid 1px', borderColor: 'gray' }}>
          <Container style={{ display: 'flex', margin: '' }}>
            <Card.Img variant="" src={img} style={{ width: '300px', height: '300px', margin: '20px' }} />
            <Card.Body>
              <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}> <strong>BIBLIOGRAPHY </strong></Card.Title>
              <Card.Text>
                <p style={{ fontFamily: 'cursive' }}>Hello, my name is Elison Usiel Corrales Vargas, I am a resident of the community of San Joaquín de Cutris,
                  Alajuela, San Carlos. Complete primary school at the San Joaquín de Cutris School and secondary school at the
                  Santa Roca Professional Technical School. I just finished my university studies at the Tecnológico
                  de Costa Rica (TEC) and I am interested in making myself known so that they can see what I do.</p>
              </Card.Text>
              <Card.Text>
                <h7 style={{ fontFamily: 'cursive' }} > <strong> Age: </strong> 24  </h7>
                <br></br>
                <br></br>
                <h7 style={{ fontFamily: 'cursive' }} > <strong>Birthday:  </strong>16/6/2000  </h7>
                <br></br>
                <br></br>
                <h7 style={{ fontFamily: 'cursive' }} > <strong>Nationality: </strong><img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1920px-Flag_of_Costa_Rica.svg.png'
                  alt="Imagen de perfil"
                  style={{ width: '30px', height: '20px', borderRadius: '', margin: '5px' }} // Estilo para la imagen de perfil
                /></h7>
              </Card.Text>

            </Card.Body>
          </Container>
          <div style={{ height: '1px', background: 'black', margin: '10px' }}>  </div>
          <Container>
            <Card.Body>
              <Container style={{ display: 'flex' }}>
                <Container>
                  <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}> <strong> Hobbies</strong></Card.Title>
                  <Card.Text>
                    <li>
                      Go fishing
                    </li>
                    <li>
                      Playing video games
                    </li>
                    <li>
                      Play guitar
                    </li>
                    <li>
                      Drawing
                    </li>
                    <li>
                      Camping
                    </li>
                  </Card.Text>
                </Container>
                <Container>
                  <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}> <strong> Interest</strong></Card.Title>
                  <Card.Text>
                    <li>
                    Learn programming languages
                    </li>
                    <li>
                     Improve my English
                    </li>
                    <li>
                    Learn about virtual reality
                    </li>
                    <li>
                    Website development 
                    </li>
                   
                  </Card.Text>
                </Container>

                <Container>
                  <Card.Title style={{ color: 'darkgreen', fontFamily: 'cursive' }}> <strong> Strengths</strong></Card.Title>
                  <Card.Text>
                    <li>
                    Good communication skills
                    </li>
                    <li>
                    Great learning capacity
                    </li>
                  </Card.Text>
                </Container>

              </Container>



            </Card.Body>

          </Container>
        </Card>
      </Container>
    </div>
  )
}
