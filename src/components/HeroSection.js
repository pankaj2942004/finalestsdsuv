import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
const HeroSection = ({ language }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Images for the slider
    const sliderImages = [
        '/img/H2.jpg',
        '/img/H3.jpg',
        '/img/H4.jpg',
        '/img/HERO1.jpg'
    ];
    // Auto-advance the slider every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);
    const content = {
        en: {
            mainTitle: 'Learning Today, Leading Tomorrow',
            subtitle: 'A place where ideas become achievements',
            buttonText: 'Admission 2026-2027'
        },
        hi: {
            mainTitle: 'आज सीखना, कल नेतृत्व करना',
            subtitle: 'एक ऐसी जगह जहां विचार उपलब्धियां बन जाती हैं',
            buttonText: 'प्रवेश 2026-2027'
        }
    };
    const data = content[language];
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1);
    };
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };
    return (_jsxs("section", { className: "hero-section", children: [_jsx("div", { className: "hero-blur-background", style: { backgroundImage: `url(${sliderImages[currentImageIndex]})` } }), _jsx("div", { className: "hero-image-container", children: _jsx("img", { src: sliderImages[currentImageIndex], alt: "Hero", className: "hero-main-image" }) }), _jsx("div", { className: "hero-overlay" }), _jsx("button", { className: "hero-slider-arrow prev", onClick: handlePrevImage, children: "\u2039" }), _jsx("button", { className: "hero-slider-arrow next", onClick: handleNextImage, children: "\u203A" }), _jsxs("div", { className: "hero-content", children: [_jsx("h2", { className: "hero-title", children: data.mainTitle }), _jsx("p", { className: "hero-subtitle", children: data.subtitle }), _jsx("button", { className: "hero-button", children: data.buttonText })] }), _jsx("div", { className: "hero-slider-dots", children: sliderImages.map((_, index) => (_jsx("button", { className: `dot ${index === currentImageIndex ? 'active' : ''}`, onClick: () => setCurrentImageIndex(index), "aria-label": `Go to slide ${index + 1}` }, index))) })] }));
};
export default HeroSection;
//# sourceMappingURL=HeroSection.js.map