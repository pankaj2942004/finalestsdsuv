import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ReadyToJoinUs.css';
const ReadyToJoinUs = ({ language }) => {
    const teamMembers = [
        {
            id: 1,
            nameEn: 'Lt. Gen. Gurmit Singh',
            nameHi: 'लेफ्टिनेंट जनरल गुरमीत सिंह',
            designationEn: 'PVSM, UYSM, AVSM, VSM (Retd)',
            designationHi: 'PVSM, UYSM, AVSM, VSM (सेवानिवृत्त)',
            organizationEn: "Hon'ble Governor of Uttarakhand",
            organizationHi: 'उत्तराखंड के माननीय राज्यपाल',
            image: '/img/team/team-1.png'
        },
        {
            id: 2,
            nameEn: 'Shri Pushkar Singh Dhami',
            nameHi: 'श्री पुष्कर सिंह धामी',
            designationEn: "Hon'ble Chief Minister of Uttarakhand",
            designationHi: 'उत्तराखंड के माननीय मुख्यमंत्री',
            organizationEn: '',
            organizationHi: '',
            image: '/img/team/team-2.jpg'
        },
        {
            id: 3,
            nameEn: 'Dr. Dhan Singh Rawat',
            nameHi: 'डॉ. धन सिंह रावत',
            designationEn: "Hon'ble Minister of Higher Education",
            designationHi: 'उच्च शिक्षा के माननीय मंत्री',
            organizationEn: 'Uttarakhand',
            organizationHi: 'उत्तराखंड',
            image: '/img/team/team-3.jpg'
        },
        {
            id: 4,
            nameEn: 'Prof. N.K. Joshi',
            nameHi: 'प्रो. एन.के. जोशी',
            designationEn: "Hon'ble Vice Chancellor",
            designationHi: 'माननीय कुलाधिपति',
            organizationEn: 'SDSUV',
            organizationHi: 'SDSUV',
            image: '/img/team/team-4.jpg'
        }
    ];
    return (_jsx("div", { className: "ready-to-join", children: _jsxs("div", { className: "join-container", children: [_jsxs("div", { className: "join-header", children: [_jsx("h2", { children: language === 'en' ? 'Ready to Join Us?' : 'क्या आप हमारे साथ जुड़ने के लिए तैयार हैं?' }), _jsx("p", { children: language === 'en' ? 'Take the first step towards your academic excellence. Apply now for the 2026-2027 academic session.' : 'अपनी शैक्षणिक उत्कृष्टता की ओर पहला कदम बढ़ाएं। 2026-2027 शैक्षणिक सत्र के लिए अभी आवेदन करें।' }), _jsx("a", { href: "#", className: "admission-button", children: language === 'en' ? 'Admission 2026-2027' : 'प्रवेश 2026-2027' })] }), _jsx("div", { className: "team-grid", children: teamMembers.map((member) => (_jsxs("div", { className: "team-card", children: [_jsx("div", { className: "team-image-wrapper", children: _jsx("img", { src: member.image, alt: language === 'en' ? member.nameEn : member.nameHi, className: "team-image" }) }), _jsx("h3", { className: "team-name", children: language === 'en' ? member.nameEn : member.nameHi }), _jsx("p", { className: "team-designation", children: language === 'en' ? member.designationEn : member.designationHi }), (language === 'en' ? member.organizationEn : member.organizationHi) &&
                                _jsx("p", { className: "team-organization", children: language === 'en' ? member.organizationEn : member.organizationHi })] }, member.id))) })] }) }));
};
export default ReadyToJoinUs;
//# sourceMappingURL=ReadyToJoinUs.js.map