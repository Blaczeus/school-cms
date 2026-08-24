export type ProgrammeStudyLevel = 'undergraduate' | 'postgraduate';

export type ProgrammeStudyStage = {
    title: string;
    description: string;
    creditLoad?: string;
};

export type Programme = {
    id: string;
    slug: string;
    name: string;
    qualification: string;
    studyLevel: ProgrammeStudyLevel;
    facultySlug: string;
    departmentSlug: string;
    summary: string;
    image: string;
    duration: string;
    studyMode?: string;
    description: string;
    highlights: string[];
    studyStages: ProgrammeStudyStage[];
    admissionSummary: string;
    admissionRequirements: string[];
    learningOutcomes: string[];
    careerOpportunities: string[];
    costGuidance: string;
};
