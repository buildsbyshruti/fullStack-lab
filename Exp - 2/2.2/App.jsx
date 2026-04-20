import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function App() {
  const [cards] = useState([
    {
      id: 1,
      title: "Card 1",
      text: "This is the first card with some sample content. Bootstrap cards are flexible containers.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card demonstrating card-based layout using Bootstrap grid system.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card showing responsive design with multiple cards dynamically displayed.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the fourth card. Cards can contain images, text, buttons, and more.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is the fifth card demonstrating how Bootstrap grid system makes layouts responsive.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Card 6",
      text: "This is the sixth card showing how easy it is to create beautiful layouts with Bootstrap.",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Card-Based Layout Using Bootstrap</h1>

      <Row>
        {cards.map((card) => (
          <Col key={card.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
