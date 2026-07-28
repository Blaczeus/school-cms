import type { Event } from '@/types/event';

const eventSpeakers = [
    {
        id: 1,
        name: 'Dr. A. Whitman',
        designation: 'Professor',
        image: '/public-site/images/team/team-thumb-01.webp',
    },
    {
        id: 2,
        name: 'Dr. E. Roberts',
        designation: 'Director',
        image: '/public-site/images/team/team-thumb-02.webp',
    },
    {
        id: 3,
        name: 'Prof. S. Anderson',
        designation: 'Lecturer',
        image: '/public-site/images/team/team-thumb-03.webp',
    },
    {
        id: 4,
        name: 'Dr. M. Collin',
        designation: 'Associate Professor',
        image: '/public-site/images/team/team-thumb-04.webp',
    },
    {
        id: 5,
        name: 'Sofia L. Martinez',
        designation: 'Guest Speaker',
        image: '/public-site/images/team/team-thumb-05.webp',
    },
    {
        id: 6,
        name: 'Richard L. Foster',
        designation: 'Guest Speaker',
        image: '/public-site/images/team/team-thumb-06.webp',
    },
];

const eventSocialLinks = [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'X', href: '#', icon: 'x' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
] satisfies Event['detail']['socialLinks'];

const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34214.60083365065!2d-74.01068688015093!3d40.714229226069826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713786758295!5m2!1sen!2sbd';

const createEventDetail = (
    heading: string,
    paragraphs: string[],
    learningOutcomes: string[],
    closing: string,
): Event['detail'] => ({
    image: '/public-site/images/event/event-details/event-details-thumb-01.webp',
    heading,
    paragraphs,
    learningTitle: 'Students participating in this summit will learn to:',
    learningOutcomes,
    closing,
    speakers: eventSpeakers,
    mapEmbedUrl,
    socialLinks: eventSocialLinks,
});

export const events: Event[] = [
    {
        id: 1,
        slug: 'academic-excellence-intellectual-development',
        title: 'Academic Excellence & Intellectual Development.',
        description:
            'A campus forum focused on academic habits, research curiosity, and lifelong intellectual growth.',
        image: '/public-site/images/event/event-thumb-06.webp',
        category: 'Academics',
        date: 'August 4, 2026',
        time: '09:00 AM - 03:40 PM',
        location: 'Main Auditorium',
        speaker: 'Office of Academic Affairs',
        organiser: 'Academic Planning Unit',
        featured: true,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Advancing Knowledge, Innovation, and Scholarly Leadership',
            [
                'The Academic Excellence & Intellectual Development Summit brings together educators, researchers, academic leaders, and policymakers to explore strategies for strengthening scholarly quality and intellectual growth in higher education. The summit will focus on innovation in teaching and learning, research excellence, critical thinking, and institutional development to prepare learners for an evolving global knowledge economy.',
                'Designed to foster intellectual growth across academic communities, the Academic Excellence & Intellectual Development Summit emphasizes capacity building for students and faculty alike. The summit highlights best practices in teaching excellence, mentoring, research engagement, and lifelong learning to support holistic academic development.',
            ],
            [
                'Understand the principles of academic excellence and scholarly rigor',
                'Apply critical and analytical thinking to academic and real-world problems',
                'Identify opportunities for undergraduate and graduate research engagement',
                'Participate confidently in intellectual debates and knowledge exchange',
                'Prepare for future challenges in higher education and research careers',
            ],
            'With a focus on future-ready education, the Academic Excellence & Intellectual Development Summit examines how institutions can adapt to global challenges while maintaining academic rigor and intellectual depth. The summit encourages collaboration, knowledge exchange, and innovation to strengthen academic ecosystems worldwide.',
        ),
    },
    {
        id: 2,
        slug: 'research-innovation-showcase',
        title: 'Research Innovation & Scientific Advancement.',
        description:
            'Faculty and students present applied research projects, laboratory work, and interdisciplinary collaborations.',
        image: '/public-site/images/event/event-thumb-07.webp',
        category: 'Research',
        date: 'August 12, 2026',
        time: '10:00 AM - 02:00 PM',
        location: 'Research Complex',
        speaker: 'Directorate of Research',
        organiser: 'Research Office',
        featured: true,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Strengthening Research Culture and Applied Discovery',
            [
                'The Research Innovation Showcase brings faculty, students, and institutional partners together to present discoveries, prototypes, and collaborative research projects. The event highlights practical scholarship that responds to academic, industrial, and community needs.',
                'Participants will examine how research ideas move from early inquiry to meaningful application, with attention to ethics, mentorship, interdisciplinary teamwork, and publication readiness.',
            ],
            [
                'Recognize opportunities for applied and interdisciplinary research',
                'Understand research presentation and scholarly communication practices',
                'Connect student projects with faculty supervision and institutional support',
                'Explore pathways from discovery to community and industry impact',
                'Build confidence in research collaboration and academic exchange',
            ],
            'The showcase supports a stronger research environment by connecting emerging scholars with experienced mentors, research offices, and external partners committed to practical innovation.',
        ),
    },
    {
        id: 3,
        slug: 'digital-transformation-technology-future',
        title: 'Digital Transformation, Technology & Future.',
        description:
            'A technology conversation on digital readiness, responsible innovation, and future workplace skills.',
        image: '/public-site/images/event/event-thumb-08.webp',
        category: 'Technology',
        date: 'September 3, 2026',
        time: '11:00 AM - 04:00 PM',
        location: 'Innovation Hub',
        speaker: 'Digital Strategy Office',
        organiser: 'Technology Directorate',
        featured: true,
        registrationStatus: 'limited',
        detail: createEventDetail(
            'Preparing Students for a Digitally Connected Future',
            [
                'The Digital Transformation forum explores how technology is reshaping learning, institutional operations, research, and professional life. It brings together academic leaders and technology practitioners to discuss responsible innovation and digital readiness.',
                'Sessions focus on practical digital skills, emerging tools, data-informed decision-making, and the ethical use of technology in higher education and future workplaces.',
            ],
            [
                'Understand major trends shaping digital education and work',
                'Evaluate responsible uses of data, automation, and emerging tools',
                'Connect digital fluency with academic and career development',
                'Identify campus resources that support technology-enabled learning',
                'Prepare for professional environments shaped by digital transformation',
            ],
            'The forum encourages students and staff to approach technology with curiosity, discipline, and responsibility while building the confidence needed for modern academic and professional environments.',
        ),
    },
    {
        id: 4,
        slug: 'career-readiness-workforce-transformation',
        title: 'Future-Ready Skills & Workforce Transformation.',
        description:
            'Career specialists and alumni discuss practical skills, internships, and industry expectations.',
        image: '/public-site/images/event/event-thumb-10.webp',
        category: 'Career',
        date: 'September 18, 2026',
        time: '09:30 AM - 01:30 PM',
        location: 'Career Centre',
        speaker: 'Alumni Relations',
        organiser: 'Student Affairs',
        featured: false,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Building Practical Skills for Career Readiness',
            [
                'The Career Readiness event connects students with alumni, employers, and career specialists for practical conversations about internships, workplace expectations, and employability skills.',
                'The programme emphasizes career planning, communication, portfolio development, interview preparation, and the transition from university learning into professional practice.',
            ],
            [
                'Identify employability skills valued across professional sectors',
                'Prepare stronger applications, portfolios, and interview responses',
                'Connect academic study with internship and workplace readiness',
                'Learn from alumni and employer expectations',
                'Plan practical next steps for career development',
            ],
            'The event helps students translate their academic experience into clear professional pathways while strengthening confidence for the changing world of work.',
        ),
    },
    {
        id: 5,
        slug: 'community-service-and-impact-day',
        title: 'Community Service & Public Impact Day.',
        description:
            'Students, staff, and partners coordinate service activities linked to local development priorities.',
        image: '/public-site/images/event/event-thumb-11.webp',
        category: 'Community',
        date: 'October 2, 2026',
        time: '08:30 AM - 12:30 PM',
        location: 'Community Outreach Centre',
        speaker: 'Community Engagement Office',
        organiser: 'Student Volunteer Network',
        featured: false,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Connecting Campus Learning with Community Impact',
            [
                'Community Service and Public Impact Day brings students, staff, and local partners together for service activities aligned with real community development priorities.',
                'The event encourages civic responsibility, teamwork, reflection, and practical engagement beyond the classroom.',
            ],
            [
                'Understand the role of service in student formation',
                'Connect academic learning with community needs',
                'Practice teamwork, leadership, and reflective engagement',
                'Recognize ethical approaches to community partnership',
                'Contribute to local development through organized service',
            ],
            'By linking campus energy with public good, the event supports a culture of responsible citizenship and meaningful community partnership.',
        ),
    },
    {
        id: 6,
        slug: 'student-leadership-conference',
        title: 'Student Leadership & Personal Development.',
        description:
            'A leadership conference for student representatives, society leaders, and emerging campus mentors.',
        image: '/public-site/images/event/event-thumb-12.webp',
        category: 'Leadership',
        date: 'October 14, 2026',
        time: '10:00 AM - 03:00 PM',
        location: 'Student Centre',
        speaker: 'Dean of Student Affairs',
        organiser: 'Student Leadership Council',
        featured: false,
        registrationStatus: 'limited',
        detail: createEventDetail(
            'Developing Confident and Responsible Student Leaders',
            [
                'The Student Leadership Conference supports student representatives, society leaders, and emerging mentors as they develop practical leadership habits for campus and professional life.',
                'Sessions explore communication, conflict resolution, ethical decision-making, service, and collaborative leadership across student communities.',
            ],
            [
                'Understand leadership as service and responsibility',
                'Practice communication and team coordination skills',
                'Approach campus challenges with ethical judgment',
                'Build confidence for mentoring and representation roles',
                'Connect student leadership with long-term personal development',
            ],
            'The conference helps students lead with clarity, empathy, and discipline while contributing positively to the wider campus environment.',
        ),
    },
    {
        id: 7,
        slug: 'library-research-skills-workshop',
        title: 'Library Research Skills & Digital Resources.',
        description:
            'A workshop introducing students to databases, citation tools, and digital research practices.',
        image: '/public-site/images/event/event-thumb-13.webp',
        category: 'Library',
        date: 'November 5, 2026',
        time: '09:00 AM - 11:30 AM',
        location: 'Central Library',
        speaker: 'Library Services',
        organiser: 'University Library',
        featured: false,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Improving Research Confidence Through Library Resources',
            [
                'The Library Research Skills Workshop introduces students to databases, catalogues, citation tools, and digital resources that support stronger academic writing and inquiry.',
                'Participants receive practical guidance on searching, evaluating sources, organizing references, and using library support throughout their studies.',
            ],
            [
                'Use library databases and catalogues more effectively',
                'Evaluate academic sources for relevance and credibility',
                'Apply citation and referencing tools with confidence',
                'Organize research materials for assignments and projects',
                'Connect with library support for ongoing academic work',
            ],
            'The workshop strengthens student research habits and helps learners make better use of institutional academic resources.',
        ),
    },
    {
        id: 8,
        slug: 'health-sciences-open-seminar',
        title: 'Health Sciences Open Seminar & Practice Forum.',
        description:
            'Health professionals and faculty discuss applied learning, ethics, and practical preparation.',
        image: '/public-site/images/event/event-thumb-14.webp',
        category: 'Health Sciences',
        date: 'November 19, 2026',
        time: '12:00 PM - 03:30 PM',
        location: 'Clinical Skills Lab',
        speaker: 'Faculty of Health Sciences',
        organiser: 'Health Sciences Faculty',
        featured: false,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Exploring Applied Learning in Health Sciences',
            [
                'The Health Sciences Open Seminar brings health professionals, faculty, and students together to discuss applied learning, clinical ethics, and preparation for practical service.',
                'The seminar highlights the relationship between classroom knowledge, laboratory practice, patient-centered care, and professional responsibility.',
            ],
            [
                'Understand expectations for applied health sciences learning',
                'Connect theory, lab practice, and professional preparation',
                'Discuss ethics and responsibility in health-related fields',
                'Explore pathways for practical and clinical readiness',
                'Engage faculty and practitioners in open academic conversation',
            ],
            'The seminar supports students preparing for health professions by reinforcing discipline, care, ethical awareness, and practical competence.',
        ),
    },
    {
        id: 9,
        slug: 'entrepreneurship-innovation-clinic',
        title: 'Entrepreneurship, Innovation & Venture Clinic.',
        description:
            'A practical clinic for students exploring startups, social ventures, and early-stage product ideas.',
        image: '/public-site/images/event/event-thumb-15.webp',
        category: 'Entrepreneurship',
        date: 'December 3, 2026',
        time: '10:00 AM - 02:00 PM',
        location: 'Enterprise Studio',
        speaker: 'Innovation Hub',
        organiser: 'Entrepreneurship Centre',
        featured: false,
        registrationStatus: 'open',
        detail: createEventDetail(
            'Turning Student Ideas into Practical Ventures',
            [
                'The Entrepreneurship and Innovation Clinic supports students exploring startups, social ventures, and early-stage product ideas through practical mentoring and structured feedback.',
                'Participants learn how to refine ideas, understand users, test assumptions, and communicate venture concepts clearly.',
            ],
            [
                'Clarify early-stage venture and social impact ideas',
                'Understand user needs and basic market validation',
                'Practice pitching and receiving structured feedback',
                'Identify campus resources for innovation support',
                'Plan realistic next steps for product or venture development',
            ],
            'The clinic encourages creative problem-solving while helping students approach innovation with discipline, evidence, and public value.',
        ),
    },
];

export const findEvent = (slug: string | undefined): Event | undefined =>
    events.find((event) => event.slug === slug);
