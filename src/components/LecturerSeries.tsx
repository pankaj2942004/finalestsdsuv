import React from 'react';
import '../styles/SecondaryPages.css';

const LecturerSeries: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Lecturer Series</h1>
        <p>Expert Lectures and Seminars</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Guest Lectures and Series</h2>
          <p>Explore the university's lecturer series featuring renowned experts and scholars.</p>
          
          <div className="lecture-grid">
            <div className="lecture-card">
              <h3>Featured Lectures</h3>
              <p><strong>Speaker:</strong> Expert Scholars</p>
              <p><strong>Topic:</strong> Latest Research and Innovations</p>
            </div>
            
            <div className="lecture-card">
              <h3>Department Seminars</h3>
              <p><strong>Frequency:</strong> Monthly</p>
              <p><strong>Topics:</strong> Domain-specific research and discussions</p>
            </div>
            
            <div className="lecture-card">
              <h3>Industry Expert Talks</h3>
              <p><strong>Focus:</strong> Industry trends and career guidance</p>
              <p><strong>Target:</strong> Students and Faculty</p>
            </div>
            
            <div className="lecture-card">
              <h3>Distinguished Lectures</h3>
              <p><strong>Guest:</strong> Eminent personalities</p>
              <p><strong>Open to:</strong> University community</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Lecture Archives</h2>
          <ul className="archive-list">
            <li>Video Recordings</li>
            <li>Lecture Notes</li>
            <li>Speaker Profiles</li>
            <li>Q&A Sessions</li>
            <li>Future Schedule</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LecturerSeries;
