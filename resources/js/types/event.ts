export type EventRegistrationStatus = 'open' | 'limited' | 'closed';

export type EventSpeaker = {
    id: number;
    name: string;
    designation: string;
    image: string;
};

export type EventSocialLink = {
    label: string;
    href: string;
    icon: 'facebook' | 'instagram' | 'x' | 'linkedin';
};

export type EventDetail = {
    image: string;
    heading: string;
    paragraphs: string[];
    learningTitle: string;
    learningOutcomes: string[];
    closing: string;
    speakers: EventSpeaker[];
    mapEmbedUrl: string;
    socialLinks: EventSocialLink[];
};

export type Event = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    time: string;
    location: string;
    speaker: string;
    organiser: string;
    featured: boolean;
    registrationStatus: EventRegistrationStatus;
    detail: EventDetail;
};
