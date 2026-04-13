import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ScienceStaff.css';
const ScienceStaff = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Science Faculty Staff',
            subtitle: 'Dedicated Educators and Researchers',
            description: 'Our Science Faculty comprises experienced educators and researchers committed to academic excellence and student development.',
            departments: [
                {
                    name: 'Physics Department',
                    icon: '⚛️',
                    description: 'Advanced physics education with research facilities'
                },
                {
                    name: 'Chemistry Department',
                    icon: '🧪',
                    description: 'Comprehensive chemistry programs and lab facilities'
                },
                {
                    name: 'Biology Department',
                    icon: '🔬',
                    description: 'Modern biology education with practical training'
                },
                {
                    name: 'Mathematics Department',
                    icon: '📐',
                    description: 'Rigorous mathematics curriculum and problem solving'
                },
                {
                    name: 'Environmental Science',
                    icon: '🌱',
                    description: 'Sustainability and environmental research focus'
                },
                {
                    name: 'Biotechnology',
                    icon: '🧬',
                    description: 'Cutting-edge biotechnology programs and labs'
                }
            ],
            highlights: [
                { title: 'Expert Faculty', description: 'Highly qualified professors with years of experience' },
                { title: 'Research Focus', description: 'Active research programs and publications' },
                { title: 'Modern Labs', description: 'State-of-the-art laboratory facilities' },
                { title: 'Student Support', description: 'Personalized mentoring and guidance programs' }
            ],
            contact: 'For more information about Science Faculty, please contact us'
        },
        hi: {
            title: 'विज्ञान संकाय कर्मचारी',
            subtitle: 'समर्पित शिक्षक और शोधकर्ता',
            description: 'हमारा विज्ञान संकाय अनुभवी शिक्षकों और शोधकर्ताओं से बना है जो शैक्षणिक उत्कृष्टता और छात्र विकास के लिए प्रतिबद्ध हैं।',
            departments: [
                {
                    name: 'भौतिकी विभाग',
                    icon: '⚛️',
                    description: 'अनुसंधान सुविधाओं के साथ उन्नत भौतिकी शिक्षा'
                },
                {
                    name: 'रसायन विभाग',
                    icon: '🧪',
                    description: 'व्यापक रसायन कार्यक्रम और प्रयोगशाला सुविधाएं'
                },
                {
                    name: 'जीव विज्ञान विभाग',
                    icon: '🔬',
                    description: 'व्यावहारिक प्रशिक्षण के साथ आधुनिक जीव विज्ञान शिक्षा'
                },
                {
                    name: 'गणित विभाग',
                    icon: '📐',
                    description: 'कठोर गणित पाठ्यक्रम और समस्या समाधान'
                },
                {
                    name: 'पर्यावरण विज्ञान',
                    icon: '🌱',
                    description: 'स्थिरता और पर्यावरणीय अनुसंधान पर ध्यान'
                },
                {
                    name: 'जैव प्रौद्योगिकी',
                    icon: '🧬',
                    description: 'अत्याधुनिक जैव प्रौद्योगिकी कार्यक्रम और प्रयोगशालाएं'
                }
            ],
            highlights: [
                { title: 'विशेषज्ञ संकाय', description: 'वर्षों के अनुभव के साथ उच्च योग्य प्रोफेसर' },
                { title: 'अनुसंधान फोकस', description: 'सक्रिय अनुसंधान कार्यक्रम और प्रकाशन' },
                { title: 'आधुनिक प्रयोगशालाएं', description: 'अत्याधुनिक प्रयोगशाला सुविधाएं' },
                { title: 'छात्र समर्थन', description: 'व्यक्तिगत मेंटरिंग और मार्गदर्शन कार्यक्रम' }
            ],
            contact: 'विज्ञान संकाय के बारे में अधिक जानकारी के लिए, कृपया हमसे संपर्क करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "staff-page", children: [_jsxs("div", { className: "staff-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "staff-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "staff-container", children: [_jsx("div", { className: "staff-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "departments-section", children: [_jsx("h2", { children: "Departments & Programs" }), _jsx("div", { className: "departments-grid", children: data.departments.map((dept, index) => (_jsxs("div", { className: "department-card", children: [_jsx("div", { className: "dept-icon", children: dept.icon }), _jsx("h3", { children: dept.name }), _jsx("p", { children: dept.description })] }, index))) })] }), _jsxs("div", { className: "highlights-section", children: [_jsx("h2", { children: "Faculty Highlights" }), _jsx("div", { className: "highlights-grid", children: data.highlights.map((highlight, index) => (_jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: highlight.title }), _jsx("p", { children: highlight.description })] }, index))) })] }), _jsxs("div", { className: "contact-section", children: [_jsx("p", { children: data.contact }), _jsx("button", { className: "contact-btn", children: "Contact Us" })] })] })] }));
};
export default ScienceStaff;
//# sourceMappingURL=ScienceStaff.js.map