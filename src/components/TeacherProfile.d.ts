import React from 'react';
import '../styles/TeacherProfile.css';
interface TeacherProfileProps {
    language: 'en' | 'hi';
    onBack: () => void;
    teacher: Teacher | null;
}
interface Teacher {
    name: string;
    image: string;
    role?: string;
    contact?: string;
    email?: string;
    cvLink?: string;
    department?: string;
    bioSummary?: string[];
    bioPoints?: string[];
}
declare const TeacherProfile: React.FC<TeacherProfileProps>;
export default TeacherProfile;
//# sourceMappingURL=TeacherProfile.d.ts.map