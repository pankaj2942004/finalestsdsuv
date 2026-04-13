import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/ResearchInnovation.css';
const ResearchInnovation = ({ language }) => {
    const [activeItem, setActiveItem] = useState('overview');
    const menuItems = [
        {
            id: 'overview',
            labelEn: 'Overview',
            labelHi: 'अवलोकन'
        },
        {
            id: 'rd-cell',
            labelEn: 'Research & Development Cell',
            labelHi: 'अनुसंधान और विकास सेल'
        },
        {
            id: 'iprc',
            labelEn: 'Intellectual Property Rights Cell',
            labelHi: 'बौद्धिक संपत्ति अधिकार सेल'
        },
        {
            id: 'coe',
            labelEn: 'Centre of Excellence',
            labelHi: 'उत्कृष्टता केंद्र'
        },
        {
            id: 'src',
            labelEn: 'Student Research Cell',
            labelHi: 'छात्र अनुसंधान सेल'
        },
        {
            id: 'seic',
            labelEn: 'Startups, Entrepreneurship, and Innovation Cell',
            labelHi: 'स्टार्टअप, उद्यमिता और नवाचार सेल'
        }
    ];
    const statistics = [
        {
            id: 1,
            numberEn: '6000+',
            numberHi: '6000+',
            labelEn: 'Paper Publications',
            labelHi: 'पेपर प्रकाशन'
        },
        {
            id: 2,
            numberEn: '1400+',
            numberHi: '1400+',
            labelEn: 'Paper Publications with International Collaboration',
            labelHi: 'अंतर्राष्ट्रीय सहयोग के साथ पेपर प्रकाशन'
        },
        {
            id: 3,
            numberEn: '75+',
            numberHi: '75+',
            labelEn: 'Countries Collaboration',
            labelHi: 'देशों का सहयोग'
        }
    ];
    return (_jsx("div", { className: "research-innovation", children: _jsxs("div", { className: "research-innovation-container", children: [_jsxs("div", { className: "research-left", children: [_jsx("h2", { className: "research-title", children: language === 'en' ? 'Research & Innovation' : 'अनुसंधान और नवाचार' }), _jsx("div", { className: "research-menu", children: menuItems.map((item) => (_jsxs("a", { href: "#", className: `research-menu-item ${activeItem === item.id ? 'active' : ''}`, onClick: (e) => {
                                    e.preventDefault();
                                    setActiveItem(item.id);
                                }, children: [_jsx("span", { className: "menu-arrow", children: "\u2192" }), _jsx("span", { className: "menu-label", children: language === 'en' ? item.labelEn : item.labelHi })] }, item.id))) })] }), _jsx("div", { className: "research-right", children: _jsx("div", { className: "research-stats-box", children: statistics.map((stat) => (_jsxs("div", { className: "research-stat-item", children: [_jsx("div", { className: "stat-number", children: language === 'en' ? stat.numberEn : stat.numberHi }), _jsx("div", { className: "stat-label", children: language === 'en' ? stat.labelEn : stat.labelHi })] }, stat.id))) }) })] }) }));
};
export default ResearchInnovation;
//# sourceMappingURL=ResearchInnovation.js.map