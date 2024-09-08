

import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import img from '../Assets/PerfilPhoto.jpg';
import '../CSS/Bibliography.css'
import TextStyle from './TextStyle';

export default function Bibliography() {

  return (
    <div style={{ backgroundImage:  '', background: '', minHeight: '100vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondo'>
      <Container  className='container'>
        <Card style={{ border: 'solid 1px', borderColor: 'gray' }}>
          <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor0'>
            <Card.Img variant="" src={img} style={{ width: '50%', height: '50%', margin: '20px' }} className='imgBibiography' />
            <Card.Body style={{ textAlign: '' }}>
              <Card.Title style={{ color: '#198754', fontFamily: 'Courier', fontWeight: '800' }}>BIBLIOGRAPHY</Card.Title>
              <Card.Text style={{ fontFamily: 'Courier', fontSize: 'large', fontWeight: '550', color: '', height: '' }}>
                <TextStyle typeText="Hello everyone, My name is Elison Corrales Vargas, I am a software engineer passionate about technology and digitization of processes. I studied at the Tecnologico de Costa Rica and I graduated in 2024. Since then I have dedicated myself to software development both professionally and personally. This site is to share with you some of my skills and projects I have worked on.  I hope you are interested" type="python" />
              </Card.Text>
              <Card.Text style={{ fontFamily: 'Courier' }}>
                <strong>Age: 24 </strong><br />
                <strong>Birthday: 16/6/2000 </strong><br />
                <strong>Nationality:</strong> <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1920px-Flag_of_Costa_Rica.svg.png'
                  alt="Costa Rica Flag"
                  style={{ width: '30px', height: '20px', margin: '5px' }}
                /><br />
                 <strong>City: La Peregrina, Uruca, San José</strong><br />
              </Card.Text>
            </Card.Body>
          </Container>
          <hr style={{ margin: '0 10px' }} />
          <Container  style={{ display: 'flex', flexDirection: 'column', alignItems: '', padding: '30px', background: '' }} className='contenedor0 space'>
            <div style={{ marginBottom: '20px' }}>
              <Card.Title style={{ color: '#198754', fontFamily: 'Courier', fontWeight: '800' }}>Hobbies</Card.Title>
              <Card.Text>

                <li>Go fishing</li>
                <li>Playing video games</li>
                <li>Play guitar</li>
                <li>Drawing</li>
                <li>Camping</li>

              </Card.Text>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Card.Title style={{ color: '#198754', fontFamily: 'Courier', fontWeight: '800' }}>Interest</Card.Title>
              <Card.Text>

                <li>Learn programming languages</li>
                <li>Improve my English</li>
                <li>Learn about servers</li>
                <li>Website development</li>

              </Card.Text>
            </div>
            <div>
              <Card.Title style={{ color: '#198754', fontFamily: 'Courier', fontWeight: '800' }}>Strengths</Card.Title>
              <Card.Text>

                <li>Friendly</li>
                <li>Great learning capacity</li>
                <li>Never give up</li>

              </Card.Text>
            </div>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
