import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AdmissionHeader.css';
const AdmissionHeader = ({ language, onBack }) => {
    const content = {
        en: {
            home: 'Home',
            admission: 'Admission Portal'
        },
        hi: {
            home: 'होम',
            admission: 'प्रवेश पोर्टल'
        }
    };
    const data = content[language];
    return (_jsx("header", { className: "admission-header", children: _jsxs("div", { className: "admission-header-content", children: [_jsx("div", { className: "admission-header-left", children: _jsxs("button", { className: "back-btn", onClick: onBack, title: "Go Back", children: [_jsx("span", { className: "back-arrow", children: "\u2190" }), data.home] }) }), _jsx("div", { className: "admission-header-title", children: data.admission }), _jsx("div", { className: "admission-header-right" })] }) }));
};
export default AdmissionHeader;
//# sourceMappingURL=AdmissionHeader.js.map