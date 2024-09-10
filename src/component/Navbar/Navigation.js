import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from '../assets/images/logoipsum-331.svg'
const Navigation = () => {
  return (
    <Navbar expand="lg" className="nav-container sticky-top">
      <Container fluid>
        <Navbar.Brand className='brand-icon' href="#">
          <img src={logo} width="50" height="50" class="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto  my-2 my-lg-0"

          >
            <Nav.Link className='list-item text-light nav-items' href="/home">Home</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">About Us</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="/services">Services</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Projects</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Careers</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Blog</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Contact Us</Nav.Link>
          </Nav>
          <button className="styled-button ms-auto">login</button>
          <button className="styled-button">Signup</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;