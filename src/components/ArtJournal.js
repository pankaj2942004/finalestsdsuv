import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ArtJournal.css';
const ArtJournal = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Art Journal',
            subtitle: 'Creative & Humanities Research Publication',
            description: 'A prestigious journal dedicated to publishing research in arts, humanities, literature, and creative studies.',
            stats: [
                { label: 'Published Issues', value: '18+' },
                { label: 'Research Papers', value: '350+' },
                { label: 'Active Reviewers', value: '100+' },
                { label: 'Impact Factor', value: '3.5' }
            ],
            sections: [
                {
                    title: 'Literature',
                    icon: '📚',
                    description: 'Literary studies and textual analysis'
                },
                {
                    title: 'Fine Arts',
                    icon: '🎨',
                    description: 'Visual arts and artistic expressions'
                },
                {
                    title: 'History',
                    icon: '📜',
                    description: 'Historical studies and cultural heritage'
                },
                {
                    title: 'Philosophy',
                    icon: '💭',
                    description: 'Philosophical inquiry and thought'
                },
                {
                    title: 'Cultural Studies',
                    icon: '🌏',
                    description: 'Culture, identity and society'
                },
                {
                    title: 'Performing Arts',
                    icon: '🎭',
                    description: 'Theatre, music, and dance research'
                }
            ],
            cta: 'Submit Your Work'
        },
        hi: {
            title: 'कला पत्रिका',
            subtitle: 'रचनात्मक और मानविकी अनुसंधान प्रकाशन',
            description: 'कला, मानविकी, साहित्य और रचनात्मक अध्ययन में अनुसंधान प्रकाशित करने के लिए एक प्रतिष्ठित पत्रिका।',
            stats: [
                { label: 'प्रकाशित अंक', value: '18+' },
                { label: 'अनुसंधान पत्र', value: '350+' },
                { label: 'सक्रिय समीक्षक', value: '100+' },
                { label: 'प्रभाव कारक', value: '3.5' }
            ],
            sections: [
                {
                    title: 'साहित्य',
                    icon: '📚',
                    description: 'साहित्यिक अध्ययन और पाठ विश्लेषण'
                },
                {
                    title: 'ललित कला',
                    icon: '🎨',
                    description: 'दृश्य कला और कलात्मक अभिव्यक्ति'
                },
                {
                    title: 'इतिहास',
                    icon: '📜',
                    description: 'ऐतिहासिक अध्ययन और सांस्कृतिक विरासत'
                },
                {
                    title: 'दर्शन',
                    icon: '💭',
                    description: 'दार्शनिक पूछताछ और विचार'
                },
                {
                    title: 'सांस्कृतिक अध्ययन',
                    icon: '🌏',
                    description: 'संस्कृति, पहचान और समाज'
                },
                {
                    title: 'प्रदर्शन कला',
                    icon: '🎭',
                    description: 'थिएटर, संगीत और नृत्य अनुसंधान'
                }
            ],
            cta: 'अपना काम जमा करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "art-journal-page", children: [_jsxs("div", { className: "art-journal-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "art-journal-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "art-journal-container", children: [_jsx("div", { className: "art-journal-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "art-stats-section", children: _jsx("div", { className: "art-stats-grid", children: data.stats.map((stat, index) => (_jsxs("div", { className: "art-stat-card", children: [_jsx("div", { className: "art-stat-value", children: stat.value }), _jsx("div", { className: "art-stat-label", children: stat.label })] }, index))) }) }), _jsxs("div", { className: "art-sections-section", children: [_jsx("h2", { children: "Research Sections" }), _jsx("div", { className: "art-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "art-section-card", children: [_jsx("div", { className: "art-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) })] }), _jsx("div", { className: "art-cta-section", children: _jsx("button", { className: "art-submit-btn", children: data.cta }) })] })] }));
};
export default ArtJournal;
//# sourceMappingURL=ArtJournal.js.map