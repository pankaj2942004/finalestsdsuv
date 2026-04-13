import React from 'react';
import '../styles/SecondaryPages.css';

const Announcements: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Announcements</h1>
        <p>University Announcements and Updates</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Latest Announcements</h2>
          <p>Stay informed with the latest announcements from the university.</p>
          
          <div className="announcements-list">
            <div className="announcement-item">
              <h3>Announcement</h3>
              <p><strong>Date:</strong> New announcements coming soon</p>
              <p><strong>Category:</strong> Academic / Administrative</p>
              <p><strong>Details:</strong> Important updates will be shared here</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Announcement Categories</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Academic Announcements</h3>
              <p>Exam schedules, syllabus updates, course details</p>
            </div>
            
            <div className="info-card">
              <h3>Administrative</h3>
              <p>Policy changes, holiday notifications, deadlines</p>
            </div>
            
            <div className="info-card">
              <h3>Campus Life</h3>
              <p>Events, cultural programs, sports activities</p>
            </div>
            
            <div className="info-card">
              <h3>Recruitment</h3>
              <p>Job openings, recruitment drives, career fairs</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Archive</h2>
          <p>Access previous announcements and historical records.</p>
        </section>
      </div>
    </div>
  );
};

export default Announcements;
