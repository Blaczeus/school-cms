import type { Faculty, FacultyProgramme } from '@/types/faculty';

const programmeImages = [
    '/public-site/images/program/program-thumb-02.webp',
    '/public-site/images/program/program-thumb-03.webp',
    '/public-site/images/program/program-thumb-04.webp',
    '/public-site/images/program/program-thumb-05.webp',
];

const programmeIcons = [
    '/public-site/images/icon/icon-07.webp',
    '/public-site/images/icon/icon-06.webp',
    '/public-site/images/icon/icon-08.webp',
    '/public-site/images/icon/icon-06.webp',
];

function programme(
    id: string,
    name: string,
    shortDescription: string,
    highlights: string[],
    visualIndex = 0,
): FacultyProgramme {
    return {
        id,
        name,
        slug: id,
        image: programmeImages[visualIndex % programmeImages.length],
        icon: programmeIcons[visualIndex % programmeIcons.length],
        shortDescription,
        highlights,
    };
}

export const faculties: Faculty[] = [
    {
        id: 1,
        name: 'Faculty of Computing and Technology',
        slug: 'computing-and-technology',
        shortName: 'Computing',
        summary:
            'Digital technology, software systems, data, cybersecurity, and applied computing for modern organisations.',
        description:
            'The Faculty of Computing and Technology prepares students to design, build, secure, and manage digital systems. Teaching combines strong computing fundamentals with practical project work, research exposure, and collaboration with technology partners.',
        image: '/public-site/images/faculty/faculty-thumb-01.webp',
        deanName: 'Dr. Amara Okafor',
        deanTitle: 'Dean, Faculty of Computing and Technology',
        deanImage: '/public-site/images/faculty/faculty-details/faculty-details-thumb-01.webp',
        contactEmail: 'computing@example.edu',
        contactPhone: '+234 000 000 1001',
        location: 'Technology Complex',
        departments: ['Computer Science', 'Software Engineering', 'Cybersecurity', 'Information Systems'],
        programmes: [
            programme('computer-science', 'B.Sc. Computer Science', 'Foundations in algorithms, systems, and applied software development.', [
                'Software project studios',
                'Data and systems focus',
                'Research-led learning',
            ]),
            programme('software-engineering', 'B.Sc. Software Engineering', 'Practical training in designing, testing, and maintaining reliable software products.', [
                'Agile project practice',
                'Product design methods',
                'Industry capstone',
            ], 1),
            programme('cybersecurity', 'B.Sc. Cybersecurity', 'Security-focused computing for networks, applications, and digital infrastructure.', [
                'Security lab practice',
                'Risk and compliance',
                'Incident response basics',
            ], 2),
        ],
        statistics: [
            { label: 'Departments', value: 4, suffix: '+', description: 'Focused academic departments' },
            { label: 'Programmes', value: 7, suffix: '+', description: 'Undergraduate and postgraduate pathways' },
            { label: 'Labs', value: 12, suffix: '+', description: 'Teaching and innovation laboratories' },
            { label: 'Partners', value: 18, suffix: '+', description: 'Industry and research collaborators' },
        ],
        highlights: [
            'Project-based learning in software, networks, data, and security.',
            'Research clusters in artificial intelligence, cybersecurity, and digital transformation.',
            'Industry-informed curriculum with internship and capstone opportunities.',
        ],
        accreditation: 'Programmes are structured for national accreditation review and professional relevance.',
    },
    {
        id: 2,
        name: 'Faculty of Engineering',
        slug: 'engineering',
        shortName: 'Engineering',
        summary:
            'Engineering education built around design thinking, laboratory practice, and sustainable infrastructure.',
        description:
            'The Faculty of Engineering develops graduates who can solve technical problems with creativity, precision, and responsibility. Students engage in design studios, laboratory courses, field exposure, and applied research.',
        image: '/public-site/images/faculty/faculty-thumb-02.webp',
        deanName: 'Prof. Daniel Mensah',
        deanTitle: 'Dean, Faculty of Engineering',
        deanImage: '/public-site/images/faculty/faculty-details/faculty-details-thumb-01.webp',
        contactEmail: 'engineering@example.edu',
        contactPhone: '+234 000 000 1002',
        location: 'Engineering Workshop Building',
        departments: ['Civil Engineering', 'Mechanical Engineering', 'Electrical and Electronics Engineering'],
        programmes: [
            programme('civil-engineering', 'B.Eng. Civil Engineering', 'Design and construction training for resilient buildings and infrastructure.', [
                'Structural design',
                'Materials testing',
                'Field practice',
            ]),
            programme('mechanical-engineering', 'B.Eng. Mechanical Engineering', 'Engineering science, design, and manufacturing for mechanical systems.', [
                'Workshop learning',
                'Design studios',
                'Thermal systems',
            ], 1),
            programme('electrical-engineering', 'B.Eng. Electrical Engineering', 'Power, electronics, and control systems for modern engineering applications.', [
                'Power systems',
                'Circuit laboratories',
                'Control fundamentals',
            ], 2),
        ],
        statistics: [
            { label: 'Departments', value: 3, suffix: '+', description: 'Engineering disciplines' },
            { label: 'Studios', value: 8, suffix: '+', description: 'Design and workshop spaces' },
            { label: 'Projects', value: 40, suffix: '+', description: 'Student design projects yearly' },
            { label: 'Partners', value: 14, suffix: '+', description: 'Industry placement partners' },
        ],
        highlights: [
            'Strong emphasis on design, safety, testing, and professional ethics.',
            'Workshop and laboratory learning from the first year.',
            'Applied projects focused on infrastructure, energy, and manufacturing.',
        ],
        accreditation: 'Engineering programmes follow relevant professional accreditation expectations.',
    },
    {
        id: 3,
        name: 'Faculty of Management and Social Sciences',
        slug: 'management-and-social-sciences',
        shortName: 'Management',
        summary:
            'Business, economics, governance, and social inquiry for leadership in public and private sectors.',
        description:
            'The Faculty of Management and Social Sciences brings together disciplines that help students understand institutions, markets, communities, and policy. Teaching is supported by case studies, data-informed analysis, and community engagement.',
        image: '/public-site/images/faculty/faculty-thumb-03.webp',
        deanName: 'Dr. Kemi Balogun',
        deanTitle: 'Dean, Faculty of Management and Social Sciences',
        deanImage: '/public-site/images/faculty/faculty-details/faculty-details-thumb-01.webp',
        contactEmail: 'management@example.edu',
        contactPhone: '+234 000 000 1003',
        location: 'Social Sciences Block',
        departments: ['Business Administration', 'Economics', 'Political Science', 'Mass Communication'],
        programmes: [
            programme('business-administration', 'B.Sc. Business Administration', 'Management, operations, and enterprise learning for organisational leadership.', [
                'Case-based learning',
                'Enterprise projects',
                'Leadership practice',
            ]),
            programme('economics', 'B.Sc. Economics', 'Analytical training in markets, policy, development, and economic decision-making.', [
                'Data analysis',
                'Policy seminars',
                'Applied research',
            ], 1),
            programme('political-science', 'B.Sc. Political Science', 'Study of governance, public policy, institutions, and civic leadership.', [
                'Policy analysis',
                'Governance studies',
                'Public service focus',
            ], 2),
        ],
        statistics: [
            { label: 'Departments', value: 4, suffix: '+', description: 'Academic departments' },
            { label: 'Centres', value: 5, suffix: '+', description: 'Policy and enterprise units' },
            { label: 'Seminars', value: 30, suffix: '+', description: 'Faculty learning events yearly' },
            { label: 'Projects', value: 25, suffix: '+', description: 'Community and enterprise projects' },
        ],
        highlights: [
            'Case-based teaching in management, economics, communication, and governance.',
            'Research focus on entrepreneurship, public policy, media, and development.',
            'Leadership preparation for business, civil society, and public service.',
        ],
        accreditation: 'Programmes are maintained through periodic curriculum and quality assurance review.',
    },
    {
        id: 4,
        name: 'Faculty of Arts and Humanities',
        slug: 'arts-and-humanities',
        shortName: 'Humanities',
        summary:
            'Language, culture, history, ethics, and creative practice for thoughtful civic and professional life.',
        description:
            'The Faculty of Arts and Humanities supports rigorous inquiry into human experience, expression, and values. Students develop communication, interpretation, research, and creative skills across diverse cultural contexts.',
        image: '/public-site/images/faculty/faculty-thumb-04.webp',
        deanName: 'Prof. Miriam Adeyemi',
        deanTitle: 'Dean, Faculty of Arts and Humanities',
        deanImage: '/public-site/images/faculty/faculty-details/faculty-details-thumb-01.webp',
        contactEmail: 'humanities@example.edu',
        contactPhone: '+234 000 000 1004',
        location: 'Humanities Building',
        departments: ['English and Literary Studies', 'History and International Studies', 'Philosophy', 'Languages'],
        programmes: [
            programme('english', 'B.A. English', 'Language, literature, communication, and critical interpretation across cultural contexts.', [
                'Writing workshops',
                'Literary analysis',
                'Research seminars',
            ]),
            programme('history-and-international-studies', 'B.A. History and International Studies', 'Historical inquiry and global studies for understanding societies and institutions.', [
                'Archival research',
                'Global perspectives',
                'Policy context',
            ], 1),
            programme('philosophy', 'B.A. Philosophy', 'Ethics, logic, and critical reasoning for civic, academic, and professional life.', [
                'Ethical reasoning',
                'Logic foundations',
                'Debate seminars',
            ], 2),
        ],
        statistics: [
            { label: 'Departments', value: 4, suffix: '+', description: 'Humanities departments' },
            { label: 'Studios', value: 6, suffix: '+', description: 'Creative and language spaces' },
            { label: 'Publications', value: 50, suffix: '+', description: 'Faculty research outputs' },
            { label: 'Events', value: 20, suffix: '+', description: 'Lectures and cultural programmes' },
        ],
        highlights: [
            'Training in critical thinking, communication, research, and cultural literacy.',
            'Creative and scholarly engagement through seminars, exhibitions, and publications.',
            'Interdisciplinary pathways connecting humanities with media, education, and public life.',
        ],
        accreditation: 'Academic programmes are reviewed for disciplinary depth and graduate relevance.',
    },
    {
        id: 5,
        name: 'Faculty of Health Sciences',
        slug: 'health-sciences',
        shortName: 'Health Sciences',
        summary:
            'Health education, clinical foundations, public health, and laboratory science for community wellbeing.',
        description:
            'The Faculty of Health Sciences prepares students for health-related professions through careful scientific training, ethical practice, simulation, and community-focused learning.',
        image: '/public-site/images/faculty/faculty-thumb-08.webp',
        deanName: 'Dr. Yusuf Ibrahim',
        deanTitle: 'Dean, Faculty of Health Sciences',
        deanImage: '/public-site/images/faculty/faculty-details/faculty-details-thumb-01.webp',
        contactEmail: 'healthsciences@example.edu',
        contactPhone: '+234 000 000 1005',
        location: 'Health Sciences Complex',
        departments: ['Public Health', 'Medical Laboratory Science', 'Nursing Science', 'Health Information Management'],
        programmes: [
            programme('public-health', 'B.Sc. Public Health', 'Community health, prevention, and health promotion for population wellbeing.', [
                'Field health practice',
                'Epidemiology basics',
                'Community outreach',
            ]),
            programme('medical-laboratory-science', 'B.MLS Medical Laboratory Science', 'Laboratory science training for diagnostic support and clinical quality.', [
                'Diagnostic methods',
                'Lab safety practice',
                'Clinical foundations',
            ], 1),
            programme('nursing-science', 'B.NSc. Nursing Science', 'Patient-centred nursing education with simulation and clinical preparation.', [
                'Simulation labs',
                'Clinical care skills',
                'Ethics and safety',
            ], 2),
            programme('physiotherapy', 'B.Sc. Physiotherapy', 'Movement science and rehabilitation foundations for evidence-informed patient care.', [
                'Rehabilitation practice',
                'Anatomy and movement',
                'Clinical exposure',
            ], 3),
            programme('human-nutrition-and-dietetics', 'B.Sc. Human Nutrition and Dietetics', 'Nutrition science, diet planning, and community nutrition for health outcomes.', [
                'Nutrition assessment',
                'Diet planning',
                'Community practice',
            ]),
            programme('environmental-health-science', 'B.Sc. Environmental Health Science', 'Environmental risk, sanitation, and public safety training for healthier communities.', [
                'Environmental safety',
                'Public health inspection',
                'Risk prevention',
            ], 1),
        ],
        statistics: [
            { label: 'Departments', value: 4, suffix: '+', description: 'Health science departments' },
            { label: 'Labs', value: 10, suffix: '+', description: 'Teaching and simulation labs' },
            { label: 'Clinics', value: 6, suffix: '+', description: 'Training and partner sites' },
            { label: 'Outreach', value: 15, suffix: '+', description: 'Community health initiatives' },
        ],
        highlights: [
            'Science-led health education with simulation and laboratory practice.',
            'Community health exposure through outreach, fieldwork, and partner sites.',
            'Strong emphasis on ethics, safety, communication, and patient-centred practice.',
        ],
        accreditation: 'Health programmes are prepared for relevant regulatory and professional accreditation pathways.',
    },
];

export function findFaculty(slug: string | undefined): Faculty | undefined {
    return faculties.find((faculty) => faculty.slug === slug);
}
