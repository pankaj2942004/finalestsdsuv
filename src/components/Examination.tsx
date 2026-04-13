import React from 'react';
import '../styles/SecondaryPages.css';

const Examination: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Examination</h1>
        <p>Information About University Exams</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Examination Details</h2>
          <p>Find comprehensive information about university examination schedules, procedures, and regulations.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Exam Schedule</h3>
              <p>View the current and upcoming examination schedule</p>
            </div>
            
            <div className="info-card">
              <h3>Exam Guidelines</h3>
              <p>Rules and regulations for university examinations</p>
            </div>
            
            <div className="info-card">
              <h3>Important Dates</h3>
              <p>Key dates for exam registration and completion</p>
            </div>
            
            <div className="info-card">
              <h3>Exam Centers</h3>
              <p>List of official examination centers</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Exam Resources</h2>
          <ul className="resource-list">
            <li>Exam Time Table</li>
            <li>Question Papers</li>
            <li>Model Papers</li>
            <li>Exam Procedures</li>
            <li>Exam Fee Information</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Examination;
