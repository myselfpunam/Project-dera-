import React, { useEffect, useState } from 'react';
import './Services.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Service from '../Service/Service';


const Services = () => {
  const [services , setServices] = useState([])
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=100')
      .then(res => res.json())
      .then(json => {
        const limitedData = json.slice(0, 6);
        setServices(limitedData)
      })
  }, [])
  return (
    <div className='services-container'>
      <h2 className='section-title pt-4 pb-5'>Our Services</h2>
       <Row xs={1} md={3} className=" pt-4 pb-4 g-3" data-aos="fade-up" data-aos-delay="200">
      {services.map(service => (
        <Col key={service.id}>
          <Service service={service} />
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Services;