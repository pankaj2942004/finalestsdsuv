import React from 'react';
import '../styles/SecondaryPages.css';

const AffiliationAffiliatedColleges: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Affiliation & Affiliated Colleges</h1>
        <p>Information About Affiliated Institutions</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Affiliated Colleges</h2>
          <p>The university is affiliated with numerous colleges across the region.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>Government Colleges</h3>
              <p>Government-run affiliated colleges offering various degree programs.</p>
            </div>
            
            <div className="college-card">
              <h3>Private Colleges</h3>
              <p>Private institutions affiliated with the university.</p>
            </div>
            
            <div className="college-card">
              <h3>Aided Colleges</h3>
              <p>Grant-in-aid colleges affiliated with the university.</p>
            </div>
            
            <div className="college-card">
              <h3>Postgraduate Centers</h3>
              <p>Colleges offering postgraduate programs.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Affiliation Process</h2>
          <div className="info-box">
            <h3>How to Apply for Affiliation</h3>
            <p>Information about the college affiliation process and requirements.</p>
            <ul className="process-list">
              <li>Eligibility Criteria</li>
              <li>Application Procedure</li>
              <li>Required Documentation</li>
              <li>Approval Process</li>
              <li>Annual Renewal Process</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Key Documents</h2>
          <ul className="document-list">
            <li>List of Affiliated Colleges</li>
            <li>Affiliation Guidelines</li>
            <li>Recognition Certificate</li>
            <li>Academic Programs Offered</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AffiliationAffiliatedColleges;
