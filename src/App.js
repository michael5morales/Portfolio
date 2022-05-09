import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';

import Footer from './components/Footer';
import HashLinkPage from './components/HashLinkPage';



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
    }
  };

  render() {
    return (
      <Router>
        <Container className="ml-auto"  fluid={true}>
          <Navbar className="ml-auto" expand="lg" fixed="top">
            <Navbar.Brand className="navbar-brand" >Mike Morales</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className = "navbar-links">
                {/* <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/about">About</Link> */}
                <HashLink className="nav-link" smooth to={'/#home'}>Home</HashLink>
                <HashLink className="nav-link" smooth to={'/#experience'}>Experience</HashLink>
                <HashLink className="nav-link" smooth to={'/#about'}>Resume</HashLink>
                <HashLink className="nav-link" smooth to={'/#about'}>About</HashLink>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          {/* <Route path="/about" component={Container}
            onEnter={function(){
              document.getElementById("about").scrollIntoView();
            }
          }/> */}
          {/* <Route path="/home" exact render={() => <HomePage intro={this.state.home.intro} title={this.state.home.title} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} aboutTxt={this.state.about.aboutTxt} />} />
          <Route path="/experience" exact render={() => <ExperiencePage title={this.state.experience.title} />} /> */}
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
