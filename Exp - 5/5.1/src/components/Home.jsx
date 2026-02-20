import React from "react";

const Home = () => {
  return (
    <div className="p-5 text-center bg-white rounded shadow border-bottom border-5 border-primary">
      <h2 className="text-primary display-4 fw-bold mb-3 mt-4">
        Welcome To My World
      </h2>
      <p className="lead text-secondary mb-5">
        Exploring the cutting edge of web performance and user experience.
      </p>

      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <p className="fs-5 text-dark mb-4">
            Hi, I'm Shruti. My goal is to build faster, smarter, and more
            efficient web applications that leave a lasting impact.
          </p>
          <div className="p-4 bg-light rounded text-start shadow-sm border">
            <h3 className="h5 text-primary">Performance at its Core</h3>
            <p className="text-muted">
              Experiment 5.1 focuses on modularity through lazy loading. By
              loading components only when they're needed, we ensure a
              lightning-fast initial experience for our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
