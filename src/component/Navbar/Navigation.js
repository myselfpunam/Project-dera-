import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from '../assets/images/logoipsum-331.svg'
const Navigation = () => {
  
  return (
    <Navbar expand="lg" className="nav-container fixed-top">
      <Container fluid>
        <Navbar.Brand className='brand-icon' href="/home">
          <img src={logo} width="50" height="50" class="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto  my-2 my-lg-0"

          >
            <Nav.Link className='list-item nav-items' href="/home">Home</Nav.Link>
            <Nav.Link className='list-item nav-items' href="/about">About Us</Nav.Link>
            <Nav.Link className='list-item nav-items' href="/services">Services</Nav.Link>
            <Nav.Link className='list-item nav-items' href="/projects">Projects</Nav.Link>
            <Nav.Link className='list-item nav-items' href="#action2">Careers</Nav.Link>
            <Nav.Link className='list-item nav-items' href="#action2">Blog</Nav.Link>
            <Nav.Link className='list-item nav-items' href="/contact">Contact Us</Nav.Link>
          </Nav>
          <div className='ms-auto'>
          <Link to='/login'><button className="styled-button ms-auto">Login</button></Link>
          <Link to='/register'><button className="styled-button">Signup</button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;