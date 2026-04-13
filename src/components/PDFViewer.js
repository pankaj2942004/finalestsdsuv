import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import '../styles/PDFViewer.css';
const PDFViewer = ({ language, onBack, title, pdfUrl }) => {
    return (_jsxs("div", { className: "pdf-viewer-page", children: [_jsxs("div", { className: "pdf-header", children: [_jsxs("button", { className: "pdf-back-btn", onClick: onBack, children: ["\u2190 ", language === 'en' ? 'Back' : 'पीछे'] }), _jsx("h1", { children: title })] }), _jsxs("div", { className: "pdf-container", children: [_jsx("div", { className: "pdf-viewer", children: _jsx("iframe", { title: title, src: `${pdfUrl}#toolbar=1`, className: "pdf-iframe", frameBorder: "0" }) }), _jsx("div", { className: "pdf-download", children: _jsxs("a", { href: pdfUrl, download: true, target: "_blank", rel: "noopener noreferrer", className: "download-btn", children: ["\u2B07\uFE0F ", language === 'en' ? 'Download PDF' : 'PDF डाउनलोड करें'] }) })] })] }));
};
export default PDFViewer;
//# sourceMappingURL=PDFViewer.js.map