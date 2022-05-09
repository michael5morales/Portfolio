import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-4">
                    <Col md={8} sm={12}>
                        { props.intro && <h5 className="display-7">{props.intro}</h5> }
                        { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && props.text && <h3 className="quote font-weight-light">{props.subTitle}</h3>}
                        { props.subTitle && props.aboutTxt && <h3 className="display-6 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-bolder">{props.text} </h3> }
                        { props.aboutTxt && <h3 className="lead font-weight-bolder">{props.aboutTxt} &nbsp; &#183; &nbsp; {'(845)367-1148'} &nbsp; &#183; &nbsp; {<a href="mailto::michael5morales5@gmail.com" target="_blank" rel="noopener noreferrer">michael5morales5@gmail.com</a>}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;