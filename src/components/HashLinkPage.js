import '../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import {Card, Button} from 'react-bootstrap';
import Content from './Content';
import Contact from './Contact';



import extinct from '../assets/images/extinct.png'
import mast from '../assets/images/mast.png'


function HashLinkPage(props) {

    return(
        <div>
            <div id="home" className="content">
                <Hero intro="Hi, my name is" title="Mike Morales." text="Software Engineer" />
                <Container>
                <Row className="justify-content-center py-3">
                        <Col md={3} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={mast} />
                                <Card.Body>
                                    <Card.Title>MAST</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Javascript - React/Node/Express/MySQL - Heroku/Netlify</Card.Subtitle>
                                    <Card.Text>Created a system to help M.S. students and graduate program directors (GPDs) determine whether students are on track to satisfy the degree requirements by their planned graduation date. The system will also help departmental administrative staff know when to clear a student for graduation.</Card.Text>
                                    <Button variant="primary" href="https://github.com/michael5morales/MAST">Code</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={extinct} />
                                <Card.Body>
                                    <Card.Title>Extinct - Tower Defense Game</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">TypeScript - Firebase</Card.Subtitle>
                                    <Card.Text>Developed a Tower Defense game using Wolfie2D, a 2D typescript game engine developed by Richard Mckenna and Joe Weaver. </Card.Text>
                                    <Button variant="primary" href="https://extinct-2022.firebaseapp.com/">Play</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="experience" className="content">
                <Hero title="Experience"/>
                <Container >
                </Container>
            </div>
            <div id="about" className="content">
                <Hero title="About"/>
                <Container>
                            <Content>
                                <p>Hi there. My name is Michael Morales and I currently work as a Dev Ops Engineer for AAA - Auto Club Enterprises. I have been working closely with guidewire, designing solutions and fixing bugs on the insurance suite platform. </p> 

                                <p>During my time in undergrad, I worked as a Web Developer on the Stony Brook Campus Residencies Marketing Team.</p>

                                <p> I was also blessed with the opportunity to work alongside Professor Cho as a research assistant at Konkuk University in Seoul South Korea. There I worked on AI applications for Mobile Environments, working closely with the Machine Learning API, TensorFlow.</p>

                                <p>I'm constantly learning new things. currently those things include gaining experience with MongoDB, React, Express JS, and Node JS</p>

                                <p>You can take a look at some of my current and past projects on <a href="https://github.com/michael5morales" target="_blank" rel="noopener noreferrer">Github</a>.</p>

                            </Content>
                </Container>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="contact" className="contact-form-section">
                <Hero title="Contact Me"/>
                <Container>
                    <Contact/>
                </Container>
            </div>
        </div>
    );

}

export default HashLinkPage;