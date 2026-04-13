import React from 'react';
import '../styles/SecondaryPages.css';

const Alumni: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Alumni</h1>
        <p>Connect with Our Alumni Community</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Alumni Network</h2>
          <p>Stay connected with the university's thriving alumni community worldwide.</p>
          
          <div className="alumni-section">
            <div className="info-box">
              <h3>About the Alumni Association</h3>
              <p>Our alumni network comprises successful professionals across various fields and industries globally.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Alumni Benefits</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Networking Events</h3>
              <p>Regular reunions and networking programs</p>
            </div>
            
            <div className="info-card">
              <h3>Career Support</h3>
              <p>Mentoring and career guidance opportunities</p>
            </div>
            
            <div className="info-card">
              <h3>Alumni Directory</h3>
              <p>Connect with fellow graduates worldwide</p>
            </div>
            
            <div className="info-card">
              <h3>Giving Back</h3>
              <p>Support current students through donations</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Get Involved</h2>
          <ul className="involvement-list">
            <li>Join Alumni Association</li>
            <li>Attend Events and Reunions</li>
            <li>Participate as Guest Speaker</li>
            <li>Mentor Current Students</li>
            <li>Contribute to Alumni Fund</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Alumni Success Stories</h2>
          <p>Read inspiring stories of successful alumni making an impact in their fields.</p>
        </section>
      </div>
    </div>
  );
};

export default Alumni;
