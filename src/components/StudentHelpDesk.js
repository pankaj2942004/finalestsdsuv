import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/StudentHelpDesk.css';
const StudentHelpDesk = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Student Help Desk',
            subtitle: 'Support & Assistance',
            description: 'The Student Help Desk provides comprehensive support for academic queries, administrative issues, and student welfare concerns.',
            sections: [
                {
                    title: 'Answer Book Viewing',
                    icon: '📄',
                    description: 'Access your answer sheets for evaluation and review processes'
                },
                {
                    title: 'Challenge Evaluation',
                    icon: '⚖️',
                    description: 'File evaluation challenges and recheck requests for disputed marks'
                },
                {
                    title: 'Academic Support',
                    icon: '📚',
                    description: 'Guidance on course requirements, assignments, and academic planning'
                },
                {
                    title: 'Administrative Help',
                    icon: '📋',
                    description: 'Assistance with registrations, certifications, and document processing'
                },
                {
                    title: 'Technical Support',
                    icon: '💻',
                    description: 'Help with online learning platform, email, and IT-related issues'
                },
                {
                    title: 'General Queries',
                    icon: '❓',
                    description: '24/7 support for general questions and student concerns'
                }
            ],
            cta: 'Contact Help Desk'
        },
        hi: {
            title: 'छात्र सहायता डेस्क',
            subtitle: 'समर्थन और सहायता',
            description: 'छात्र सहायता डेस्क शैक्षणिक प्रश्नों, प्रशासनिक समस्याओं और छात्र कल्याण संबंधी चिंताओं के लिए व्यापक समर्थन प्रदान करता है।',
            sections: [
                {
                    title: 'उत्तर पुस्तक देखना',
                    icon: '📄',
                    description: 'मूल्यांकन और समीक्षा प्रक्रियाओं के लिए अपनी उत्तर पत्रकों तक पहुंचें'
                },
                {
                    title: 'मूल्यांकन चुनौती',
                    icon: '⚖️',
                    description: 'विवादित अंकों के लिए मूल्यांकन चुनौतियां और पुनः जांच अनुरोध दायर करें'
                },
                {
                    title: 'शैक्षणिक समर्थन',
                    icon: '📚',
                    description: 'पाठ्यक्रम आवश्यकताओं, असाइनमेंट और शैक्षणिक योजना पर मार्गदर्शन'
                },
                {
                    title: 'प्रशासनिक सहायता',
                    icon: '📋',
                    description: 'पंजीकरण, प्रमाण पत्र और दस्तावेज प्रसंस्करण में सहायता'
                },
                {
                    title: 'तकनीकी समर्थन',
                    icon: '💻',
                    description: 'ऑनलाइन लर्निंग प्लेटफॉर्म, ईमेल और आईटी संबंधित समस्याओं में मदद'
                },
                {
                    title: 'सामान्य प्रश्न',
                    icon: '❓',
                    description: 'सामान्य प्रश्नों और छात्र चिंताओं के लिए 24/7 समर्थन'
                }
            ],
            cta: 'सहायता डेस्क से संपर्क करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "student-help-desk-page", children: [_jsxs("div", { className: "student-help-desk-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "student-help-desk-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "student-help-desk-container", children: [_jsx("div", { className: "student-help-desk-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "student-help-desk-sections-section", children: _jsx("div", { className: "student-help-desk-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "student-help-desk-section-card", children: [_jsx("div", { className: "student-help-desk-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "student-help-desk-cta-section", children: _jsx("button", { className: "student-help-desk-submit-btn", children: data.cta }) })] })] }));
};
export default StudentHelpDesk;
//# sourceMappingURL=StudentHelpDesk.js.map