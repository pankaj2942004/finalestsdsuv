import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/CommerceJournal.css';
const CommerceJournal = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Commerce Journal',
            subtitle: 'Business & Economic Research Publication',
            description: 'A leading journal for publishing research in commerce, management, economics, and business administration.',
            stats: [
                { label: 'Published Issues', value: '20+' },
                { label: 'Research Papers', value: '400+' },
                { label: 'Active Reviewers', value: '120+' },
                { label: 'Impact Factor', value: '3.8' }
            ],
            sections: [
                {
                    title: 'Accounting',
                    icon: '📊',
                    description: 'Financial accounting and auditing research'
                },
                {
                    title: 'Economics',
                    icon: '💹',
                    description: 'Economic theories and policy analysis'
                },
                {
                    title: 'Management',
                    icon: '💼',
                    description: 'Business management and strategy'
                },
                {
                    title: 'Finance',
                    icon: '💰',
                    description: 'Corporate finance and investments'
                },
                {
                    title: 'Marketing',
                    icon: '🎯',
                    description: 'Marketing strategy and consumer behavior'
                },
                {
                    title: 'Entrepreneurship',
                    icon: '🚀',
                    description: 'New venture creation and innovation'
                }
            ],
            cta: 'Submit Your Paper'
        },
        hi: {
            title: 'वाणिज्य पत्रिका',
            subtitle: 'व्यावसायिक और आर्थिक अनुसंधान प्रकाशन',
            description: 'वाणिज्य, प्रबंधन, अर्थशास्त्र और व्यावसायिक प्रशासन में अनुसंधान प्रकाशित करने के लिए एक अग्रणी पत्रिका।',
            stats: [
                { label: 'प्रकाशित अंक', value: '20+' },
                { label: 'अनुसंधान पत्र', value: '400+' },
                { label: 'सक्रिय समीक्षक', value: '120+' },
                { label: 'प्रभाव कारक', value: '3.8' }
            ],
            sections: [
                {
                    title: 'लेखांकन',
                    icon: '📊',
                    description: 'वित्तीय लेखांकन और ऑडिटिंग अनुसंधान'
                },
                {
                    title: 'अर्थशास्त्र',
                    icon: '💹',
                    description: 'आर्थिक सिद्धांत और नीति विश्लेषण'
                },
                {
                    title: 'प्रबंधन',
                    icon: '💼',
                    description: 'व्यावसायिक प्रबंधन और रणनीति'
                },
                {
                    title: 'वित्त',
                    icon: '💰',
                    description: 'कॉर्पोरेट वित्त और निवेश'
                },
                {
                    title: 'विपणन',
                    icon: '🎯',
                    description: 'विपणन रणनीति और उपभोक्ता व्यवहार'
                },
                {
                    title: 'उद्यमिता',
                    icon: '🚀',
                    description: 'नई उद्यम निर्माण और नवाचार'
                }
            ],
            cta: 'अपना पेपर जमा करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "commerce-journal-page", children: [_jsxs("div", { className: "commerce-journal-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "commerce-journal-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "commerce-journal-container", children: [_jsx("div", { className: "commerce-journal-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "commerce-stats-section", children: _jsx("div", { className: "commerce-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "commerce-stat-card", children: [_jsx("div", { className: "commerce-stat-value", children: stat.value }), _jsx("div", { className: "commerce-stat-label", children: stat.label })] }, index))) }) }), _jsxs("div", { className: "commerce-sections-section", children: [_jsx("h2", { children: "Research Sections" }), _jsx("div", { className: "commerce-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "commerce-section-card", children: [_jsx("div", { className: "commerce-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) })] }), _jsx("div", { className: "commerce-cta-section", children: _jsx("button", { className: "commerce-submit-btn", children: data.cta }) })] })] }));
};
export default CommerceJournal;
//# sourceMappingURL=CommerceJournal.js.map