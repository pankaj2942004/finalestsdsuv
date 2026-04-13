import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/AboutUsHeader.css';
const AboutUsHeader = ({ language }) => {
    const content = {
        en: {
            title: 'About Us',
            universityName: 'Sri Dev Suman Uttarakhand University'
        },
        hi: {
            title: 'हमारे बारे में',
            universityName: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय'
        }
    };
    const data = content[language];
    return (_jsx("div", { className: "about-us-header", children: _jsxs("div", { className: "header-content", children: [_jsx("h1", { className: "header-title", children: data.title }), _jsx("p", { className: "header-subtitle", children: data.universityName })] }) }));
};
export default AboutUsHeader;
//# sourceMappingURL=AboutUsHeader.js.map