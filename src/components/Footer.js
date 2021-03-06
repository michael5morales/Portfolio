import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <SocialIcon url="https://github.com/michael5morales" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="https://www.linkedin.com/in/michael-m-481898132/" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="https://www.facebook.com/michael.morales.jr/" bgColor="black"/>
                        &nbsp;
                        <SocialIcon url="mailto::michael5morales5@gmail.com" bgColor="black"/>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Michael Morales.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;