import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/VideoViewer.css';
const VideoViewer = ({ language, onBack, title, youtubeUrl }) => {
    // Convert YouTube URL to embed format
    const getEmbedUrl = (url) => {
        let videoId = '';
        // Handle different YouTube URL formats
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        else if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        }
        else {
            videoId = url;
        }
        return `https://www.youtube.com/embed/${videoId}`;
    };
    return (_jsxs("div", { className: "video-viewer-page", children: [_jsxs("div", { className: "video-header", children: [_jsx("button", { className: "video-back-btn", onClick: onBack, children: "\u2190 Back" }), _jsx("h1", { children: title })] }), _jsx("div", { className: "video-container", children: _jsx("div", { className: "video-wrapper", children: _jsx("iframe", { title: title, src: getEmbedUrl(youtubeUrl), className: "youtube-iframe", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }) })] }));
};
export default VideoViewer;
//# sourceMappingURL=VideoViewer.js.map