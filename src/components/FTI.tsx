import React from 'react';
import '../styles/SecondaryPages.css';

const FTI: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>F.T.I</h1>
        <p>Faculty Training and Innovation</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Faculty Training Initiative</h2>
          <p>Programs and initiatives for faculty professional development and innovation.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Training Programs</h3>
              <p>Regular training workshops for faculty development</p>
            </div>
            
            <div className="info-card">
              <h3>Innovation Lab</h3>
              <p>Support for research and innovation projects</p>
            </div>
            
            <div className="info-card">
              <h3>Certification Courses</h3>
              <p>Professional certification programs for faculty</p>
            </div>
            
            <div className="info-card">
              <h3>Mentorship Program</h3>
              <p>Mentoring and guidance from senior faculty</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Programs Offered</h2>
          <ul className="programs-list">
            <li>Pedagogical Training</li>
            <li>Research Methodology</li>
            <li>Digital Learning Tools</li>
            <li>Publication Support</li>
            <li>Grant Writing</li>
            <li>International Collaborations</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Registration</h2>
          <p>Faculty members can register for upcoming training and innovation programs.</p>
        </section>
      </div>
    </div>
  );
};

export default FTI;
