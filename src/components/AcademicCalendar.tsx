import React from 'react';
import '../styles/SecondaryPages.css';

const AcademicCalendar: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Academic Calendar</h1>
        <p>University Academic Schedule and Important Dates</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Academic Year Calendar</h2>
          <p>The official academic calendar for the current and upcoming academic years.</p>
          
          <div className="calendar-info">
            <div className="info-box">
              <h3>Current Academic Year</h3>
              <p><strong>Academic Year:</strong> 2024-2025</p>
              <p><strong>Session Start:</strong> July 2024</p>
              <p><strong>Session End:</strong> June 2025</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Important Dates</h2>
          
          <div className="dates-grid">
            <div className="date-card">
              <h3>Admission</h3>
              <p><strong>Start Date:</strong> Coming Soon</p>
              <p><strong>End Date:</strong> Coming Soon</p>
            </div>
            
            <div className="date-card">
              <h3>Classes</h3>
              <p><strong>Start Date:</strong> Coming Soon</p>
              <p><strong>End Date:</strong> Coming Soon</p>
            </div>
            
            <div className="date-card">
              <h3>Examinations</h3>
              <p><strong>Start Date:</strong> Coming Soon</p>
              <p><strong>End Date:</strong> Coming Soon</p>
            </div>
            
            <div className="date-card">
              <h3>Results</h3>
              <p><strong>Declaration Date:</strong> Coming Soon</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Calendar Downloads</h2>
          <ul className="download-list">
            <li>Academic Calendar 2024-2025 (PDF)</li>
            <li>Academic Calendar 2025-2026 (PDF)</li>
            <li>Holiday Calendar</li>
            <li>Important Dates List</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AcademicCalendar;
