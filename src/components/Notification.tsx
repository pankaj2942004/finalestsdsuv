import React from 'react';
import '../styles/SecondaryPages.css';

const Notification: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Notification</h1>
        <p>Official University Notifications and Announcements</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Latest Notifications</h2>
          <p>Stay updated with all official university announcements and notifications.</p>
          
          <div className="notification-list">
            <div className="notification-item">
              <h3>Notification</h3>
              <p><strong>Date:</strong> Latest notifications coming soon</p>
              <p><strong>Category:</strong> Academic / Administrative</p>
              <p><strong>Description:</strong> Important updates will be posted here</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Notification Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Academic Notifications</h3>
              <p>Related to courses, exams, and academics</p>
            </div>
            
            <div className="info-card">
              <h3>Administrative Notifications</h3>
              <p>General administration and policy updates</p>
            </div>
            
            <div className="info-card">
              <h3>Event Notifications</h3>
              <p>Updates about campus events and activities</p>
            </div>
            
            <div className="info-card">
              <h3>Urgent Notices</h3>
              <p>Urgent and time-sensitive notifications</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Archive</h2>
          <p>Browse notification archives from previous periods.</p>
        </section>
      </div>
    </div>
  );
};

export default Notification;
