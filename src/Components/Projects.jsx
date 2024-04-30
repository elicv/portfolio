import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import imgComponent from '../Assets/Componentes.png'
import imgGIS from '../Assets/GIS.png'
import '../CSS/Projects.css'

import {MDBCard} from 'mdb-react-ui-kit';

let timeoutId;

export default function Projects() {

  var handleAccordionToggle = (content) => {
    if (content.target.ariaExpanded === 'false') {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        document.querySelector('.bodyScroll0').scrollTo({ top: 0 });
        document.querySelector('.bodyScroll1').scrollTo({ top: 0 });
        document.querySelector('.bodyScroll2').scrollTo({ top: 0 });
        document.querySelector('.bodyScroll3').scrollTo({ top: 0 });
        document.querySelector('.bodyScroll4').scrollTo({ top: 0 });
      }, 250);
    }
  };
  return (
    <div style={{ background: '', minHeight: '90.9vh', display: '', alignItems: 'center', justifyContent: 'center', padding: '20px' }} className='fondo2'>
      <Container fluid className=''>
        <Card style={{ width: '' }} className='projectCard'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" onClick={handleAccordionToggle}>
              <Accordion.Header>LICEO CAMAQUI <i style={{ marginLeft: '10px' }} className="bi bi-mortarboard-fill"></i></Accordion.Header>
              <Accordion.Body className='bodyScroll0'> 
                <Container className='accordionBody'>
                  <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MDBCard className='cardContent animate__animated animate__slideInDown'>
                      <h4> Description: </h4>
                      <span className='Text'>
                        This project was done for the Software Engineering Project course at TEC.
                        It consisted in the development of a web page and a virtual platform for a rural high school
                        in the area of Coopevega, Cutris San Carlos. The objective was to find a way to have a virtual
                        portal for students and teachers where they could keep track of evaluations.
                      </span>
                      <br />
                      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '15%', height: '15%' }} className='imgGit' />
                        <a href="https://github.com/JordanGS01/ProyectoLiceoCAMAQUI" className='linkGit' target="_blank">Go to code <span><i style={{ color: '' }} className="bi bi-box-arrow-up-right"> </i> </span></a>
                      </Container>
                    </MDBCard>
                  </Container>

                  <br />
                  <br />
                  <h4> Diagram of system components: </h4>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
                    <img src={imgComponent} alt="" style={{ width: '100%', height: '100%' }} className='imgInfo' />
                    {/* <p className='Text'>Below is an image of the layer diagram in more detail.</p> */}
                  </Container>
                  <br />
                  <h4> Architecture: </h4>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor' >
                    {/* <img src={img} alt="" style={{ width: '100%', height: '100%' }} className='imgInfo' /> */}

                    <p className='Text'>
                      The architecture proposed for the project is based
                      on a layered design centered on three main layers: presentation layer,
                      application layer and data layer. Using this type of architecture helped us to have
                      more modularity in the development, since each layer could grow without depending on the other
                    </p>


                  </Container>
                  <br />

                  <h4> Implemented technologies: </h4>
                  <hr style={{ margin: '0 0px' }} />
                  <Container className='tecnologies'>
                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://t4.ftcdn.net/jpg/00/75/92/23/360_F_75922336_Jz2QgNOx7dnRea9ZI6yQTDtn1vHq5ejF.jpg" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                  </Container>

                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" onClick={handleAccordionToggle}>
              <Accordion.Header>BAYESIAN CLASSIFIER <i style={{ marginLeft: '10px' }} className="bi bi-diagram-3"></i></Accordion.Header>
              <Accordion.Body className='bodyScroll1'>
                <Container>
                  <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MDBCard className='cardContent animate__animated animate__slideInDown'>
                      <h4> Description: </h4>
                      <p className='Text'> I programmed a supervised classification method based on Bayes' theorem. This theorem establishes a relationship between the conditional probability of two events and can be used to calculate the
                        probability that a data point belongs to a specific class given its observed characteristics. </p>
                      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '15%', height: '15%' }} className='imgGit' />
                        <a href="https://github.com/elicv/clasificador-bayesiano/tree/master/app" className='linkGit' target="_blank">Go to code <span><i style={{ color: '' }} className="bi bi-box-arrow-up-right"> </i> </span></a>
                      </Container>
                    </MDBCard>
                  </Container>
                  <br />
                  <br />
                  <h5> What data does it classify? </h5>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <p className='Text'> The project was based on the classification of web pages according to a type of category, for example a web page can be classified
                    in the categories news, sports, sales, +18, family or other categories depending on its content.</p>

                  <br />
                  <h5> Methodology: </h5>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <p className='Text'> We took a kaggle dataset containing a large amount of urls to analyze,
                    the content extraction process was performed using webScraping and parallelism. In this way
                    the content extraction could be done in a faster and more efficient way, once the page was analyzed
                    it was passed through the bayes function that performed the classification method.</p>
                  <br />

                  <h5> Implemented technologies: </h5>
                  <hr style={{ margin: '0 0px' }} />
                  <Container className='tecnologies'>
                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://t4.ftcdn.net/jpg/00/75/92/23/360_F_75922336_Jz2QgNOx7dnRea9ZI6yQTDtn1vHq5ejF.jpg" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://logowik.com/content/uploads/images/kaggle4255.logowik.com.webp" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                  </Container>



                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" onClick={handleAccordionToggle}>
              <Accordion.Header>SAFETY ZONE MAPS <i style={{ marginLeft: '10px' }} className="bi bi-globe-americas"></i></Accordion.Header>
              <Accordion.Body className='bodyScroll2'>
                <Container>
                  <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MDBCard className='cardContent animate__animated animate__slideInDown'>
                      <h4> Description: </h4>
                      <p className='Text'> Developed as part of the Geographic Information Systems course,
                        this project aims to produce an informative map of the safety zones and routes associated
                        with the evacuation plans defined for each TEC building. </p>
                      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '15%', height: '15%' }} className='imgGit' />
                        <a href="https://github.com/jochaes/Mapa_Zonas_Seguridad" className='linkGit' target="_blank">Go to code <span><i style={{ color: '' }} className="bi bi-box-arrow-up-right"> </i> </span></a>
                      </Container>
                    </MDBCard>
                  </Container>
                  <br />
                  <br />
                  <h4> Safety Zone Map: </h4>
                  <br />
                  <hr style={{ margin: '0 0px' }} />
                  <br />
                  <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
                    <img src={imgGIS} alt="" style={{ width: '100%', height: '100%' }} className='imgInfo' />
                    {/* <p className='Text'>Below is an image of the layer diagram in more detail.</p> */}
                  </Container>
                  <br />
                  <h5> Implemented technologies: </h5>
                  <hr style={{ margin: '0 0px' }} />
                  <Container className='tecnologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/QGIS_logo_new.svg/1024px-QGIS_logo_new.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" style={{ width: '10%', height: '10%' }} className='imgUsed' />
                  </Container>


                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" onClick={handleAccordionToggle}>
              <Accordion.Header>CHAT ONLINE "TECLEGRAM" <i style={{ marginLeft: '10px' }} className="bi bi-telegram"></i> </Accordion.Header>
              <Accordion.Body className='bodyScroll3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" onClick={handleAccordionToggle}>
              <Accordion.Header>TECOSTORE <i style={{ marginLeft: '10px' }} className="bi bi-cart-check-fill"></i> </Accordion.Header>
              <Accordion.Body className='bodyScroll4'>
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
