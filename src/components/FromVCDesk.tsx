import React from 'react';
import '../styles/SecondaryPages.css';

const FromVCDesk: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>From VC Desk</h1>
        <p>Messages and Updates from the Vice Chancellor</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Vice Chancellor's Office</h2>
          <p>Read important messages, announcements, and updates from the Vice Chancellor.</p>
          
          <div className="vc-section">
            <div className="vc-message">
              <h3>Latest Message from VC</h3>
              <p><strong>Date:</strong> Latest message coming soon</p>
              <p><strong>Topic:</strong> University updates and initiatives</p>
              <p><strong>Message:</strong> Important updates and announcements from the Vice Chancellor's office will be displayed here.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>VC Messages & Circulars</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Official Circulars</h3>
              <p>Important circulars and notices from the VC's office</p>
            </div>
            
            <div className="info-card">
              <h3>Press Releases</h3>
              <p>Media statements and official press releases</p>
            </div>
            
            <div className="info-card">
              <h3>VC's Blog</h3>
              <p>Thoughts and insights from the Vice Chancellor</p>
            </div>
            
            <div className="info-card">
              <h3>News & Updates</h3>
              <p>University news and important updates</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Archive</h2>
          <p>Access previous messages and circulars from the VC's office.</p>
        </section>
      </div>
    </div>
  );
};

export default FromVCDesk;
