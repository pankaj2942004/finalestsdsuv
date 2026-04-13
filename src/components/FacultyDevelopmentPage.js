import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/SecondaryPages.css';
const FacultyDevelopmentPage = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Faculty Development Centre',
            description: 'The Faculty Development Centre at Sri Dev Suman Uttarakhand University is dedicated to enhancing the professional competencies and teaching effectiveness of faculty members.',
            details: [
                'Offers professional development programs and workshops',
                'Provides training in modern teaching methodologies',
                'Supports curriculum development and course design',
                'Facilitates international faculty exchange programs',
                'Promotes research collaborations and publications',
                'Organizes seminars on academic excellence and innovation'
            ]
        },
        hi: {
            title: 'संकाय विकास केंद्र',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय में संकाय विकास केंद्र संकाय सदस्यों की व्यावसायिक योग्यताओं और शिक्षण प्रभावशीलता को बढ़ाने के लिए समर्पित है।',
            details: [
                'व्यावसायिक विकास कार्यक्रम और कार्यशाला प्रदान करता है',
                'आधुनिक शिक्षण पद्धतियों में प्रशिक्षण प्रदान करता है',
                'पाठ्यक्रम विकास और पाठ्यक्रम डिजाइन का समर्थन करता है',
                'अंतर्राष्ट्रीय संकाय विनिमय कार्यक्रमों की सुविधा प्रदान करता है',
                'अनुसंधान सहयोग और प्रकाशनों को बढ़ावा देता है',
                'शैक्षणिक उत्कृष्टता और नवाचार पर सेमिनार आयोजित करता है'
            ]
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "secondary-page", children: [_jsxs("div", { className: "secondary-header", children: [_jsxs("button", { className: "back-btn", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsx("h1", { children: data.title })] }), _jsxs("div", { className: "secondary-container", children: [_jsx("div", { className: "secondary-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "secondary-details", children: [_jsx("h2", { children: language === 'en' ? 'Key Highlights' : 'मुख्य विशेषताएं' }), _jsx("ul", { className: "details-list", children: data.details.map((detail, index) => (_jsx("li", { children: detail }, index))) })] })] })] }));
};
export default FacultyDevelopmentPage;
//# sourceMappingURL=FacultyDevelopmentPage.js.map