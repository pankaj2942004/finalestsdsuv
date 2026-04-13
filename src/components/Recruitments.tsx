import React from 'react';
import '../styles/SecondaryPages.css';

const Recruitments: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Recruitments</h1>
        <p>Faculty and Staff Recruitment Information</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Current Openings</h2>
          <p>View all current job openings and recruitment notices.</p>
          
          <div className="recruitment-list">
            <div className="recruitment-item">
              <h3>Faculty Positions</h3>
              <p><strong>Department:</strong> Various</p>
              <p><strong>Status:</strong> Applications open soon</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Recruitment Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Faculty Recruitment</h3>
              <p>Positions for Assistant Professor, Associate Professor, and Professor</p>
            </div>
            
            <div className="info-card">
              <h3>Administrative Staff</h3>
              <p>Vacancies in administrative and support functions</p>
            </div>
            
            <div className="info-card">
              <h3>Technical Staff</h3>
              <p>Technical and research support positions</p>
            </div>
            
            <div className="info-card">
              <h3>Application Procedure</h3>
              <p>Guidelines for applying to recruitment positions</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Important Links</h2>
          <ul className="quick-links">
            <li>Faculty Recruitment Guidelines</li>
            <li>Application Form</li>
            <li>Selected Candidates List</li>
            <li>Interview Schedule</li>
            <li>Recruitment Notifications Archive</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Recruitments;
