import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/SecondaryPages.css';
const ResearchDevelopmentPage = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Research and Development',
            description: 'The Research and Development department at Sri Dev Suman Uttarakhand University is committed to advancing knowledge through innovative research initiatives and collaborative projects.',
            details: [
                'Promotes interdisciplinary research across multiple fields',
                'Facilitates collaboration with national and international institutions',
                'Supports research grants and funding opportunities',
                'Publishes research in peer-reviewed journals',
                'Organizes research seminars and conferences',
                'Encourages faculty mentorship and research excellence'
            ]
        },
        hi: {
            title: 'अनुसंधान और विकास',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में अनुसंधान और विकास विभाग नवीन अनुसंधान पहलों और सहयोगी परियोजनाओं के माध्यम से ज्ञान को आगे बढ़ाने के लिए प्रतिबद्ध है।',
            details: [
                'कई क्षेत्रों में अंतःविषयक अनुसंधान को बढ़ावा देता है',
                'राष्ट्रीय और अंतर्राष्ट्रीय संस्थानों के साथ सहयोग की सुविधा प्रदान करता है',
                'अनुसंधान अनुदान और वित्तपोषण के अवसरों का समर्थन करता है',
                'सहकर्मी-समीक्षा की गई पत्रिकाओं में अनुसंधान प्रकाशित करता है',
                'अनुसंधान सेमिनार और सम्मेलन आयोजित करता है',
                'संकाय सलाह और अनुसंधान उत्कृष्टता को प्रोत्साहित करता है'
            ]
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "secondary-page", children: [_jsxs("div", { className: "secondary-header", children: [_jsxs("button", { className: "back-btn", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsx("h1", { children: data.title })] }), _jsxs("div", { className: "secondary-container", children: [_jsx("div", { className: "secondary-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "secondary-details", children: [_jsx("h2", { children: language === 'en' ? 'Key Highlights' : 'मुख्य विशेषताएं' }), _jsx("ul", { className: "details-list", children: data.details.map((detail, index) => (_jsx("li", { children: detail }, index))) })] })] })] }));
};
export default ResearchDevelopmentPage;
//# sourceMappingURL=ResearchDevelopmentPage.js.map