import React from 'react';
import '../styles/SecondaryPages.css';

const OldSyllabus: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Old Syllabus</h1>
        <p>Previous Curriculum and Course Content</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Download Previous Syllabi</h2>
          <p>Access syllabi from previous academic years for reference.</p>
          
          <div className="syllabus-grid">
            <div className="syllabus-card">
              <h3>Science Syllabus</h3>
              <p>Previous syllabi for Science undergraduate programs</p>
            </div>
            
            <div className="syllabus-card">
              <h3>Arts Syllabus</h3>
              <p>Previous syllabi for Arts undergraduate programs</p>
            </div>
            
            <div className="syllabus-card">
              <h3>Commerce Syllabus</h3>
              <p>Previous syllabi for Commerce undergraduate programs</p>
            </div>
            
            <div className="syllabus-card">
              <h3>Postgraduate Syllabus</h3>
              <p>Previous syllabi for postgraduate programs</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Syllabus Archive</h2>
          <div className="archive-info">
            <p>Browse and download syllabi from previous academic years:</p>
            <ul className="year-list">
              <li>2022-2023 Academic Year</li>
              <li>2021-2022 Academic Year</li>
              <li>2020-2021 Academic Year</li>
              <li>Earlier Syllabi</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Note</h2>
          <p>For current syllabi, please visit the Updated Syllabus section or contact the respective department.</p>
        </section>
      </div>
    </div>
  );
};

export default OldSyllabus;
