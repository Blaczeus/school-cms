import type {
    CampusExperience,
    CampusGalleryItem,
    CampusInfoStat,
    CampusResourceLink,
} from '@/types/campus';

export const campusExperiences: CampusExperience[] = [
    {
        id: 1,
        title: 'Student Activities',
        description:
            'Take part in clubs, organisations, programmes and activities that help students connect, develop interests and contribute to campus life.',
        image: '/public-site/images/campus-life/campus-life-thumb-15.webp',
        alt: 'Students taking part in campus activities',
    },
    {
        id: 2,
        title: 'Sports & Recreation',
        description:
            'Stay active through recreational opportunities, sporting activities and spaces designed for movement, teamwork and wellbeing.',
        image: '/public-site/images/campus-life/campus-life-thumb-16.webp',
        alt: 'Students enjoying sports and recreation on campus',
    },
    {
        id: 3,
        title: 'Community & Culture',
        description:
            'Experience a diverse campus community through social activities, celebrations, shared spaces and opportunities to meet students from different backgrounds.',
        image: '/public-site/images/campus-life/campus-life-thumb-17.webp',
        alt: 'Students sharing community and cultural experiences',
    },
];

export const campusInfoStats: CampusInfoStat[] = [
    {
        id: 1,
        title: 'Student Activities',
        description: 'Opportunities for connection, leadership and personal growth.',
    },
    {
        id: 2,
        title: 'Recreation',
        description: 'Spaces and activities that support movement, teamwork and wellbeing.',
    },
    {
        id: 3,
        title: 'Community',
        description: 'Shared experiences that help students feel part of university life.',
    },
    {
        id: 4,
        title: 'Campus Events',
        description: 'Programmes and gatherings that bring the university community together.',
    },
];

export const campusGalleryItems: CampusGalleryItem[] = [
    {
        id: 1,
        image: '/public-site/images/gallery/gallery-thumb-11.webp',
        alt: 'Campus life moment with students',
    },
    {
        id: 2,
        image: '/public-site/images/gallery/gallery-thumb-12.webp',
        alt: 'Students participating in campus activities',
    },
    {
        id: 3,
        image: '/public-site/images/gallery/gallery-thumb-13.webp',
        alt: 'University campus experience',
    },
    {
        id: 4,
        image: '/public-site/images/gallery/gallery-thumb-14.webp',
        alt: 'Students gathered on campus',
    },
    {
        id: 5,
        image: '/public-site/images/gallery/gallery-thumb-15.webp',
        alt: 'Campus community activity',
    },
    {
        id: 6,
        image: '/public-site/images/gallery/gallery-thumb-16.webp',
        alt: 'Student life and campus spaces',
    },
];

export const campusResourceLinks: CampusResourceLink[] = [
    {
        id: 1,
        label: 'Events',
        description: 'See activities, programmes and gatherings across the university community.',
        href: '/events',
    },
    {
        id: 2,
        label: 'Service Units',
        description: 'Find offices and support units that help students navigate campus life.',
        href: '/service-units',
    },
    {
        id: 3,
        label: 'Admissions',
        description: 'Explore pathways, requirements and application guidance for future students.',
        href: '/admissions',
    },
];
