import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Event() {
  const events = [
    {
      title: "Welcome BBQ",
      imageUrl: "./eventImage/IMG_1429.JPG",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      title: "IT seminar",
      imageUrl: "./eventImage/IT Seminor.PNG",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      title: "SMASH BROS CHAMPIONSHIP",
      imageUrl: "./eventImage/Add a heading (3).png",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      title: "Card title",
      imageUrl: "./eventImage/screenshot.png",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    }
  ];
  
  return (
    <>
    <div className='eventHeading '>
    <h1 className='mb-3'>QUT Japan Events</h1>
    <p>Events at QUT Japan are the perfect opportunity to meet new friends and engage in fun activities! Below is our upcoming events for 2023!
    </p>
    </div>
      <Container>
        <Row>
          {events.map((event, index) => (
            <Col lg={6} sm={12} key={index}>
              <Card>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </>
    
  )
}

