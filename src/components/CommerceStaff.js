import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/CommerceStaff.css';
const CommerceStaff = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Commerce Faculty Staff',
            subtitle: 'Building Future Business Leaders',
            description: 'Our Commerce Faculty combines theoretical knowledge with practical expertise to prepare students for global business opportunities.',
            departments: [
                {
                    name: 'Accounting Department',
                    icon: '📊',
                    description: 'Financial accounting and auditing expertise'
                },
                {
                    name: 'Economics Department',
                    icon: '💹',
                    description: 'Macro and microeconomic theories and applications'
                },
                {
                    name: 'Business Studies',
                    icon: '💼',
                    description: 'Management and business administration'
                },
                {
                    name: 'Finance Department',
                    icon: '💰',
                    description: 'Corporate finance and investment management'
                },
                {
                    name: 'Marketing Department',
                    icon: '🎯',
                    description: 'Modern marketing strategies and consumer behavior'
                },
                {
                    name: 'Law Department',
                    icon: '⚖️',
                    description: 'Commercial and corporate law studies'
                }
            ],
            highlights: [
                { title: 'Industry Connect', description: 'Strong partnerships with leading business organizations' },
                { title: 'Practical Training', description: 'Internship and real-world project opportunities' },
                { title: 'Career Growth', description: 'Excellent placement record and alumni network' },
                { title: 'Expert Faculty', description: 'Experienced professionals from industry and academia' }
            ],
            contact: 'For more information about Commerce Faculty, please contact us'
        },
        hi: {
            title: 'वाणिज्य संकाय कर्मचारी',
            subtitle: 'भविष्य के व्यावसायिक नेता बनाना',
            description: 'हमारा वाणिज्य संकाय सैद्धांतिक ज्ञान को व्यावहारिक विशेषज्ञता के साथ जोड़ता है ताकि छात्रों को वैश्विक व्यावसायिक अवसरों के लिए तैयार किया जा सके।',
            departments: [
                {
                    name: 'लेखांकन विभाग',
                    icon: '📊',
                    description: 'वित्तीय लेखांकन और ऑडिटिंग विशेषज्ञता'
                },
                {
                    name: 'अर्थशास्त्र विभाग',
                    icon: '💹',
                    description: 'मैक्रो और सूक्ष्म आर्थिक सिद्धांत और अनुप्रयोग'
                },
                {
                    name: 'व्यावसायिक अध्ययन',
                    icon: '💼',
                    description: 'प्रबंधन और व्यावसायिक प्रशासन'
                },
                {
                    name: 'वित्त विभाग',
                    icon: '💰',
                    description: 'कॉर्पोरेट वित्त और निवेश प्रबंधन'
                },
                {
                    name: 'विपणन विभाग',
                    icon: '🎯',
                    description: 'आधुनिक विपणन रणनीतियां और उपभोक्ता व्यवहार'
                },
                {
                    name: 'कानून विभाग',
                    icon: '⚖️',
                    description: 'व्यावसायिक और कॉर्पोरेट कानून अध्ययन'
                }
            ],
            highlights: [
                { title: 'उद्योग संपर्क', description: 'प्रमुख व्यावसायिक संगठनों के साथ मजबूत भागीदारी' },
                { title: 'व्यावहारिक प्रशिक्षण', description: 'इंटर्नशिप और वास्तविक दुनिया की परियोजनाओं के अवसर' },
                { title: 'कैरियर विकास', description: 'उत्कृष्ट प्लेसमेंट रिकॉर्ड और पूर्व छात्र नेटवर्क' },
                { title: 'विशेषज्ञ संकाय', description: 'उद्योग और शिक्षा जगत के अनुभवी पेशेवर' }
            ],
            contact: 'वाणिज्य संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "staff-page", children: [_jsxs("div", { className: "staff-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "staff-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "staff-container", children: [_jsx("div", { className: "staff-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "departments-section", children: [_jsx("h2", { children: "Departments & Programs" }), _jsx("div", { className: "departments-grid", children: data.departments.map((dept, index) => (_jsxs("div", { className: "department-card", children: [_jsx("div", { className: "dept-icon", children: dept.icon }), _jsx("h3", { children: dept.name }), _jsx("p", { children: dept.description })] }, index))) })] }), _jsxs("div", { className: "highlights-section", children: [_jsx("h2", { children: "Faculty Highlights" }), _jsx("div", { className: "highlights-grid", children: data.highlights.map((highlight, index) => (_jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: highlight.title }), _jsx("p", { children: highlight.description })] }, index))) })] }), _jsxs("div", { className: "contact-section", children: [_jsx("p", { children: data.contact }), _jsx("button", { className: "contact-btn", children: "Contact Us" })] })] })] }));
};
export default CommerceStaff;
//# sourceMappingURL=CommerceStaff.js.map