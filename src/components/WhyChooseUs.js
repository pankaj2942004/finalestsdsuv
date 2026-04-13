import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/WhyChooseUs.css';
const WhyChooseUs = ({ language }) => {
    const statistics = [
        {
            numberEn: '80000+',
            numberHi: '80000+',
            labelEn: 'Students',
            labelHi: 'छात्र'
        },
        {
            numberEn: '238',
            numberHi: '238',
            labelEn: 'affiliated colleges',
            labelHi: 'संबद्ध कॉलेज'
        },
        {
            numberEn: '64',
            numberHi: '64',
            labelEn: 'Govt colleges',
            labelHi: 'सरकारी कॉलेज'
        },
        {
            numberEn: '174',
            numberHi: '174',
            labelEn: 'private colleges',
            labelHi: 'निजी कॉलेज'
        }
    ];
    const features = [
        {
            id: 1,
            titleEn: 'Government recognized state university',
            titleHi: 'सरकार द्वारा मान्यता प्राप्त राज्य विश्वविद्यालय',
            descriptionEn: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisl ut aliquip',
            descriptionHi: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisl ut aliquip',
            icon: 'chart'
        },
        {
            id: 2,
            titleEn: 'Modern NEP-based academic structure',
            titleHi: 'आधुनिक NEP-आधारित शैक्षणिक संरचना',
            descriptionEn: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
            descriptionHi: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
            icon: 'diamond'
        },
        {
            id: 3,
            titleEn: 'Highly qualified faculty',
            titleHi: 'अत्यधिक योग्य संकाय',
            descriptionEn: 'Aut suscipit aut cum memo deleníti aut omnis. Doloribus ut maiores omnis facere',
            descriptionHi: 'Aut suscipit aut cum memo deleníti aut omnis. Doloribus ut maiores omnis facere',
            icon: 'briefcase'
        }
    ];
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'chart':
                return (_jsxs("svg", { className: "feature-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "7" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "7" }), _jsx("rect", { x: "14", y: "14", width: "7", height: "7" }), _jsx("rect", { x: "3", y: "14", width: "7", height: "7" })] }));
            case 'diamond':
                return (_jsxs("svg", { className: "feature-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [_jsx("path", { d: "M12 2L22 8V16L12 22L2 16V8L12 2Z" }), _jsx("path", { d: "M12 2L12 22" }), _jsx("path", { d: "M2 8L22 16" })] }));
            case 'briefcase':
                return (_jsxs("svg", { className: "feature-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", children: [_jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }), _jsx("path", { d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" })] }));
            default:
                return null;
        }
    };
    return (_jsx("div", { className: "why-choose-us", children: _jsxs("div", { className: "why-choose-container", children: [_jsx("div", { className: "statistics-section", children: statistics.map((stat, index) => (_jsxs("div", { className: "stat-card", children: [_jsx("div", { className: "stat-number", children: language === 'en' ? stat.numberEn : stat.numberHi }), _jsx("div", { className: "stat-label", children: language === 'en' ? stat.labelEn : stat.labelHi })] }, index))) }), _jsxs("div", { className: "choose-content", children: [_jsx("div", { className: "choose-left", children: _jsxs("div", { className: "choose-box", children: [_jsx("h2", { children: language === 'en' ? 'Why Choose sri dev suman uttarakhand university ?' : 'श्री देव सुमन उत्तरांचल विश्वविद्यालय को क्यों चुनें ?' }), _jsx("p", { className: "choose-subtitle", children: language === 'en' ? 'Why Choose SDSUV?' : 'SDSUV को क्यों चुनें?' }), _jsxs("a", { href: "#", className: "learn-more-btn", children: [language === 'en' ? 'Learn More' : 'और अधिक जानें', " ", _jsx("span", { children: "\u203A" })] })] }) }), _jsx("div", { className: "choose-right", children: _jsx("div", { className: "features-grid", children: features.map((feature) => (_jsxs("div", { className: "feature-card", children: [_jsx("div", { className: "feature-icon-circle", children: getIcon(feature.icon) }), _jsx("h3", { className: "feature-title", children: language === 'en' ? feature.titleEn : feature.titleHi }), _jsx("p", { className: "feature-description", children: language === 'en' ? feature.descriptionEn : feature.descriptionHi })] }, feature.id))) }) })] })] }) }));
};
export default WhyChooseUs;
//# sourceMappingURL=WhyChooseUs.js.map