import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/DocumentVerification.css';
const DocumentVerification = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Document Verification',
            subtitle: 'Official Document Processing',
            description: 'Manage and verify your academic documents with our efficient document verification system. Get instant certified copies and transcripts.',
            sections: [
                {
                    title: 'Document Submission',
                    icon: '📤',
                    description: 'Submit your documents for official verification and authentication'
                },
                {
                    title: 'Certificate Issuance',
                    icon: '🎓',
                    description: 'Apply for official degree certificates and course completion certificates'
                },
                {
                    title: 'Transcript Request',
                    icon: '📄',
                    description: 'Request official academic transcripts and mark sheets'
                },
                {
                    title: 'Verification Status',
                    icon: '✓',
                    description: 'Track status of your document verification applications in real-time'
                },
                {
                    title: 'Digital Credentials',
                    icon: '💳',
                    description: 'Access your digital badges and electronic certificates'
                },
                {
                    title: 'Support Services',
                    icon: '🔧',
                    description: 'Assistance with document processing and verification inquiries'
                }
            ],
            cta: 'Submit Documents'
        },
        hi: {
            title: 'दस्तावेज़ सत्यापन',
            subtitle: 'आधिकारिक दस्तावेज़ प्रसंस्करण',
            description: 'हमारी कुशल दस्तावेज़ सत्यापन प्रणाली के साथ अपने शैक्षणिक दस्तावेज़ों को प्रबंधित और सत्यापित करें। तुरंत प्रमाणित प्रतियां और प्रतिलेख प्राप्त करें।',
            sections: [
                {
                    title: 'दस्तावेज़ जमा करना',
                    icon: '📤',
                    description: 'आधिकारिक सत्यापन और प्रमाणीकरण के लिए अपने दस्तावेज़ जमा करें'
                },
                {
                    title: 'प्रमाण पत्र जारी करना',
                    icon: '🎓',
                    description: 'आधिकारिक डिग्री प्रमाण पत्र और पाठ्यक्रम पूर्ण प्रमाण पत्र के लिए आवेदन करें'
                },
                {
                    title: 'प्रतिलेख अनुरोध',
                    icon: '📄',
                    description: 'आधिकारिक शैक्षणिक प्रतिलेख और मार्क शीट का अनुरोध करें'
                },
                {
                    title: 'सत्यापन स्थिति',
                    icon: '✓',
                    description: 'रीयल-टाइम में अपने दस्तावेज़ सत्यापन आवेदनों की स्थिति ट्रैक करें'
                },
                {
                    title: 'डिजिटल क्रेडेंशियल्स',
                    icon: '💳',
                    description: 'अपने डिजिटल बैज और इलेक्ट्रॉनिक प्रमाण पत्र तक पहुंचें'
                },
                {
                    title: 'समर्थन सेवाएं',
                    icon: '🔧',
                    description: 'दस्तावेज़ प्रसंस्करण और सत्यापन पूछताछ में सहायता'
                }
            ],
            cta: 'दस्तावेज़ जमा करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "document-verification-page", children: [_jsxs("div", { className: "document-verification-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "document-verification-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "document-verification-container", children: [_jsx("div", { className: "document-verification-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "document-verification-sections-section", children: _jsx("div", { className: "document-verification-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "document-verification-section-card", children: [_jsx("div", { className: "document-verification-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "document-verification-cta-section", children: _jsx("button", { className: "document-verification-submit-btn", children: data.cta }) })] })] }));
};
export default DocumentVerification;
//# sourceMappingURL=DocumentVerification.js.map