import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'

const Navigation = () => {
  return (
    <Navbar expand="lg" className="nav-container sticky-top">
      <Container fluid>
        <Navbar.Brand className='brand-icon' href="#">Icon Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto  my-2 my-lg-0"

          >
            <Nav.Link className='list-item text-light nav-items' href="/home">Home</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Product</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="/services">Services</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Projects</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Careers</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Blog</Nav.Link>
            <Nav.Link className='list-item text-light nav-items' href="#action2">Contact Us</Nav.Link>
          </Nav>
          
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-search'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;