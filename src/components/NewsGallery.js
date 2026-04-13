import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/NewsGallery.css';
const NewsGallery = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'News Gallery',
            subtitle: 'Latest Updates & Headlines',
            description: 'Stay updated with the latest news, announcements, and important updates from Sri Dev Suman Uttarakhand University.',
            categories: [
                {
                    name: 'Breaking News',
                    icon: '📰',
                    count: '50+ Articles',
                    description: 'Latest breaking news and announcements'
                },
                {
                    name: 'Academic Updates',
                    icon: '📖',
                    count: '45+ Articles',
                    description: 'Academic programs and curriculum updates'
                },
                {
                    name: 'Campus News',
                    icon: '📢',
                    count: '60+ Articles',
                    description: 'Campus events and administrative updates'
                },
                {
                    name: 'Student Stories',
                    icon: '👥',
                    count: '40+ Articles',
                    description: 'Student achievements and success stories'
                },
                {
                    name: 'Research Updates',
                    icon: '🔬',
                    count: '35+ Articles',
                    description: 'Research initiatives and publications'
                },
                {
                    name: 'Announcements',
                    icon: '📣',
                    count: '55+ Articles',
                    description: 'Official announcements and notices'
                }
            ],
            contact: 'Read our latest news and updates'
        },
        hi: {
            title: 'समाचार गैलरी',
            subtitle: 'नवीनतम समाचार और शीर्षक',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय से नवीनतम समाचार, घोषणाएं और महत्वपूर्ण अपडेट के साथ अद्यतन रहें।',
            categories: [
                {
                    name: 'ताजा समाचार',
                    icon: '📰',
                    count: '50+ लेख',
                    description: 'नवीनतम समाचार और घोषणाएं'
                },
                {
                    name: 'शैक्षणिक अपडेट',
                    icon: '📖',
                    count: '45+ लेख',
                    description: 'शैक्षणिक कार्यक्रम और पाठ्यक्रम अपडेट'
                },
                {
                    name: 'परिसर समाचार',
                    icon: '📢',
                    count: '60+ लेख',
                    description: 'परिसर कार्यक्रम और प्रशासनिक अपडेट'
                },
                {
                    name: 'छात्र कहानियां',
                    icon: '👥',
                    count: '40+ लेख',
                    description: 'छात्र उपलब्धियां और सफलता की कहानियां'
                },
                {
                    name: 'अनुसंधान अपडेट',
                    icon: '🔬',
                    count: '35+ लेख',
                    description: 'अनुसंधान पहल और प्रकाशन'
                },
                {
                    name: 'घोषणाएं',
                    icon: '📣',
                    count: '55+ लेख',
                    description: 'आधिकारिक घोषणाएं और नोटिस'
                }
            ],
            contact: 'हमारे नवीनतम समाचार और अपडेट पढ़ें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "news-page", children: [_jsxs("div", { className: "news-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "news-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "news-container", children: [_jsx("div", { className: "news-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "news-section", children: [_jsx("h2", { children: "News Categories" }), _jsx("div", { className: "news-grid", children: data.categories.map((category, index) => (_jsxs("div", { className: "news-card", children: [_jsx("div", { className: "news-icon", children: category.icon }), _jsx("h3", { children: category.name }), _jsx("p", { className: "count", children: category.count }), _jsx("p", { className: "description", children: category.description }), _jsx("button", { className: "read-btn", children: "Read News" })] }, index))) })] })] })] }));
};
export default NewsGallery;
//# sourceMappingURL=NewsGallery.js.map