export type PublicNavItem = {
    label: string;
    href?: string;
    activeMatch?: 'exact' | 'section';
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
            { label: 'Admissions Overview', href: '/admissions', activeMatch: 'exact' },
            { label: 'How to Apply', href: '/admissions/how-to-apply' },
            { label: 'Admission Requirements', href: '/admissions/requirements' },
            { label: 'Tuition & Fees', href: '/admissions/tuition-and-fees' },
        ],
    },
    {
        label: 'Campus',
        items: [
            { label: 'Campus Life' },
            { label: 'Events', href: '/events' },
            { label: 'Library' },
            { label: 'Gallery' },
        ],
    },
    { label: 'Service Units', href: '/service-units' },
    { label: 'News', href: '/news' },
    { label: 'Contact' },
];

export const footerCampusLinks: PublicNavItem[] = [
    { label: 'About the Institution', href: '/about' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Service Units', href: '/service-units' },
    { label: 'Library' },
    { label: 'Campus Life' },
];

export const footerUsefulLinks: PublicNavItem[] = [
    { label: 'Faculties' },
    { label: 'Programmes' },
    { label: 'Campus Events', href: '/events' },
    { label: 'News', href: '/news' },
    { label: 'How to Apply', href: '/admissions/how-to-apply' },
];
