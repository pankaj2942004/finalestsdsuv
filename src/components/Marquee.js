import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import '../styles/Marquee.css';
const Marquee = ({ language, onItemClick }) => {
    const items = [
        { id: 'college-affiliation', icon: '🏛️', text: 'College Affiliation', shortText: 'College Affiliation' },
        { id: 'ordinance-curriculum', icon: '📋', text: 'Ordinance & Curriculum', shortText: 'Ordinance' },
        { id: 'scholarship', icon: '🎓', text: 'छात्रवृत्ति', shortText: 'Scholarship' },
        { id: 'convocation-medal', icon: '🏆', text: 'Gold Medal List', shortText: 'Convocation' },
        { id: 'phd-merit', icon: '📝', text: 'Ph.D. Merit List', shortText: 'Ph.D. Merit' },
        { id: 'nirf', icon: '⭐', text: 'NIRF', shortText: 'NIRF' },
        { id: 'academic-calendar', icon: '📅', text: 'Academic Calendar', shortText: 'Calendar' },
        { id: 'helpline', icon: '📞', text: 'Helpline +91', shortText: 'Helpline' },
        { id: 'phd-notification', icon: '🔔', text: 'Ph.D Notification', shortText: 'Ph.D' },
        { id: 'exam-sheet', icon: '📊', text: 'Exam Date Sheet', shortText: 'Exam Sheet' },
        { id: 'convocation', icon: '🎉', text: 'Convocation', shortText: 'Convocation' },
        { id: 'university-film', icon: '🎬', text: 'University Film', shortText: 'Film' },
    ];
    React.useEffect(() => {
        console.log('Marquee component mounted');
    }, []);
    const handleClick = (itemId) => {
        if (onItemClick) {
            onItemClick(itemId);
        }
    };
    return (_jsx("div", { className: "marquee-container", children: _jsxs("div", { className: "marquee-content", children: [items.map((item) => (_jsxs("div", { className: "marquee-item", onClick: () => handleClick(item.id), title: item.text, children: [_jsx("span", { className: "marquee-icon", children: item.icon }), _jsx("span", { children: item.shortText })] }, item.id))), items.map((item) => (_jsxs("div", { className: "marquee-item", onClick: () => handleClick(item.id), title: item.text, children: [_jsx("span", { className: "marquee-icon", children: item.icon }), _jsx("span", { children: item.shortText })] }, `${item.id}-dup`)))] }) }));
};
export default Marquee;
//# sourceMappingURL=Marquee.js.map