import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function App() {
  const [cards] = useState([
    {
      id: 1,
      title: "Card 1",
      text: "This is the first card with some sample content. Bootstrap cards are flexible containers.",
      image: "https://via.placeholder.com/300x200/06b6d4/ffffff",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card demonstrating card-based layout using Bootstrap grid system.",
      image: "https://via.placeholder.com/300x200/0891b2/ffffff",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card showing responsive design with multiple cards dynamically displayed.",
      image: "https://via.placeholder.com/300x200/0e7490/ffffff",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the fourth card. Cards can contain images, text, buttons, and more.",
      image: "https://via.placeholder.com/300x200/155e75/ffffff",
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is the fifth card demonstrating how Bootstrap grid system makes layouts responsive.",
      image: "https://via.placeholder.com/300x200/164e63/ffffff",
    },
    {
      id: 6,
      title: "Card 6",
      text: "This is the sixth card showing how easy it is to create beautiful layouts with Bootstrap.",
      image: "https://via.placeholder.com/300x200/083344/ffffff",
    },
  ]);

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #0891b2 0%, #06b6d4 50%, #67e8f9 100%)",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <Container className="mt-0 pt-5">
        <h1
          className="mb-4 text-center"
          style={{
            color: "white",
            fontWeight: "bold",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            fontSize: "3rem",
            padding: "20px",
          }}
        >
          🌊 Card-Based Layout Using Bootstrap
        </h1>

        <Row>
          {cards.map((card, index) => (
            <Col key={card.id} xs={12} sm={6} md={4} className="mb-4">
              <Card
                className="h-100"
                style={{
                  border: "3px solid #06b6d4",
                  borderRadius: "20px",
                  boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
                  transform: "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{
                    borderTopLeftRadius: "17px",
                    borderTopRightRadius: "17px",
                  }}
                />
                <Card.Body
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)"
                        : "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
                  }}
                >
                  <Card.Title
                    style={{
                      color: "#0e7490",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#164e63" }}>
                    {card.text}
                  </Card.Text>
                  <Button
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                      border: "none",
                      padding: "10px 25px",
                      fontWeight: "bold",
                      borderRadius: "25px",
                    }}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
