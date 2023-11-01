import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cards from './Card';
import Button from 'react-bootstrap/Button';
function Main() {
  const redirectToURL = () => {
    window.location.href = "https://your-url-here.com"; // ここに遷移したいURLを入力してください
  };
  return (
    <main>
    <div className="first vh-100 d-flex">
      <Container>
        <Row>
          <Col lg={7}>
          <div className="fontbg mx-auto text-center ">
              <h1 className="display-4 text-white">Welcome to QUT Japan</h1>
              <h2  className="display-4 text-white">Get your membership</h2>
                 <Button variant="light" size="lg" onClick={redirectToURL} className="roundButton">
                    Join Now
                  </Button>
            </div> 
          </Col>
        </Row>    
      </Container>
    </div>
    <div className="join vh-100  d-flex align-items-center ">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
          <div className="  mx-auto text-center  ">
              <h2  className="display-4 text-black">Get our 2023 QUT Japan Membership today!</h2>
              <p>Welcome to QUT Japan! As the premier Japanese cultural society at QUT, we curate a diverse range of events that foster connections, celebrate our shared love for Japanese culture, and create lasting memories. Dive into a vibrant community and experience the best of Japan with us!</p>
                 <Button variant="danger" onClick={redirectToURL} >
                    Join Now
                  </Button>
            </div> 
          </Col>
        </Row>    
      </Container>
    </div>
    <Cards/>
    </main>
  )
}

export default Main;
