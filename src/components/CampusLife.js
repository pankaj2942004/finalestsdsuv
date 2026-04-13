import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/CampusLife.css';
const CampusLife = ({ language, setCurrentPage }) => {
    const cards = [
        {
            id: 1,
            titleEn: 'Sports',
            titleHi: 'खेल',
            image: '/img/campus-life/sports.jpg.png',
            page: 'sports'
        },
        {
            id: 2,
            titleEn: 'Cultural',
            titleHi: 'सांस्कृतिक',
            image: '/img/campus-life/cultural.jpg.jpg',
            page: 'cultural'
        },
        {
            id: 3,
            titleEn: 'Academics',
            titleHi: 'शिक्षा',
            image: '/img/campus-life/academics.jpg.jpg',
            page: 'academics'
        }
    ];
    const importantLinks = [
        {
            id: 1,
            textEn: 'UP State Universities Act',
            textHi: 'यूपी राज्य विश्वविद्यालय अधिनियम',
            url: '#',
            page: 'up-state-universities-act'
        },
        {
            id: 2,
            textEn: 'Information Regarding RTI Act',
            textHi: 'RTI अधिनियम के संबंध में जानकारी',
            url: '#',
            page: 'rti-act'
        },
        {
            id: 3,
            textEn: 'Internal Quality Assurance Cell',
            textHi: 'आंतरिक गुणवत्ता आश्वासन सेल',
            url: '#',
            page: 'iqac'
        },
        {
            id: 4,
            textEn: 'Startup Cell & Incubation Center',
            textHi: 'स्टार्टअप सेल और इनक्यूबेशन सेंटर',
            url: '#',
            page: 'startup-cell'
        },
        {
            id: 5,
            textEn: 'IT Policy 2022',
            textHi: 'IT नीति 2022',
            url: '#',
            page: 'it-policy'
        },
        {
            id: 6,
            textEn: 'IPR Policy 2022',
            textHi: 'IPR नीति 2022',
            url: '#',
            page: 'ipr-policy'
        },
        {
            id: 7,
            textEn: 'Ph.D. / D.Litt.',
            textHi: 'पीएच.डी. / डी.लिट्.',
            url: '#',
            page: 'phd-dlitt'
        }
    ];
    const handleCardClick = (page) => {
        if (page && setCurrentPage) {
            setCurrentPage(page);
        }
    };
    return (_jsx("div", { className: "campus-life", children: _jsxs("div", { className: "campus-container", children: [_jsxs("div", { className: "campus-header", children: [_jsx("h2", { children: language === 'en' ? 'CAMPUS LIFE' : 'कैम्पस जीवन' }), _jsx("p", { children: language === 'en' ? 'A vibrant hub for innovation & creativity' : 'नवाचार और रचनात्मकता के लिए एक जीवंत केंद्र' })] }), _jsxs("div", { className: "campus-grid", children: [cards.map((card) => (_jsxs("div", { className: "campus-card", onClick: () => handleCardClick(card.page), children: [_jsx("div", { className: "card-header", children: language === 'en' ? card.titleEn : card.titleHi }), _jsx("div", { className: "card-image", children: _jsx("img", { src: card.image, alt: language === 'en' ? card.titleEn : card.titleHi }) }), _jsx("div", { className: "card-footer", children: _jsx("span", { className: "view-more", children: language === 'en' ? 'VIEW MORE' : 'और अधिक देखें' }) })] }, card.id))), _jsxs("div", { className: "campus-card links-card", children: [_jsx("div", { className: "card-header", children: language === 'en' ? 'Important Links' : 'महत्वपूर्ण लिंक' }), _jsx("div", { className: "links-content", children: importantLinks.map((link) => (_jsx("button", { className: "important-link", onClick: () => link.page && setCurrentPage(link.page), children: language === 'en' ? link.textEn : link.textHi }, link.id))) })] })] })] }) }));
};
export default CampusLife;
//# sourceMappingURL=CampusLife.js.map