export type FacultyStatistic = {
    label: string;
    value: number;
    suffix?: string;
    description: string;
};

export type FacultyProgramme = {
    id: string;
    name: string;
    slug: string;
    image: string;
    icon: string;
    shortDescription: string;
    highlights: string[];
};

export type Faculty = {
    id: number;
    name: string;
    slug: string;
    shortName: string;
    summary: string;
    description: string;
    image: string;
    bannerImage?: string;
    deanName: string;
    deanTitle: string;
    deanImage: string;
    contactEmail: string;
    contactPhone: string;
    location: string;
    departments: string[];
    programmes: FacultyProgramme[];
    statistics: FacultyStatistic[];
    highlights: string[];
    accreditation?: string;
};
