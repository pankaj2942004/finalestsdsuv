import React from 'react';
import '../styles/SecondaryPages.css';

const VacancyPositions: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Vacancy Positions</h1>
        <p>Current Job Openings at the University</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Available Positions</h2>
          <p>Explore career opportunities at our university.</p>
          
          <div className="vacancy-section">
            <div className="vacancy-alert">
              <h3>Current Vacancies</h3>
              <p>Updated vacancy listings will appear here</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Position Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Assistant Professor</h3>
              <p>Faculty positions for Assistant Professors across various departments</p>
            </div>
            
            <div className="info-card">
              <h3>Associate Professor</h3>
              <p>Senior faculty positions for experienced educators</p>
            </div>
            
            <div className="info-card">
              <h3>Professor</h3>
              <p>Leadership positions for accomplished academics</p>
            </div>
            
            <div className="info-card">
              <h3>Librarian/Associate Librarian</h3>
              <p>Library and information services positions</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Other Positions</h2>
          <ul className="positions-list">
            <li>Administrative Staff</li>
            <li>Technical Support</li>
            <li>Research Associates</li>
            <li>Support Staff</li>
            <li>Contract-based Positions</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>How to Apply</h2>
          <ol className="application-steps">
            <li>Check eligibility criteria</li>
            <li>Download application form</li>
            <li>Submit required documents</li>
            <li>Wait for interview notification</li>
            <li>Attend interview</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default VacancyPositions;
