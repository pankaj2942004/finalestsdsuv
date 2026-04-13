import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/Feedback.css';
const Feedback = ({ language }) => {
    const [activeForm, setActiveForm] = useState(null);
    const [formDataStates, setFormDataStates] = useState({
        employer: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 },
        parent: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 },
        teacher: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 }
    });
    const [submitMessage, setSubmitMessage] = useState('');
    const content = {
        en: {
            mainTitle: 'We Value Your Feedback',
            subtitle: 'Share your experience and help us improve',
            submitBtnText: 'Submit Feedback',
            closeBtnText: 'Close',
            nameLabel: 'Full Name',
            emailLabel: 'Email Address',
            phoneLabel: 'Phone Number',
            feedbackLabel: 'Your Feedback',
            ratingLabel: 'Rate Your Experience',
            successMessage: 'Thank you! Your feedback has been submitted successfully.',
            companyLabel: 'Company Name',
            studentNameLabel: 'Student Name',
            parentNameLabel: 'Parent Name',
            subjectLabel: 'Subject/Course'
        },
        hi: {
            mainTitle: 'हम आपके फीडबैक को महत्व देते हैं',
            subtitle: 'अपने अनुभव साझा करें और हमें बेहतर बनाने में मदद करें',
            submitBtnText: 'फीडबैक जमा करें',
            closeBtnText: 'बंद करें',
            nameLabel: 'पूरा नाम',
            emailLabel: 'ईमेल पता',
            phoneLabel: 'फोन नंबर',
            feedbackLabel: 'आपकी प्रतिक्रिया',
            ratingLabel: 'अपना अनुभव दर करें',
            successMessage: 'धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक जमा की गई है।',
            companyLabel: 'कंपनी का नाम',
            studentNameLabel: 'छात्र का नाम',
            parentNameLabel: 'माता-पिता का नाम',
            subjectLabel: 'विषय/पाठ्यक्रम'
        }
    };
    const feedbackTypes = [
        {
            id: 'employer',
            iconType: 'briefcase',
            titleEn: "Employer's Feedback",
            titleHi: 'नियोक्ता की प्रतिक्रिया',
            descriptionEn: 'Share your insights about our students and their performance in the workplace',
            descriptionHi: 'हमारे छात्रों और कार्यस्थल में उनके प्रदर्शन के बारे में अपनी जानकारी साझा करें',
            formFields: {
                field1En: 'Company Name',
                field1Hi: 'कंपनी का नाम',
                field2En: 'Student Name',
                field2Hi: 'छात्र का नाम',
                additionalFieldEn: 'Designation',
                additionalFieldHi: 'पदनाम'
            }
        },
        {
            id: 'parent',
            iconType: 'people',
            titleEn: "Parent's Feedback",
            titleHi: 'माता-पिता की प्रतिक्रिया',
            descriptionEn: "Help us understand how we can better support your child's academic journey",
            descriptionHi: 'हमें समझने में मदद करें कि हम अपने बच्चे की शैक्षणिक यात्रा को बेहतर समर्थन कैसे दे सकते हैं',
            formFields: {
                field1En: 'Parent Name',
                field1Hi: 'माता-पिता का नाम',
                field2En: 'Student Name',
                field2Hi: 'छात्र का नाम',
                additionalFieldEn: 'Class/Year',
                additionalFieldHi: 'कक्षा/वर्ष'
            }
        },
        {
            id: 'teacher',
            iconType: 'graduation',
            titleEn: "Teacher's Feedback",
            titleHi: 'शिक्षक की प्रतिक्रिया',
            descriptionEn: 'Share your perspectives on teaching resources, student engagement, and improvements',
            descriptionHi: 'शिक्षण संसाधनों, छात्र सहभागिता और सुधार पर अपने विचार साझा करें',
            formFields: {
                field1En: 'Teacher Name',
                field1Hi: 'शिक्षक का नाम',
                field2En: 'Subject/Course',
                field2Hi: 'विषय/पाठ्यक्रम',
                additionalFieldEn: 'Department',
                additionalFieldHi: 'विभाग'
            }
        }
    ];
    const currentContent = content[language];
    const renderIcon = (iconType) => {
        switch (iconType) {
            case 'briefcase':
                return (_jsxs("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }), _jsx("path", { d: "M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" })] }));
            case 'people':
                return (_jsxs("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "9", cy: "7", r: "4" }), _jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }), _jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })] }));
            case 'graduation':
                return (_jsx("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M22 10v6m0 0l-8.97 4.486a2 2 0 0 1-1.79.263m10.76-4.75l-9.968-4.982a2 2 0 0 0-1.79-.263m10.76 4.75L2.03 10.487m10.97.487l8.97 4.486m-10.97-.487L2.03 5.513" }) }));
            default:
                return null;
        }
    };
    const handleInputChange = (formId, field, value) => {
        setFormDataStates(prev => ({
            ...prev,
            [formId]: {
                ...prev[formId],
                [field]: value
            }
        }));
    };
    const handleSubmit = (formId) => {
        const formData = formDataStates[formId];
        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.feedback) {
            alert(language === 'en' ? 'Please fill all required fields' : 'कृपया सभी आवश्यक फ़ील्ड भरें');
            return;
        }
        // Here you would typically send data to a backend
        console.log('Submitting feedback:', { formId, formData });
        setSubmitMessage(currentContent.successMessage);
        setTimeout(() => {
            setActiveForm(null);
            setSubmitMessage('');
            // Reset form
            setFormDataStates(prev => ({
                ...prev,
                [formId]: { name: '', email: '', phone: '', additionalField: '', feedback: '', rating: 5 }
            }));
        }, 2000);
    };
    return (_jsxs("section", { className: "feedback-section", children: [_jsxs("div", { className: "feedback-container", children: [_jsxs("div", { className: "feedback-header", children: [_jsx("div", { className: "header-line" }), _jsx("h2", { className: "feedback-main-title", children: currentContent.mainTitle }), _jsx("p", { className: "feedback-subtitle", children: currentContent.subtitle })] }), _jsx("div", { className: "feedback-grid", children: feedbackTypes.map((feedback) => (_jsxs("div", { className: "feedback-card", children: [_jsx("div", { className: "card-icon-wrapper", children: _jsx("div", { className: "card-icon", children: renderIcon(feedback.iconType) }) }), _jsx("h3", { className: "feedback-title", children: language === 'en' ? feedback.titleEn : feedback.titleHi }), _jsx("p", { className: "feedback-description", children: language === 'en' ? feedback.descriptionEn : feedback.descriptionHi }), _jsx("button", { className: "open-form-btn", onClick: () => setActiveForm(feedback.id), children: language === 'en' ? 'Open Form' : 'फॉर्म खोलें' })] }, feedback.id))) })] }), activeForm && (_jsx("div", { className: "modal-overlay", onClick: () => setActiveForm(null), children: _jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "modal-header", children: [_jsx("h3", { className: "modal-title", children: feedbackTypes.find(f => f.id === activeForm)?.[language === 'en' ? 'titleEn' : 'titleHi'] }), _jsx("button", { className: "modal-close", onClick: () => setActiveForm(null), children: "\u2715" })] }), submitMessage ? (_jsx("div", { className: "success-message", children: _jsx("p", { children: submitMessage }) })) : (_jsxs("form", { className: "feedback-form", onSubmit: (e) => {
                                e.preventDefault();
                                handleSubmit(activeForm);
                            }, children: [_jsxs("div", { className: "form-group", children: [_jsxs("label", { children: [currentContent.nameLabel, " *"] }), _jsx("input", { type: "text", value: formDataStates[activeForm].name, onChange: (e) => handleInputChange(activeForm, 'name', e.target.value), placeholder: currentContent.nameLabel, required: true })] }), _jsxs("div", { className: "form-group", children: [_jsxs("label", { children: [currentContent.emailLabel, " *"] }), _jsx("input", { type: "email", value: formDataStates[activeForm].email, onChange: (e) => handleInputChange(activeForm, 'email', e.target.value), placeholder: currentContent.emailLabel, required: true })] }), _jsxs("div", { className: "form-group", children: [_jsxs("label", { children: [currentContent.phoneLabel, " *"] }), _jsx("input", { type: "tel", value: formDataStates[activeForm].phone, onChange: (e) => handleInputChange(activeForm, 'phone', e.target.value), placeholder: currentContent.phoneLabel, required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: feedbackTypes.find(f => f.id === activeForm)?.formFields?.[language === 'en' ? 'additionalFieldEn' : 'additionalFieldHi'] }), _jsx("input", { type: "text", value: formDataStates[activeForm].additionalField, onChange: (e) => handleInputChange(activeForm, 'additionalField', e.target.value) })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: currentContent.ratingLabel }), _jsx("div", { className: "rating-input", children: [1, 2, 3, 4, 5].map(star => (_jsx("button", { type: "button", className: `star ${star <= formDataStates[activeForm].rating ? 'active' : ''}`, onClick: () => handleInputChange(activeForm, 'rating', star), children: "\u2605" }, star))) })] }), _jsxs("div", { className: "form-group", children: [_jsxs("label", { children: [currentContent.feedbackLabel, " *"] }), _jsx("textarea", { value: formDataStates[activeForm].feedback, onChange: (e) => handleInputChange(activeForm, 'feedback', e.target.value), placeholder: currentContent.feedbackLabel, rows: 5, required: true })] }), _jsxs("div", { className: "form-actions", children: [_jsx("button", { type: "submit", className: "submit-btn", children: currentContent.submitBtnText }), _jsx("button", { type: "button", className: "cancel-btn", onClick: () => setActiveForm(null), children: currentContent.closeBtnText })] })] }))] }) }))] }));
};
export default Feedback;
//# sourceMappingURL=Feedback.js.map