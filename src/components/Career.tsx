import React from 'react';
import '../styles/SecondaryPages.css';

const Career: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Career Services</h1>
        <p>Placement and Career Development</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Career Opportunities</h2>
          <p>The university provides comprehensive career support and placement assistance to all students.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Campus Placements</h3>
              <p>Support from top-tier companies recruiting on campus</p>
            </div>
            
            <div className="info-card">
              <h3>Career Counseling</h3>
              <p>Expert guidance for career planning and development</p>
            </div>
            
            <div className="info-card">
              <h3>Internship Programs</h3>
              <p>Opportunities for practical experience in industry</p>
            </div>
            
            <div className="info-card">
              <h3>Alumni Network</h3>
              <p>Leverage alumni connections for career growth</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Placement Statistics</h2>
          <div className="statistics">
            <p><strong>Placement Rate:</strong> Updated annually</p>
            <p><strong>Average Package:</strong> Varies by discipline</p>
            <p><strong>Top Recruiters:</strong> Major companies and organizations</p>
          </div>
        </section>

        <section className="content-section">
          <h2>Resources</h2>
          <ul className="resource-list">
            <li>Resume Building Guide</li>
            <li>Interview Preparation</li>
            <li>Job Listings</li>
            <li>Company Profiles</li>
            <li>Alumni Success Stories</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Career;
