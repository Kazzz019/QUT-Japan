import React from 'react'
import { Container } from 'react-bootstrap';


export default function Sponsor() {
  const items = [
    {
      img: "./Izakaya Kotobuki.jpeg",
      title: "Izakaya Kotobuki",
      description: "Sushi kotobuki started at East Brisbane as a small restaurant.It has been our great pleasure to serve you since 2008 with the highest quality Japanese food and excellent service at the best prices.On the frontier of Japanese fusion restaurants in Brisbane, we are proud of our contemporary and wonderful cuisine which is selected from the freshest ingredients.",
      URL: "https://sushikotobuki.com.au/izakayakotobuki"
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Kodoya japanese Restaurant",
      description: " Kadoya serves Japanese everyday food such as Japanese Chicken curry, Katsudon, karaage Bento box, Ramen and Udon Noodle soup.We have been in Brisbane city for almost 20 years. All staff are from Japan. Our menu starting from $3.95 for entrees and $10.95 for main meals.",
      URL:"https://kadoya-japanese-restaurant.business.site/"
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Maru Korean Restaurant",
      description: "Maru Korean Restaurant, established in 2011, is a must-go-to Korean BBQ Restaurant in Brisbane City. We pride ourselves on bringing fresh, quality food to the table. ",
      URL:"https://marurestaurant.com.au/"
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Little maru ",
      description: "Littlemaru is a little place, with big flavours.We aim to bring you the best food fast.",
      URL:"https://www.instagram.com/littlemaru2019/?hl=en"
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Kushi Maru",
      description: "Try charcoal-grilled skewers, sashimi, and more!.",
      URL:"https://www.instagram.com/kushimaru.bne/"
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Maru Grill House",
      description: "Maru Korean Restaurant, established in 2011, is a must-go-to Korean BBQ Restaurant in Brisbane City. We pride ourselves on bringing fresh, quality food to the table. ",
      URL:"https://marurestaurant.com.au/maru-grill-house-brisbane-cbd-2/"
    },
    // more items...
  ];
  return (
    <>
    <Container className="d-flex justify-content-center align-items-center ">
    <div className="placeCentre">
      <h1>
        Meet our sponsors
      </h1>
    </div>
    </Container>
    <div className="container my-4 sponsorcontent">
    {items.map((item, index) => (
      <div className="row align-items-center mb-4" key={index}>
        <div className="col-md-6">
          <img src={item.img} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a  href={item.URL}>Learn more</a>
        </div>
      </div>
    ))}
  </div>
  
  </>
);
}
