export type AboutSidebarLink = {
    label: string;
    href?: string;
    active?: boolean;
};

export type AboutStatistic = {
    label: string;
    value: string;
    suffix: string;
    icon: string;
};

export type AboutFeature = {
    title: string;
    description: string;
    icon: string;
};

export type AboutTestimonial = {
    name: string;
    role: string;
    rating: string;
    quote: string;
};

export type AboutGalleryImage = {
    src: string;
    alt: string;
};

export type AboutPageContent = {
    sidebarTitle: string;
    sidebarLinks: AboutSidebarLink[];
    sidebarImage: string;
    title: string;
    intro: string;
    quote: string;
    quoteAuthor: string;
    body: string;
    images: AboutGalleryImage[];
    badgeImage: string;
    counterBackground: string;
    statistics: AboutStatistic[];
    features: AboutFeature[];
    campusTourTitle: string;
    campusTourDescription: string;
    videoBackground: string;
    videoUrl: string;
    testimonialTitle: string;
    testimonialDescription: string;
    testimonials: AboutTestimonial[];
    galleryImages: AboutGalleryImage[];
};
