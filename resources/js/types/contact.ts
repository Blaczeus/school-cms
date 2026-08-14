export type ContactChannelType = 'email' | 'phone' | 'address';

export type ContactChannel = {
    id: number;
    label: string;
    type: ContactChannelType;
    value: string;
    href?: string;
    description: string;
    icon: string;
};

export type ContactLocation = {
    title: string;
    address: string;
    description: string;
    mapEmbedUrl?: string;
    mapUrl?: string;
};

export type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    consent: boolean;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ContactFormStatus = 'idle' | 'validation-error' | 'submitting' | 'success' | 'server-error';
