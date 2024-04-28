import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import '../CSS/Skills.css'

export default function Skills() {
  return (
    <div style={{ background: '', minHeight: '90.9vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondo1'>
      <Container fluid className='container'>

        <Row xs={1} sm={2} md={3}>
          <Col className="my-3">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                  I used Javascript to communicate the backend with the frontEnd using Jquery and LINQ.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-3">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill'/>
                <Card.Body>
                  <Card.Title>C#</Card.Title>
                  <Card.Text>
                    I used C# for the creation of controllers containing the business logic.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-3">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://gdimg.gmarket.co.kr/1864442788/still/400?ver=1597372311" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>DevExtreme</Card.Title>
                  <Card.Text>
                  I have used DevExtreme components to display tables with catalog information. 
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>GitHub</Card.Title>
                  <Card.Text>
                  For a good version control it is essential to know the repositories offered by GitHub.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://storage.subs.noventiq.com/public/images/market_setting/logotype/53445/SQL1.png" style={{ width: '40%', height: '40%', margin: '20px' }}  className='imgSkill'/>
                <Card.Body>
                  <Card.Title>SQL Server</Card.Title>
                  <Card.Text>
                  I used SQL server to perform the heaviest logic of a web application, by means of stored procedures. 
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                  <Card.Text>
                   I have used Python for the creation of scripts, functions, web scraping and statistics.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>BitBucket</Card.Title>
                  <Card.Text>
                  I have used this technology for code hosting, which is very practical as it is based on GIT repositories.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://www.codeguru.com/wp-content/uploads/2021/11/ASP-Net-tutorials.jpg" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>MVC.NET core</Card.Title>
                  <Card.Text>
                  I have used MVC technology to create a web system, to have a more structured code.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://cdn.worldvectorlogo.com/logos/sourcetree-1.svg" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>SourceTree</Card.Title>
                  <Card.Text>
                  SourceTree is very useful for managing branches, commit, push, fetch in a graphical way.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://cdn-icons-png.flaticon.com/512/226/226777.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>JAVA</Card.Title>
                  <Card.Text>
                  I have programmed in Java for the creation of applications with object oriented programming.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>JIRA</Card.Title>
                  <Card.Text>
                  I have used Jira for user story management using the Scrum methodology.
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col className="my-4">
            <Card style={{ border: 'solid 1px', borderColor: 'gray', width: '' }}>
              <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: '' }} className='contenedor'>
                <Card.Img variant="" src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" style={{ width: '40%', height: '40%', margin: '20px' }} className='imgSkill' />
                <Card.Body>
                  <Card.Title>HTML y CSS</Card.Title>
                  <Card.Text>
                    For the frontEnd development I have used HTML and CSS in combination with some framework. 
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div >
  )
}
