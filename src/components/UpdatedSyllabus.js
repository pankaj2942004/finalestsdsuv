import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/UpdatedSyllabus.css';
const UpdatedSyllabus = ({ language }) => {
    const content = {
        en: {
            title: 'UPDATED SYLLABUS',
            subtitle: 'LATEST CURRICULUM FOR ALL PROGRAMS',
            description: 'Our syllabus has been updated to meet the latest educational standards and industry requirements. Download the complete syllabus for your program.',
            programs: [
                {
                    name: 'Bachelor Degree',
                    courses: ['Arts', 'Science', 'Commerce'],
                    icon: '📚'
                },
                {
                    name: 'Master Degree',
                    courses: ['Arts', 'Science', 'Commerce'],
                    icon: '🎓'
                },
                {
                    name: 'Ph.D. Program',
                    courses: ['All Disciplines'],
                    icon: '🔬'
                }
            ],
            downloadBtn: 'Download Syllabus'
        },
        hi: {
            title: 'अद्यतन पाठ्यक्रम',
            subtitle: 'सभी कार्यक्रमों के लिए नवीनतम पाठ्यक्रम',
            description: 'हमारे पाठ्यक्रम को नवीनतम शैक्षणिक मानकों और उद्योग की आवश्यकताओं को पूरा करने के लिए अद्यतन किया गया है।',
            programs: [
                {
                    name: 'स्नातक डिग्री',
                    courses: ['कला', 'विज्ञान', 'वाणिज्य'],
                    icon: '📚'
                },
                {
                    name: 'मास्टर डिग्री',
                    courses: ['कला', 'विज्ञान', 'वाणिज्य'],
                    icon: '🎓'
                },
                {
                    name: 'पीएच.डी. कार्यक्रम',
                    courses: ['सभी विषय'],
                    icon: '🔬'
                }
            ],
            downloadBtn: 'पाठ्यक्रम डाउनलोड करें'
        }
    };
    const data = content[language];
    return (_jsx("section", { className: "updated-syllabus", children: _jsxs("div", { className: "section-container", children: [_jsx("h1", { children: data.title }), _jsx("p", { className: "section-subtitle", children: data.subtitle }), _jsx("p", { className: "syllabus-description", children: data.description }), _jsx("div", { className: "syllabus-grid", children: data.programs.map((program, index) => (_jsxs("div", { className: "syllabus-card", children: [_jsx("div", { className: "syllabus-icon", children: program.icon }), _jsx("h3", { children: program.name }), _jsx("div", { className: "courses-list", children: program.courses.map((course, idx) => (_jsx("span", { className: "course-tag", children: course }, idx))) }), _jsx("button", { className: "download-btn", children: data.downloadBtn })] }, index))) })] }) }));
};
export default UpdatedSyllabus;
//# sourceMappingURL=UpdatedSyllabus.js.map