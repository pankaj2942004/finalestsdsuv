import React from 'react';
import '../styles/SecondaryPages.css';

const AwardsScholarships: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Awards & Scholarships</h1>
        <p>Financial Aid and Recognition Programs</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Scholarship Opportunities</h2>
          <p>The university offers various scholarships and awards to meritorious and deserving students.</p>
          
          <div className="scholarship-grid">
            <div className="scholarship-card">
              <h3>Merit Scholarships</h3>
              <p>Awards based on academic excellence</p>
            </div>
            
            <div className="scholarship-card">
              <h3>Need-Based Scholarships</h3>
              <p>Financial aid for students with financial constraints</p>
            </div>
            
            <div className="scholarship-card">
              <h3>Sports Scholarships</h3>
              <p>Awards for outstanding sports performers</p>
            </div>
            
            <div className="scholarship-card">
              <h3>Special Category Awards</h3>
              <p>Awards for SC/ST/EBC and other categories</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Award Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Academic Awards</h3>
              <p>Recognition for academic achievements</p>
            </div>
            
            <div className="info-card">
              <h3>Faculty Awards</h3>
              <p>Awards for distinguished faculty members</p>
            </div>
            
            <div className="info-card">
              <h3>Research Awards</h3>
              <p>Recognition for outstanding research</p>
            </div>
            
            <div className="info-card">
              <h3>Student Awards</h3>
              <p>Various student recognition programs</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>How to Apply</h2>
          <ul className="application-list">
            <li>Check Eligibility Criteria</li>
            <li>Download Application Form</li>
            <li>Submit Documents</li>
            <li>Follow-up Process</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AwardsScholarships;
