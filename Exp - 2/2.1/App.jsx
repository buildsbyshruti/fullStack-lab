import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Form, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            🎨 Purple UI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        className="mt-5"
        style={{
          background: "linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)",
          minHeight: "100vh",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1
          className="mb-4 text-center"
          style={{
            color: "#667eea",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Designing UI Using Bootstrap Components
        </h1>

        <div className="row">
          <div className="col-md-12 mb-4">
            <Card
              style={{
                border: "2px solid #667eea",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(102, 126, 234, 0.2)",
              }}
            >
              <Card.Header
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Sample Form
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{ color: "#667eea", fontWeight: "bold" }}
                    >
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      style={{ borderColor: "#667eea", borderWidth: "2px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{ color: "#667eea", fontWeight: "bold" }}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={{ borderColor: "#667eea", borderWidth: "2px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      style={{ color: "#764ba2" }}
                    />
                  </Form.Group>

                  <Button
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      padding: "10px 30px",
                      fontWeight: "bold",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <Card
              style={{
                border: "2px solid #f093fb",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(240, 147, 251, 0.2)",
              }}
            >
              <Card.Header
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Bootstrap Buttons
              </Card.Header>
              <Card.Body>
                <Button
                  className="me-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    padding: "8px 20px",
                  }}
                >
                  Primary
                </Button>
                <Button
                  className="me-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                    border: "none",
                    color: "#333",
                    padding: "8px 20px",
                  }}
                >
                  Secondary
                </Button>
                <Button
                  className="me-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    border: "none",
                    padding: "8px 20px",
                  }}
                >
                  Success
                </Button>
                <Button
                  className="me-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    border: "none",
                    color: "#333",
                    padding: "8px 20px",
                  }}
                >
                  Danger
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6 mb-4">
            <Card
              style={{
                border: "2px solid #764ba2",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(118, 75, 162, 0.2)",
              }}
            >
              <Card.Header
                style={{
                  background:
                    "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sample Card
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#667eea", fontWeight: "bold" }}>
                  Card Title
                </Card.Title>
                <Card.Text style={{ color: "#555" }}>
                  This is a sample card component using Bootstrap. Cards are
                  flexible content containers.
                </Card.Text>
                <Button
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    padding: "8px 25px",
                  }}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
