import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Form, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bootstrap UI</Navbar.Brand>
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

      <Container className="mt-5">
        <h1 className="mb-4">Designing UI Using Bootstrap Components</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Header>Bootstrap Buttons</Card.Header>
              <Card.Body>
                <Button variant="primary" className="me-2">
                  Primary
                </Button>
                <Button variant="secondary" className="me-2">
                  Secondary
                </Button>
                <Button variant="success" className="me-2">
                  Success
                </Button>
                <Button variant="danger" className="me-2">
                  Danger
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6 mb-4">
            <Card>
              <Card.Header>Sample Card</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a sample card component using Bootstrap. Cards are
                  flexible content containers.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Card>
              <Card.Header>Sample Form</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
