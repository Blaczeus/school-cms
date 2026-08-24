import type { Programme, ProgrammeStudyLevel, ProgrammeStudyStage } from '@/types/programme';

type ProgrammeInput = Omit<
    Programme,
    | 'description'
    | 'highlights'
    | 'studyStages'
    | 'admissionSummary'
    | 'admissionRequirements'
    | 'learningOutcomes'
    | 'careerOpportunities'
    | 'costGuidance'
> & {
    focusAreas: string[];
    learningOutcomes: string[];
    careerOpportunities: string[];
    admissionFocus: string;
};

type ProgrammeFamily = 'business' | 'computing' | 'economics' | 'engineering' | 'health' | 'media';

const studyLevelLabels: Record<ProgrammeStudyLevel, string> = {
    undergraduate: 'undergraduate',
    postgraduate: 'postgraduate',
};

function createAdmissionRequirements(programme: ProgrammeInput): string[] {
    if (programme.studyLevel === 'postgraduate') {
        return [
            'A recognised first degree or equivalent academic preparation from an approved institution.',
            `Evidence of prior study or professional exposure in ${programme.admissionFocus} or a closely related area.`,
            'Academic transcripts, identification documents, and any additional materials requested during admissions review.',
        ];
    }

    return [
        'Completed secondary education or equivalent entry qualification.',
        `Required credits in English, Mathematics, and subjects relevant to ${programme.admissionFocus}.`,
        'Completed application records and supporting documents submitted through the approved admissions process.',
    ];
}

function getProgrammeFamily(programme: ProgrammeInput): ProgrammeFamily {
    if (programme.facultySlug === 'engineering') {
        return 'engineering';
    }

    if (programme.facultySlug === 'health-sciences') {
        return 'health';
    }

    if (programme.departmentSlug === 'economics') {
        return 'economics';
    }

    if (programme.departmentSlug === 'mass-communication') {
        return 'media';
    }

    if (programme.facultySlug === 'management-and-social-sciences') {
        return 'business';
    }

    return 'computing';
}

function createStudyStages(programme: ProgrammeInput): ProgrammeStudyStage[] {
    const [primaryFocus, secondaryFocus, specialistFocus] = programme.focusAreas;
    const family = getProgrammeFamily(programme);
    const creditLoad = 'Credit Load: Varies by approved programme structure';

    const familyCopy: Record<ProgrammeFamily, { foundation: string; development: string; application: string; final: string }> = {
        business: {
            foundation:
                'Students build a foundation in business communication, quantitative reasoning, enterprise awareness, and the organisational ideas needed for later management study.',
            development:
                `Students move into ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, and applied decision-making through cases, group work, and guided analysis.`,
            application:
                `Students connect ${secondaryFocus.toLowerCase()} with workplace, enterprise, and public-sector contexts while strengthening reporting and presentation skills.`,
            final:
                `The final stage emphasises ${specialistFocus.toLowerCase()}, strategy, supervised project work, and preparation for professional or postgraduate pathways.`,
        },
        computing: {
            foundation:
                'Students build a broad academic and computing base through introductory concepts, quantitative reasoning, communication, and structured problem-solving.',
            development:
                `Students progress into ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, and practical studio work that strengthens technical confidence.`,
            application:
                `Students apply ${secondaryFocus.toLowerCase()} and ${specialistFocus.toLowerCase()} through projects, systems thinking, documentation, and collaborative delivery.`,
            final:
                `The final stage focuses on ${specialistFocus.toLowerCase()}, supervised project work, technical communication, and readiness for professional or further study routes.`,
        },
        economics: {
            foundation:
                'Students develop foundations in economic reasoning, quantitative methods, academic communication, and the social context of markets and policy.',
            development:
                `Students build confidence in ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, and evidence-based interpretation of economic questions.`,
            application:
                `Students apply ${secondaryFocus.toLowerCase()} and ${specialistFocus.toLowerCase()} to policy, development, business, and institutional problems.`,
            final:
                `The final stage emphasises supervised analysis, economic argument, project work, and preparation for research, policy, or professional pathways.`,
        },
        engineering: {
            foundation:
                'Students begin with engineering mathematics, science foundations, communication, safety awareness, and introductory design thinking.',
            development:
                `Students move into ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, laboratory practice, and disciplined engineering problem-solving.`,
            application:
                `Students apply ${secondaryFocus.toLowerCase()} and ${specialistFocus.toLowerCase()} through design tasks, testing, field exposure, and technical documentation.`,
            final:
                `The final stage focuses on advanced design, supervised project work, professional standards, and preparation for engineering practice or further study.`,
        },
        health: {
            foundation:
                'Students build health science foundations through biology-informed study, communication, ethics, quantitative reasoning, and introductory professional awareness.',
            development:
                `Students progress into ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, practical sessions, and guided preparation for applied health contexts.`,
            application:
                `Students connect ${secondaryFocus.toLowerCase()} with ${specialistFocus.toLowerCase()} through supervised practice, case learning, and community or clinical exposure.`,
            final:
                `The final stage emphasises ${specialistFocus.toLowerCase()}, ethical practice, supervised projects, and preparation for professional or postgraduate health pathways.`,
        },
        media: {
            foundation:
                'Students build foundations in communication, writing, media literacy, audience awareness, and academic study habits.',
            development:
                `Students move into ${primaryFocus.toLowerCase()}, ${secondaryFocus.toLowerCase()}, and production practice across written, visual, and digital formats.`,
            application:
                `Students apply ${secondaryFocus.toLowerCase()} and ${specialistFocus.toLowerCase()} through newsroom, campaign, studio, or public communication tasks.`,
            final:
                `The final stage focuses on portfolio development, supervised media projects, ethical practice, and readiness for communication-related pathways.`,
        },
    };

    if (programme.studyLevel === 'postgraduate') {
        return [
            {
                title: 'Stage One: Advanced Foundations',
                description: `Students strengthen advanced disciplinary knowledge in ${primaryFocus.toLowerCase()}, research habits, and professional reasoning for specialist work.`,
                creditLoad,
            },
            {
                title: 'Stage Two: Specialist Research and Application',
                description: `Students connect ${secondaryFocus.toLowerCase()} and ${specialistFocus.toLowerCase()} through guided seminars, applied inquiry, supervised project work, and professional presentation.`,
                creditLoad,
            },
        ];
    }

    const stages: ProgrammeStudyStage[] = [
        {
            title: 'Year One: Foundations',
            description: familyCopy[family].foundation,
            creditLoad,
        },
        {
            title: 'Year Two: Core Development',
            description: familyCopy[family].development,
            creditLoad,
        },
        {
            title: 'Year Three: Advanced Study and Application',
            description: familyCopy[family].application,
            creditLoad,
        },
    ];

    if (programme.duration.startsWith('5')) {
        stages.push({
            title: 'Year Four: Professional Integration',
            description:
                'Students take on more advanced studio, laboratory, field, simulation, or design experiences that connect earlier study with professional expectations and supervised practice.',
            creditLoad,
        });
    }

    stages.push({
        title: programme.duration.startsWith('5') ? 'Year Five: Final Project and Readiness' : 'Year Four: Specialisation and Final Project',
        description: familyCopy[family].final,
        creditLoad,
    });

    return stages;
}

function createProgramme(programme: ProgrammeInput): Programme {
    return {
        ...programme,
        description: `${programme.name} is a ${studyLevelLabels[programme.studyLevel]} pathway that builds from ${programme.summary.toLowerCase()} Students learn through structured coursework, applied projects, guided academic support, and discipline-specific practice within the department.`,
        highlights: programme.focusAreas,
        studyStages: createStudyStages(programme),
        admissionSummary:
            programme.studyLevel === 'postgraduate'
                ? 'Postgraduate admission is based on prior academic preparation, programme fit, departmental review, and submission of required documents.'
                : 'Admission is based on the university entry process, relevant academic preparation, required documents, and programme capacity.',
        admissionRequirements: createAdmissionRequirements(programme),
        costGuidance:
            'Tuition, fees, and payment timelines are published through the official admissions and tuition channels. Applicants should review current fee guidance before submitting an application.',
    };
}

export const programmes: Programme[] = [
    createProgramme({
        id: 'bsc-computer-science',
        slug: 'bsc-computer-science',
        name: 'B.Sc. Computer Science',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'computing-and-technology',
        departmentSlug: 'computer-science',
        summary: 'Computing foundations, algorithms, systems, and applied software development.',
        image: '/public-site/images/program/program-thumb-05.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Computing foundations', 'Software systems', 'Algorithmic design'],
        learningOutcomes: [
            'Design and implement software solutions using sound computing principles.',
            'Apply algorithms, data structures, and systems knowledge to practical problems.',
            'Communicate technical decisions through documentation, teamwork, and project delivery.',
        ],
        careerOpportunities: ['Software developer', 'Systems analyst', 'Data support associate', 'Technology project officer'],
        admissionFocus: 'computing, mathematics, and science',
    }),
    createProgramme({
        id: 'msc-computer-science',
        slug: 'msc-computer-science',
        name: 'M.Sc. Computer Science',
        qualification: 'M.Sc.',
        studyLevel: 'postgraduate',
        facultySlug: 'computing-and-technology',
        departmentSlug: 'computer-science',
        summary: 'Advanced study in computing systems, research methods, and applied problem-solving.',
        image: '/public-site/images/program/program-thumb-04.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Advanced computing', 'Research methods', 'Applied systems'],
        learningOutcomes: [
            'Evaluate advanced computing problems using research-informed methods.',
            'Design specialist solutions for systems, data, or software environments.',
            'Produce supervised research or applied project work with clear technical justification.',
        ],
        careerOpportunities: ['Research associate', 'Systems architect', 'Software project lead', 'Academic pathway candidate'],
        admissionFocus: 'computer science, software, systems, or related disciplines',
    }),
    createProgramme({
        id: 'bsc-software-engineering',
        slug: 'bsc-software-engineering',
        name: 'B.Sc. Software Engineering',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'computing-and-technology',
        departmentSlug: 'software-engineering',
        summary: 'Product-focused software design, testing, architecture, and delivery practice.',
        image: '/public-site/images/program/program-thumb-04.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Software design', 'Product engineering', 'Quality assurance'],
        learningOutcomes: [
            'Plan, build, test, and maintain reliable software products.',
            'Use software engineering methods to support team-based delivery.',
            'Evaluate user, business, and technical requirements during product development.',
        ],
        careerOpportunities: ['Software engineer', 'Quality assurance analyst', 'Product associate', 'DevOps support engineer'],
        admissionFocus: 'computing, mathematics, and problem-solving',
    }),
    createProgramme({
        id: 'bsc-cybersecurity',
        slug: 'bsc-cybersecurity',
        name: 'B.Sc. Cybersecurity',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'computing-and-technology',
        departmentSlug: 'cybersecurity',
        summary: 'Security-focused computing for networks, applications, risk, and digital resilience.',
        image: '/public-site/images/program/program-thumb-06.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Information security', 'Network defence', 'Risk management'],
        learningOutcomes: [
            'Identify common security risks across networks, systems, and applications.',
            'Apply defensive security principles in supervised laboratory and project settings.',
            'Communicate security findings using ethical and professional reporting standards.',
        ],
        careerOpportunities: ['Security analyst', 'Risk and compliance assistant', 'Network security support', 'Incident response trainee'],
        admissionFocus: 'computing, mathematics, and science',
    }),
    createProgramme({
        id: 'msc-cybersecurity',
        slug: 'msc-cybersecurity',
        name: 'M.Sc. Cybersecurity',
        qualification: 'M.Sc.',
        studyLevel: 'postgraduate',
        facultySlug: 'computing-and-technology',
        departmentSlug: 'cybersecurity',
        summary: 'Advanced security study across risk management, incident response, and secure systems.',
        image: '/public-site/images/program/program-thumb-03.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Security governance', 'Incident response', 'Secure systems'],
        learningOutcomes: [
            'Assess organisational security posture using recognised risk and control approaches.',
            'Coordinate technical and procedural responses to security incidents.',
            'Produce applied research or security project work with professional evidence standards.',
        ],
        careerOpportunities: ['Cybersecurity analyst', 'Information security officer', 'Risk consultant', 'Security operations lead'],
        admissionFocus: 'cybersecurity, computer science, information systems, or related fields',
    }),
    createProgramme({
        id: 'beng-electrical-and-electronic-engineering',
        slug: 'beng-electrical-and-electronic-engineering',
        name: 'B.Eng. Electrical and Electronic Engineering',
        qualification: 'B.Eng.',
        studyLevel: 'undergraduate',
        facultySlug: 'engineering',
        departmentSlug: 'electrical-and-electronic-engineering',
        summary: 'Power, electronics, control, and communication systems for modern infrastructure.',
        image: '/public-site/images/program/program-thumb-02.webp',
        duration: '5 Years',
        studyMode: 'Full-time',
        focusAreas: ['Engineering mathematics', 'Electronic systems', 'Power and control'],
        learningOutcomes: [
            'Apply engineering science to electrical, electronic, and control system problems.',
            'Use laboratory and design methods to test, document, and improve engineering solutions.',
            'Work responsibly within safety, sustainability, and professional ethics expectations.',
        ],
        careerOpportunities: ['Electrical engineer', 'Control systems assistant', 'Power systems trainee', 'Electronics design associate'],
        admissionFocus: 'mathematics, physics, and engineering science',
    }),
    createProgramme({
        id: 'beng-civil-engineering',
        slug: 'beng-civil-engineering',
        name: 'B.Eng. Civil Engineering',
        qualification: 'B.Eng.',
        studyLevel: 'undergraduate',
        facultySlug: 'engineering',
        departmentSlug: 'civil-engineering',
        summary: 'Design and construction training for resilient buildings and infrastructure systems.',
        image: '/public-site/images/program/program-thumb-07.webp',
        duration: '5 Years',
        studyMode: 'Full-time',
        focusAreas: ['Built environment studies', 'Structural analysis', 'Materials and site practice'],
        learningOutcomes: [
            'Analyse civil engineering problems using design, measurement, and materials knowledge.',
            'Participate in site, laboratory, and project work with safety and documentation discipline.',
            'Develop infrastructure proposals that consider users, environment, and professional standards.',
        ],
        careerOpportunities: ['Civil engineer', 'Site engineer trainee', 'Structural design assistant', 'Infrastructure project officer'],
        admissionFocus: 'mathematics, physics, and technical drawing or related science subjects',
    }),
    createProgramme({
        id: 'bsc-business-administration',
        slug: 'bsc-business-administration',
        name: 'B.Sc. Business Administration',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'business-administration',
        summary: 'Management, enterprise, operations, and leadership preparation for organisations.',
        image: '/public-site/images/program/program-thumb-08.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Management foundations', 'Enterprise strategy', 'Organisational leadership'],
        learningOutcomes: [
            'Explain core management, marketing, operations, and organisational behaviour concepts.',
            'Use case-based analysis to support decisions in business and public-sector contexts.',
            'Communicate plans, reports, and presentations for enterprise and administrative settings.',
        ],
        careerOpportunities: ['Management trainee', 'Operations officer', 'Business development associate', 'Administrative manager'],
        admissionFocus: 'business, economics, mathematics, and social science subjects',
    }),
    createProgramme({
        id: 'mba',
        slug: 'mba',
        name: 'MBA',
        qualification: 'MBA',
        studyLevel: 'postgraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'business-administration',
        summary: 'Applied management study for leadership, strategy, and organisational decision-making.',
        image: '/public-site/images/program/program-thumb-05.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Strategic management', 'Leadership practice', 'Organisational decision-making'],
        learningOutcomes: [
            'Evaluate organisational challenges using strategic and financial reasoning.',
            'Lead applied business projects with ethical, operational, and people-centred awareness.',
            'Develop practical recommendations for enterprise, public, or non-profit organisations.',
        ],
        careerOpportunities: ['Business manager', 'Strategy analyst', 'Operations lead', 'Entrepreneurship pathway'],
        admissionFocus: 'management, business practice, or professional leadership experience',
    }),
    createProgramme({
        id: 'msc-management',
        slug: 'msc-management',
        name: 'M.Sc. Management',
        qualification: 'M.Sc.',
        studyLevel: 'postgraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'business-administration',
        summary: 'Research-informed management study for enterprise, operations, and public organisations.',
        image: '/public-site/images/program/program-thumb-08.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Management research', 'Operations strategy', 'Enterprise analysis'],
        learningOutcomes: [
            'Apply management theory and research methods to organisational questions.',
            'Analyse operational and strategic issues using evidence-informed approaches.',
            'Prepare supervised research or applied management project work.',
        ],
        careerOpportunities: ['Management researcher', 'Operations analyst', 'Policy and programme officer', 'Consulting associate'],
        admissionFocus: 'management, business administration, economics, or related disciplines',
    }),
    createProgramme({
        id: 'bsc-economics',
        slug: 'bsc-economics',
        name: 'B.Sc. Economics',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'economics',
        summary: 'Analytical training in markets, policy, development, and economic decision-making.',
        image: '/public-site/images/program/program-thumb-03.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Economic theory', 'Policy analysis', 'Applied data interpretation'],
        learningOutcomes: [
            'Explain economic behaviour, market systems, and development questions.',
            'Use quantitative and qualitative evidence to analyse policy and business issues.',
            'Prepare clear economic arguments for academic, public, and organisational audiences.',
        ],
        careerOpportunities: ['Economic analyst assistant', 'Research officer', 'Policy support officer', 'Banking and finance trainee'],
        admissionFocus: 'economics, mathematics, commerce, and social science subjects',
    }),
    createProgramme({
        id: 'msc-economics',
        slug: 'msc-economics',
        name: 'M.Sc. Economics',
        qualification: 'M.Sc.',
        studyLevel: 'postgraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'economics',
        summary: 'Advanced economic theory, policy analysis, and applied data-informed research.',
        image: '/public-site/images/program/program-thumb-04.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Advanced economic theory', 'Econometric methods', 'Policy research'],
        learningOutcomes: [
            'Evaluate economic policy and market questions using advanced analytical methods.',
            'Apply econometric and research tools to real economic datasets and issues.',
            'Produce supervised research that supports policy, development, or organisational decisions.',
        ],
        careerOpportunities: ['Economist', 'Policy analyst', 'Research consultant', 'Development programme analyst'],
        admissionFocus: 'economics, statistics, finance, or related quantitative social sciences',
    }),
    createProgramme({
        id: 'bsc-mass-communication',
        slug: 'bsc-mass-communication',
        name: 'B.Sc. Mass Communication',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'management-and-social-sciences',
        departmentSlug: 'mass-communication',
        summary: 'Media, journalism, public communication, and digital storytelling for contemporary audiences.',
        image: '/public-site/images/program/program-thumb-05.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Communication theory', 'Media production', 'Digital storytelling'],
        learningOutcomes: [
            'Create written, visual, and digital communication for different audiences.',
            'Apply media ethics, research, and production methods in supervised projects.',
            'Analyse communication systems, public messaging, and audience behaviour.',
        ],
        careerOpportunities: ['Journalist', 'Media producer', 'Public relations assistant', 'Digital content strategist'],
        admissionFocus: 'English, literature, government, and social science subjects',
    }),
    createProgramme({
        id: 'bsc-public-health',
        slug: 'bsc-public-health',
        name: 'B.Sc. Public Health',
        qualification: 'B.Sc.',
        studyLevel: 'undergraduate',
        facultySlug: 'health-sciences',
        departmentSlug: 'public-health',
        summary: 'Population health, prevention, epidemiology, and community health practice.',
        image: '/public-site/images/program/program-thumb-04.webp',
        duration: '4 Years',
        studyMode: 'Full-time',
        focusAreas: ['Population health', 'Epidemiology basics', 'Community health practice'],
        learningOutcomes: [
            'Explain public health principles for prevention, promotion, and community wellbeing.',
            'Use basic epidemiological and health education methods in supervised settings.',
            'Support community health initiatives through ethical communication and field practice.',
        ],
        careerOpportunities: ['Public health officer', 'Community health educator', 'Programme assistant', 'Health promotion associate'],
        admissionFocus: 'biology, chemistry, mathematics, and health-related sciences',
    }),
    createProgramme({
        id: 'master-of-public-health',
        slug: 'master-of-public-health',
        name: 'Master of Public Health',
        qualification: 'MPH',
        studyLevel: 'postgraduate',
        facultySlug: 'health-sciences',
        departmentSlug: 'public-health',
        summary: 'Postgraduate public health training for prevention, policy, and community wellbeing.',
        image: '/public-site/images/program/program-thumb-08.webp',
        duration: '2 Years',
        studyMode: 'Full-time',
        focusAreas: ['Public health policy', 'Epidemiology methods', 'Community intervention'],
        learningOutcomes: [
            'Design public health responses using evidence, ethics, and community context.',
            'Analyse health data and policy questions for prevention and service planning.',
            'Lead supervised public health projects, reports, or intervention proposals.',
        ],
        careerOpportunities: ['Public health specialist', 'Programme coordinator', 'Health policy analyst', 'Monitoring and evaluation officer'],
        admissionFocus: 'health sciences, biological sciences, social sciences, or related professional experience',
    }),
    createProgramme({
        id: 'bnsc-nursing-science',
        slug: 'bnsc-nursing-science',
        name: 'B.NSc. Nursing Science',
        qualification: 'B.NSc.',
        studyLevel: 'undergraduate',
        facultySlug: 'health-sciences',
        departmentSlug: 'nursing-science',
        summary: 'Patient-centred nursing education with simulation and clinical preparation.',
        image: '/public-site/images/program/program-thumb-02.webp',
        duration: '5 Years',
        studyMode: 'Full-time',
        focusAreas: ['Health science foundations', 'Clinical nursing care', 'Simulation and ward practice'],
        learningOutcomes: [
            'Apply nursing science foundations to patient-centred care situations.',
            'Demonstrate supervised clinical, communication, and safety skills.',
            'Reflect on ethical, professional, and community responsibilities in care delivery.',
        ],
        careerOpportunities: ['Registered nursing pathway', 'Clinical care assistant', 'Community health nurse pathway', 'Health education support'],
        admissionFocus: 'biology, chemistry, physics, mathematics, and health science subjects',
    }),
];

export const programmeSlugs = programmes.map((programme) => programme.slug);

export function findProgramme(slug: string | undefined): Programme | undefined {
    return programmes.find((programme) => programme.slug === slug);
}
