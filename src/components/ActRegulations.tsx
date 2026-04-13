import React from 'react';
import '../styles/SecondaryPages.css';

const ActRegulations: React.FC = () => {
  return (
    <div className="secondary-page">
      <div className="page-header">
        <h1>Act & Regulations</h1>
        <p>University Laws and Academic Regulations</p>
      </div>
      
      <div className="page-content">
        <section className="content-section">
          <h2>University Acts and Regulations</h2>
          <p>Important legal documents and regulatory framework governing the university.</p>
          
          <div className="regulation-grid">
            <div className="regulation-card">
              <h3>Establishment Act</h3>
              <p>The founding act establishing the university</p>
            </div>
            
            <div className="regulation-card">
              <h3>Academic Regulations</h3>
              <p>Rules and procedures for academic programs</p>
            </div>
            
            <div className="regulation-card">
              <h3>Statutes</h3>
              <p>Governance statutes and constitutional framework</p>
            </div>
            
            <div className="regulation-card">
              <h3>Ordinances</h3>
              <p>Detailed ordinances governing university operations</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Key Documents</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>UP State Universities Act</h3>
              <p>Applicable state legislation</p>
            </div>
            
            <div className="info-card">
              <h3>UGC Regulations</h3>
              <p>University Grants Commission guidelines</p>
            </div>
            
            <div className="info-card">
              <h3>Examination Regulations</h3>
              <p>Rules for examinations and assessments</p>
            </div>
            
            <div className="info-card">
              <h3>Degree Statutes</h3>
              <p>Regulations for degree award and conferment</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Downloads</h2>
          <ul className="document-list">
            <li>University Act (PDF)</li>
            <li>Academic Statutes (PDF)</li>
            <li>Ordinances (PDF)</li>
            <li>Regulations (PDF)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ActRegulations;
