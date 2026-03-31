import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";

const delayImport = (importFunc) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), 1000);
  });

const Home = lazy(() => delayImport(() => import("./src/components/Home.jsx")));
const Dashboard = lazy(() =>
  delayImport(() => import("./src/components/Dashboard.jsx")),
);
const Profile = lazy(() =>
  delayImport(() => import("./src/components/Profile.jsx")),
);
const About = lazy(() =>
  delayImport(() => import("./src/components/About.jsx")),
);

const LoadingFallback = () => (
  <div className="d-flex flex-column justify-content-center align-items-center p-5">
    <Spinner animation="grow" role="status" variant="secondary" />
    <span className="mt-2 text-muted fw-bold">Loading...</span>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-white">
            Exp 5.2: Route Lazy Loading
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-medium">
              <Nav.Link as={Link} to="/" className="text-white hover-underline">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard"
                className="text-white hover-underline"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
                className="text-white hover-underline"
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-white hover-underline"
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 p-4 border rounded bg-white shadow-sm">
        <header className="mb-4 text-center">
          <h1 className="display-6 mt-3">
            Experiment 5.2 - Route Performance Optimization
          </h1>
        </header>

        {/* Wrapping routes inside Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>

        <footer className="mt-5 pt-3 border-top text-center text-muted">
          <p>
            This experiment highlights the benefits of Route-Based Lazy Loading
            in Spas.
          </p>
        </footer>
      </Container>
    </Router>
  );
};

export default App;
