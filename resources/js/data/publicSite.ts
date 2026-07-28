export type PublicNavItem = {
    label: string;
    href?: string;
    items?: PublicNavItem[];
};

export const publicInstitution = {
    name: 'Institution Name',
    tagline: 'A Global University Experience',
    description:
        'A higher education institution focused on academic excellence, research, and student success.',
    phone: '',
    email: '',
    address: '',
    socials: [],
} as const;

export const publicTopLinks: PublicNavItem[] = [
    { label: 'Academics' },
    { label: 'Admissions' },
    { label: 'Campus Life' },
    { label: 'News' },
];

export const publicNavigation: PublicNavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        items: [
            { label: 'About the Institution', href: '/about' },
            { label: 'Administration' },
            { label: 'Research' },
            { label: 'Alumni', href: '/alumni' },
        ],
    },
    {
        label: 'Academics',
        items: [
            { label: 'Faculties', href: '/faculties' },
            { label: 'Departments', href: '/departments' },
            { label: 'Courses / Programmes' },
        ],
    },
    {
        label: 'Admissions',
        items: [
            { label: 'How to Apply' },
            { label: 'Admission Requirements' },
            { label: 'Tuition and Fees' },
            { label: 'Scholarships and Financial Aid' },
        ],
    },
    {
        label: 'Campus',
        items: [
            { label: 'Service Units' },
            { label: 'Campus Life' },
            { label: 'Library' },
            { label: 'Gallery' },
        ],
    },
    { label: 'News', href: '/news' },
    { label: 'Contact' },
];

export const footerCampusLinks: PublicNavItem[] = [
    { label: 'About the Institution', href: '/about' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Library' },
    { label: 'Campus Life' },
];

export const footerUsefulLinks: PublicNavItem[] = [
    { label: 'Faculties' },
    { label: 'Programmes' },
    { label: 'News', href: '/news' },
    { label: 'How to Apply' },
];
