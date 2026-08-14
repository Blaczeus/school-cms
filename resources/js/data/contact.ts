import { publicInstitution } from '@/data/publicSite';
import type { ContactChannel, ContactLocation } from '@/types/contact';

const fallbackContact = {
    email: 'contact@schoolcms.edu',
    phone: '+234 800 000 1100',
    address: 'Main Campus, University Avenue',
};

const institutionEmail = publicInstitution.email || fallbackContact.email;
const institutionPhone = publicInstitution.phone || fallbackContact.phone;
const institutionAddress = publicInstitution.address || fallbackContact.address;

export const contactChannels: ContactChannel[] = [
    {
        id: 1,
        label: 'General Enquiries',
        type: 'email',
        value: institutionEmail,
        href: `mailto:${institutionEmail}`,
        description: 'Send academic, administrative, partnership, or visitor enquiries to the central contact desk.',
        icon: 'ri-mail-send-line',
    },
    {
        id: 2,
        label: 'Phone Support',
        type: 'phone',
        value: institutionPhone,
        href: `tel:${institutionPhone.replace(/\s+/g, '')}`,
        description: 'Call during official working hours for urgent guidance or quick routing to the right office.',
        icon: 'ri-phone-line',
    },
    {
        id: 3,
        label: 'Visit the Campus',
        type: 'address',
        value: institutionAddress,
        description: 'Use the main campus address for visits, document drop-offs, meetings, and general directions.',
        icon: 'ri-map-pin-line',
    },
];

export const contactSupportOptions = [
    {
        id: 1,
        title: 'Admissions Support',
        description: 'Find requirements, application steps, tuition guidance, and entry pathway information.',
        href: '/admissions',
        cta: 'Visit Admissions',
        icon: 'ri-graduation-cap-line',
    },
    {
        id: 2,
        title: 'Service Units',
        description: 'Contact the Library, Registry, ICT Centre, Medical Centre, Bursary, Student Affairs, and more.',
        href: '/service-units',
        cta: 'View Service Units',
        icon: 'ri-customer-service-2-line',
    },
] as const;

export const contactLocation: ContactLocation = {
    title: 'Campus Location',
    address: institutionAddress,
    description:
        'Visitors should confirm appointment details with the relevant office before travelling to campus.',
};
