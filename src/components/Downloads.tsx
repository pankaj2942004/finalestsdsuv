import React from 'react';
import '../styles/SecondaryPages.css';

const Downloads: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Downloads</h1>
        <p>Important Documents and Resources</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Available Resources</h2>
          <p>Download important documents, forms, and resources from the university.</p>
          
          <div className="downloads-grid">
            <div className="download-card">
              <h3>Academic Documents</h3>
              <ul className="download-list">
                <li>Syllabus</li>
                <li>Course Notes</li>
                <li>Question Papers</li>
                <li>Study Materials</li>
              </ul>
            </div>
            
            <div className="download-card">
              <h3>Forms & Applications</h3>
              <ul className="download-list">
                <li>Admission Form</li>
                <li>Scholarship Form</li>
                <li>Leave Application</li>
                <li>Certificate Request</li>
              </ul>
            </div>
            
            <div className="download-card">
              <h3>Administrative</h3>
              <ul className="download-list">
                <li>Regulations</li>
                <li>Guidelines</li>
                <li>Policies</li>
                <li>Rules & Procedures</li>
              </ul>
            </div>
            
            <div className="download-card">
              <h3>Publications</h3>
              <ul className="download-list">
                <li>University Prospectus</li>
                <li>Annual Report</li>
                <li>Journal Articles</li>
                <li>Research Papers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Quick Downloads</h2>
          <ul className="quick-download-list">
            <li>Academic Calendar</li>
            <li>Exam Schedule</li>
            <li>Hostel Rules</li>
            <li>Fee Structure</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Downloads;
