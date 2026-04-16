import React from 'react';
import '../styles/PanditLalitMohanSharmaCollege.css';

interface PanditLalitMohanSharmaCollegeProps {
  language: 'en' | 'hi';
  onBack: () => void;
  setCurrentPage: (page: string) => void;
}

const PanditLalitMohanSharmaCollege: React.FC<PanditLalitMohanSharmaCollegeProps> = ({
  language,
  onBack,
  setCurrentPage
}) => {

  const content = {
    en: {
      title: 'Pandit Lalit Mohan Sharma Government PG College',
      subtitle: 'College Profile',
      aboutTitle: 'About The College',
      aboutText:
        'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
      aboutHighlights: [
        'Experienced faculty and student-friendly learning environment',
        'Regular seminars, workshops, and co-curricular activities',
        'Strong focus on foundational and advanced higher education',
        'Library, lab, and digital academic support for learners'
      ],
      departmentsTitle: 'Departments',
      departmentsHelpText: 'Select a department below to preview details in this section.',
      previewButtonText: 'Open Full Department Profile',
      departments: [
        'Mathematics',
        'Microbiology',
        'Music',
        'Physics',
        'Political Science',
        'Sanskrit',
        'Sociology',
        'Zoology',
        'Commerce and Management',
        'Chemistry',
        'Economics',
        'Education',
        'English',
        'Geography',
        'Hindi',
        'History',
        'Home Science',
        'Botany'
      ],
      note: 'For admissions, syllabus, and official notices, please check the university portal.'
    },
    hi: {
      title: 'Pandit Lalit Mohan Sharma Government PG College',
      subtitle: 'College Profile',
      aboutTitle: 'About The College',
      aboutText:
        'Pandit Lalit Mohan Sharma Government PG College is an important institution under Sri Dev Suman Uttarakhand University. The college supports quality teaching, academic discipline, student mentoring, and higher education growth in the Garhwal region.',
      aboutHighlights: [
        'Experienced faculty and student-friendly learning environment',
        'Regular seminars, workshops, and co-curricular activities',
        'Strong focus on foundational and advanced higher education',
        'Library, lab, and digital academic support for learners'
      ],
      departmentsTitle: 'Departments',
      departmentsHelpText: 'Select a department below to preview details in this section.',
      previewButtonText: 'Open Full Department Profile',
      departments: [
        'Mathematics',
        'Microbiology',
        'Music',
        'Physics',
        'Political Science',
        'Sanskrit',
        'Sociology',
        'Zoology',
        'Commerce and Management',
        'Chemistry',
        'Economics',
        'Education',
        'English',
        'Geography',
        'Hindi',
        'History',
        'Home Science',
        'Botany'
      ],
      note: 'For admissions, syllabus, and official notices, please check the university portal.'
    }
  };

  const data = content[language];
  const departmentPageMap: Record<string, string> = {
    Mathematics: 'dept-mathematics',
    Microbiology: 'dept-microbiology',
    Music: 'dept-music',
    Physics: 'dept-physics',
    'Political Science': 'dept-political-science',
    Sanskrit: 'dept-sanskrit',
    Sociology: 'dept-sociology',
    Zoology: 'dept-zoology',
    'Commerce and Management': 'dept-commerce-management',
    Chemistry: 'dept-chemistry',
    Economics: 'dept-economics',
    Education: 'dept-education',
    English: 'dept-english',
    Geography: 'dept-geography',
    Hindi: 'dept-hindi',
    History: 'dept-history',
    'Home Science': 'dept-home-science',
    Botany: 'dept-botany'
  };

  const handleOpenDepartmentProfile = (department: string) => {
    const targetPage = departmentPageMap[department];
    if (targetPage && setCurrentPage) {
      setCurrentPage(targetPage);
    }
  };

  return (
    <div className="pandit-lalit-college-page">
      <div className="pandit-lalit-college-header">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <h1>{data.title}</h1>
      </div>

      <div className="pandit-lalit-college-container">
        <section className="pandit-lalit-college-about">
          <h2>{data.aboutTitle}</h2>
          <p>{data.aboutText}</p>
          <div className="pandit-lalit-college-highlights">
            {data.aboutHighlights.map((item, index) => (
              <div key={index} className="pandit-lalit-college-highlight-item">
                <span className="highlight-dot">*</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pandit-lalit-college-departments">
          <h2>{data.departmentsTitle}</h2>
          <p className="pandit-lalit-college-departments-help">{data.departmentsHelpText}</p>
          <div className="pandit-lalit-college-departments-grid">
            {data.departments.map((department, index) => (
              <button
                type="button"
                key={index}
                className="pandit-lalit-college-department-card"
                onClick={() => handleOpenDepartmentProfile(department)}
              >
                {department}
              </button>
            ))}
          </div>
        </section>

        <p className="pandit-lalit-college-note">{data.note}</p>
      </div>
    </div>
  );
};

export default PanditLalitMohanSharmaCollege;
