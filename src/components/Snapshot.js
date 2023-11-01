import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Snapshot() {
  
  const imageRows = [
    ["./images/snapshot1.jpg", "./images/DSC08664.JPEG", "./images/DSC08832.JPEG"],
    ["./images/DSC08769.JPEG","./images/snapshot1.jpg","./images/DSC08954.JPEG"]
  ];

  return (
    <main>  
      <h1 className="snapshots">Our 2023 snapshots</h1>
      <Container>
        <Row className="my-3">
          <Col>
            <Image src="./groupphoto.jpeg" fluid />
          </Col>
        </Row>
        
        {imageRows.map((row, rowIndex) => (
          <Row className="my-4 g-4" key={rowIndex}>
            {row.map((image, imageIndex) => (
              <Col md={4} xs={12} key={imageIndex}>
                <Image src={image} fluid />
              </Col>
            ))}
          </Row>
        ))}
        
      </Container>
    </main>
  )
}
