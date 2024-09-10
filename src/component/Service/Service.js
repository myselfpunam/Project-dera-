import React from 'react';
import Card from 'react-bootstrap/Card';
const Service = ({service}) => {
  return (
    <Card className='card-box' >   
        <Card.Title><h4>{service.author}</h4></Card.Title>
        <Card.Text>
        <p>{service.author}</p>
        </Card.Text>
    </Card>
  );
};

export default Service;