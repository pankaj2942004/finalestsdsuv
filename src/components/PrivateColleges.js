import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/PrivateColleges.css';
const PrivateColleges = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Private Colleges',
            subtitle: 'Premium Educational Institutions',
            description: 'Affiliated private colleges offering specialized programs and premium education with state-of-the-art infrastructure and innovative teaching methods.',
            stats: [
                { label: 'Private Colleges', value: '12+' },
                { label: 'Students', value: '5000+' },
                { label: 'Specializations', value: '50+' },
                { label: 'Placement Rate', value: '85%' }
            ],
            sections: [
                {
                    title: 'Premium Infrastructure',
                    icon: '🏢',
                    description: 'State-of-the-art facilities, smart classrooms, and advanced labs'
                },
                {
                    title: 'Specialized Programs',
                    icon: '🎯',
                    description: 'Niche courses and specialized programs not available elsewhere'
                },
                {
                    title: 'Industry Integration',
                    icon: '🏭',
                    description: 'Strong industry partnerships for internships and placements'
                },
                {
                    title: 'Experienced Faculty',
                    icon: '👨‍💼',
                    description: 'Faculty with industry experience and advanced qualifications'
                },
                {
                    title: 'Career Development',
                    icon: '📈',
                    description: 'Comprehensive career counseling and professional development programs'
                },
                {
                    title: 'Global Standards',
                    icon: '🌍',
                    description: 'International quality standards and exchange programs'
                }
            ],
            cta: 'View Colleges'
        },
        hi: {
            title: 'निजी कॉलेज',
            subtitle: 'प्रीमियम शैक्षणिक संस्थान',
            description: 'अत्याधुनिक बुनियादी ढांचे और अभिनव शिक्षण विधियों के साथ विशेष कार्यक्रम और प्रीमियम शिक्षा प्रदान करने वाले संबद्ध निजी कॉलेज।',
            stats: [
                { label: 'निजी कॉलेज', value: '12+' },
                { label: 'छात्र', value: '5000+' },
                { label: 'विशेषज्ञताएं', value: '50+' },
                { label: 'प्लेसमेंट दर', value: '85%' }
            ],
            sections: [
                {
                    title: 'प्रीमियम बुनियादी ढांचा',
                    icon: '🏢',
                    description: 'अत्याधुनिक सुविधाएं, स्मार्ट कक्षाएं और उन्नत प्रयोगशालाएं'
                },
                {
                    title: 'विशेष कार्यक्रम',
                    icon: '🎯',
                    description: 'विशेष पाठ्यक्रम और विशेष कार्यक्रम जो अन्यत्र उपलब्ध नहीं हैं'
                },
                {
                    title: 'उद्योग एकीकरण',
                    icon: '🏭',
                    description: 'इंटर्नशिप और प्लेसमेंट के लिए मजबूत उद्योग साझेदारी'
                },
                {
                    title: 'अनुभवी संकाय',
                    icon: '👨‍💼',
                    description: 'उद्योग अनुभव और उन्नत योग्यताओं के साथ संकाय'
                },
                {
                    title: 'कैरियर विकास',
                    icon: '📈',
                    description: 'व्यापक कैरियर परामर्श और व्यावसायिक विकास कार्यक्रम'
                },
                {
                    title: 'वैश्विक मानक',
                    icon: '🌍',
                    description: 'अंतर्राष्ट्रीय गुणवत्ता मानक और विनिमय कार्यक्रम'
                }
            ],
            cta: 'कॉलेज देखें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "private-colleges-page", children: [_jsxs("div", { className: "private-colleges-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "private-colleges-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "private-colleges-container", children: [_jsx("div", { className: "private-colleges-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "private-colleges-stats", children: _jsx("div", { className: "private-colleges-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "private-colleges-stat-card", children: [_jsx("div", { className: "private-colleges-stat-value", children: stat.value }), _jsx("div", { className: "private-colleges-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "private-colleges-sections", children: _jsx("div", { className: "private-colleges-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "private-colleges-section-card", children: [_jsx("div", { className: "private-colleges-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "private-colleges-cta", children: _jsx("button", { className: "private-colleges-btn", children: data.cta }) })] })] }));
};
export default PrivateColleges;
//# sourceMappingURL=PrivateColleges.js.map