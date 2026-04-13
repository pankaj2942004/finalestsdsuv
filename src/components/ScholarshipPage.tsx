import React from 'react';
import '../styles/DetailPage.css';

interface ScholarshipPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ScholarshipPage: React.FC<ScholarshipPageProps> = ({ language, onBack }) => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{language === 'en' ? 'Scholarships & Financial Aid' : 'छात्रवृत्ति और वित्तीय सहायता'}</h1>
      </div>
      
      <div className="detail-content">
        <div className="content-section">
          <h2>{language === 'en' ? 'Available Scholarships' : 'उपलब्ध छात्रवृत्तियां'}</h2>
          <p>
            {language === 'en'
              ? 'Sri Dev Suman Uttarakhand University offers various scholarship schemes to support merit and economically disadvantaged students.'
              : 'श्री देव सुमन उत्तरांचल विश्वविद्यालय योग्य और आर्थिक रूप से कमजोर छात्रों को समर्थन देने के लिए विभिन्न छात्रवृत्ति योजनाएं प्रदान करता है।'}
          </p>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Scholarship Types' : 'छात्रवृत्ति के प्रकार'}</h2>
          <ul>
            <li>{language === 'en' ? 'Merit Scholarship' : 'योग्यता छात्रवृत्ति'} - 50% of annual fees</li>
            <li>{language === 'en' ? 'SC/ST Scholarship' : 'अनुसूचित जाति/जनजाति छात्रवृत्ति'} - 75% of annual fees</li>
            <li>{language === 'en' ? 'OBC Scholarship' : 'अन्य पिछड़ा वर्ग छात्रवृत्ति'} - 50% of annual fees</li>
            <li>{language === 'en' ? 'Sports Scholarship' : 'खेल छात्रवृत्ति'} - Support for athletes</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Eligibility Criteria' : 'पात्रता मानदंड'}</h2>
          <ul>
            <li>{language === 'en' ? 'Valid enrollment in the university' : 'विश्वविद्यालय में वैध नामांकन'}</li>
            <li>{language === 'en' ? 'Minimum 60% attendance in the semester' : 'न्यूनतम 60% उपस्थिति'}</li>
            <li>{language === 'en' ? 'No arrears in fees' : 'शुल्क में कोई बकाया नहीं'}</li>
            <li>{language === 'en' ? 'Income certificate (if applicable)' : 'आय प्रमाण पत्र (यदि लागू हो)'}</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'How to Apply' : 'आवेदन कैसे करें'}</h2>
          <p>{language === 'en' ? 'Students can apply through the university portal using their registration number and password.' : 'छात्र विश्वविद्यालय पोर्टल के माध्यम से अपने पंजीकरण संख्या और पासवर्ड का उपयोग करके आवेदन कर सकते हैं।'}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
