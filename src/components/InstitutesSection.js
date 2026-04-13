import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/InstitutesSection.css';
const InstitutesSection = ({ language }) => {
    const universityCampus = [
        {
            id: 1,
            nameEn: 'Pandit Lalit Mohan Sharma Government PG College Rishikesh',
            nameHi: 'पंडित ललित मोहन शर्मा सरकारी स्नातकोत्तर महाविद्यालय ऋषिकेश',
            url: '#'
        },
        {
            id: 2,
            nameEn: 'Government Post Graduate College - Gopeshwar, Chamoli',
            nameHi: 'सरकारी स्नातकोत्तर महाविद्यालय - गोपेश्वर, चमोली',
            url: '#'
        }
    ];
    const affiliatedColleges = [
        {
            id: 1,
            nameEn: 'Govt Colleges',
            nameHi: 'सरकारी महाविद्यालय',
            url: '#'
        },
        {
            id: 2,
            nameEn: 'Aided colleges',
            nameHi: 'सहायता प्राप्त महाविद्यालय',
            url: '#'
        },
        {
            id: 3,
            nameEn: 'Private colleges',
            nameHi: 'निजी महाविद्यालय',
            url: '#'
        }
    ];
    const categories = [
        {
            titleEn: 'University Campus',
            titleHi: 'विश्वविद्यालय परिसर',
            items: universityCampus
        },
        {
            titleEn: 'University Affiliated Colleges',
            titleHi: 'विश्वविद्यालय संबद्ध महाविद्यालय',
            items: affiliatedColleges
        }
    ];
    return (_jsx("div", { className: "institutes-section", children: _jsxs("div", { className: "institutes-container", children: [_jsx("h2", { className: "institutes-title", children: language === 'en' ? 'INSTITUTES/DEPARTMENTS/CONSTITUENT COLLEGES' : 'संस्थान/विभाग/घटक महाविद्यालय' }), _jsx("div", { className: "institutes-grid", children: categories.map((category, index) => (_jsxs("div", { className: "institute-card", children: [_jsx("div", { className: "institute-header", children: language === 'en' ? category.titleEn : category.titleHi }), _jsx("div", { className: "institute-content", children: _jsx("ul", { className: "colleges-list", children: category.items.map((item) => (_jsx("li", { className: "college-item", children: _jsx("a", { href: item.url, className: "college-link", children: language === 'en' ? item.nameEn : item.nameHi }) }, item.id))) }) })] }, index))) })] }) }));
};
export default InstitutesSection;
//# sourceMappingURL=InstitutesSection.js.map