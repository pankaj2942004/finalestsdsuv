import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ConferenceSeminar.css';
const ConferenceSeminar = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Conference/Seminar & Workshop',
            subtitle: 'Academic & Professional Development',
            description: 'Sri Dev Suman Uttarakhand University regularly organizes conferences, seminars, and workshops to promote academic excellence and professional development.',
            categories: [
                {
                    name: 'National Conferences',
                    icon: '🌐',
                    count: '15+ Events',
                    description: 'National level academic conferences'
                },
                {
                    name: 'International Seminars',
                    icon: '🌍',
                    count: '10+ Events',
                    description: 'International seminars and forums'
                },
                {
                    name: 'Faculty Workshops',
                    icon: '👨‍🏫',
                    count: '25+ Events',
                    description: 'Professional development workshops'
                },
                {
                    name: 'Student Seminars',
                    icon: '👨‍🎓',
                    count: '30+ Events',
                    description: 'Seminars for student development'
                },
                {
                    name: 'Industry Interactions',
                    icon: '💼',
                    count: '20+ Events',
                    description: 'Interactions with industry professionals'
                },
                {
                    name: 'Research Colloquia',
                    icon: '🔍',
                    count: '18+ Events',
                    description: 'Research focused discussion forums'
                }
            ],
            contact: 'Participate in our events and conferences'
        },
        hi: {
            title: 'सम्मेलन/सेमिनार और कार्यशाला',
            subtitle: 'शैक्षणिक और व्यावसायिक विकास',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय नियमित रूप से शैक्षणिक उत्कृष्टता और व्यावसायिक विकास को बढ़ावा देने के लिए सम्मेलन, सेमिनार और कार्यशालाएं आयोजित करता है।',
            categories: [
                {
                    name: 'राष्ट्रीय सम्मेलन',
                    icon: '🌐',
                    count: '15+ कार्यक्रम',
                    description: 'राष्ट्रीय स्तरीय शैक्षणिक सम्मेलन'
                },
                {
                    name: 'अंतर्राष्ट्रीय सेमिनार',
                    icon: '🌍',
                    count: '10+ कार्यक्रम',
                    description: 'अंतर्राष्ट्रीय सेमिनार और मंच'
                },
                {
                    name: 'संकाय कार्यशालाएं',
                    icon: '👨‍🏫',
                    count: '25+ कार्यक्रम',
                    description: 'व्यावसायिक विकास कार्यशालाएं'
                },
                {
                    name: 'छात्र सेमिनार',
                    icon: '👨‍🎓',
                    count: '30+ कार्यक्रम',
                    description: 'छात्र विकास के लिए सेमिनार'
                },
                {
                    name: 'उद्योग संपर्क',
                    icon: '💼',
                    count: '20+ कार्यक्रम',
                    description: 'उद्योग पेशेवरों के साथ बातचीत'
                },
                {
                    name: 'अनुसंधान कोलोक्विया',
                    icon: '🔍',
                    count: '18+ कार्यक्रम',
                    description: 'अनुसंधान केंद्रित चर्चा मंच'
                }
            ],
            contact: 'हमारे कार्यक्रमों और सम्मेलनों में भाग लें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "conference-page", children: [_jsxs("div", { className: "conference-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "conference-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "conference-container", children: [_jsx("div", { className: "conference-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "conference-section", children: [_jsx("h2", { children: "Event Categories" }), _jsx("div", { className: "conference-grid", children: data.categories.map((category, index) => (_jsxs("div", { className: "conference-card", children: [_jsx("div", { className: "conference-icon", children: category.icon }), _jsx("h3", { children: category.name }), _jsx("p", { className: "count", children: category.count }), _jsx("p", { className: "description", children: category.description }), _jsx("button", { className: "register-btn", children: "Learn More" })] }, index))) })] })] })] }));
};
export default ConferenceSeminar;
//# sourceMappingURL=ConferenceSeminar.js.map