import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/CampusFeePayment.css';
const CampusFeePayment = ({ language, onBack }) => {
    const content = {
        en: {
            title: 'Campus Fee Payment',
            subtitle: 'Online Payment Portal',
            description: 'Secure and convenient online fee payment system for all campus courses. Pay your semester fees, examination fees, and other charges easily.',
            sections: [
                {
                    title: 'Payment Gateway',
                    icon: '🔒',
                    description: 'Secure SSL-encrypted payment system with multiple gateway options'
                },
                {
                    title: 'Fee Structure',
                    icon: '📊',
                    description: 'Transparent fee breakdown for all courses and programs'
                },
                {
                    title: 'Payment Methods',
                    icon: '💳',
                    description: 'Credit card, debit card, net banking, and UPI payment options'
                },
                {
                    title: 'EMI Facility',
                    icon: '📅',
                    description: 'Flexible installment plans available for eligible students'
                },
                {
                    title: 'Receipt & Records',
                    icon: '📄',
                    description: 'Instant digital receipts and payment history tracking'
                },
                {
                    title: 'Payment Support',
                    icon: '💬',
                    description: 'Dedicated support team to assist with payment issues'
                }
            ],
            cta: 'Pay Fees Now'
        },
        hi: {
            title: 'परिसर शुल्क भुगतान',
            subtitle: 'ऑनलाइन भुगतान पोर्टल',
            description: 'सभी परिसर पाठ्यक्रमों के लिए सुरक्षित और सुविधाजनक ऑनलाइन शुल्क भुगतान प्रणाली। आसानी से अपने सेमेस्टर शुल्क, परीक्षा शुल्क और अन्य शुल्क का भुगतान करें।',
            sections: [
                {
                    title: 'भुगतान गेटवे',
                    icon: '🔒',
                    description: 'कई गेटवे विकल्पों के साथ सुरक्षित एसएसएल-एन्क्रिप्टेड भुगतान प्रणाली'
                },
                {
                    title: 'शुल्क संरचना',
                    icon: '📊',
                    description: 'सभी पाठ्यक्रमों और कार्यक्रमों के लिए पारदर्शी शुल्क विवरण'
                },
                {
                    title: 'भुगतान विधियां',
                    icon: '💳',
                    description: 'क्रेडिट कार्ड, डेबिट कार्ड, नेट बैंकिंग और यूपीआई भुगतान विकल्प'
                },
                {
                    title: 'ईएमआई सुविधा',
                    icon: '📅',
                    description: 'पात्र छात्रों के लिए लचीली किस्त योजनाएं उपलब्ध'
                },
                {
                    title: 'रसीद और रिकॉर्ड',
                    icon: '📄',
                    description: 'तत्काल डिजिटल रसीदें और भुगतान इतिहास ट्रैकिंग'
                },
                {
                    title: 'भुगतान समर्थन',
                    icon: '💬',
                    description: 'भुगतान समस्याओं में सहायता के लिए समर्पित समर्थन दल'
                }
            ],
            cta: 'अब शुल्क का भुगतान करें'
        }
    };
    const data = content[language];
    return (_jsxs("div", { className: "campus-fee-payment-page", children: [_jsxs("div", { className: "campus-fee-payment-header", children: [_jsx("button", { className: "back-button", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: data.title }), _jsx("p", { className: "campus-fee-payment-subtitle", children: data.subtitle })] }), _jsxs("div", { className: "campus-fee-payment-container", children: [_jsx("div", { className: "campus-fee-payment-description", children: _jsx("p", { children: data.description }) }), _jsx("div", { className: "campus-fee-payment-sections-section", children: _jsx("div", { className: "campus-fee-payment-sections-grid", children: data.sections.map((section, index) => (_jsxs("div", { className: "campus-fee-payment-section-card", children: [_jsx("div", { className: "campus-fee-payment-section-icon", children: section.icon }), _jsx("h3", { children: section.title }), _jsx("p", { children: section.description })] }, index))) }) }), _jsx("div", { className: "campus-fee-payment-cta-section", children: _jsx("button", { className: "campus-fee-payment-submit-btn", children: data.cta }) })] })] }));
};
export default CampusFeePayment;
//# sourceMappingURL=CampusFeePayment.js.map