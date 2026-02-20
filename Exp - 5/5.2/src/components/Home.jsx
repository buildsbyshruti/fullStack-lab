import React from "react";

const Home = () => {
  return (
    <div className="p-5 text-dark bg-white rounded-4 shadow-lg border-0 overflow-hidden position-relative animate-fade-in">
      <div
        className="row align-items-center position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="col-md-7">
          <h2 className="display-4 fw-bold text-primary mb-3">
            Shruti's Digital Canvas
          </h2>
          <p className="fs-4 fw-light text-muted mb-4">
            Crafting the next generation of web applications with precision and
            performance in mind.
          </p>
          <div className="d-flex gap-3 mt-2">
            <div className="badge bg-primary fs-6 px-4 py-3 rounded-pill shadow-sm">
              Full Stack Developer
            </div>
            <div className="badge bg-info fs-6 px-4 py-3 rounded-pill shadow-sm text-dark">
              UI/UX Enthusiast
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-5 mt-md-0">
          <div className="p-4 bg-white rounded-4 shadow-md border border-light-subtle shadow-lg">
            <h4 className="h5 text-primary mb-3 text-uppercase fw-bold">
              Current Focus
            </h4>
            <p className="text-secondary small">
              This experiment (5.2) showcases{" "}
              <strong>Route-Based Lazy Loading</strong>, which is a critical
              performance strategy in modern Single Page Applications.
            </p>
            <hr className="my-3 opacity-25" />
            <p className="mb-0 text-muted smaller">
              Building efficient systems, one route at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
