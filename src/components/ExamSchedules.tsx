import React from 'react';
import '../styles/SecondaryPages.css';

const ExamSchedules: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Exam Schedules</h1>
        <p>University Examination Timetables</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Examination Schedule</h2>
          <p>Find the official examination schedules for all semesters and courses.</p>
          
          <div className="schedule-section">
            <div className="info-box">
              <h3>Current Semester Exam Schedule</h3>
              <p><strong>Semester:</strong> Current Semester</p>
              <p><strong>Start Date:</strong> To be announced</p>
              <p><strong>End Date:</strong> To be announced</p>
              <p><strong>Status:</strong> Schedule will be updated soon</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Schedule by Stream</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Science Exams</h3>
              <p>Download Science stream exam schedule</p>
            </div>
            
            <div className="info-card">
              <h3>Arts Exams</h3>
              <p>Download Arts stream exam schedule</p>
            </div>
            
            <div className="info-card">
              <h3>Commerce Exams</h3>
              <p>Download Commerce stream exam schedule</p>
            </div>
            
            <div className="info-card">
              <h3>PG Exams</h3>
              <p>Download Postgraduate exam schedule</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Important Info</h2>
          <ul className="info-list">
            <li>Exam Date Sheet</li>
            <li>Exam Center Location</li>
            <li>Admit Card Download</li>
            <li>Exam Guidelines</li>
            <li>Result Declaration Date</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ExamSchedules;
