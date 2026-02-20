import React from "react";

const Contact = () => {
  return (
    <div className="p-5 bg-white rounded shadow border-start border-5 border-secondary">
      <h2 className="text-secondary fw-bold mb-4">Get In Touch</h2>
      <p className="lead mb-4">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <div className="card border-0 bg-light p-4 mb-3">
        <h3 className="h5 text-dark">Contact Information</h3>
        <p className="text-muted mb-0">Email:</p>
        <a
          href="mailto:shrutimittal1518@gmail.com"
          className="text-primary mb-3 text-decoration-none"
        >
          shrutimittal1518@gmail.com
        </a>

        <p className="text-muted mb-2 mt-2 font-italic">
          "Great things in business are never done by one person. They're done
          by a team of people."
          <br />— Steve Jobs
        </p>
      </div>
      <p className="text-muted small">
        Whether you have a question about experiment 5.1 or just want to say hi,
        my inbox is always open!
      </p>
    </div>
  );
};

export default Contact;
