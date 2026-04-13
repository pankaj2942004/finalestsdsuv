import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/DetailPage.css';
const AllNewsPage = ({ language, onBack }) => {
    const allNews = {
        en: [
            {
                date: 'JANUARY 20, 2026',
                label: 'ANNOUNCEMENT',
                title: 'Admission Portal Now Open',
                content: 'The admission portal for the 2026-2027 academic session is now live. Students can register and apply for various undergraduate and postgraduate programs. Last date for applications: March 31, 2026.'
            },
            {
                date: 'JANUARY 18, 2026',
                label: 'NOTICE',
                title: 'Campus Closed for Republic Day',
                content: 'The university campus will remain closed on January 26, 2026 for Republic Day celebrations. All offices and facilities will be closed. Normal operations will resume on January 27, 2026.'
            },
            {
                date: 'JANUARY 15, 2026',
                label: 'ANNOUNCEMENT',
                title: 'Research Grant Applications Open',
                content: 'The university is inviting applications for the new research grants program. Deadline for submissions is February 28, 2026. Visit the research office for details and application forms.'
            },
            {
                date: 'JANUARY 12, 2026',
                label: 'NOTICE',
                title: 'Library Renovation Update',
                content: 'The main library renovation is progressing as scheduled. Phase 2 will be completed by end of January. Students can access the temporary reading room on Floor 2.'
            },
            {
                date: 'JANUARY 10, 2026',
                label: 'EVENT',
                title: 'Spring Semester Starts',
                content: 'Welcome to the Spring 2026 semester! All students are requested to report to their respective departments by 9:00 AM. Orientation will commence immediately after registration.'
            },
            {
                date: 'JANUARY 5, 2026',
                label: 'ANNOUNCEMENT',
                title: 'Pre-Bid Meeting for Book Purchase',
                content: 'Meeting scheduled for January 5, 2026 at 11:00 AM at the university headquarters. All participants are required to attend. Agenda will be shared one day before.'
            },
            {
                date: 'DECEMBER 28, 2025',
                label: 'NOTICE',
                title: 'Revised Holiday Calendar Released',
                content: 'The revised holiday calendar for 2026 has been released. All students and staff can access it from the university portal. Key holidays: Independence Day, Diwali, and Winter Breaks.'
            },
            {
                date: 'DECEMBER 20, 2025',
                label: 'EVENT',
                title: 'Year-End Convocation Ceremony',
                content: 'The University held its annual convocation ceremony on December 20, 2025. Outstanding performers were felicitated and scholarships were distributed to deserving students.'
            },
            {
                date: 'DECEMBER 15, 2025',
                label: 'ANNOUNCEMENT',
                title: 'Faculty Recruitment Drive',
                content: 'The university is seeking applications for various faculty positions. Positions are open in Science, Arts, and Commerce streams. Interested candidates can apply through the HR portal.'
            },
            {
                date: 'DECEMBER 10, 2025',
                label: 'NOTICE',
                title: 'Semester Exam Schedule Released',
                content: 'The schedule for end-semester examinations has been released. All students are advised to check their exam center allotment on the university portal immediately.'
            }
        ],
        hi: [
            {
                date: '20 जनवरी, 2026',
                label: 'घोषणा',
                title: 'प्रवेश पोर्टल अब खुला है',
                content: '2026-2027 शैक्षणिक सत्र के लिए प्रवेश पोर्टल अब लाइव है। छात्र विभिन्न स्नातक और स्नातकोत्तर कार्यक्रमों के लिए पंजीकरण और आवेदन कर सकते हैं। आवेदन की अंतिम तारीख: 31 मार्च, 2026।'
            },
            {
                date: '18 जनवरी, 2026',
                label: 'सूचना',
                title: 'गणतंत्र दिवस के लिए परिसर बंद',
                content: 'विश्वविद्यालय परिसर 26 जनवरी, 2026 को गणतंत्र दिवस समारोह के लिए बंद रहेगा। सभी कार्यालय और सुविधाएं बंद रहेंगी। सामान्य संचालन 27 जनवरी को फिर से शुरू होगा।'
            },
            {
                date: '15 जनवरी, 2026',
                label: 'घोषणा',
                title: 'अनुसंधान अनुदान आवेदन खुले',
                content: 'विश्वविद्यालय नई अनुसंधान अनुदान कार्यक्रम के लिए आवेदन आमंत्रित कर रहा है। जमा करने की समय सीमा 28 फरवरी, 2026 है। विवरण के लिए अनुसंधान कार्यालय देखें।'
            },
            {
                date: '12 जनवरी, 2026',
                label: 'सूचना',
                title: 'पुस्तकालय नवीकरण अपडेट',
                content: 'मुख्य पुस्तकालय नवीकरण अनुसूची के अनुसार आगे बढ़ रहा है। चरण 2 जनवरी के अंत तक पूरा हो जाएगा। छात्र मंजिल 2 पर अस्थायी पढ़ने के कमरे का उपयोग कर सकते हैं।'
            },
            {
                date: '10 जनवरी, 2026',
                label: 'कार्यक्रम',
                title: 'वसंत सेमेस्टर शुरू होता है',
                content: 'वसंत 2026 सेमेस्टर में आपका स्वागत है! सभी छात्रों से अनुरोध है कि 9:00 बजे अपने संबंधित विभागों में रिपोर्ट करें। अभिविन्यास तुरंत शुरू होगा।'
            },
            {
                date: '5 जनवरी, 2026',
                label: 'घोषणा',
                title: 'पुस्तक खरीद के लिए प्री-बिड मीटिंग',
                content: '5 जनवरी, 2026 को सुबह 11:00 बजे विश्वविद्यालय मुख्यालय में बैठक का आयोजन किया जाएगा। सभी प्रतिभागियों के लिए उपस्थित होना आवश्यक है।'
            },
            {
                date: '28 दिसंबर, 2025',
                label: 'सूचना',
                title: 'संशोधित छुट्टी कैलेंडर जारी',
                content: '2026 के लिए संशोधित छुट्टी कैलेंडर जारी किया गया है। सभी छात्र और कर्मचारी इसे विश्वविद्यालय पोर्टल से प्राप्त कर सकते हैं।'
            },
            {
                date: '20 दिसंबर, 2025',
                label: 'कार्यक्रम',
                title: 'वर्ष-अंत दीक्षांत समारोह',
                content: 'विश्वविद्यालय ने 20 दिसंबर, 2025 को अपना वार्षिक दीक्षांत समारोह आयोजित किया। असाधारण प्रदर्शन करने वालों को सम्मानित किया गया।'
            },
            {
                date: '15 दिसंबर, 2025',
                label: 'घोषणा',
                title: 'संकाय भर्ती ड्राइव',
                content: 'विश्वविद्यालय विभिन्न संकाय पदों के लिए आवेदन चाहता है। विज्ञान, कला और वाणिज्य धाराओं में पद खाली हैं।'
            },
            {
                date: '10 दिसंबर, 2025',
                label: 'सूचना',
                title: 'सेमेस्टर परीक्षा कार्यक्रम जारी',
                content: 'अंत-सेमेस्टर परीक्षाओं के लिए कार्यक्रम जारी किया गया है। सभी छात्रों को विश्वविद्यालय पोर्टल पर अपना परीक्षा केंद्र आवंटन देखने की सलाह दी जाती है।'
            }
        ]
    };
    const newsData = allNews[language];
    return (_jsxs("div", { className: "detail-page", children: [_jsxs("div", { className: "detail-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: language === 'en' ? 'All News & Announcements' : 'सभी समाचार और घोषणाएं' })] }), _jsx("div", { className: "detail-content news-full-content", children: newsData.map((newsItem, index) => (_jsxs("div", { className: "news-full-item", children: [_jsxs("div", { className: "news-header", children: [_jsx("span", { className: "news-date", children: newsItem.date }), _jsx("span", { className: `news-label ${newsItem.label.toLowerCase()}`, children: newsItem.label })] }), _jsx("h3", { className: "news-title", children: newsItem.title }), _jsx("p", { className: "news-text", children: newsItem.content }), _jsx("hr", { className: "news-divider" })] }, index))) })] }));
};
export default AllNewsPage;
//# sourceMappingURL=AllNewsPage.js.map