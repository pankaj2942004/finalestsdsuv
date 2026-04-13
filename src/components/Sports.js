import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/Sports.css';
const Sports = ({ language, onBack, onHome }) => {
    const sportsEvents = [
        {
            id: 1,
            sport: 'Table Tennis',
            category: 'Women',
            organizingUniversity: 'University of Delhi',
            dates: '28 Dec 2022 to 04 Jan 2023',
            imagePlaceholder: 'table-tennis-women',
            image: '/img/sports-events/table-tennis-women.jpg'
        },
        {
            id: 2,
            sport: 'Cricket',
            category: 'Men',
            organizingUniversity: 'Kurukshetra University, Kurukshetra',
            dates: '26 Feb to 03 Mar 2023',
            imagePlaceholder: 'cricket-men',
            image: '/img/sports-events/image-1773141913736.png'
        },
        {
            id: 3,
            sport: 'Kho-Kho',
            category: 'Men',
            organizingUniversity: 'Chaudhry Charan Singh University, Meerut',
            dates: '05 Apr to 16 Apr 2023',
            imagePlaceholder: 'khokho-men',
            image: '/img/sports-events/image-1773141919971.png'
        },
        {
            id: 4,
            sport: 'Badminton',
            category: 'Men',
            organizingUniversity: 'Chitkara University, Punjab',
            dates: '24 Nov to 29 Nov 2023',
            imagePlaceholder: 'badminton-men',
            image: '/img/sports-events/image-1773141929953.png'
        },
        {
            id: 5,
            sport: 'Volleyball',
            category: 'Women',
            organizingUniversity: 'University of Kashmir',
            dates: '30 Oct to 03 Nov 2023',
            imagePlaceholder: 'volleyball-women',
            image: '/img/sports-events/volleyball-women-kashmir.png'
        },
        {
            id: 6,
            sport: 'Volleyball',
            category: 'Men',
            organizingUniversity: 'Kurukshetra University',
            dates: '12 Dec to 16 Dec 2023',
            imagePlaceholder: 'volleyball-men',
            image: '/img/sports-events/Volleyball Men.png'
        },
        {
            id: 7,
            sport: 'Kho-Kho',
            category: 'Women',
            organizingUniversity: 'L.P.U Jalandher',
            dates: '16 Dec to 19 Dec 2023',
            imagePlaceholder: 'khokho-women',
            image: '/img/sports-events/kho kho women.png'
        },
        {
            id: 8,
            sport: 'Football',
            category: 'Men',
            organizingUniversity: 'G.N.A University Phagwara',
            dates: '18 Dec to 26 Dec 2023',
            imagePlaceholder: 'football-men',
            image: '/img/sports-events/football.png'
        },
        {
            id: 9,
            sport: 'Table Tennis',
            category: 'Women',
            organizingUniversity: 'Netaji Subhash University & Tech Delhi',
            dates: '23 Dec to 25 Dec 2023',
            imagePlaceholder: 'table-tennis-women-2',
            image: '/img/sports-events/image-1773141995406.png'
        },
        {
            id: 10,
            sport: 'Athletics',
            category: 'Men',
            organizingUniversity: 'K.I.I.T Bhubneshwer, Odisha',
            dates: '23 Dec to 25 Dec 2023',
            imagePlaceholder: 'athletics-men',
            image: '/img/sports-events/image-1773142007928.png'
        },
        {
            id: 11,
            sport: 'Athletics',
            category: 'Women',
            organizingUniversity: 'K.I.I.T Bhubneshwer, Odisha',
            dates: '23 Dec to 25 Dec 2023',
            imagePlaceholder: 'athletics-women',
            image: '/img/sports-events/women atheletic.png'
        }
    ];
    return (_jsxs("div", { className: "sports-page", children: [_jsxs("div", { className: "navigation-buttons", children: [_jsxs("button", { className: "back-button", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsxs("button", { className: "home-button", onClick: onHome || onBack, children: ["\uD83C\uDFE0 ", language === 'en' ? 'Home' : 'होम'] })] }), _jsxs("div", { className: "sports-container", children: [_jsxs("div", { className: "sports-header", children: [_jsx("h1", { children: language === 'en' ? 'Sri Dev Suman Uttrakhand University - Sports Events' : 'श्री देव सुमन उत्तरखण्ड विश्वविद्यालय - खेल इवेंट्स' }), _jsx("p", { children: language === 'en' ? 'University Sports Events and Tournaments' : 'विश्वविद्यालय खेल इवेंट्स और टूर्नामेंट्स' })] }), _jsxs("div", { className: "sports-events-section", children: [_jsx("h2", { children: language === 'en' ? 'Upcoming & Recent Events' : 'आने वाली और हाल की इवेंट्स' }), _jsx("div", { className: "events-grid", children: sportsEvents.map((event) => (_jsxs("div", { className: "event-card", children: [_jsx("div", { className: "event-image-placeholder", children: event.image ? (_jsx("img", { src: event.image, alt: `${event.sport} ${event.category}` })) : (_jsxs("div", { className: "image-placeholder-content", children: [_jsx("span", { className: "placeholder-icon", children: "\uD83D\uDCF8" }), _jsxs("p", { className: "placeholder-text", children: [event.sport, " ", event.category] })] })) }), _jsxs("div", { className: "event-content", children: [_jsxs("h3", { className: "event-headline", children: ["Sri Dev Suman Uttrakhand University (", event.sport, " ", event.category, ")"] }), _jsxs("div", { className: "event-details", children: [_jsxs("div", { className: "detail-item", children: [_jsx("span", { className: "detail-label", children: language === 'en' ? 'Organizing University:' : 'आयोजन विश्वविद्यालय:' }), _jsx("span", { className: "detail-value", children: event.organizingUniversity })] }), _jsxs("div", { className: "detail-item", children: [_jsx("span", { className: "detail-label", children: language === 'en' ? 'Dates:' : 'तारीखें:' }), _jsx("span", { className: "detail-value", children: event.dates })] })] })] })] }, event.id))) })] })] })] }));
};
export default Sports;
//# sourceMappingURL=Sports.js.map