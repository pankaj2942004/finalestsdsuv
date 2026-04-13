import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/UniversityCampus.css';
const UniversityCampus = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'University Campus',
            subtitle: 'Main Academic Campus',
            description: 'The University Campus serves as the primary academic and administrative hub of Sri Dev Suman Uttarakhand University, hosting state-of-the-art facilities and comprehensive academic programs.',
            stats: [
                { label: 'Established', value: '2019' },
                { label: 'Students', value: '5000+' },
                { label: 'Faculty', value: '450+' },
                { label: 'Programs', value: '50+' }
            ],
            sections: [
                {
                    title: 'Academic Excellence',
                    icon: '🎓',
                    description: 'UG and PG programs across Science, Commerce, and Arts disciplines'
                },
                {
                    title: 'Modern Infrastructure',
                    icon: '🏗️',
                    description: 'Advanced laboratories, library, sports facilities, and smart classrooms'
                },
                {
                    title: 'Research Centers',
                    icon: '🔬',
                    description: 'Dedicated research labs and innovation centers for faculty and students'
                },
                {
                    title: 'Student Life',
                    icon: '🎯',
                    description: 'Hostel facilities, cultural events, sports, and extracurricular activities'
                },
                {
                    title: 'Campus Amenities',
                    icon: '🌳',
                    description: 'Green campus with cafeteria, health center, and recreational facilities'
                },
                {
                    title: 'Placement Cell',
                    icon: '💼',
                    description: 'Dedicated placement support with 85% placement record'
                }
            ],
            cta: 'Apply Now'
        },
        hi: {
            title: 'विश्वविद्यालय परिसर',
            subtitle: 'मुख्य अकादमिक परिसर',
            description: 'विश्वविद्यालय परिसर श्री देव सुमन उत्तरांचल विश्वविद्यालय के प्राथमिक शैक्षणिक और प्रशासनिक केंद्र के रूप में कार्य करता है।',
            stats: [
                { label: 'स्थापित', value: '2019' },
                { label: 'छात्र', value: '5000+' },
                { label: 'संकाय', value: '450+' },
                { label: 'कार्यक्रम', value: '50+' }
            ],
            sections: [
                {
                    title: 'शैक्षणिक उत्कृष्टता',
                    icon: '🎓',
                    description: 'विज्ञान, वाणिज्य और कला विषयों में स्नातक और स्नातकोत्तर कार्यक्रम'
                },
                {
                    title: 'आधुनिक बुनियादी ढांचा',
                    icon: '🏗️',
                    description: 'उन्नत प्रयोगशालाएं, पुस्तकालय, खेल सुविधाएं और स्मार्ट कक्षाएं'
                },
                {
                    title: 'अनुसंधान केंद्र',
                    icon: '🔬',
                    description: 'संकाय और छात्रों के लिए समर्पित अनुसंधान प्रयोगशालाएं'
                },
                {
                    title: 'छात्र जीवन',
                    icon: '🎯',
                    description: 'छात्रावास सुविधाएं, सांस्कृतिक कार्यक्रम, खेल और पाठ्येतर गतिविधियां'
                },
                {
                    title: 'परिसर सुविधाएं',
                    icon: '🌳',
                    description: 'हरे परिसर में कैफेटेरिया, स्वास्थ्य केंद्र और मनोरंजन सुविधाएं'
                },
                {
                    title: 'प्लेसमेंट सेल',
                    icon: '💼',
                    description: '85% प्लेसमेंट रिकॉर्ड के साथ समर्पित प्लेसमेंट सहायता'
                }
            ],
            cta: 'अभी आवेदन करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "university-campus-page", children: [_jsxs("div", { className: "university-campus-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "university-campus-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "university-campus-container", children: [_jsx("div", { className: "university-campus-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "university-campus-stats", children: _jsx("div", { className: "university-campus-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "university-campus-stat-card", children: [_jsx("div", { className: "university-campus-stat-value", children: stat.value }), _jsx("div", { className: "university-campus-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "university-campus-sections", children: _jsx("div", { className: "university-campus-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "university-campus-section-card", children: [_jsx("div", { className: "university-campus-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "university-campus-cta", children: _jsx("button", { className: "university-campus-btn", children: data.cta }) })] })] }));
};
export default UniversityCampus;
//# sourceMappingURL=UniversityCampus.js.map