import React from 'react';
import Hero from '../components/Hero';
import {Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import intern from '../assets/images/internship.png'
import campRes from '../assets/images/campres.png'

function ExperiencePage(props) {

    return(
        <div>
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
                                    Responsible for maintaining and updating the website alongside creating video content for the school’s advertising 
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
                <Row className="justify-content-left py-3">
                    
                </Row>
            </Container>

        </div>
    );

}

export default ExperiencePage;