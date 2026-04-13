import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/DatesheetSyllabus.css';
const DatesheetSyllabus = ({ language }) => {
    const cards = [
        {
            id: 1,
            titleEn: 'Datesheet',
            titleHi: 'परीक्षा कार्यक्रम',
            icon: 'checkmark',
            items: [
                {
                    id: 1,
                    labelEn: 'SEMESTER EXAMS',
                    labelHi: 'सेमेस्टर परीक्षा',
                    descriptionEn: 'Upcoming examination schedules for all UG and PG programs',
                    descriptionHi: 'सभी यूजी और पीजी कार्यक्रमों के लिए आने वाली परीक्षा का शेड्यूल',
                    icon: 'calendar'
                },
                {
                    id: 2,
                    labelEn: 'EXAM TIMING',
                    labelHi: 'परीक्षा का समय',
                    descriptionEn: 'Morning & Evening sessions available',
                    descriptionHi: 'सुबह और शाम के सत्र उपलब्ध',
                    icon: 'clock'
                },
                {
                    id: 3,
                    labelEn: 'EXAM CENTERS',
                    labelHi: 'परीक्षा केंद्र',
                    descriptionEn: 'Multiple centers across the campus',
                    descriptionHi: 'परिसर में कई केंद्र',
                    icon: 'location'
                }
            ],
            buttonTextEn: 'Download Datesheet',
            buttonTextHi: 'परीक्षा कार्यक्रम डाउनलोड करें'
        },
        {
            id: 2,
            titleEn: 'Syllabus',
            titleHi: 'पाठ्यक्रम',
            icon: 'book',
            items: [
                {
                    id: 1,
                    labelEn: 'ACADEMIC CURRICULUM',
                    labelHi: 'शैक्षणिक पाठ्यक्रम',
                    descriptionEn: 'Detailed course structures for all programs',
                    descriptionHi: 'सभी कार्यक्रमों के लिए विस्तृत पाठ्यक्रम संरचना',
                    icon: 'curriculum'
                },
                {
                    id: 2,
                    labelEn: 'LEARNING OUTCOMES',
                    labelHi: 'सीखने के परिणाम',
                    descriptionEn: 'Course objectives and assessment criteria',
                    descriptionHi: 'पाठ्यक्रम उद्देश्य और मूल्यांकन मानदंड',
                    icon: 'graduation'
                },
                {
                    id: 3,
                    labelEn: 'UPDATED 2025',
                    labelHi: '2025 में अद्यतन',
                    descriptionEn: 'Latest syllabus as per university standards',
                    descriptionHi: 'विश्वविद्यालय के मानकों के अनुसार नवीनतम पाठ्यक्रम',
                    icon: 'checkmark'
                }
            ],
            buttonTextEn: 'Download Syllabus',
            buttonTextHi: 'पाठ्यक्रम डाउनलोड करें'
        },
        {
            id: 3,
            titleEn: 'Tender',
            titleHi: 'निविदा',
            icon: 'briefcase',
            items: [
                {
                    id: 1,
                    labelEn: 'ACTIVE TENDERS',
                    labelHi: 'सक्रिय निविदा',
                    descriptionEn: 'Current procurement opportunities and bids',
                    descriptionHi: 'वर्तमान खरीद के अवसर और बोलियां',
                    icon: 'briefcase'
                },
                {
                    id: 2,
                    labelEn: 'TENDER DOCUMENTS',
                    labelHi: 'निविदा दस्तावेज',
                    descriptionEn: 'Complete bid guidelines and specifications',
                    descriptionHi: 'पूर्ण बोली दिशानिर्देश और विनिर्देश',
                    icon: 'document'
                },
                {
                    id: 3,
                    labelEn: 'DEADLINE INFO',
                    labelHi: 'समय सीमा की जानकारी',
                    descriptionEn: 'Important dates and submission deadlines',
                    descriptionHi: 'महत्वपूर्ण तारीखें और प्रस्तुतिकरण समय सीमा',
                    icon: 'bell'
                }
            ],
            buttonTextEn: 'View Tenders',
            buttonTextHi: 'निविदा देखें'
        }
    ];
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'checkmark':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "card-icon", children: _jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z", fill: "currentColor" }) }));
            case 'book':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "card-icon", children: _jsx("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16z", fill: "currentColor" }) }));
            case 'briefcase':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "card-icon", children: _jsx("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1h-5C6.5 3 4 5.5 4 8.5V19c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-1 11h-4v4h-4v-4H5V8c0-.82.68-1.5 1.5-1.5h2c.82 0 1.5.68 1.5 1.5v2h2v-2c0-.82.68-1.5 1.5-1.5h2c.82 0 1.5.68 1.5 1.5v9z", fill: "currentColor" }) }));
            case 'calendar':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z", fill: "currentColor" }) }));
            case 'clock':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", fill: "currentColor" }) }));
            case 'location':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z", fill: "currentColor" }) }));
            case 'curriculum':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-4v4h-4v-4H7V4h12v10z", fill: "currentColor" }) }));
            case 'graduation':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M12 1L3 6v3h2v13h14V9h2V6l-9-5zm8 16h-4v-4h-8v4H4V9l8-4 8 4v8z", fill: "currentColor" }) }));
            case 'document':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 16H7v-2h6v2zm3-4H7v-2h9v2zm0-4H7V7h9v3z", fill: "currentColor" }) }));
            case 'bell':
                return (_jsx("svg", { viewBox: "0 0 24 24", className: "info-icon", children: _jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z", fill: "currentColor" }) }));
            default:
                return null;
        }
    };
    return (_jsx("div", { className: "datesheet-syllabus", children: _jsxs("div", { className: "datesheet-container", children: [_jsx("h2", { className: "datesheet-title", children: language === 'en' ? 'DATESHEET & SYLLABUS' : 'परीक्षा कार्यक्रम और पाठ्यक्रम' }), _jsx("div", { className: "datesheet-grid", children: cards.map((card) => (_jsxs("div", { className: "info-card", children: [_jsxs("div", { className: "card-header", children: [_jsx("span", { className: "card-icon-wrapper", children: getIcon(card.icon) }), _jsx("h3", { children: language === 'en' ? card.titleEn : card.titleHi })] }), _jsx("div", { className: "card-body", children: card.items.map((item) => (_jsxs("div", { className: "info-item", children: [_jsx("div", { className: "item-icon-wrapper", children: getIcon(item.icon) }), _jsxs("div", { className: "item-content", children: [_jsx("div", { className: "item-label", children: language === 'en' ? item.labelEn : item.labelHi }), _jsx("div", { className: "item-description", children: language === 'en' ? item.descriptionEn : item.descriptionHi })] })] }, item.id))) }), _jsx("div", { className: "card-footer", children: _jsxs("button", { className: "card-button", children: ["\u2193 ", language === 'en' ? card.buttonTextEn : card.buttonTextHi] }) })] }, card.id))) })] }) }));
};
export default DatesheetSyllabus;
//# sourceMappingURL=DatesheetSyllabus.js.map