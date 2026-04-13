import React from 'react';
import '../styles/SecondaryPages.css';

const Convocation: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Convocation</h1>
        <p>University Convocation & Ceremonies</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Convocation Details</h2>
          <p>This page provides information about university convocation ceremonies, including convocation dates, details about proceedings, and awards.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Upcoming Convocation</h3>
              <p>Details about the next convocation ceremony will be updated soon.</p>
            </div>
            
            <div className="info-card">
              <h3>Convocation Gallery</h3>
              <p>View photos and videos from previous convocation ceremonies.</p>
            </div>
            
            <div className="info-card">
              <h3>Medal & Awards</h3>
              <p>Information about medals and awards distributed during convocation.</p>
            </div>
            
            <div className="info-card">
              <h3>Convocation Quotation</h3>
              <p>Inspirational quotes from convocation speeches and addresses.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Important Documents</h2>
          <ul className="document-list">
            <li>Convocation Schedule</li>
            <li>Medal Winners List</li>
            <li>Convocation Photos</li>
            <li>Video Archives</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Convocation;
