export type DepartmentLevel = 'undergraduate' | 'postgraduate';

export type DepartmentCurriculumTopic = {
    title: string;
    content: string;
};

export type DepartmentCurriculumCourse = {
    code: string;
    title: string;
    credits: string;
};

export type DepartmentCurriculumGroup = {
    title: string;
    description: string;
    courses: DepartmentCurriculumCourse[];
};

export type DepartmentProfessor = {
    name: string;
    title: string;
    image: string;
};

export type DepartmentCostRow = {
    item: string;
    firstSemester: string;
    secondSemester: string;
    annual: string;
};

export type DepartmentScholarship = {
    title: string;
    description: string;
};

export type DepartmentAdmissionRequirement = {
    title: string;
    items: string[];
};

export type DepartmentDeadlineRow = {
    level: string;
    session: string;
    opens: string;
    deadline: string;
    begins: string;
};

export type Department = {
    id: number;
    name: string;
    slug: string;
    shortName: string;
    facultyName: string;
    facultySlug: string;
    summary: string;
    image: string;
    icon: string;
    programmeCount: number;
    undergraduateProgrammes: string[];
    postgraduateProgrammes: string[];
    highlights: string[];
    duration: string;
    credits: string;
    language: string;
    overview: string;
    about: string;
    session: string;
    structureSummary: string;
    curriculumTopics: DepartmentCurriculumTopic[];
    curriculum: DepartmentCurriculumGroup[];
    professors: DepartmentProfessor[];
    costRows: DepartmentCostRow[];
    scholarships: DepartmentScholarship[];
    admissionRequirements: DepartmentAdmissionRequirement[];
    deadlineRows: DepartmentDeadlineRow[];
    contactPhone: string;
    contactEmail: string;
};
