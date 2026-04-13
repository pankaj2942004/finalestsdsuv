import React from 'react';
import '../styles/SecondaryPages.css';

const TendersNotification: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Tenders & Notification</h1>
        <p>Official Tenders and Procurement Notices</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Active Tenders</h2>
          <p>Find information about ongoing and upcoming tenders for procurement and services.</p>
          
          <div className="tenders-list">
            <div className="tender-item">
              <h3>Tender Details</h3>
              <p><strong>Category:</strong> Supplies & Services</p>
              <p><strong>Closing Date:</strong> To be updated</p>
              <p><strong>Status:</strong> New tenders will be posted here</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Notification Archives</h2>
          <p>Browse previous tenders and notifications.</p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Open Tenders</h3>
              <p>View all currently open tenders</p>
            </div>
            
            <div className="info-card">
              <h3>Closed Tenders</h3>
              <p>Archive of closed and completed tenders</p>
            </div>
            
            <div className="info-card">
              <h3>Bid Documents</h3>
              <p>Download tender documents and specifications</p>
            </div>
            
            <div className="info-card">
              <h3>Tender Guidelines</h3>
              <p>Rules and procedures for tender bidding</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TendersNotification;
