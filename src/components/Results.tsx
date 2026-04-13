import React from 'react';
import '../styles/SecondaryPages.css';

const Results: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Results</h1>
        <p>Check Your Examination Results</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Results Information</h2>
          <p>Access your examination results and detailed performance reports.</p>
          
          <div className="result-section">
            <div className="info-box">
              <h3>How to Check Results</h3>
              <ol className="steps-list">
                <li>Enter your roll number</li>
                <li>Select the semester/year</li>
                <li>Click on 'Check Results'</li>
                <li>View and download your result card</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Result Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Semester Results</h3>
              <p>Results for ongoing semester examinations</p>
            </div>
            
            <div className="info-card">
              <h3>Final Results</h3>
              <p>Final degree results and transcripts</p>
            </div>
            
            <div className="info-card">
              <h3>Revaluation Results</h3>
              <p>Results after revaluation/re-evaluation process</p>
            </div>
            
            <div className="info-card">
              <h3>Provisional Results</h3>
              <p>Provisional results pending final approval</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Important Links</h2>
          <ul className="quick-links">
            <li>Check Results Online</li>
            <li>Download Result Card</li>
            <li>Merit List</li>
            <li>Grade Description</li>
            <li>Revaluation Information</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Results;
