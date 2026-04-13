import React from 'react';
import '../styles/DetailPage.css';

interface CollegeAffiliationPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const CollegeAffiliationPage: React.FC<CollegeAffiliationPageProps> = ({ language, onBack }) => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{language === 'en' ? 'College Affiliation Portal' : 'महाविद्यालय संबद्धता पोर्टल'}</h1>
      </div>
      
      <div className="detail-content">
        <div className="content-section">
          <h2>{language === 'en' ? 'About College Affiliation' : 'महाविद्यालय संबद्धता के बारे में'}</h2>
          <p>
            {language === 'en' 
              ? 'The College Affiliation Portal provides information about affiliated colleges under Sri Dev Suman Uttarakhand University. This portal helps students and institutions access affiliation details, regulations, and support services.'
              : 'महाविद्यालय संबद्धता पोर्टल श्री देव सुमन उत्तरांचल विश्वविद्यालय के तहत संबद्ध महाविद्यालयों की जानकारी प्रदान करता है।'}
          </p>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Services Offered' : 'प्रदान किए जाने वाले सेवाएं'}</h2>
          <ul>
            <li>{language === 'en' ? 'Affiliation Status Verification' : 'संबद्धता स्थिति सत्यापन'}</li>
            <li>{language === 'en' ? 'Document Submission' : 'दस्तावेज़ जमा करना'}</li>
            <li>{language === 'en' ? 'Inspection Reports' : 'निरीक्षण रिपोर्ट'}</li>
            <li>{language === 'en' ? 'Affiliated College List' : 'संबद्ध महाविद्यालय सूची'}</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Contact Information' : 'संपर्क जानकारी'}</h2>
          <p>Email: affiliation@sdsu.ac.in</p>
          <p>Phone: +91 1376 297 702</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeAffiliationPage;
