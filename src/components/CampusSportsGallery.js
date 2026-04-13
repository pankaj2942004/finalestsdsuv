import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/CampusSportsGallery.css';
const CampusSportsGallery = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Campus Sports Gallery',
            subtitle: 'Sports Events & Athletic Moments',
            description: 'Explore our vibrant sports activities and campus athletic moments captured through our comprehensive sports gallery.',
            categories: [
                {
                    name: 'Cricket',
                    icon: '🏏',
                    count: '45+ Photos',
                    description: 'Cricket tournaments and matches'
                },
                {
                    name: 'Badminton',
                    icon: '🏸',
                    count: '38+ Photos',
                    description: 'Badminton competitions and practice sessions'
                },
                {
                    name: 'Football',
                    icon: '⚽',
                    count: '42+ Photos',
                    description: 'Football matches and tournaments'
                },
                {
                    name: 'Volleyball',
                    icon: '🏐',
                    count: '35+ Photos',
                    description: 'Volleyball games and events'
                },
                {
                    name: 'Table Tennis',
                    icon: '🏓',
                    count: '40+ Photos',
                    description: 'Table tennis competitions'
                },
                {
                    name: 'Athletics',
                    icon: '🏃',
                    count: '50+ Photos',
                    description: 'Track and field athletic events'
                }
            ]
        },
        hi: {
            title: 'कैम्पस खेल गैलरी',
            subtitle: 'खेल कार्यक्रम और एथलेटिक क्षण',
            description: 'हमारी व्यापक खेल गैलरी के माध्यम से हमारी जीवंत खेल गतिविधियों और परिसर एथलेटिक क्षणों का अन्वेषण करें।',
            categories: [
                {
                    name: 'क्रिकेट',
                    icon: '🏏',
                    count: '45+ फोटो',
                    description: 'क्रिकेट टूर्नामेंट और मैच'
                },
                {
                    name: 'बैडमिंटन',
                    icon: '🏸',
                    count: '38+ फोटो',
                    description: 'बैडमिंटन प्रतियोगिताएं और अभ्यास सत्र'
                },
                {
                    name: 'फुटबॉल',
                    icon: '⚽',
                    count: '42+ फोटो',
                    description: 'फुटबॉल मैच और टूर्नामेंट'
                },
                {
                    name: 'वॉलीबॉल',
                    icon: '🏐',
                    count: '35+ फोटो',
                    description: 'वॉलीबॉल गेम और कार्यक्रम'
                },
                {
                    name: 'टेबल टेनिस',
                    icon: '🏓',
                    count: '40+ फोटो',
                    description: 'टेबल टेनिस प्रतियोगिताएं'
                },
                {
                    name: 'एथलेटिक्स',
                    icon: '🏃',
                    count: '50+ फोटो',
                    description: 'ट्रैक और फील्ड एथलेटिक कार्यक्रम'
                }
            ]
        }
    };
    const sportsPhotos = [
        {
            id: 1,
            title: 'Cricket Tournament 2024',
            category: 'Cricket',
            image: '/img/sports-events/image-1773141913736.png',
            date: 'March 2024'
        },
        {
            id: 2,
            title: 'Table Tennis Women Championship',
            category: 'Table Tennis',
            image: '/img/sports-events/table-tennis-women.jpg',
            date: 'February 2024'
        },
        {
            id: 3,
            title: 'Football Championship',
            category: 'Football',
            image: '/img/sports-events/football.png',
            date: 'January 2024'
        },
        {
            id: 4,
            title: 'Badminton Tournament',
            category: 'Badminton',
            image: '/img/sports-events/image-1773141929953.png',
            date: 'December 2023'
        },
        {
            id: 5,
            title: 'Volleyball Women League',
            category: 'Volleyball',
            image: '/img/sports-events/volleyball-women-kashmir.png',
            date: 'November 2023'
        },
        {
            id: 6,
            title: 'Volleyball Men Tournament',
            category: 'Volleyball',
            image: '/img/sports-events/Volleyball Men.png',
            date: 'December 2023'
        },
        {
            id: 7,
            title: 'Kho-Kho Women Championship',
            category: 'Kho-Kho',
            image: '/img/sports-events/kho kho women.png',
            date: 'December 2023'
        },
        {
            id: 8,
            title: 'Athletics Meet 2024',
            category: 'Athletics',
            image: '/img/sports-events/image-1773142007928.png',
            date: 'December 2023'
        },
        {
            id: 9,
            title: 'Women Athletics Championship',
            category: 'Athletics',
            image: '/img/sports-events/women atheletic.png',
            date: 'December 2023'
        }
    ];
    const data = content[language];
    return (_jsxs("div", { className: "sports-gallery-page", children: [_jsxs("div", { className: "sports-gallery-header", children: [_jsxs("button", { className: "back-button", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsx("h1", { children: data.title }), _jsx("p", { className: "sports-gallery-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "sports-gallery-container", children: [_jsx("div", { className: "sports-gallery-description", children: _jsx("p", { children: data.description }) }), _jsxs("div", { className: "sports-photos-section", children: [_jsx("h2", { children: language === 'en' ? 'Photo Gallery' : 'फोटो गैलरी' }), _jsx("div", { className: "sports-photos-grid", children: sportsPhotos.map((photo) => (_jsxs("div", { className: "sports-photo-card", children: [_jsxs("div", { className: "sports-photo-image", children: [_jsx("img", { src: photo.image, alt: photo.title }), _jsx("div", { className: "sports-photo-overlay", children: _jsx("button", { className: "view-full-btn", children: language === 'en' ? 'View' : 'देखें' }) })] }), _jsxs("div", { className: "sports-photo-info", children: [_jsx("h4", { children: photo.title }), _jsx("p", { className: "sports-photo-category", children: photo.category }), _jsx("p", { className: "sports-photo-date", children: photo.date })] })] }, photo.id))) })] })] })] }));
};
export default CampusSportsGallery;
//# sourceMappingURL=CampusSportsGallery.js.map