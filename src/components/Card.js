import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  const cardData = [
    {
      imgSrc: "./eventImage/Add a heading (3).png",
      title: "SMASH BROS CHAMPIONSHIP",
      text: "./IMG_1429.JPG",
      label: "Get ticket",
      link: "m"
    },
    {
      imgSrc: "./eventImage/IT Seminor.PNG",
      title: "IT seminor",
      text: "Some quick example text for card 1.",
      label: "Get ticket",
      link: "m"
    },
    {
      imgSrc: "./eventImage/IMG_1429.JPG",
      title: "Welcome BBQ",
      text: "Some quick example text for card 2.",
      label: "Get ticket",
      link: "m"
    },
    // ... 他のカードのデータ
  ];

  const [eventIndex, setEventIndex] = useState(0);
  const events = [
    { date: "AUG 21", title: "IT seminor", bgColor: "orange" },
    { date: "SEP 05", title: "SMASH BROS CHAMPIONSHIP" , bgColor: "green"},
    { date: "OCT 12", title: "Welcome BBQ" , bgColor: "white"},
    // ... 他のイベントデータ
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 7000); // 3秒ごとに更新

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <main >
      <h1 className='mr-2 mx-4 my-4  eventCards'>Upcoming Events</h1>
      <h1 className="events" style={{ backgroundColor: events[eventIndex].bgColor }}>{events[eventIndex].date} {events[eventIndex].title}</h1>
      
      <Container >
        <Row>
          {cardData.map((card, index) => (
            <Col md={4} key={index}>
              <Card style={{ width: '24rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Card.Link href={card.link}>{card.label}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  )
}

export default Cards;
