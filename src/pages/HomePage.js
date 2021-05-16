
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import {Card, Button} from 'react-bootstrap';

import extinct from '../assets/images/extinct.png'
import mast from '../assets/images/mast.png'

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
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
    );

}

export default HomePage;