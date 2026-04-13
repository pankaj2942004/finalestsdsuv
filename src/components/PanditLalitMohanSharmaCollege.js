import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/PanditLalitMohanSharmaCollege.css';
const PanditLalitMohanSharmaCollege = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Pandit Lalit Mohan Sharma PG College',
            subtitle: 'Government Postgraduate Institution',
            description: 'A premier government college offering advanced postgraduate education with a focus on research and academic excellence.',
            stats: [
                { label: 'PG Programs', value: '15+' },
                { label: 'Faculty', value: '100+' },
                { label: 'Students', value: '800+' },
                { label: 'Research Papers', value: '200+' }
            ],
            sections: [
                {
                    title: 'Master Programs',
                    icon: '📚',
                    description: 'MA, MSc, and MBA programs in various disciplines'
                },
                {
                    title: 'Research Focus',
                    icon: '🔍',
                    description: 'Active research projects and publication in peer-reviewed journals'
                },
                {
                    title: 'Expert Faculty',
                    icon: '👨‍🎓',
                    description: 'Highly qualified faculty with industry and academic experience'
                },
                {
                    title: 'Library Resources',
                    icon: '📖',
                    description: 'Comprehensive library with digital database and journals'
                },
                {
                    title: 'Seminars & Workshops',
                    icon: '🎤',
                    description: 'Regular seminars and workshops by distinguished scholars'
                },
                {
                    title: 'Placements',
                    icon: '📊',
                    description: 'Good placement record in academic and corporate sectors'
                }
            ],
            cta: 'Explore Programs'
        },
        hi: {
            title: 'पंडित ललित मोहन शर्मा पीजी कॉलेज',
            subtitle: 'सरकारी स्नातकोत्तर संस्थान',
            description: 'अनुसंधान और शैक्षणिक उत्कृष्टता पर ध्यान केंद्रित करते हुए उन्नत स्नातकोत्तर शिक्षा प्रदान करने वाला एक प्रमुख सरकारी कॉलेज।',
            stats: [
                { label: 'पीजी कार्यक्रम', value: '15+' },
                { label: 'संकाय', value: '100+' },
                { label: 'छात्र', value: '800+' },
                { label: 'शोध पत्र', value: '200+' }
            ],
            sections: [
                {
                    title: 'मास्टर कार्यक्रम',
                    icon: '📚',
                    description: 'विभिन्न विषयों में MA, MSc और MBA कार्यक्रम'
                },
                {
                    title: 'अनुसंधान केंद्रित',
                    icon: '🔍',
                    description: 'सक्रिय अनुसंधान परियोजनाएं और पीयर-रिव्यू जर्नल में प्रकाशन'
                },
                {
                    title: 'विशेषज्ञ संकाय',
                    icon: '👨‍🎓',
                    description: 'उद्योग और शैक्षणिक अनुभव के साथ उच्च योग्य संकाय'
                },
                {
                    title: 'पुस्तकालय संसाधन',
                    icon: '📖',
                    description: 'डिजिटल डेटाबेस और पत्रिकाओं के साथ व्यापक पुस्तकालय'
                },
                {
                    title: 'सेमिनार और कार्यशाला',
                    icon: '🎤',
                    description: 'प्रतिष्ठित विद्वानों द्वारा नियमित सेमिनार और कार्यशाला'
                },
                {
                    title: 'प्लेसमेंट',
                    icon: '📊',
                    description: 'शैक्षणिक और कॉर्पोरेट क्षेत्रों में अच्छा प्लेसमेंट रिकॉर्ड'
                }
            ],
            cta: 'कार्यक्रम देखें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "pandit-lalit-college-page", children: [_jsxs("div", { className: "pandit-lalit-college-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "pandit-lalit-college-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "pandit-lalit-college-container", children: [_jsx("div", { className: "pandit-lalit-college-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "pandit-lalit-college-stats", children: _jsx("div", { className: "pandit-lalit-college-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "pandit-lalit-college-stat-card", children: [_jsx("div", { className: "pandit-lalit-college-stat-value", children: stat.value }), _jsx("div", { className: "pandit-lalit-college-stat-label", children: stat.label })] }, index))) }) }), _jsx("div", { className: "pandit-lalit-college-sections", children: _jsx("div", { className: "pandit-lalit-college-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "pandit-lalit-college-section-card", children: [_jsx("div", { className: "pandit-lalit-college-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "pandit-lalit-college-cta", children: _jsx("button", { className: "pandit-lalit-college-btn", children: data.cta }) })] })] }));
};
export default PanditLalitMohanSharmaCollege;
//# sourceMappingURL=PanditLalitMohanSharmaCollege.js.map