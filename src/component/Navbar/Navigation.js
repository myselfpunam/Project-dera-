import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from '../assets/images/logoipsum-331.svg'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
const Navigation = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar expand="lg" className={`nav-container fixed-top ${isShrunk ? 'shrink' : ''}`}>
      {/* <Navbar expand="lg" className='nav-container'> */}
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
      <div className="floating-social-media">
        <Link to="https://www.linkedin.com" target="_blank" className="social-icon"><FaLinkedinIn /></Link>
        <Link to="https://www.facebook.com" target="_blank" className="social-icon"><FaFacebookF /></Link>
        <Link to= "https://www.twitter.com" target="_blank" className="social-icon"><FaTwitter /></Link>
        <Link to="/contact" className="social-icon"><FaEnvelope /></Link>
      </div>
    </>
  );
};

export default Navigation;