import React from 'react';
import '../styles/PDFViewer.css';
interface PDFViewerProps {
    language: 'en' | 'hi';
    onBack: () => void;
    title: string;
    pdfUrl: string;
}
declare const PDFViewer: React.FC<PDFViewerProps>;
export default PDFViewer;
//# sourceMappingURL=PDFViewer.d.ts.map