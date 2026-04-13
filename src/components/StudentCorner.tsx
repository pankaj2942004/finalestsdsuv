import React from 'react';
import '../styles/SecondaryPages.css';

const StudentCorner: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Student Corner</h1>
        <p>A Resource Hub for Students</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Student Resources</h2>
          <p>The Student Corner provides comprehensive resources and support for all enrolled students.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Academic Support</h3>
              <p>Access to study materials, lecture notes, and academic guidance.</p>
            </div>
            
            <div className="info-card">
              <h3>Campus Life</h3>
              <p>Information about clubs, societies, and campus activities.</p>
            </div>
            
            <div className="info-card">
              <h3>Career Services</h3>
              <p>Career counseling, internship opportunities, and placement assistance.</p>
            </div>
            
            <div className="info-card">
              <h3>Student Welfare</h3>
              <p>Student grievance redressal, counseling, and support services.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Quick Links</h2>
          <ul className="quick-links">
            <li>Academic Calendar</li>
            <li>Course Registration</li>
            <li>Exam Schedule</li>
            <li>Hostel Information</li>
            <li>Library Services</li>
            <li>Student Help Desk</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StudentCorner;
