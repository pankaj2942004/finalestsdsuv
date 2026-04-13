import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/LatestUpdates.css';
const LatestUpdates = ({ language, onViewMore }) => {
    const content = {
        en: {
            title: 'Latest News',
            subtitle: 'Stay informed with our recent announcements',
            news: [
                {
                    date: 'JANUARY 5, 2026',
                    label: 'ANNOUNCEMENT',
                    newsTitle: 'Pre-Bid Meeting for Book Purchase',
                    newsContent: 'Meeting scheduled for January 5, 2026 at 11:00 AM at the university headquarters. All participants are required to attend'
                },
                {
                    date: 'JANUARY 10, 2026',
                    label: 'EVENT',
                    newsTitle: 'Spring Semester Starts',
                    newsContent: 'Welcome to the Spring 2026 semester! All students are requested to report to their respective departments by 9:00 AM. Orientation will commence immediately.'
                },
                {
                    date: 'JANUARY 12, 2026',
                    label: 'NOTICE',
                    newsTitle: 'Library Renovation Update',
                    newsContent: 'The main library renovation is progressing as scheduled. Phase 2 will be completed by end of January. Students can access the temporary reading room on Floor 2.'
                },
                {
                    date: 'JANUARY 15, 2026',
                    label: 'ANNOUNCEMENT',
                    newsTitle: 'Research Grant Applications Open',
                    newsContent: 'The university is inviting applications for the new research grants program. Deadline for submissions is February 28, 2026. Visit the research office for details.'
                }
            ]
        },
        hi: {
            title: 'नवीनतम समाचार',
            subtitle: 'हमारी हाल की घोषणाओं के साथ सूचित रहें',
            news: [
                {
                    date: '5 जनवरी, 2026',
                    label: 'घोषणा',
                    newsTitle: 'पुस्तक खरीद के लिए प्री-बिड मीटिंग',
                    newsContent: '5 जनवरी, 2026 को सुबह 11:00 बजे विश्वविद्यालय मुख्यालय में बैठक का आयोजन किया जाएगा। सभी प्रतिभागियों के लिए उपस्थित होना आवश्यक है'
                },
                {
                    date: '10 जनवरी, 2026',
                    label: 'कार्यक्रम',
                    newsTitle: 'वसंत सेमेस्टर शुरू होता है',
                    newsContent: 'वसंत 2026 सेमेस्टर में आपका स्वागत है! सभी छात्रों से अनुरोध है कि 9:00 बजे अपने संबंधित विभागों में रिपोर्ट करें। अभिविन्यास तुरंत शुरू होगा।'
                },
                {
                    date: '12 जनवरी, 2026',
                    label: 'सूचना',
                    newsTitle: 'पुस्तकालय नवीकरण अपडेट',
                    newsContent: 'मुख्य पुस्तकालय नवीकरण अनुसूची के अनुसार आगे बढ़ रहा है। चरण 2 जनवरी के अंत तक पूरा हो जाएगा। छात्र मंजिल 2 पर अस्थायी पढ़ने के कमरे का उपयोग कर सकते हैं।'
                },
                {
                    date: '15 जनवरी, 2026',
                    label: 'घोषणा',
                    newsTitle: 'अनुसंधान अनुदान आवेदन खुले',
                    newsContent: 'विश्वविद्यालय नई अनुसंधान अनुदान कार्यक्रम के लिए आवेदन आमंत्रित कर रहा है। जमा करने की समय सीमा 28 फरवरी, 2026 है। विवरण के लिए अनुसंधान कार्यालय देखें।'
                }
            ]
        }
    };
    const data = content[language];
    return (_jsxs("section", { className: "latest-updates", children: [_jsxs("div", { className: "updates-header", children: [_jsx("h3", { className: "updates-title", children: data.title }), _jsx("p", { className: "updates-subtitle", children: data.subtitle })] }), _jsx("div", { className: "announcement-cards-container", children: data.news.map((newsItem, index) => (_jsxs("div", { className: "announcement-card", children: [_jsxs("div", { className: "card-meta", children: [_jsx("span", { className: "date", children: newsItem.date }), _jsx("span", { className: "label", children: newsItem.label })] }), _jsx("h4", { className: "card-title", children: newsItem.newsTitle }), _jsx("p", { className: "card-content", children: newsItem.newsContent })] }, index))) }), onViewMore && (_jsx("div", { className: "view-more-container", children: _jsx("button", { className: "view-more-btn", onClick: onViewMore, children: language === 'en' ? 'View All News' : 'सभी समाचार देखें' }) }))] }));
};
export default LatestUpdates;
//# sourceMappingURL=LatestUpdates.js.map