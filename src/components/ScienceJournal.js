import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ScienceJournal.css';
const ScienceJournal = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Science Journal',
            subtitle: 'Research & Innovation Publication',
            description: 'A peer-reviewed academic journal dedicated to publishing high-quality research in all disciplines of science.',
            stats: [
                { label: 'Published Issues', value: '25+' },
                { label: 'Research Papers', value: '500+' },
                { label: 'Active Reviewers', value: '150+' },
                { label: 'Impact Factor', value: '4.2' }
            ],
            sections: [
                {
                    title: 'Physics',
                    icon: '⚛️',
                    description: 'Theoretical and experimental physics research'
                },
                {
                    title: 'Chemistry',
                    icon: '🧪',
                    description: 'Chemical sciences and molecular research'
                },
                {
                    title: 'Biology',
                    icon: '🔬',
                    description: 'Life sciences and biological studies'
                },
                {
                    title: 'Mathematics',
                    icon: '📐',
                    description: 'Mathematical theories and applications'
                },
                {
                    title: 'Environmental Science',
                    icon: '🌱',
                    description: 'Ecology and sustainability research'
                },
                {
                    title: 'Technology',
                    icon: '💻',
                    description: 'Advanced technology and innovation'
                }
            ],
            cta: 'Submit Your Research'
        },
        hi: {
            title: 'विज्ञान पत्रिका',
            subtitle: 'अनुसंधान और नवाचार प्रकाशन',
            description: 'विज्ञान के सभी विषयों में उच्च-गुणवत्ता अनुसंधान प्रकाशित करने के लिए समर्पित एक सहकर्मी-समीक्षा शैक्षणिक पत्रिका।',
            stats: [
                { label: 'प्रकाशित अंक', value: '25+' },
                { label: 'अनुसंधान पत्र', value: '500+' },
                { label: 'सक्रिय समीक्षक', value: '150+' },
                { label: 'प्रभाव कारक', value: '4.2' }
            ],
            sections: [
                {
                    title: 'भौतिकी',
                    icon: '⚛️',
                    description: 'सैद्धांतिक और प्रायोगिक भौतिकी अनुसंधान'
                },
                {
                    title: 'रसायन विज्ञान',
                    icon: '🧪',
                    description: 'रासायनिक विज्ञान और आणविक अनुसंधान'
                },
                {
                    title: 'जीव विज्ञान',
                    icon: '🔬',
                    description: 'जीवन विज्ञान और जैविक अध्ययन'
                },
                {
                    title: 'गणित',
                    icon: '📐',
                    description: 'गणितीय सिद्धांत और अनुप्रयोग'
                },
                {
                    title: 'पर्यावरण विज्ञान',
                    icon: '🌱',
                    description: 'पारिस्थितिकी और स्थिरता अनुसंधान'
                },
                {
                    title: 'प्रौद्योगिकी',
                    icon: '💻',
                    description: 'उन्नत प्रौद्योगिकी और नवाचार'
                }
            ],
            cta: 'अपना अनुसंधान जमा करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "journal-page", children: [_jsxs("div", { className: "journal-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "journal-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "journal-container", children: [_jsx("div", { className: "journal-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "stats-section", children: _jsx("div", { className: "stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "stat-card", children: [_jsx("div", { className: "stat-value", children: stat.value }), _jsx("div", { className: "stat-label", children: stat.label })] }, index))) }) }), _jsxs("div", { className: "sections-section", children: [_jsx("h2", { children: "Research Sections" }), _jsx("div", { className: "sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "section-card", children: [_jsx("div", { className: "section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) })] }), _jsx("div", { className: "cta-section", children: _jsx("button", { className: "submit-btn", children: data.cta }) })] })] }));
};
export default ScienceJournal;
//# sourceMappingURL=ScienceJournal.js.map