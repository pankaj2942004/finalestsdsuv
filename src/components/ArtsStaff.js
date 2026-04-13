import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ArtsStaff.css';
const ArtsStaff = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Arts Faculty Staff',
            subtitle: 'Cultivating Critical Thinking and Creativity',
            description: 'Our Arts Faculty is dedicated to fostering intellectual growth, critical thinking, and creative expression among students.',
            departments: [
                {
                    name: 'English Department',
                    icon: '📚',
                    description: 'Literature, linguistics, and communication skills'
                },
                {
                    name: 'Hindi Department',
                    icon: '📖',
                    description: 'Hindi literature and language studies'
                },
                {
                    name: 'History Department',
                    icon: '📜',
                    description: 'Historical studies and research'
                },
                {
                    name: 'Political Science',
                    icon: '🏛️',
                    description: 'Political theory and governance studies'
                },
                {
                    name: 'Psychology Department',
                    icon: '🧠',
                    description: 'Human behavior and mental sciences'
                },
                {
                    name: 'Philosophy Department',
                    icon: '💭',
                    description: 'Philosophy and ethical studies'
                }
            ],
            highlights: [
                { title: 'Holistic Education', description: 'Comprehensive curriculum fostering critical thinking' },
                { title: 'Creative Development', description: 'Programs promoting artistic and creative expression' },
                { title: 'Research Opportunities', description: 'Regular seminars, workshops, and research projects' },
                { title: 'Mentorship Programs', description: 'One-on-one guidance and academic counseling' }
            ],
            contact: 'For more information about Arts Faculty, please contact us'
        },
        hi: {
            title: 'कला संकाय कर्मचारी',
            subtitle: 'आलोचनात्मक सोच और रचनात्मकता का पोषण',
            description: 'हमारा कला संकाय बौद्धिक विकास, आलोचनात्मक सोच और छात्रों में रचनात्मक अभिव्यक्ति को बढ़ावा देने के लिए समर्पित है।',
            departments: [
                {
                    name: 'अंग्रेजी विभाग',
                    icon: '📚',
                    description: 'साहित्य, भाषाविज्ञान और संचार कौशल'
                },
                {
                    name: 'हिंदी विभाग',
                    icon: '📖',
                    description: 'हिंदी साहित्य और भाषा अध्ययन'
                },
                {
                    name: 'इतिहास विभाग',
                    icon: '📜',
                    description: 'ऐतिहासिक अध्ययन और अनुसंधान'
                },
                {
                    name: 'राजनीति विज्ञान',
                    icon: '🏛️',
                    description: 'राजनीतिक सिद्धांत और शासन अध्ययन'
                },
                {
                    name: 'मनोविज्ञान विभाग',
                    icon: '🧠',
                    description: 'मानव व्यवहार और मानसिक विज्ञान'
                },
                {
                    name: 'दर्शन विभाग',
                    icon: '💭',
                    description: 'दर्शन और नैतिक अध्ययन'
                }
            ],
            highlights: [
                { title: 'समग्र शिक्षा', description: 'आलोचनात्मक सोच को बढ़ावा देने वाला व्यापक पाठ्यक्रम' },
                { title: 'रचनात्मक विकास', description: 'कलात्मक और रचनात्मक अभिव्यक्ति को बढ़ावा देने वाले कार्यक्रम' },
                { title: 'अनुसंधान के अवसर', description: 'नियमित सेमिनार, कार्यशालाएं और अनुसंधान परियोजनाएं' },
                { title: 'मेंटरशिप कार्यक्रम', description: 'एक-एक व्यक्तिगत मार्गदर्शन और शैक्षणिक परामर्श' }
            ],
            contact: 'कला संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "staff-page", children: [_jsxs("div", { className: "staff-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "staff-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "staff-container", children: [_jsx("div", { className: "staff-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "departments-section", children: [_jsx("h2", { children: "Departments & Programs" }), _jsx("div", { className: "departments-grid", children: data.departments.map((dept, index) => (_jsxs("div", { className: "department-card", children: [_jsx("div", { className: "dept-icon", children: dept.icon }), _jsx("h3", { children: dept.name }), _jsx("p", { children: dept.description })] }, index))) })] }), _jsxs("div", { className: "highlights-section", children: [_jsx("h2", { children: "Faculty Highlights" }), _jsx("div", { className: "highlights-grid", children: data.highlights.map((highlight, index) => (_jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: highlight.title }), _jsx("p", { children: highlight.description })] }, index))) })] }), _jsxs("div", { className: "contact-section", children: [_jsx("p", { children: data.contact }), _jsx("button", { className: "contact-btn", children: "Contact Us" })] })] })] }));
};
export default ArtsStaff;
//# sourceMappingURL=ArtsStaff.js.map