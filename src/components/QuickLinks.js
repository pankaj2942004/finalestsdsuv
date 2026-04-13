import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/QuickLinks.css';
const QuickLinks = ({ language }) => {
    const quickLinks = [
        {
            id: 1,
            titleEn: 'online examination application form',
            titleHi: 'ऑनलाइन परीक्षा आवेदन फॉर्म',
            icon: 'eye',
            color: '#f5a623',
            url: '#'
        },
        {
            id: 2,
            titleEn: 'online old results',
            titleHi: 'ऑनलाइन पुराने परिणाम',
            icon: 'infinity',
            color: '#2ecc71',
            url: '#'
        },
        {
            id: 3,
            titleEn: 'online results 2023-2024',
            titleHi: 'ऑनलाइन परिणाम 2023-2024',
            icon: 'graduation',
            color: '#e74c3c',
            url: '#'
        },
        {
            id: 4,
            titleEn: 'colleague affiliation portal',
            titleHi: 'सहयोगी संबद्धता पोर्टल',
            icon: 'circle',
            color: '#9b59b6',
            url: '#'
        },
        {
            id: 5,
            titleEn: 'apply online for migration certificate',
            titleHi: 'प्रवासन प्रमाणपत्र के लिए ऑनलाइन आवेदन करें',
            icon: 'migration',
            color: '#3498db',
            url: '#'
        },
        {
            id: 6,
            titleEn: 'apply online',
            titleHi: 'ऑनलाइन आवेदन करें',
            icon: 'star',
            color: '#f39c12',
            url: '#'
        },
        {
            id: 7,
            titleEn: 'student grievance form',
            titleHi: 'छात्र शिकायत फॉर्म',
            icon: 'diamond',
            color: '#1abc9c',
            url: '#'
        },
        {
            id: 8,
            titleEn: 'post graduation syllabus',
            titleHi: 'स्नातकोत्तर पाठ्यक्रम',
            icon: 'video',
            color: '#8e44ad',
            url: '#'
        },
        {
            id: 9,
            titleEn: 'profession syllabus',
            titleHi: 'व्यावसायिक पाठ्यक्रम',
            icon: 'settings',
            color: '#d4a574',
            url: '#'
        },
        {
            id: 10,
            titleEn: 'nep ug syllabus',
            titleHi: 'NEP UG पाठ्यक्रम',
            icon: 'circle-fill',
            color: '#c0392b',
            url: '#'
        },
        {
            id: 11,
            titleEn: 'online rti',
            titleHi: 'ऑनलाइन RTI',
            icon: 'zigzag',
            color: '#e67e22',
            url: '#'
        },
        {
            id: 12,
            titleEn: 'aapplication form for revaluation of answer sheets',
            titleHi: 'उत्तर पत्रों के पुनर्मूल्यांकन के लिए आवेदन पत्र',
            icon: 'sun',
            color: '#27ae60',
            url: '#'
        }
    ];
    const getIcon = (iconName, color) => {
        const iconProps = { className: 'quick-link-icon', fill: color };
        switch (iconName) {
            case 'eye':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }) }));
            case 'infinity':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("path", { d: "M8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-8 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" }) }));
            case 'graduation':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("path", { d: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" }) }));
            case 'circle':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: color, strokeWidth: "2" }) }));
            case 'migration':
                return (_jsxs("svg", { viewBox: "0 0 24 24", ...iconProps, children: [_jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" }), _jsx("path", { d: "M12 19l-2-2m2 2l2-2m-2 2v-5", stroke: color, fill: "none", strokeWidth: "2" })] }));
            case 'star':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }));
            case 'diamond':
                return (_jsxs("svg", { viewBox: "0 0 24 24", ...iconProps, children: [_jsx("path", { d: "M12 2L2 8v8l10 6 10-6V8l-10-6z" }), _jsx("line", { x1: "2", y1: "8", x2: "12", y2: "14", stroke: color, fill: "none", strokeWidth: "2" }), _jsx("line", { x1: "22", y1: "8", x2: "12", y2: "14", stroke: color, fill: "none", strokeWidth: "2" }), _jsx("line", { x1: "12", y1: "14", x2: "12", y2: "20", stroke: color, fill: "none", strokeWidth: "2" })] }));
            case 'video':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("path", { d: "M8 5v14l11-7z" }) }));
            case 'settings':
                return (_jsxs("svg", { viewBox: "0 0 24 24", ...iconProps, children: [_jsx("circle", { cx: "12", cy: "12", r: "3" }), _jsx("path", { d: "M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24", stroke: color, fill: "none", strokeWidth: "2" })] }));
            case 'circle-fill':
                return (_jsx("svg", { viewBox: "0 0 24 24", ...iconProps, children: _jsx("circle", { cx: "12", cy: "12", r: "10" }) }));
            case 'zigzag':
                return (_jsxs("svg", { viewBox: "0 0 24 24", ...iconProps, children: [_jsx("polyline", { points: "2 6 8 12 2 18 8 24", fill: "none", stroke: color, strokeWidth: "2" }), _jsx("polyline", { points: "14 6 20 12 14 18 20 24", fill: "none", stroke: color, strokeWidth: "2" })] }));
            case 'sun':
                return (_jsxs("svg", { viewBox: "0 0 24 24", ...iconProps, children: [_jsx("circle", { cx: "12", cy: "12", r: "5" }), _jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36", stroke: color, strokeWidth: "2" }), _jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22", stroke: color, strokeWidth: "2" })] }));
            default:
                return null;
        }
    };
    return (_jsx("div", { className: "quick-links", children: _jsxs("div", { className: "quick-links-container", children: [_jsxs("div", { className: "quick-links-title", children: [_jsx("h2", { children: language === 'en' ? 'Quick Links' : 'त्वरित लिंक' }), _jsx("p", { children: language === 'en' ? 'Access important resources and information quickly' : 'महत्वपूर्ण संसाधनों और जानकारी तक शीघ्रता से पहुंचें' })] }), _jsx("div", { className: "quick-links-grid", children: quickLinks.map((link) => (_jsxs("a", { href: link.url, className: `quick-link-card ${link.hasBorder ? 'with-border' : ''}`, style: {
                            '--card-color': link.color,
                            '--card-color-light': link.color + '33'
                        }, children: [_jsx("div", { className: "quick-link-icon-wrapper", children: getIcon(link.icon, 'white') }), _jsx("span", { className: "quick-link-text", children: language === 'en' ? link.titleEn : link.titleHi })] }, link.id))) })] }) }));
};
export default QuickLinks;
//# sourceMappingURL=QuickLinks.js.map