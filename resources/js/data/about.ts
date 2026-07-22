import type { AboutPageContent } from '@/types/about';

export const aboutPageContent: AboutPageContent = {
    sidebarTitle: 'Institution Inside',
    sidebarLinks: [
        { label: 'Who We Are', href: '/about', active: true },
        { label: 'History' },
        { label: 'Administration' },
        { label: 'Campus Map' },
    ],
    sidebarImage: '/public-site/images/sidebar/sidebar-thumb-01.webp',
    title: 'About Institution Name',
    intro:
        'At Institution Name, education goes beyond textbooks and classrooms. We empower students to explore their passions, challenge conventions, and discover their potential through meaningful academic experiences.',
    quote:
        'Our diverse community welcomes students from across the globe, fostering cultural exchange, research collaboration, and innovation that prepares graduates to contribute to sustainable solutions.',
    quoteAuthor: 'Kathryn Murphy',
    body:
        'Our learning environment combines distinguished faculty, modern laboratories, student support, and a commitment to excellence. Students gain the skills, confidence, and perspective needed to lead in an ever-changing world.',
    images: [
        { src: '/public-site/images/about/about-thumb-19.webp', alt: 'Students walking on campus' },
        { src: '/public-site/images/about/about-thumb-20.webp', alt: 'Students studying together' },
    ],
    badgeImage: '/public-site/images/shape/badge-shape.webp',
    counterBackground: '/public-site/images/bg/counter-bg-thumb-01.webp',
    statistics: [
        { label: 'Students Enrolled', value: '10.5', suffix: 'K', icon: 'ri-graduation-cap-line' },
        { label: 'Academic Staff', value: '150', suffix: '+', icon: 'ri-team-line' },
        { label: 'Programmes Offered', value: '120', suffix: '+', icon: 'ri-book-open-line' },
    ],
    features: [
        {
            title: 'Campus Facilities',
            description: 'Sports complexes, learning spaces, and student centres.',
            icon: 'ri-building-4-line',
        },
        {
            title: 'Research & Innovation',
            description: 'Hubs for scientific, social, and technological research.',
            icon: 'ri-lightbulb-flash-line',
        },
        {
            title: 'Student Life',
            description: 'Academic, cultural, and leadership activities across campus.',
            icon: 'ri-user-heart-line',
        },
    ],
    campusTourTitle: 'Our Campus Tour',
    campusTourDescription:
        'Our campus supports academic discovery, cultural exchange, and student wellbeing through modern learning spaces, laboratories, libraries, and collaborative environments.',
    videoBackground: '/public-site/images/bg/video-bg-thumb-03.webp',
    videoUrl: 'https://www.youtube.com/watch?v=go7QYaQR494',
    testimonialTitle: 'Student Feedback',
    testimonialDescription:
        'Students describe a learning experience shaped by strong teaching, practical support, and a welcoming academic community.',
    testimonials: [
        {
            name: 'Abdur Rashid',
            role: 'Graduate Student',
            rating: '5.0',
            quote: 'The academic support and practical learning culture helped me grow with confidence and purpose.',
        },
        {
            name: 'Ronald Richards',
            role: 'Undergraduate Student',
            rating: '4.5',
            quote: 'The faculty understood our goals, challenged us, and made learning feel connected to real work.',
        },
        {
            name: 'Leslie Alexander',
            role: 'Alumni Representative',
            rating: '5.0',
            quote: 'The university community gave me the skills and perspective I needed for professional growth.',
        },
        {
            name: 'Marry Holder',
            role: 'Student Leader',
            rating: '4.5',
            quote: 'Campus life is supportive, active, and full of opportunities to learn beyond the classroom.',
        },
    ],
    galleryImages: [
        { src: '/public-site/images/gallery/gallery-thumb-01.webp', alt: 'Campus gallery image one' },
        { src: '/public-site/images/gallery/gallery-thumb-02.webp', alt: 'Campus gallery image two' },
        { src: '/public-site/images/gallery/gallery-thumb-03.webp', alt: 'Campus gallery image three' },
        { src: '/public-site/images/gallery/gallery-thumb-04.webp', alt: 'Campus gallery image four' },
        { src: '/public-site/images/gallery/gallery-thumb-05.webp', alt: 'Campus gallery image five' },
        { src: '/public-site/images/gallery/gallery-thumb-06.webp', alt: 'Campus gallery image six' },
    ],
};
