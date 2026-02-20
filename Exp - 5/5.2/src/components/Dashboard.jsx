import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 text-dark bg-white rounded-5 shadow-lg border-0 overflow-hidden position-relative border-start border-5 border-primary">
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
        <div>
          <h2 className="display-6 fw-bold text-primary mb-1 mt-3">Professional Dashboard</h2>
          <p className="text-muted lead fw-medium mb-1">Shruti Mittal</p>
        </div>
        <div className="text-end">
          <div className="badge bg-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
            Active Project
          </div>
        </div>
      </div>
      
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">Initial Bundle Size</h4>
            <span className="display-6 fw-bold text-primary mb-0">-40%</span>
            <p className="text-secondary small mt-2">Reduction through 5.2</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">Load Latency</h4>
            <span className="display-6 fw-bold text-info mb-0">98ms</span>
            <p className="text-secondary small mt-2">Optimized with 5.2</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-light rounded-4 shadow-sm h-100 text-center border">
            <h4 className="h6 text-muted mb-3 text-uppercase fw-bold ls-wide">User Retention</h4>
            <span className="display-6 fw-bold text-success mb-0">+25%</span>
            <p className="text-secondary small mt-2">Improved Performance</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-primary bg-opacity-10 rounded-4 shadow-sm border border-primary border-opacity-25 mt-4">
        <h3 className="h5 fw-bold text-primary mb-3">Project Summary</h3>
        <p className="text-muted smaller mb-0">
          This dashboard (Experiment 5.2) demonstrates route-based optimization in 
          action. This ensures that the components for the Dashboard route are 
          only loaded when this tab is active, drastically improving initial page 
          performance.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
