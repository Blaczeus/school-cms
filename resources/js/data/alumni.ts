import type { Alumni, AlumniEvent, AlumniGalleryImage, AlumniStoryBlock } from '@/types/alumni';

export const alumniIntroduction = {
    title: 'Alumni Introduction / Overview',
    description:
        'Our alumni community represents the proud legacy of the institution, with graduates shaping industries, public service, research, and enterprise across the world. Alumni continue to strengthen our reputation through mentorship, professional leadership, and lifelong connection.',
    image: '/public-site/images/alumni/alamni-thumb-01.webp',
};

export const alumniStoryIntro = {
    title: 'Unveiling Institution Name: Inspiring Student Stories',
    description:
        'Unveiling Institution Name shares the real journeys of students and graduates who dared to dream, create, and achieve. Their stories highlight a community where learners grow into leaders and ideas become impact.',
};

export const alumniStoryBlocks: AlumniStoryBlock[] = [
    {
        title: 'Stories of Our Students',
        description:
            'Discover how students overcome challenges, pursue their passions, and shape their future through hands-on learning, supportive faculty, and unforgettable campus experiences.',
        points: [
            'Mentorship from experienced academic and professional advisers.',
            'Career guidance linked to real workplace expectations.',
            'Community projects that turn learning into practical service.',
            'Lifelong networks that begin before graduation.',
        ],
    },
    {
        title: 'Alumni Success Stories',
        description:
            'Our graduates carry the institution forward through meaningful careers, research, entrepreneurship, and service to their communities.',
        points: [
            'Graduates leading teams across health, technology, education, and policy.',
            'Alumni mentoring current students and early-career graduates.',
            'Professional networks that support internships and placement.',
            'Campus events that keep graduates connected to academic life.',
        ],
    },
];

export const alumniStoryImages = [
    '/public-site/images/alumni/alamni-thumb-02.webp',
    '/public-site/images/alumni/alamni-thumb-03.webp',
];

export const alumniProfiles: Alumni[] = [
    {
        id: 1,
        name: 'Esther Howard',
        slug: 'esther-howard',
        graduationYear: 2017,
        degree: 'B.Sc. Educational Technology',
        department: 'Education Technology',
        faculty: 'Arts and Humanities',
        role: 'Instructional Designer',
        organisation: 'Learning Systems Studio',
        location: 'Lagos, Nigeria',
        image: '/public-site/images/team/team-thumb-07.webp',
        summary: 'Develops effective learning materials and digital systems for higher education teams.',
        quote: 'The university helped me connect teaching, technology, and service in a practical way.',
        achievements: ['Led digital course redesign projects', 'Mentors student learning designers'],
        biography:
            'Esther Howard is an experienced instructional designer recognised for connecting academic content, digital learning tools, and practical student support. She blends research-informed teaching methods with production experience, guiding academic teams through learning design, assessment planning, and inclusive course delivery.',
        qualifications: [
            'Ph.D. in Educational Technology, University of Cambridge',
            'M.Sc. in Learning Design, University of California',
            'B.Sc. in Educational Technology, Institution Name',
        ],
        researchInterests: ['Digital pedagogy', 'Learning analytics', 'Inclusive course design'],
        professionalExperience:
            'Esther has led learning transformation projects for universities, professional training teams, and online education programmes. Her work focuses on practical learning systems that help students engage deeply and faculty teach with confidence.',
        certifications: [
            'Digital Learning Strategy',
            'Advanced Learning Design',
            'Research Funding & Grants',
            'Higher Education Leadership',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: true,
    },
    {
        id: 2,
        name: 'Albert Flores',
        slug: 'albert-flores',
        graduationYear: 2015,
        degree: 'B.Sc. Physics',
        department: 'Physical Sciences',
        faculty: 'Computing and Technology',
        role: 'Senior Research Fellow',
        organisation: 'Applied Science Institute',
        location: 'Accra, Ghana',
        image: '/public-site/images/team/team-thumb-08.webp',
        summary: 'Leads laboratory research programmes focused on applied physics and emerging materials.',
        quote: 'Research confidence started for me in undergraduate laboratories and faculty-led projects.',
        achievements: ['Published applied materials research', 'Supports undergraduate lab mentorship'],
        biography:
            'Albert Flores is a senior research fellow with experience in applied physics, laboratory coordination, and interdisciplinary research mentoring. His work bridges undergraduate research training with industry-facing scientific inquiry.',
        qualifications: [
            'Ph.D. in Applied Physics, University of Cambridge',
            'M.Sc. in Materials Science, University of California',
            'B.Sc. in Physics, Institution Name',
        ],
        researchInterests: ['Applied materials', 'Laboratory systems', 'Research mentoring'],
        professionalExperience:
            'Albert coordinates laboratory research teams, supports early-career scientists, and contributes to collaborative projects in materials testing and applied scientific development.',
        certifications: [
            'Advanced Research Labs',
            'Scientific Project Management',
            'Research Funding & Grants',
            'Laboratory Safety Leadership',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: true,
    },
    {
        id: 3,
        name: 'Kathryn Murphy',
        slug: 'kathryn-murphy',
        graduationYear: 2019,
        degree: 'B.Sc. Guidance and Counselling',
        department: 'Student Development',
        faculty: 'Arts and Humanities',
        role: 'Academic Advisor',
        organisation: 'Student Success Network',
        location: 'Abuja, Nigeria',
        image: '/public-site/images/team/team-thumb-09.webp',
        summary: 'Helps students choose academic pathways and prepare for confident professional growth.',
        quote: 'Academic support changed my own journey, so I now help students find clear next steps.',
        achievements: ['Built advising workshops', 'Coordinates student transition support'],
        biography:
            'Kathryn Murphy is an academic advisor focused on student transition, programme choice, and career preparation. She supports learners through structured advising, mentoring conversations, and practical academic planning.',
        qualifications: [
            'M.Ed. in Guidance and Counselling, University of Cambridge',
            'M.Sc. in Student Development, University of California',
            'B.Sc. in Guidance and Counselling, Institution Name',
        ],
        researchInterests: ['Student success', 'Academic advising', 'Career readiness'],
        professionalExperience:
            'Kathryn has developed advising workshops, student orientation programmes, and peer-support systems that help learners understand academic expectations and build confidence.',
        certifications: [
            'Student Success Advising',
            'Career Development Practice',
            'Mentorship Programme Design',
            'Higher Education Leadership',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: true,
    },
    {
        id: 4,
        name: 'Leslie Alexander',
        slug: 'leslie-alexander',
        graduationYear: 2014,
        degree: 'B.Sc. Sociology',
        department: 'Social Sciences',
        faculty: 'Management and Social Sciences',
        role: 'Community Programme Lead',
        organisation: 'Civic Impact Foundation',
        location: 'Port Harcourt, Nigeria',
        image: '/public-site/images/team/team-thumb-10.webp',
        summary: 'Manages social impact programmes and partnerships for education access initiatives.',
        quote: 'The strongest lessons I learned were about leadership, listening, and community responsibility.',
        achievements: ['Expanded youth outreach programmes', 'Advises civic education projects'],
        biography:
            'Leslie Alexander leads community programmes that connect education, civic participation, and youth development. Her work strengthens partnerships between institutions, public organisations, and local communities.',
        qualifications: [
            'M.Sc. in Development Studies, University of California',
            'B.Sc. in Sociology, Institution Name',
            'Certificate in Civic Programme Leadership',
        ],
        researchInterests: ['Community development', 'Education access', 'Civic engagement'],
        professionalExperience:
            'Leslie has managed outreach programmes, partnership campaigns, and civic education projects designed to increase access to learning opportunities.',
        certifications: [
            'Community Programme Leadership',
            'Partnership Development',
            'Research Funding & Grants',
            'Public Service Strategy',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: false,
    },
    {
        id: 5,
        name: 'Guy Hawkins',
        slug: 'guy-hawkins',
        graduationYear: 2013,
        degree: 'B.Eng. Renewable Energy Systems',
        department: 'Electrical and Electronic Engineering',
        faculty: 'Engineering',
        role: 'Lead Researcher',
        organisation: 'Green Grid Labs',
        location: 'Kigali, Rwanda',
        image: '/public-site/images/team/team-thumb-11.webp',
        summary: 'Focuses on sustainable energy systems, green technology, and applied research partnerships.',
        quote: 'Engineering gave me a language for solving problems that matter to real communities.',
        achievements: ['Leads renewable energy pilots', 'Mentors engineering capstone teams'],
        biography:
            'Guy Hawkins is a renewable energy researcher working on sustainable systems, applied engineering pilots, and technical mentorship for emerging engineers.',
        qualifications: [
            'M.Eng. in Renewable Energy, University of Cambridge',
            'B.Eng. in Renewable Energy Systems, Institution Name',
            'Certificate in Sustainable Infrastructure',
        ],
        researchInterests: ['Renewable energy', 'Green technology', 'Applied engineering'],
        professionalExperience:
            'Guy leads pilot projects in renewable systems and supports engineering students through capstone supervision, design review, and industry collaboration.',
        certifications: [
            'Sustainable Energy Systems',
            'Advanced Research Labs',
            'Project Engineering Practice',
            'Research Funding & Grants',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: false,
    },
    {
        id: 6,
        name: 'Floyd Miles',
        slug: 'floyd-miles',
        graduationYear: 2012,
        degree: 'B.A. Communication Studies',
        department: 'Mass Communication',
        faculty: 'Management and Social Sciences',
        role: 'Admissions Strategist',
        organisation: 'Global Study Pathways',
        location: 'Nairobi, Kenya',
        image: '/public-site/images/team/team-thumb-12.webp',
        summary: 'Supports prospective students and families through admissions planning and campus readiness.',
        quote: 'My student experience taught me how powerful a thoughtful welcome can be.',
        achievements: ['Developed admissions readiness guides', 'Hosts alumni-student sessions'],
        biography:
            'Floyd Miles is an admissions strategist helping students and families understand study pathways, application readiness, and the transition into university life.',
        qualifications: [
            'M.A. in Communication Strategy, University of California',
            'B.A. in Communication Studies, Institution Name',
            'Certificate in Student Recruitment Strategy',
        ],
        researchInterests: ['Admissions communication', 'Student transition', 'Campus readiness'],
        professionalExperience:
            'Floyd designs admissions readiness resources, hosts alumni-student sessions, and supports prospective learners through practical application planning.',
        certifications: [
            'Admissions Strategy',
            'Student Communication Practice',
            'Higher Education Leadership',
            'Mentorship Programme Design',
        ],
        experienceImage: '/public-site/images/experience/experience-thumb-01.webp',
        socialLinks: [],
        featured: false,
    },
];

export const findAlumni = (slug: string | undefined): Alumni | undefined =>
    alumniProfiles.find((alumni) => alumni.slug === slug);

export const alumniEvents: AlumniEvent[] = [
    {
        id: 1,
        title: 'Academic Excellence & Intellectual Development',
        date: 'August 4, 2026',
        time: '09:00 AM - 03:40 PM',
        location: 'Main Auditorium',
        image: '/public-site/images/event/event-thumb-01.webp',
    },
    {
        id: 2,
        title: 'Innovative Research & Scientific Advancement',
        date: 'August 12, 2026',
        time: '10:00 AM - 02:00 PM',
        location: 'Research Complex',
        image: '/public-site/images/event/event-thumb-02.webp',
    },
    {
        id: 3,
        title: 'Digital Transformation, Technology & Future',
        date: 'September 3, 2026',
        time: '11:00 AM - 04:00 PM',
        location: 'Innovation Hub',
        image: '/public-site/images/event/event-thumb-03.webp',
    },
    {
        id: 4,
        title: 'Future-Ready Skills & Workforce Transformation',
        date: 'September 18, 2026',
        time: '09:30 AM - 01:30 PM',
        location: 'Career Centre',
        image: '/public-site/images/event/event-thumb-04.webp',
    },
];

export const alumniGalleryImages: AlumniGalleryImage[] = [
    { id: 1, image: '/public-site/images/gallery/gallery-thumb-01.webp', alt: 'Alumni gallery image 1' },
    { id: 2, image: '/public-site/images/gallery/gallery-thumb-02.webp', alt: 'Alumni gallery image 2' },
    { id: 3, image: '/public-site/images/gallery/gallery-thumb-03.webp', alt: 'Alumni gallery image 3' },
    { id: 4, image: '/public-site/images/gallery/gallery-thumb-04.webp', alt: 'Alumni gallery image 4' },
    { id: 5, image: '/public-site/images/gallery/gallery-thumb-05.webp', alt: 'Alumni gallery image 5' },
    { id: 6, image: '/public-site/images/gallery/gallery-thumb-06.webp', alt: 'Alumni gallery image 6' },
];
