import type { ServiceUnit } from '@/types/serviceUnit';

export const serviceUnits: ServiceUnit[] = [
    {
        id: 1,
        slug: 'university-library',
        name: 'University Library',
        category: 'Academic Support',
        summary: 'Supports study, teaching, and research through print collections, digital resources, and research guidance.',
        description:
            'The University Library provides learning resources, reading spaces, research support, and access to academic information services.',
        image: '/public-site/images/libraries/libraries-thumb-01.webp',
        location: 'Library Complex',
        contact: {
            email: 'library@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        featured: true,
    },
    {
        id: 2,
        slug: 'ict-centre',
        name: 'ICT Centre',
        category: 'Technology',
        summary: 'Provides digital systems support, network access guidance, and help with approved campus technology services.',
        description:
            'The ICT Centre supports institutional technology services, including user access, learning platforms, and campus digital systems.',
        image: '/public-site/images/overview/overview-thumb-02.webp',
        location: 'ICT Building',
        contact: {
            email: 'ict@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        featured: true,
    },
    {
        id: 3,
        slug: 'registry',
        name: 'Registry',
        category: 'Administrative',
        summary: 'Coordinates official academic records, student documentation, verification, and core administrative processes.',
        description:
            'The Registry manages student records, academic documentation, verification support, and institution-wide administrative records.',
        image: '/public-site/images/requirement/requirement-thumb-01.webp',
        location: 'Administrative Block',
        contact: {
            email: 'registry@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        featured: true,
    },
    {
        id: 4,
        slug: 'student-affairs',
        name: 'Student Affairs',
        category: 'Student Welfare',
        summary: 'Supports student welfare, campus guidance, orientation, clubs, and non-academic student development.',
        description:
            'Student Affairs provides welfare guidance, student support coordination, orientation assistance, and campus life services.',
        image: '/public-site/images/campus-life/campus-life-thumb-04.webp',
        location: 'Student Centre',
        contact: {
            email: 'studentaffairs@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
    },
    {
        id: 5,
        slug: 'medical-centre',
        name: 'Medical Centre',
        category: 'Health',
        summary: 'Provides basic campus health support, consultations, referrals, and student health guidance.',
        description:
            'The Medical Centre supports the university community with campus health services, consultation support, and wellness guidance.',
        image: '/public-site/images/contact/contact-thumb-01.webp',
        location: 'Medical Centre',
        contact: {
            email: 'medicalcentre@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
    },
    {
        id: 6,
        slug: 'bursary',
        name: 'Bursary',
        category: 'Administrative',
        summary: 'Handles student payment guidance, receipts, financial documentation, and institution-related account enquiries.',
        description:
            'The Bursary provides support for approved payment processes, account enquiries, financial records, and related documentation.',
        image: '/public-site/images/tuition/tuition-thumb-01.webp',
        location: 'Administrative Block',
        contact: {
            email: 'bursary@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
    },
    {
        id: 7,
        slug: 'security-unit',
        name: 'Security Unit',
        category: 'Security',
        summary: 'Supports campus safety coordination, access guidance, incident reporting, and visitor movement control.',
        description:
            'The Security Unit helps maintain a safe campus environment through access support, safety coordination, and incident reporting.',
        image: '/public-site/images/campus-life/campus-life-thumb-11.webp',
        location: 'Main Gate Security Office',
        contact: {
            email: 'security@univet.edu',
            officeHours: 'Contact the unit for current desk hours',
        },
    },
    {
        id: 8,
        slug: 'works-and-maintenance',
        name: 'Works and Maintenance',
        category: 'Operations',
        summary: 'Coordinates facilities support, maintenance requests, repairs, and campus infrastructure services.',
        description:
            'Works and Maintenance supports the upkeep of university facilities, classrooms, offices, and shared campus infrastructure.',
        image: '/public-site/images/gallery/gallery-thumb-04.webp',
        location: 'Works Yard',
        contact: {
            email: 'works@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
    },
];
