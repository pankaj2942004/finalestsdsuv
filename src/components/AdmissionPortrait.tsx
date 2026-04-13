import React from 'react';
import '../styles/AdmissionPortrait.css';

interface AdmissionPortraitProps {
  language: 'en' | 'hi';
}

const AdmissionPortrait: React.FC<AdmissionPortraitProps> = ({ language }) => {
  return (
    <div className="admission-portrait-container">
      <div className="portrait-frame">
        <img 
          src="/img/portrait.jpg" 
          alt="Admission Portrait" 
          className="portrait-image"
        />
      </div>
    </div>
  );
};

export default AdmissionPortrait;
