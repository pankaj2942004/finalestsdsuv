import React from 'react';
import '../styles/VideoViewer.css';
interface VideoViewerProps {
    language: 'en' | 'hi';
    onBack: () => void;
    title: string;
    youtubeUrl: string;
}
declare const VideoViewer: React.FC<VideoViewerProps>;
export default VideoViewer;
//# sourceMappingURL=VideoViewer.d.ts.map