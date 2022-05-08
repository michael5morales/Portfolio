import React from 'react';
import Hero from '../components/Hero';
import {Card, ProgressBar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';

import intern from '../assets/images/internship.png'
import campRes from '../assets/images/campres.png'

function ExperiencePage(props) {

    return(
        <div>
            <Helmet>
                <title>Mike Morales | Experience</title>
            </Helmet>
            <Hero title={props.title}/>
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col md={3} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={campRes} />
                            <Card.Body>
                                <Card.Title>Web Developer / Videographer</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Stony Brook University Campus Residencies Marketing</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">08.2019 - 05.2021</Card.Subtitle>
                                <Card.Text>Worked on the Stony Brook University Campus Residencies Marketing Team as a Web Developer and Videographer. 
                                    Responsible for maintaining and updating the website through the OUCampus CMS alongside creating video content for the school’s advertising 
                                    and promoting purposes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={intern} />
                            <Card.Body>
                                <Card.Title>Research Assistant</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Konkuk University</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">08.2019 - 09.2019</Card.Subtitle>
                                <Card.Text>Worked with Professor Yong Beom Cho on AI applications for Mobile Environments. Worked closely with Machine Learning API, TensorFlow.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
                <Row className="justify-content-center py-3">
                    <Col md={3} sm={12}>
                        <h3>Languages</h3>
                        <h6>Java<ProgressBar variant="success" now={90} /></h6>
                        <h6>Javascript<ProgressBar variant="info" now={80} /></h6>
                        <h6>C++<ProgressBar variant="warning" now={85} /></h6>
                        <h6>HTML/CSS<ProgressBar variant="danger" now={75} /></h6>
                        <h6>C#<ProgressBar variant="success" now={65} /></h6>
                        <h6>C<ProgressBar variant="info" now={45} /></h6>
                    </Col>
                    <Col md={3} sm={12}>
                        <h3>Frameworks/DBMS</h3>
                        <h6>React/Node/Express<ProgressBar variant="success" now={85} /></h6>
                        <h6>MySQL<ProgressBar variant="warning" now={90} /></h6>
                        <h6>TensorFlow/Py Torch<ProgressBar variant="info" now={68} /></h6>
                        <h6>Pandas/NumPy/SciPy<ProgressBar variant="danger" now={65} /></h6>
                        <h6>OpenGL<ProgressBar variant="success" now={60} /></h6>
                        <h6>MongoDB<ProgressBar variant="warning" now={50} /></h6>
                        <h6>Spring<ProgressBar variant="success" now={45} /></h6>
                    </Col>
                    <Col md={3} sm={12}>
                        <h3>Platforms</h3>
                        <h6>FireBase<ProgressBar variant="success" now={70} /></h6>
                        <h6>Linux<ProgressBar variant="warning" now={85} /></h6>
                        <h6>Git<ProgressBar variant="danger" now={95} /></h6>
                        <h6>Heroku<ProgressBar variant="success" now={70} /></h6>
                        <h6>Netlify<ProgressBar variant="info" now={82} /></h6>
                    </Col>
                </Row>
            </Container>

        </div>
    );

}

export default ExperiencePage;