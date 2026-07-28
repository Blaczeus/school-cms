export type AlumniSocialLink = {
    label: string;
    href: string;
    icon: string;
};

export type Alumni = {
    id: number;
    name: string;
    slug: string;
    graduationYear: number;
    degree: string;
    department: string;
    faculty: string;
    role: string;
    organisation: string;
    location: string;
    image: string;
    summary: string;
    quote: string;
    achievements: string[];
    biography: string;
    qualifications: string[];
    researchInterests: string[];
    professionalExperience: string;
    certifications: string[];
    experienceImage: string;
    socialLinks: AlumniSocialLink[];
    featured: boolean;
};

export type AlumniStoryBlock = {
    title: string;
    description: string;
    points: string[];
};

export type AlumniEvent = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
};

export type AlumniGalleryImage = {
    id: number;
    image: string;
    alt: string;
};
