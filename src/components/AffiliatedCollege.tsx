import React from 'react';
import '../styles/SecondaryPages.css';

const AffiliatedCollege: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Affiliated Colleges</h1>
        <p>List of Colleges Affiliated with the University</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>Affiliated Institutions</h2>
          <p>The university is affiliated with colleges offering diverse academic programs.</p>
          
          <div className="college-categories">
            <div className="category">
              <h3>Government Colleges</h3>
              <p>Government-run institutions affiliated with the university</p>
            </div>
            
            <div className="category">
              <h3>Private Colleges</h3>
              <p>Private educational institutions with university affiliation</p>
            </div>
            
            <div className="category">
              <h3>Aided Colleges</h3>
              <p>Grant-in-aid colleges affiliated with the university</p>
            </div>
            
            <div className="category">
              <h3>PG Centers</h3>
              <p>Postgraduate centers offering advanced degree programs</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>College Directory</h2>
          <table className="college-table">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Affiliated Colleges</td>
                <td>Various</td>
                <td>Government/Private/Aided</td>
                <td>Contact Information</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-section">
          <h2>Resources</h2>
          <ul className="resource-list">
            <li>Complete List of Affiliated Colleges</li>
            <li>College Recognition Status</li>
            <li>Affiliation Certificates</li>
            <li>College Inspection Reports</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AffiliatedCollege;
