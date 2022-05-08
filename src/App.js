import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage'


class App extends Component{

  state = {
    title: 'Mike Morales',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Mike Morales',
      subTitle: '"To survive is to stay alive in the face of opposition" - Lauryn Hill',
      text: 'Checkout my latest projects below'
    },
    about: {
      title: 'About Me',
      subTitle: 'Software Engineer',
      aboutTxt: 'Blauvelt, NY'
    },
    experience: {
      title: 'Skills & Experience'
    }
  };

  render() {
    return (
      <Router>
        <Container className="p-0"  fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand className="p-2">Mike Morales</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} aboutTxt={this.state.about.aboutTxt} />} />
          <Route path="/experience" exact render={() => <ExperiencePage title={this.state.experience.title} />} />
          <Route path='/resume' component={() => { 
              window.location.href = 'https://drive.google.com/file/d/1rfZ4R7dnOycdO8-u1Ezg6kzLdHQPxD7Y/view?usp=sharing'; 
              return null;
          }}/>


          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
