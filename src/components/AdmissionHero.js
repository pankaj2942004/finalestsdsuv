import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AdmissionHero.css';
const AdmissionHero = ({ language }) => {
    const content = {
        en: {
            title: 'Learning Today, Leading Tomorrow',
            subtitle: 'A place where ideas become achievements',
            buttonText: 'Admission 2026-2027'
        },
        hi: {
            title: 'आज सीखें, कल नेतृत्व करें',
            subtitle: 'एक जगह जहाँ विचार उपलब्धियों में बदलते हैं',
            buttonText: 'प्रवेश 2026-2027'
        }
    };
    const data = content[language];
    return (_jsxs("section", { className: "admission-hero", children: [_jsxs("div", { className: "hero-content", children: [_jsx("h1", { children: data.title }), _jsx("p", { children: data.subtitle }), _jsx("button", { className: "hero-btn", children: data.buttonText })] }), _jsx("div", { className: "hero-decorative" })] }));
};
export default AdmissionHero;
//# sourceMappingURL=AdmissionHero.js.map