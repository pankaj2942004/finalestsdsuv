import React from 'react';
import '../styles/DetailPage.css';

interface ExamDateSheetPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const ExamDateSheetPage: React.FC<ExamDateSheetPageProps> = ({ language, onBack }) => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{language === 'en' ? 'Exam Date Sheet 2025-2026' : 'परीक्षा तारीख पत्र 2025-2026'}</h1>
      </div>
      
      <div className="detail-content">
        <div className="content-section">
          <h2>{language === 'en' ? 'Exam Schedule' : 'परीक्षा अनुसूची'}</h2>
          <table className="academic-table">
            <tbody>
              <tr>
                <td>{language === 'en' ? 'Semester' : 'सेमेस्टर'}</td>
                <td>{language === 'en' ? 'Exam Start' : 'परीक्षा शुरुआत'}</td>
                <td>{language === 'en' ? 'Exam End' : 'परीक्षा अंत'}</td>
              </tr>
              <tr>
                <td>Odd Semester (I, III, V)</td>
                <td>01 Oct 2025</td>
                <td>31 Oct 2025</td>
              </tr>
              <tr>
                <td>Even Semester (II, IV, VI)</td>
                <td>05 Mar 2026</td>
                <td>05 Apr 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Important Instructions' : 'महत्वपूर्ण निर्देश'}</h2>
          <ul>
            <li>{language === 'en' ? 'Admit card will be available 5 days before exam' : 'प्रवेश पत्र परीक्षा से 5 दिन पहले उपलब्ध होगा'}</li>
            <li>{language === 'en' ? 'Report to exam center 30 minutes before exam' : 'परीक्षा से 30 मिनट पहले परीक्षा केंद्र पर रिपोर्ट करें'}</li>
            <li>{language === 'en' ? 'Valid university ID is mandatory' : 'वैध विश्वविद्यालय आईडी अनिवार्य है'}</li>
            <li>{language === 'en' ? 'No electronic devices allowed' : 'कोई इलेक्ट्रॉनिक उपकरण की अनुमति नहीं'}</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Download Exam Schedule' : 'परीक्षा अनुसूची डाउनलोड करें'}</h2>
          <button className="download-button">{language === 'en' ? 'Download PDF' : 'पीडीएफ डाउनलोड करें'}</button>
        </div>
      </div>
    </div>
  );
};

export default ExamDateSheetPage;
