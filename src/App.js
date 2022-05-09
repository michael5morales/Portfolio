import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';

import Footer from './components/Footer';
import HashLinkPage from './components/HashLinkPage';


import logo from './assets/images/logo/full_dark_logo_transparant.png';

class App extends Component{

  state = {
    title: 'Mike Morales',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Experience', path: '/experience' }
    ],
    home: {
      intro: "Hi, my name is",
      title: 'Mike Morales.',
      text: 'Software Engineer'
    },
    about: {
      title: 'About Me',
      subTitle: 'Software Engineer',
      aboutTxt: 'Dallas, TX'
    },
    experience: {
      title: 'Skills & Experience'
    },
    name: '',
    nameError: false,
    contact: '',
    email: '',
    emailError: false,
    emailError2: false,
    message: '',
    messageError: false,
    formValid: false
  };

  render() {
    return (
      <Router>
        <Container className="ml-auto"  fluid={true}>
          <Navbar className="ml-auto" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Mike Morales" width="30%" height="30%"/>
            </Navbar.Brand>
          </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className = "navbar-links">
                <HashLink className="nav-link" smooth to={'/#home'}>Home</HashLink>
                <HashLink className="nav-link" smooth to={'/#experience'}>Experience</HashLink>
                <HashLink className="nav-link" smooth to={'/#about'}>Resume</HashLink>
                <HashLink className="nav-link" smooth to={'/#about'}>About</HashLink>
                <HashLink className="nav-link" smooth to={'/#contact'}>Contact</HashLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path='/resume' component={() => { 
              window.location.href = 'https://drive.google.com/file/d/1rfZ4R7dnOycdO8-u1Ezg6kzLdHQPxD7Y/view?usp=sharing'; 
              return null;
          }}/>
          
          <HashLinkPage />
      
          <Footer/>

        </Container>
      </Router>
    );
  }

}

export default App;
