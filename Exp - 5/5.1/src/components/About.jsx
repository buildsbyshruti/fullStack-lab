import React from "react";

const About = () => {
  return (
    <div className="p-5 bg-white rounded shadow border-start border-5 border-info">
      <h2 className="text-info fw-bold mb-3">About Me</h2>
      <div className="mb-4">
        <h3 className="h4 text-dark">Shruti Mittal</h3>
        <p className="text-muted mb-1">Section: 23AML-3A</p>
        <p className="text-muted mb-1">Full Stack-2</p>
      </div>
      <p className="lead text-secondary">
        I am a passionate developer currently exploring performance optimization
        in modern web applications.
      </p>
      <p>
        Using <code>React.lazy()</code> and <code>Suspense</code>, I am
        implementing efficient route-based loading to create seamless and fast
        user experiences.
      </p>
    </div>
  );
};

export default About;
