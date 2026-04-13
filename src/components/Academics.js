import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/Academics.css';
const Academics = ({ language, onBack, onHome }) => {
    const academicPrograms = [
        {
            id: 1,
            nameEn: 'Undergraduate Programs',
            nameHi: 'स्नातक कार्यक्रम',
            descriptionEn: 'Comprehensive 3-year bachelor degree programs',
            descriptionHi: '3 वर्षीय व्यापक स्नातक डिग्री कार्यक्रम',
            icon: '📚'
        },
        {
            id: 2,
            nameEn: 'Postgraduate Programs',
            nameHi: 'स्नातकोत्तर कार्यक्रम',
            descriptionEn: 'Advanced master and doctoral degree programs',
            descriptionHi: 'उन्नत मास्टर और डॉक्टरेट डिग्री कार्यक्रम',
            icon: '🎓'
        },
        {
            id: 3,
            nameEn: 'Research Centers',
            nameHi: 'अनुसंधान केंद्र',
            descriptionEn: 'State-of-the-art research facilities and labs',
            descriptionHi: 'अत्याधुनिक अनुसंधान सुविधाएं और प्रयोगशालाएं',
            icon: '🔬'
        },
        {
            id: 4,
            nameEn: 'Online Courses',
            nameHi: 'ऑनलाइन पाठ्यक्रम',
            descriptionEn: 'Flexible online education for working professionals',
            descriptionHi: 'कामकाजी पेशेवरों के लिए लचीली ऑनलाइन शिक्षा',
            icon: '💻'
        },
        {
            id: 5,
            nameEn: 'Skill Development',
            nameHi: 'कौशल विकास',
            descriptionEn: 'Industry-relevant skill training programs',
            descriptionHi: 'उद्योग प्रासंगिक कौशल प्रशिक्षण कार्यक्रम',
            icon: '🛠️'
        },
        {
            id: 6,
            nameEn: 'Exchange Programs',
            nameHi: 'विनिमय कार्यक्रम',
            descriptionEn: 'International exchange and collaboration programs',
            descriptionHi: 'अंतर्राष्ट्रीय विनिमय और सहयोग कार्यक्रम',
            icon: '🌍'
        }
    ];
    return (_jsxs("div", { className: "academics-page", children: [_jsxs("div", { className: "navigation-buttons", children: [_jsxs("button", { className: "back-button", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsxs("button", { className: "home-button", onClick: onHome || onBack, children: ["\uD83C\uDFE0 ", language === 'en' ? 'Home' : 'होम'] })] }), _jsxs("div", { className: "academics-container", children: [_jsxs("div", { className: "academics-header", children: [_jsx("h1", { children: language === 'en' ? 'Academic Excellence' : 'शैक्षणिक उत्कृष्टता' }), _jsx("p", { children: language === 'en' ? 'World-class education with innovative teaching methodologies' : 'अभिनव शिक्षण पद्धति के साथ विश्व स्तरीय शिक्षा' })] }), _jsxs("div", { className: "academics-info-section", children: [_jsx("h2", { children: language === 'en' ? 'Our Academic Vision' : 'हमारी शैक्षणिक दृष्टि' }), _jsx("p", { children: language === 'en'
                                    ? 'We are committed to providing world-class education that combines theoretical knowledge with practical skills. Our faculty comprises distinguished scholars and researchers who are dedicated to mentoring the next generation of leaders, innovators, and professionals.'
                                    : 'हम ऐसी विश्व स्तरीय शिक्षा प्रदान करने के लिए प्रतिबद्ध हैं जो सैद्धांतिक ज्ञान को व्यावहारिक कौशल के साथ जोड़ता है। हमारा संकाय प्रतिष्ठित विद्वानों और शोधकर्ताओं से बना है जो अगली पीढ़ी के नेताओं, नवप्रवर्तकों और पेशेवरों का मार्गदर्शन करने के लिए समर्पित हैं।' })] }), _jsxs("div", { className: "academics-programs", children: [_jsx("h2", { children: language === 'en' ? 'Academic Programs' : 'शैक्षणिक कार्यक्रम' }), _jsx("div", { className: "programs-grid", children: academicPrograms.map((program) => (_jsxs("div", { className: "program-card", children: [_jsx("div", { className: "program-icon", children: program.icon }), _jsx("h3", { children: language === 'en' ? program.nameEn : program.nameHi }), _jsx("p", { children: language === 'en' ? program.descriptionEn : program.descriptionHi })] }, program.id))) })] }), _jsxs("div", { className: "academics-highlights", children: [_jsx("h2", { children: language === 'en' ? 'Why Choose Our Academics' : 'हमारी शिक्षा क्यों चुनें' }), _jsxs("div", { className: "highlights-grid", children: [_jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: language === 'en' ? 'Expert Faculty' : 'विशेषज्ञ संकाय' }), _jsx("p", { children: language === 'en' ? 'Highly qualified and experienced faculty members' : 'अत्यधिक योग्य और अनुभवी संकाय सदस्य' })] }), _jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: language === 'en' ? 'Modern Infrastructure' : 'आधुनिक बुनियादी ढांचा' }), _jsx("p", { children: language === 'en' ? 'State-of-the-art facilities and technology' : 'अत्याधुनिक सुविधाएं और तकनीक' })] }), _jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: language === 'en' ? 'Industry Integration' : 'उद्योग एकीकरण' }), _jsx("p", { children: language === 'en' ? 'Strong partnerships with leading industries' : 'प्रमुख उद्योगों के साथ मजबूत भागीदारी' })] }), _jsxs("div", { className: "highlight-card", children: [_jsx("h3", { children: language === 'en' ? 'Global Recognition' : 'वैश्विक मान्यता' }), _jsx("p", { children: language === 'en' ? 'Internationally recognized degrees and programs' : 'अंतर्राष्ट्रीय स्तर पर मान्यता प्राप्त डिग्री' })] })] })] }), _jsxs("div", { className: "contact-section", children: [_jsx("h2", { children: language === 'en' ? 'Contact Academic Affairs' : 'शैक्षणिक कार्यों से संपर्क करें' }), _jsx("p", { children: language === 'en' ? 'Email: academics@university.edu | Phone: +91-XXX-XXXX-XXXX' : 'ईमेल: academics@university.edu | फोन: +91-XXX-XXXX-XXXX' })] })] })] }));
};
export default Academics;
//# sourceMappingURL=Academics.js.map