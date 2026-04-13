import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/GovernmentColleges.css';
const GovernmentColleges = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Government Colleges',
            subtitle: 'Quality Education at Affordable Cost',
            description: 'Network of government colleges affiliated with the university, providing quality higher education with affordable fees and scholarship programs.',
            stats: [
                { label: 'Government Colleges', value: '18' },
                { label: 'Students Enrolled', value: '8000+' },
                { label: 'Scholarship Programs', value: '20+' },
                { label: 'Placement Rate', value: '78%' }
            ],
            sections: [
                {
                    title: 'Affordable Education',
                    icon: '💰',
                    description: 'Quality education at affordable fees with scholarship opportunities'
                },
                {
                    title: 'Diverse Programs',
                    icon: '📚',
                    description: 'UG and PG programs in Science, Commerce, Arts, and Professional courses'
                },
                {
                    title: 'Government Support',
                    icon: '🏛️',
                    description: 'Backed by government funding and policies for quality assurance'
                },
                {
                    title: 'Experienced Faculty',
                    icon: '👨‍🏫',
                    description: 'Qualified and dedicated faculty members with academic expertise'
                },
                {
                    title: 'Merit Scholarships',
                    icon: '🎖️',
                    description: 'Various scholarship schemes for merit and economically weak students'
                },
                {
                    title: 'Campus Facilities',
                    icon: '🏫',
                    description: 'Modern labs, libraries, sports facilities, and hostel amenities'
                }
            ],
            cta: 'Browse Colleges'
        },
        hi: {
            title: 'सरकारी कॉलेज',
            subtitle: 'सस्ती कीमत पर गुणवत्तापूर्ण शिक्षा',
            description: 'विश्वविद्यालय के साथ संबद्ध सरकारी कॉलेजों का नेटवर्क, सस्ती फीस और छात्रवृत्ति कार्यक्रमों के साथ गुणवत्तापूर्ण उच्च शिक्षा प्रदान करता है।',
            stats: [
                { label: 'सरकारी कॉलेज', value: '18' },
                { label: 'नामांकित छात्र', value: '8000+' },
                { label: 'छात्रवृत्ति कार्यक्रम', value: '20+' },
                { label: 'प्लेसमेंट दर', value: '78%' }
            ],
            sections: [
                {
                    title: 'सस्ती शिक्षा',
                    icon: '💰',
                    description: 'सस्ती फीस में गुणवत्तापूर्ण शिक्षा और छात्रवृत्ति अवसर'
                },
                {
                    title: 'विविध कार्यक्रम',
                    icon: '📚',
                    description: 'विज्ञान, वाणिज्य, कला और व्यावसायिक पाठ्यक्रमों में स्नातक और स्नातकोत्तर कार्यक्रम'
                },
                {
                    title: 'सरकारी समर्थन',
                    icon: '🏛️',
                    description: 'गुणवत्ता आश्वासन के लिए सरकारी वित्तपोषण और नीतियों द्वारा समर्थित'
                },
                {
                    title: 'अनुभवी संकाय',
                    icon: '👨‍🏫',
                    description: 'शैक्षणिक विशेषज्ञता के साथ योग्य और समर्पित संकाय सदस्य'
                },
                {
                    title: 'मेरिट छात्रवृत्तियां',
                    icon: '🎖️',
                    description: 'मेरिट और आर्थिक रूप से कमजोर छात्रों के लिए विभिन्न छात्रवृत्ति योजनाएं'
                },
                {
                    title: 'परिसर सुविधाएं',
                    icon: '🏫',
                    description: 'आधुनिक प्रयोगशालाएं, पुस्तकालय, खेल सुविधाएं और छात्रावास सुविधाएं'
                }
            ],
            cta: 'कॉलेज ब्राउज़ करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "government-colleges-page", children: [_jsxs("div", { className: "government-colleges-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "government-colleges-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "government-colleges-container", children: [_jsx("div", { className: "government-colleges-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "government-colleges-stats", children: _jsx("div", { className: "government-colleges-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "government-colleges-stat-card", children: [_jsx("div", { className: "government-colleges-stat-value", children: stat.value }), _jsx("div", { className: "government-colleges-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "government-colleges-sections", children: _jsx("div", { className: "government-colleges-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "government-colleges-section-card", children: [_jsx("div", { className: "government-colleges-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "government-colleges-cta", children: _jsx("button", { className: "government-colleges-btn", children: data.cta }) })] })] }));
};
export default GovernmentColleges;
//# sourceMappingURL=GovernmentColleges.js.map