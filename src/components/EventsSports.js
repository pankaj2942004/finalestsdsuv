import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/EventsSports.css';
const EventsSports = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Sports & Athletics Events',
            subtitle: 'Excellence in Sports',
            description: 'Sri Dev Suman Uttarakhand University promotes sports and athletics through various competitions, tournaments, and training programs.',
            categories: [
                {
                    name: 'Inter-College Sports',
                    icon: '🏅',
                    count: '15+ Events',
                    description: 'Inter-college sports competitions'
                },
                {
                    name: 'Intra-Mural Games',
                    icon: '⚽',
                    count: '20+ Events',
                    description: 'Internal campus sports events'
                },
                {
                    name: 'Athletic Meets',
                    icon: '🏃',
                    count: '8+ Meets',
                    description: 'Track and field competitions'
                },
                {
                    name: 'Sports Coaching',
                    icon: '👨‍🏫',
                    count: '12+ Coaches',
                    description: 'Professional sports coaching programs'
                },
                {
                    name: 'Tournaments',
                    icon: '🏆',
                    count: '18+ Events',
                    description: 'Regular tournaments and championships'
                },
                {
                    name: 'Sports Fest',
                    icon: '🎉',
                    count: '3+ Annual',
                    description: 'Annual sports festival celebrations'
                }
            ],
            contact: 'Participate in our sports events'
        },
        hi: {
            title: 'खेल और एथलेटिक्स कार्यक्रम',
            subtitle: 'खेल में उत्कृष्टता',
            description: 'श्री देव सुमन उत्तरांचल विश्वविद्यालय विभिन्न प्रतियोगिताओं, टूर्नामेंटों और प्रशिक्षण कार्यक्रमों के माध्यम से खेल और एथलेटिक्स को बढ़ावा देता है।',
            categories: [
                {
                    name: 'अंतर-कॉलेज खेल',
                    icon: '🏅',
                    count: '15+ कार्यक्रम',
                    description: 'अंतर-कॉलेज खेल प्रतियोगिताएं'
                },
                {
                    name: 'इंट्रा-म्यूरल गेम्स',
                    icon: '⚽',
                    count: '20+ कार्यक्रम',
                    description: 'आंतरिक परिसर खेल कार्यक्रम'
                },
                {
                    name: 'एथलेटिक मीट',
                    icon: '🏃',
                    count: '8+ मीट',
                    description: 'ट्रैक और फील्ड प्रतियोगिताएं'
                },
                {
                    name: 'खेल प्रशिक्षण',
                    icon: '👨‍🏫',
                    count: '12+ प्रशिक्षक',
                    description: 'व्यावसायिक खेल प्रशिक्षण कार्यक्रम'
                },
                {
                    name: 'टूर्नामेंट',
                    icon: '🏆',
                    count: '18+ कार्यक्रम',
                    description: 'नियमित टूर्नामेंट और चैंपियनशिप'
                },
                {
                    name: 'स्पोर्ट्स फेस्ट',
                    icon: '🎉',
                    count: '3+ वार्षिक',
                    description: 'वार्षिक खेल महोत्सव समारोह'
                }
            ],
            contact: 'हमारे खेल कार्यक्रमों में भाग लें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "events-sports-page", children: [_jsxs("div", { className: "events-sports-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "events-sports-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "events-sports-container", children: [_jsx("div", { className: "events-sports-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "events-sports-section", children: [_jsx("h2", { children: "Sports Categories" }), _jsx("div", { className: "events-sports-grid", children: data.categories.map((category, index) => (_jsxs("div", { className: "events-sports-card", children: [_jsx("div", { className: "events-sports-icon", children: category.icon }), _jsx("h3", { children: category.name }), _jsx("p", { className: "count", children: category.count }), _jsx("p", { className: "description", children: category.description }), _jsx("button", { className: "participate-btn", children: "Get Involved" })] }, index))) })] })] })] }));
};
export default EventsSports;
//# sourceMappingURL=EventsSports.js.map