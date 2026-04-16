import React from 'react';
import '../styles/DepartmentSecondaryPage.css';
interface DepartmentSecondaryPageProps {
    language: 'en' | 'hi';
    onBack: () => void;
    departmentName: string;
    setCurrentPage?: (page: string) => void;
    setSelectedTeacher?: (teacher: TeacherProfileData | null) => void;
}
interface TeacherProfileData {
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
declare const DepartmentSecondaryPage: React.FC<DepartmentSecondaryPageProps>;
export default DepartmentSecondaryPage;
//# sourceMappingURL=DepartmentSecondaryPage.d.ts.map