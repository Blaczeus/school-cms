import type { Department } from '@/types/department';

type DepartmentDetails = Pick<
    Department,
    | 'duration'
    | 'credits'
    | 'language'
    | 'overview'
    | 'about'
    | 'session'
    | 'structureSummary'
    | 'curriculumTopics'
    | 'curriculum'
    | 'professors'
    | 'costRows'
    | 'scholarships'
    | 'admissionRequirements'
    | 'deadlineRows'
    | 'contactPhone'
    | 'contactEmail'
>;

const createDepartmentDetails = (
    departmentName: string,
    facultyName: string,
    subjects: string[],
): DepartmentDetails => ({
    duration: '4 Years',
    credits: '120',
    language: 'English',
    overview: `${departmentName} offers a carefully structured academic experience that combines disciplinary foundations, guided studio or laboratory work, research exposure, and professional preparation. Students progress through theory, practice, and applied projects while learning within ${facultyName}.`,
    about: `The department supports undergraduate and emerging postgraduate study through a curriculum shaped around current professional expectations. Learners build a strong academic base, develop practical competence, and complete supervised work that connects classroom learning with community, industry, or research needs.`,
    session: '2026 - 2027',
    structureSummary:
        'The department uses a semester-based structure with foundational courses in the early years, specialist courses in the middle years, and supervised projects, fieldwork, or capstone experiences in the final stage.',
    curriculumTopics: [
        {
            title: 'Foundational Studies:',
            content: `${subjects[0]} principles, academic communication, quantitative reasoning, and digital literacy.`,
        },
        {
            title: 'Core Department Courses:',
            content: `${subjects[1]} methods, applied problem-solving, discipline-specific tools, and professional standards.`,
        },
        {
            title: 'Laboratory and Studio Practice:',
            content: `${subjects[2]} workshops, simulations, case work, and supervised practical sessions.`,
        },
        {
            title: 'Research and Field Experience:',
            content: 'Research methods, field placement, seminar presentation, and evidence-based reporting.',
        },
        {
            title: 'Capstone Preparation:',
            content: 'Final-year project planning, ethics review, project implementation, and public presentation.',
        },
    ],
    curriculum: [
        {
            title: 'Year One: Foundation',
            description:
                'Students begin with university-wide foundations and introductory department courses that establish academic habits and disciplinary vocabulary.',
            courses: [
                { code: 'GST 101', title: 'Communication in Academic Contexts', credits: '2' },
                { code: 'MTH 111', title: 'Quantitative Reasoning', credits: '3' },
                { code: 'DPT 101', title: `Introduction to ${departmentName.replace('Department of ', '')}`, credits: '3' },
            ],
        },
        {
            title: 'Year Two: Core Methods',
            description:
                'The second year develops practical methods, analytical confidence, and the core knowledge needed for advanced study.',
            courses: [
                { code: 'DPT 201', title: `${subjects[0]} Methods`, credits: '3' },
                { code: 'DPT 211', title: `${subjects[1]} Applications`, credits: '3' },
                { code: 'STA 201', title: 'Applied Statistics and Data Interpretation', credits: '3' },
            ],
        },
        {
            title: 'Year Three and Four: Specialisation',
            description:
                'Advanced courses, supervised research, field exposure, and capstone projects help students connect study with professional practice.',
            courses: [
                { code: 'DPT 301', title: `${subjects[2]} Practice`, credits: '3' },
                { code: 'DPT 401', title: 'Research Project and Seminar', credits: '6' },
                { code: 'DPT 421', title: 'Professional Ethics and Leadership', credits: '2' },
            ],
        },
    ],
    professors: [
        {
            name: 'Dr. Kathryn Murphy',
            title: 'Head of Department',
            image: '/public-site/images/team/team-thumb-01.webp',
        },
        {
            name: 'Dr. Savannah Nguyen',
            title: 'Senior Lecturer',
            image: '/public-site/images/team/team-thumb-02.webp',
        },
        {
            name: 'Dr. Brooklyn Simmons',
            title: 'Academic Advisor',
            image: '/public-site/images/team/team-thumb-03.webp',
        },
    ],
    costRows: [
        { item: 'Application Fee', firstSemester: 'Included', secondSemester: '-', annual: 'One-time' },
        { item: 'Tuition', firstSemester: 'Published by Registry', secondSemester: 'Published by Registry', annual: 'Per session' },
        { item: 'Laboratory and Studio Fee', firstSemester: 'Department-based', secondSemester: 'Department-based', annual: 'Where applicable' },
        { item: 'Learning Materials', firstSemester: 'Student-managed', secondSemester: 'Student-managed', annual: 'Varies' },
    ],
    scholarships: [
        {
            title: 'Merit Consideration',
            description: 'High-performing applicants may be considered for institutional merit support when available.',
        },
        {
            title: 'Need-Based Support',
            description: 'Eligible students may apply for bursary or payment support through the student affairs office.',
        },
        {
            title: 'Department Awards',
            description: 'Final-year projects and academic excellence may qualify students for department recognition.',
        },
    ],
    admissionRequirements: [
        {
            title: '1. Academic Qualifications',
            items: [
                'Completed secondary education or equivalent entry qualification.',
                'Required credits in English, Mathematics, and relevant science or social science subjects.',
                'Transfer or postgraduate applicants must provide recognised prior academic records.',
            ],
        },
        {
            title: '2. Required Documents',
            items: [
                'Completed application form.',
                'Academic transcripts and certificates.',
                'National ID, passport, or approved identification document.',
            ],
        },
        {
            title: '3. Department Review',
            items: [
                'Some applicants may be invited for an interview, portfolio review, or aptitude assessment.',
                'Final placement is subject to departmental capacity and admissions approval.',
            ],
        },
        {
            title: '4. Financial Requirements',
            items: [
                'Payment of applicable application or acceptance fees.',
                'International applicants may need to show evidence of tuition and living cost support.',
            ],
        },
    ],
    deadlineRows: [
        { level: 'Undergraduate', session: 'Spring Intake', opens: 'October 1', deadline: 'December 15', begins: 'January 10' },
        { level: 'Undergraduate', session: 'Fall Intake', opens: 'April 1', deadline: 'July 30', begins: 'September 1' },
        { level: 'Postgraduate', session: 'Spring Intake', opens: 'October 1', deadline: 'December 30', begins: 'January 15' },
        { level: 'Postgraduate', session: 'Fall Intake', opens: 'April 1', deadline: 'August 10', begins: 'September 5' },
    ],
    contactPhone: '+234 800 000 1200',
    contactEmail: 'admissions@schoolcms.edu',
});

export const departments: Department[] = [
    {
        id: 1,
        name: 'Department of Computer Science',
        slug: 'computer-science',
        shortName: 'Computer Science',
        facultyName: 'Faculty of Computing and Technology',
        facultySlug: 'computing-and-technology',
        summary:
            'Computing foundations, algorithms, software systems, and applied problem-solving for digital environments.',
        image: '/public-site/images/program/program-thumb-05.webp',
        icon: '/public-site/images/icon/icon-07.webp',
        programmeCount: 4,
        undergraduateProgrammes: ['B.Sc. Computer Science'],
        postgraduateProgrammes: ['M.Sc. Computer Science'],
        highlights: ['Algorithms and systems', 'Research-led teaching', 'Project studios'],
        ...createDepartmentDetails('Department of Computer Science', 'Faculty of Computing and Technology', [
            'Computing',
            'Software systems',
            'Algorithmic design',
        ]),
    },
    {
        id: 2,
        name: 'Department of Software Engineering',
        slug: 'software-engineering',
        shortName: 'Software Engineering',
        facultyName: 'Faculty of Computing and Technology',
        facultySlug: 'computing-and-technology',
        summary:
            'Product-focused software design, testing, architecture, and delivery for reliable digital services.',
        image: '/public-site/images/program/program-thumb-04.webp',
        icon: '/public-site/images/icon/icon-06.webp',
        programmeCount: 3,
        undergraduateProgrammes: ['B.Sc. Software Engineering'],
        postgraduateProgrammes: [],
        highlights: ['Agile delivery', 'Product design', 'Capstone projects'],
        ...createDepartmentDetails('Department of Software Engineering', 'Faculty of Computing and Technology', [
            'Software design',
            'Product engineering',
            'Quality assurance',
        ]),
    },
    {
        id: 3,
        name: 'Department of Cybersecurity',
        slug: 'cybersecurity',
        shortName: 'Cybersecurity',
        facultyName: 'Faculty of Computing and Technology',
        facultySlug: 'computing-and-technology',
        summary:
            'Security education for networks, applications, risk management, incident response, and digital resilience.',
        image: '/public-site/images/program/program-thumb-06.webp',
        icon: '/public-site/images/icon/icon-08.webp',
        programmeCount: 3,
        undergraduateProgrammes: ['B.Sc. Cybersecurity'],
        postgraduateProgrammes: ['M.Sc. Cybersecurity'],
        highlights: ['Security labs', 'Risk analysis', 'Incident response'],
        ...createDepartmentDetails('Department of Cybersecurity', 'Faculty of Computing and Technology', [
            'Information security',
            'Risk management',
            'Incident response',
        ]),
    },
    {
        id: 4,
        name: 'Department of Electrical and Electronic Engineering',
        slug: 'electrical-and-electronic-engineering',
        shortName: 'Electrical Engineering',
        facultyName: 'Faculty of Engineering',
        facultySlug: 'engineering',
        summary:
            'Power, electronics, control, and communication systems for modern infrastructure and technology.',
        image: '/public-site/images/program/program-thumb-02.webp',
        icon: '/public-site/images/icon/icon-07.webp',
        programmeCount: 4,
        undergraduateProgrammes: ['B.Eng. Electrical and Electronic Engineering'],
        postgraduateProgrammes: [],
        highlights: ['Power systems', 'Circuit laboratories', 'Control fundamentals'],
        ...createDepartmentDetails('Department of Electrical and Electronic Engineering', 'Faculty of Engineering', [
            'Engineering mathematics',
            'Electronic systems',
            'Power and control laboratories',
        ]),
    },
    {
        id: 5,
        name: 'Department of Civil Engineering',
        slug: 'civil-engineering',
        shortName: 'Civil Engineering',
        facultyName: 'Faculty of Engineering',
        facultySlug: 'engineering',
        summary:
            'Design, construction, materials, and infrastructure systems for resilient built environments.',
        image: '/public-site/images/program/program-thumb-07.webp',
        icon: '/public-site/images/icon/icon-06.webp',
        programmeCount: 3,
        undergraduateProgrammes: ['B.Eng. Civil Engineering'],
        postgraduateProgrammes: [],
        highlights: ['Structural design', 'Materials testing', 'Field practice'],
        ...createDepartmentDetails('Department of Civil Engineering', 'Faculty of Engineering', [
            'Built environment studies',
            'Structural analysis',
            'Materials and site practice',
        ]),
    },
    {
        id: 6,
        name: 'Department of Business Administration',
        slug: 'business-administration',
        shortName: 'Business Administration',
        facultyName: 'Faculty of Management and Social Sciences',
        facultySlug: 'management-and-social-sciences',
        summary:
            'Management, enterprise, operations, and leadership preparation for public and private organisations.',
        image: '/public-site/images/program/program-thumb-08.webp',
        icon: '/public-site/images/icon/icon-08.webp',
        programmeCount: 5,
        undergraduateProgrammes: ['B.Sc. Business Administration'],
        postgraduateProgrammes: ['MBA', 'M.Sc. Management'],
        highlights: ['Case-based learning', 'Enterprise projects', 'Leadership practice'],
        ...createDepartmentDetails('Department of Business Administration', 'Faculty of Management and Social Sciences', [
            'Management foundations',
            'Enterprise strategy',
            'Case-based business practice',
        ]),
    },
    {
        id: 7,
        name: 'Department of Economics',
        slug: 'economics',
        shortName: 'Economics',
        facultyName: 'Faculty of Management and Social Sciences',
        facultySlug: 'management-and-social-sciences',
        summary:
            'Markets, policy, development, and data-informed economic analysis for decision-making.',
        image: '/public-site/images/program/program-thumb-03.webp',
        icon: '/public-site/images/icon/icon-07.webp',
        programmeCount: 3,
        undergraduateProgrammes: ['B.Sc. Economics'],
        postgraduateProgrammes: ['M.Sc. Economics'],
        highlights: ['Policy seminars', 'Applied research', 'Data analysis'],
        ...createDepartmentDetails('Department of Economics', 'Faculty of Management and Social Sciences', [
            'Economic theory',
            'Policy analysis',
            'Applied data modelling',
        ]),
    },
    {
        id: 8,
        name: 'Department of Mass Communication',
        slug: 'mass-communication',
        shortName: 'Mass Communication',
        facultyName: 'Faculty of Management and Social Sciences',
        facultySlug: 'management-and-social-sciences',
        summary:
            'Media, journalism, public communication, and digital storytelling for contemporary audiences.',
        image: '/public-site/images/program/program-thumb-05.webp',
        icon: '/public-site/images/icon/icon-06.webp',
        programmeCount: 3,
        undergraduateProgrammes: ['B.Sc. Mass Communication'],
        postgraduateProgrammes: [],
        highlights: ['Media production', 'Digital storytelling', 'Public communication'],
        ...createDepartmentDetails('Department of Mass Communication', 'Faculty of Management and Social Sciences', [
            'Communication theory',
            'Media production',
            'Newsroom and digital storytelling',
        ]),
    },
    {
        id: 9,
        name: 'Department of Public Health',
        slug: 'public-health',
        shortName: 'Public Health',
        facultyName: 'Faculty of Health Sciences',
        facultySlug: 'health-sciences',
        summary:
            'Population health, prevention, epidemiology, and community health practice for wellbeing.',
        image: '/public-site/images/program/program-thumb-04.webp',
        icon: '/public-site/images/icon/icon-08.webp',
        programmeCount: 4,
        undergraduateProgrammes: ['B.Sc. Public Health'],
        postgraduateProgrammes: ['Master of Public Health'],
        highlights: ['Community outreach', 'Epidemiology basics', 'Health promotion'],
        ...createDepartmentDetails('Department of Public Health', 'Faculty of Health Sciences', [
            'Population health',
            'Epidemiology',
            'Community health practice',
        ]),
    },
    {
        id: 10,
        name: 'Department of Nursing Science',
        slug: 'nursing-science',
        shortName: 'Nursing Science',
        facultyName: 'Faculty of Health Sciences',
        facultySlug: 'health-sciences',
        summary:
            'Patient-centred nursing education, simulation, clinical preparation, and professional care standards.',
        image: '/public-site/images/program/program-thumb-06.webp',
        icon: '/public-site/images/icon/icon-07.webp',
        programmeCount: 2,
        undergraduateProgrammes: ['B.NSc. Nursing Science'],
        postgraduateProgrammes: [],
        highlights: ['Simulation labs', 'Clinical care skills', 'Ethics and safety'],
        ...createDepartmentDetails('Department of Nursing Science', 'Faculty of Health Sciences', [
            'Health science foundations',
            'Clinical nursing care',
            'Simulation and ward practice',
        ]),
    },
];

export const findDepartment = (slug: string): Department | undefined =>
    departments.find((department) => department.slug === slug);
