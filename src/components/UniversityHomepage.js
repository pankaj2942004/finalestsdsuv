import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header';
import Marquee from './Marquee';
import HeroSection from './HeroSection';
import LatestUpdates from './LatestUpdates';
import News from './News';
import ResearchPublications from './ResearchPublications';
import ReadyToJoinUs from './ReadyToJoinUs';
import CampusLife from './CampusLife';
import WhyChooseUs from './WhyChooseUs';
import QuickLinks from './QuickLinks';
import InstitutesSection from './InstitutesSection';
import ResearchInnovation from './ResearchInnovation';
import DatesheetSyllabus from './DatesheetSyllabus';
import Feedback from './Feedback';
import Footer from './Footer';
import '../styles/UniversityHomepage.css';
const UniversityHomepage = ({ language, setCurrentPage }) => {
    const handleImportantLinkClick = (linkId) => {
        const linkPageMap = {
            'college-affiliation': 'college-affiliation-pdf',
            'ordinance-curriculum': 'ordinance-curriculum-pdf',
            'scholarship': 'scholarship-pdf',
            'convocation-medal': 'convocation-medal-pdf',
            'phd-merit-list': 'phd-merit-list-pdf',
            'nirf': 'nirf-pdf',
            'academic-calendar': 'academic-calendar-pdf',
            'helpline': 'helpline-pdf',
            'phd-notification': 'phd-notification-pdf',
            'exam-date-sheet': 'exam-date-sheet-pdf',
            'convocation-quotation': 'convocation-quotation-pdf',
            'university-film': 'university-film-pdf'
        };
        const page = linkPageMap[linkId];
        if (page) {
            setCurrentPage(page);
        }
    };
    const handleMarqueeItemClick = (itemId) => {
        const marqueePageMap = {
            'college-affiliation': 'college-affiliation',
            'ordinance-curriculum': 'ordinance-curriculum',
            'scholarship': 'scholarship',
            'convocation-medal': 'convocation-medal-pdf',
            'phd-merit': 'phd-merit-list-pdf',
            'nirf': 'nirf-pdf',
            'academic-calendar': 'academic-calendar',
            'helpline': 'helpline-pdf',
            'phd-notification': 'phd-notification-pdf',
            'exam-sheet': 'exam-sheet',
            'convocation': 'convocation-quotation-pdf',
            'university-film': 'university-film-pdf'
        };
        const page = marqueePageMap[itemId];
        if (page) {
            setCurrentPage(page);
        }
    };
    return (_jsxs("div", { className: "university-homepage", children: [_jsx(Marquee, { language: language, onItemClick: handleMarqueeItemClick }), _jsx(Header, { language: language, setCurrentPage: setCurrentPage }), _jsxs("div", { className: "main-content", children: [_jsx(HeroSection, { language: language }), _jsx(LatestUpdates, { language: language, onViewMore: () => setCurrentPage('all-news') })] }), _jsx(ResearchPublications, { language: language, setCurrentPage: setCurrentPage }), _jsx(ReadyToJoinUs, { language: language }), _jsx(CampusLife, { language: language, setCurrentPage: setCurrentPage }), _jsx(WhyChooseUs, { language: language }), _jsx(QuickLinks, { language: language }), _jsx(InstitutesSection, { language: language }), _jsx(ResearchInnovation, { language: language }), _jsx(DatesheetSyllabus, { language: language }), _jsx(News, { language: language }), _jsx(Feedback, { language: language }), _jsx(Footer, { language: language, setCurrentPage: setCurrentPage })] }));
};
export default UniversityHomepage;
//# sourceMappingURL=UniversityHomepage.js.map