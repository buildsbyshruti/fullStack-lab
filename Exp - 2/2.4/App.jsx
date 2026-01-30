import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          background:
            "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            🌲 Forest UI
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

      <div
        style={{
          background:
            "linear-gradient(to bottom, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)",
          minHeight: "100vh",
          paddingBottom: "50px",
        }}
      >
        <Container className="mt-0 pt-5">
          <h1
            style={{
              color: "#047857",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              fontSize: "2.5rem",
              marginBottom: "20px",
            }}
          >
            🌿 Responsive Navigation Bar Using Component Library
          </h1>
          <p className="lead" style={{ color: "#065f46", fontWeight: "500" }}>
            This navigation bar is fully responsive and will collapse into a
            hamburger menu on smaller screens.
          </p>

          <div
            className="mt-4"
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "20px",
              border: "3px solid #10b981",
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
            }}
          >
            <h3
              style={{
                color: "#059669",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              ✨ Features:
            </h3>
            <ul
              style={{ color: "#047857", fontSize: "1.1rem", lineHeight: "2" }}
            >
              <li>Responsive design that adapts to different screen sizes</li>
              <li>Collapsible menu for mobile devices</li>
              <li>Dropdown menus for nested navigation</li>
              <li>Bootstrap styling for consistent appearance</li>
              <li>Sticky navigation that stays at the top while scrolling</li>
            </ul>
          </div>

          <div
            className="mt-5 p-4 rounded"
            style={{
              background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
              border: "3px solid #34d399",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(52, 211, 153, 0.2)",
            }}
          >
            <h4 style={{ color: "#065f46", fontWeight: "bold" }}>
              🚀 Try It Out
            </h4>
            <p style={{ color: "#047857", fontSize: "1.05rem" }}>
              Resize your browser window to see the responsive behavior. On
              smaller screens, the navigation items will collapse into a
              hamburger menu.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
