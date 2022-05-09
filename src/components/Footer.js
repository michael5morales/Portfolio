import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-end p-3">
                    <Col className="p-7" md={2} sm={12}>
                        <SocialIcon url="https://github.com/michael5morales" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="https://www.linkedin.com/in/michael-m-481898132/" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="https://www.facebook.com/michael.morales.jr/" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="mailto::michael5morales5@gmail.com" bgColor="black"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;