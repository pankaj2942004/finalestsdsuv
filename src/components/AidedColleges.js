import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AidedColleges.css';
const AidedColleges = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Aided Colleges',
            subtitle: 'Government-Assisted Private Institutions',
            description: 'Aided colleges are private institutions that receive government funding while maintaining academic standards and admission policies of the university.',
            stats: [
                { label: 'Aided Colleges', value: '15' },
                { label: 'Students', value: '6000+' },
                { label: 'Programs Offered', value: '40+' },
                { label: 'Faculty Members', value: '400+' }
            ],
            sections: [
                {
                    title: 'Hybrid Model',
                    icon: '🤝',
                    description: 'Combines private initiative with government support and funding'
                },
                {
                    title: 'Quality Standards',
                    icon: '⭐',
                    description: 'Maintains university standards while offering specialized programs'
                },
                {
                    title: 'Affordable Fees',
                    icon: '💳',
                    description: 'More affordable than purely private colleges due to government aid'
                },
                {
                    title: 'Diverse Offerings',
                    icon: '🎓',
                    description: 'Wide range of courses and specializations available'
                },
                {
                    title: 'Modern Facilities',
                    icon: '🏗️',
                    description: 'Well-equipped classrooms, labs, and digital learning resources'
                },
                {
                    title: 'Industry Interaction',
                    icon: '💼',
                    description: 'Strong connections with industry for internships and placements'
                }
            ],
            cta: 'Explore Options'
        },
        hi: {
            title: 'सहायता प्राप्त कॉलेज',
            subtitle: 'सरकार द्वारा सहायता प्राप्त निजी संस्थान',
            description: 'सहायता प्राप्त कॉलेज निजी संस्थान हैं जो विश्वविद्यालय के शैक्षणिक मानकों को बनाए रखते हुए सरकारी वित्तपोषण प्राप्त करते हैं।',
            stats: [
                { label: 'सहायता प्राप्त कॉलेज', value: '15' },
                { label: 'छात्र', value: '6000+' },
                { label: 'प्रस्तावित कार्यक्रम', value: '40+' },
                { label: 'संकाय सदस्य', value: '400+' }
            ],
            sections: [
                {
                    title: 'संकर मॉडल',
                    icon: '🤝',
                    description: 'निजी पहल को सरकारी समर्थन और वित्तपोषण के साथ जोड़ता है'
                },
                {
                    title: 'गुणवत्ता मानक',
                    icon: '⭐',
                    description: 'विश्वविद्यालय मानकों को बनाए रखते हुए विशेष कार्यक्रम प्रदान करता है'
                },
                {
                    title: 'सस्ती फीस',
                    icon: '💳',
                    description: 'सरकारी सहायता के कारण विशुद्ध निजी कॉलेजों की तुलना में अधिक सस्ती'
                },
                {
                    title: 'विविध प्रस्ताव',
                    icon: '🎓',
                    description: 'विस्तृत पाठ्यक्रम और विशेषज्ञताएं उपलब्ध'
                },
                {
                    title: 'आधुनिक सुविधाएं',
                    icon: '🏗️',
                    description: 'अच्छी तरह से सुसज्जित कक्षाएं, प्रयोगशालाएं और डिजिटल शिक्षण संसाधन'
                },
                {
                    title: 'उद्योग संपर्क',
                    icon: '💼',
                    description: 'इंटर्नशिप और प्लेसमेंट के लिए उद्योग के साथ मजबूत कनेक्शन'
                }
            ],
            cta: 'विकल्प देखें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "aided-colleges-page", children: [_jsxs("div", { className: "aided-colleges-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "aided-colleges-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "aided-colleges-container", children: [_jsx("div", { className: "aided-colleges-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "aided-colleges-stats", children: _jsx("div", { className: "aided-colleges-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "aided-colleges-stat-card", children: [_jsx("div", { className: "aided-colleges-stat-value", children: stat.value }), _jsx("div", { className: "aided-colleges-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "aided-colleges-sections", children: _jsx("div", { className: "aided-colleges-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "aided-colleges-section-card", children: [_jsx("div", { className: "aided-colleges-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "aided-colleges-cta", children: _jsx("button", { className: "aided-colleges-btn", children: data.cta }) })] })] }));
};
export default AidedColleges;
//# sourceMappingURL=AidedColleges.js.map