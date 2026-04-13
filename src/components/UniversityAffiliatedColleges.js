import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/UniversityAffiliatedColleges.css';
const UniversityAffiliatedColleges = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'University Affiliated Colleges',
            subtitle: 'Network of Academic Excellence',
            description: 'Sri Dev Suman Uttarakhand University has an extensive network of affiliated colleges spread across the state, maintaining academic standards and supporting student development.',
            stats: [
                { label: 'Affiliated Colleges', value: '45+' },
                { label: 'Students', value: '15000+' },
                { label: 'Districts Covered', value: '13' },
                { label: 'Quality Assurance', value: '100%' }
            ],
            sections: [
                {
                    title: 'College Network',
                    icon: '🌐',
                    description: 'Wide network of colleges providing quality education across districts'
                },
                {
                    title: 'Academic Standards',
                    icon: '📋',
                    description: 'Uniform curriculum and academic standards across all affiliated colleges'
                },
                {
                    title: 'Quality Assurance',
                    icon: '✓',
                    description: 'Regular NAAC accreditation and internal quality audits'
                },
                {
                    title: 'Student Support',
                    icon: '👥',
                    description: 'Comprehensive support services including counseling and guidance'
                },
                {
                    title: 'Faculty Development',
                    icon: '📚',
                    description: 'Regular training and development programs for faculty members'
                },
                {
                    title: 'Infrastructure',
                    icon: '🏢',
                    description: 'Well-equipped libraries, labs, and modern teaching facilities'
                }
            ],
            cta: 'Find a College'
        },
        hi: {
            title: 'विश्वविद्यालय संबद्ध कॉलेज',
            subtitle: 'शैक्षणिक उत्कृष्टता का नेटवर्क',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का राज्य भर में विस्तारित संबद्ध कॉलेजों का एक व्यापक नेटवर्क है।',
            stats: [
                { label: 'संबद्ध कॉलेज', value: '45+' },
                { label: 'छात्र', value: '15000+' },
                { label: 'जिले कवर किए गए', value: '13' },
                { label: 'गुणवत्ता आश्वासन', value: '100%' }
            ],
            sections: [
                {
                    title: 'कॉलेज नेटवर्क',
                    icon: '🌐',
                    description: 'जिलों में गुणवत्तापूर्ण शिक्षा प्रदान करने वाले कॉलेजों का विस्तृत नेटवर्क'
                },
                {
                    title: 'शैक्षणिक मानक',
                    icon: '📋',
                    description: 'सभी संबद्ध कॉलेजों में समान पाठ्यक्रम और शैक्षणिक मानक'
                },
                {
                    title: 'गुणवत्ता आश्वासन',
                    icon: '✓',
                    description: 'नियमित NAAC मान्यता और आंतरिक गुणवत्ता ऑडिट'
                },
                {
                    title: 'छात्र समर्थन',
                    icon: '👥',
                    description: 'परामर्श और मार्गदर्शन सहित व्यापक समर्थन सेवाएं'
                },
                {
                    title: 'संकाय विकास',
                    icon: '📚',
                    description: 'संकाय सदस्यों के लिए नियमित प्रशिक्षण और विकास कार्यक्रम'
                },
                {
                    title: 'बुनियादी ढांचा',
                    icon: '🏢',
                    description: 'अच्छी तरह से सुसज्जित पुस्तकालय, प्रयोगशालाएं और आधुनिक शिक्षण सुविधाएं'
                }
            ],
            cta: 'कॉलेज खोजें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "university-affiliated-page", children: [_jsxs("div", { className: "university-affiliated-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "university-affiliated-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "university-affiliated-container", children: [_jsx("div", { className: "university-affiliated-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "university-affiliated-stats", children: _jsx("div", { className: "university-affiliated-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "university-affiliated-stat-card", children: [_jsx("div", { className: "university-affiliated-stat-value", children: stat.value }), _jsx("div", { className: "university-affiliated-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "university-affiliated-sections", children: _jsx("div", { className: "university-affiliated-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "university-affiliated-section-card", children: [_jsx("div", { className: "university-affiliated-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "university-affiliated-cta", children: _jsx("button", { className: "university-affiliated-btn", children: data.cta }) })] })] }));
};
export default UniversityAffiliatedColleges;
//# sourceMappingURL=UniversityAffiliatedColleges.js.map