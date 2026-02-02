import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <i className="bi bi-bootstrap"></i> MyApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <NavDropdown title="Products" id="products-dropdown">
                <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
                <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
                <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#all-products">
                  All Products
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>Responsive Navigation Bar Using Component Library</h1>
        <p className="lead">
          This navigation bar is fully responsive and will collapse into a
          hamburger menu on smaller screens.
        </p>

        <div className="mt-4">
          <h3>Features:</h3>
          <ul>
            <li>Responsive design that adapts to different screen sizes</li>
            <li>Collapsible menu for mobile devices</li>
            <li>Dropdown menus for nested navigation</li>
            <li>Bootstrap styling for consistent appearance</li>
            <li>Sticky navigation that stays at the top while scrolling</li>
          </ul>
        </div>

        <div className="mt-5 p-4 bg-light rounded">
          <h4>Try It Out</h4>
          <p>
            Resize your browser window to see the responsive behavior. On
            smaller screens, the navigation items will collapse into a hamburger
            menu.
          </p>
        </div>
      </Container>
    </>
  );
}

export default App;
