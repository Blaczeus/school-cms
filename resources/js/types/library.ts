export type LibraryCollection = {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
};

export type LibraryDigitalResource = {
    id: number;
    title: string;
    description: string;
    category: string;
    accessNote: string;
    url?: string;
};

export type LibraryStudySpace = {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
};

export type LibraryHighlight = {
    id: number;
    label: string;
    title: string;
    description: string;
};

export type LibraryAccessStep = {
    id: number;
    title: string;
    description: string;
};

export type LibrarySchedule = {
    id: number;
    day: string;
    opensAt?: string;
    closesAt?: string;
    status: string;
};
