import React from 'react';
import '../styles/SecondaryPages.css';

const UGCESamadhanPortal: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>UGC e-Samadhan Portal</h1>
        <p>Grievance Redressal Through UGC Portal</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>About the Portal</h2>
          <p>The UGC e-Samadhan Portal is the official grievance redressal mechanism for higher education institutions in India.</p>
          
          <div className="portal-info">
            <div className="info-box">
              <h3>Purpose</h3>
              <p>To provide a transparent and efficient system for addressing student grievances and complaints against higher education institutions.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>How to File a Grievance</h2>
          <ol className="process-steps">
            <li>Visit the official UGC e-Samadhan Portal</li>
            <li>Register as a new user or log in</li>
            <li>Click on 'File a Grievance'</li>
            <li>Fill in the required details and documents</li>
            <li>Submit the grievance</li>
            <li>Track the status of your grievance</li>
          </ol>
        </section>

        <section className="content-section">
          <h2>Important Information</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Eligibility</h3>
              <p>Students and stakeholders of higher education institutions</p>
            </div>
            
            <div className="info-card">
              <h3>Types of Grievances</h3>
              <p>Academic, admission, fee-related, and institutional issues</p>
            </div>
            
            <div className="info-card">
              <h3>Response Time</h3>
              <p>Grievances are resolved within specified timeframe</p>
            </div>
            
            <div className="info-card">
              <h3>Appeal</h3>
              <p>Option to appeal if not satisfied with resolution</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>External Link</h2>
          <p>To access the official UGC e-Samadhan Portal, visit: <a href="https://www.ugcsamadhan.in/" target="_blank" rel="noopener noreferrer">UGC e-Samadhan</a></p>
        </section>
      </div>
    </div>
  );
};

export default UGCESamadhanPortal;
