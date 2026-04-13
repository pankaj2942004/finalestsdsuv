import React from 'react';
import '../styles/SecondaryPages.css';

const CoursesOffered: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Courses Offered</h1>
        <p>Explore Our Academic Programs</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Available Programs</h2>
          <p>The university offers a wide range of undergraduate and postgraduate programs.</p>
          
          <div className="courses-grid">
            <div className="course-card">
              <h3>Science Courses</h3>
              <p>Physics, Chemistry, Mathematics, Biology, and related disciplines.</p>
            </div>
            
            <div className="course-card">
              <h3>Arts Courses</h3>
              <p>History, Geography, Political Science, English, and humanities.</p>
            </div>
            
            <div className="course-card">
              <h3>Commerce Courses</h3>
              <p>Accounting, Economics, Business Studies, and commerce disciplines.</p>
            </div>
            
            <div className="course-card">
              <h3>Professional Courses</h3>
              <p>Specialized and professional degree programs.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Program Details</h2>
          <ul className="program-list">
            <li>Bachelor of Science (B.Sc.)</li>
            <li>Bachelor of Arts (B.A.)</li>
            <li>Bachelor of Commerce (B.Com.)</li>
            <li>Master of Science (M.Sc.)</li>
            <li>Master of Arts (M.A.)</li>
            <li>Master of Commerce (M.Com.)</li>
            <li>PhD and Research Programs</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CoursesOffered;
