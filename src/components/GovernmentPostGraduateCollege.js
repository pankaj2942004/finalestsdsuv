import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/GovernmentPostGraduateCollege.css';
const GovernmentPostGraduateCollege = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Government Post Graduate College',
            subtitle: 'Gopeshwar, Chamoli',
            description: 'A constituent college of Sri Dev Suman Uttarakhand University located in the scenic Chamoli district, providing quality postgraduate education to students.',
            stats: [
                { label: 'Location', value: 'Chamoli' },
                { label: 'PG Programs', value: '8+' },
                { label: 'Faculty', value: '50+' },
                { label: 'Students', value: '400+' }
            ],
            sections: [
                {
                    title: 'Postgraduate Programs',
                    icon: '🎓',
                    description: 'MSc and MA programs in Science and Humanities'
                },
                {
                    title: 'Scenic Campus',
                    icon: '🏔️',
                    description: 'Located in the beautiful Chamoli district with natural surroundings'
                },
                {
                    title: 'Academic Standards',
                    icon: '⭐',
                    description: 'High academic standards and rigorous curriculum'
                },
                {
                    title: 'Laboratory Facilities',
                    icon: '🧪',
                    description: 'Well-equipped science laboratories for practical learning'
                },
                {
                    title: 'Community Engagement',
                    icon: '🤝',
                    description: 'Active engagement with local community and research initiatives'
                },
                {
                    title: 'Hostel Facilities',
                    icon: '🏠',
                    description: 'Accommodation available for resident and non-local students'
                }
            ],
            cta: 'Learn More'
        },
        hi: {
            title: 'सरकारी स्नातकोत्तर कॉलेज',
            subtitle: 'गोपेश्वर, चमोली',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय का एक संघटक कॉलेज जो सुंदर चमोली जिले में स्थित है।',
            stats: [
                { label: 'स्थान', value: 'चमोली' },
                { label: 'पीजी कार्यक्रम', value: '8+' },
                { label: 'संकाय', value: '50+' },
                { label: 'छात्र', value: '400+' }
            ],
            sections: [
                {
                    title: 'स्नातकोत्तर कार्यक्रम',
                    icon: '🎓',
                    description: 'विज्ञान और मानविकी में MSc और MA कार्यक्रम'
                },
                {
                    title: 'सुंदर परिसर',
                    icon: '🏔️',
                    description: 'चमोली जिले में प्राकृतिक परिवेश के साथ स्थित'
                },
                {
                    title: 'शैक्षणिक मानक',
                    icon: '⭐',
                    description: 'उच्च शैक्षणिक मानक और कठोर पाठ्यक्रम'
                },
                {
                    title: 'प्रयोगशाला सुविधाएं',
                    icon: '🧪',
                    description: 'व्यावहारिक शिक्षण के लिए अच्छी तरह से सुसज्जित विज्ञान प्रयोगशालाएं'
                },
                {
                    title: 'समुदाय जुड़ाव',
                    icon: '🤝',
                    description: 'स्थानीय समुदाय और अनुसंधान पहलों के साथ सक्रिय जुड़ाव'
                },
                {
                    title: 'छात्रावास सुविधाएं',
                    icon: '🏠',
                    description: 'निवासी और गैर-स्थानीय छात्रों के लिए आवास उपलब्ध'
                }
            ],
            cta: 'और जानें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "government-post-grad-page", children: [_jsxs("div", { className: "government-post-grad-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "government-post-grad-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "government-post-grad-container", children: [_jsx("div", { className: "government-post-grad-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "government-post-grad-stats", children: _jsx("div", { className: "government-post-grad-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "government-post-grad-stat-card", children: [_jsx("div", { className: "government-post-grad-stat-value", children: stat.value }), _jsx("div", { className: "government-post-grad-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "government-post-grad-sections", children: _jsx("div", { className: "government-post-grad-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "government-post-grad-section-card", children: [_jsx("div", { className: "government-post-grad-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "government-post-grad-cta", children: _jsx("button", { className: "government-post-grad-btn", children: data.cta }) })] })] }));
};
export default GovernmentPostGraduateCollege;
//# sourceMappingURL=GovernmentPostGraduateCollege.js.map