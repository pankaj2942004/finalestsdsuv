import React from 'react';
import '../styles/DetailPage.css';

interface AcademicCalendarPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const AcademicCalendarPage: React.FC<AcademicCalendarPageProps> = ({ language, onBack }) => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h1>{language === 'en' ? 'Academic Calendar 2025-2026' : 'शैक्षणिक कैलेंडर 2025-2026'}</h1>
      </div>
      
      <div className="detail-content">
        <div className="content-section">
          <h2>{language === 'en' ? 'Important Dates' : 'महत्वपूर्ण तारीखें'}</h2>
          <table className="academic-table">
            <tbody>
              <tr>
                <td>{language === 'en' ? 'Session Start Date' : 'सत्र प्रारंभ तारीख'}</td>
                <td>15 July 2025</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Mid Semester Exam' : 'मध्य सेमेस्टर परीक्षा'}</td>
                <td>15 September 2025</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'End Semester Exam' : 'अंतिम सेमेस्टर परीक्षा'}</td>
                <td>10 November 2025</td>
              </tr>
              <tr>
                <td>{language === 'en' ? 'Result Declaration' : 'परिणाम घोषणा'}</td>
                <td>30 November 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Holidays' : 'छुट्टियां'}</h2>
          <ul>
            <li>{language === 'en' ? 'Independence Day' : 'स्वतंत्रता दिवस'}: 15 August 2025</li>
            <li>{language === 'en' ? 'Diwali Break' : 'दिवाली अवकाश'}: 27 Oct - 3 Nov 2025</li>
            <li>{language === 'en' ? 'Winter Break' : 'शीतकालीन अवकाश'}: 20 Dec 2025 - 5 Jan 2026</li>
            <li>{language === 'en' ? 'Republic Day' : 'गणतंत्र दिवस'}: 26 January 2026</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>{language === 'en' ? 'Download Calendar' : 'कैलेंडर डाउनलोड करें'}</h2>
          <button className="download-button">{language === 'en' ? 'Download PDF' : 'पीडीएफ डाउनलोड करें'}</button>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
