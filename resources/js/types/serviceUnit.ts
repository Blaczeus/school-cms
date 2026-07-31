export type ServiceUnitCategory =
    | 'Academic Support'
    | 'Administrative'
    | 'Student Welfare'
    | 'Technology'
    | 'Health'
    | 'Security'
    | 'Operations';

export type ServiceUnitContact = {
    phone?: string;
    email?: string;
    officeHours?: string;
};

export type ServiceUnitService = {
    title: string;
    description: string;
    items?: string[];
};

export type ServiceUnitStep = {
    title: string;
    description: string;
};

export type ServiceUnitRequirementGroup = {
    title: string;
    items: string[];
};

export type ServiceUnitTable = {
    title: string;
    columns: string[];
    rows: string[][];
};

export type ServiceUnitDownload = {
    title: string;
    description?: string;
    url?: string;
};

export type ServiceUnitHighlight = {
    title: string;
    year?: string;
    description?: string;
};

export type ServiceUnitLink = {
    label: string;
    url: string;
};

export type ServiceUnit = {
    id: number;
    slug: string;
    name: string;
    category: ServiceUnitCategory;
    summary: string;
    description: string;
    image: string;
    icon?: string;
    location?: string;
    contact?: ServiceUnitContact;
    services?: ServiceUnitService[];
    accessSteps?: ServiceUnitStep[];
    requiredDocuments?: ServiceUnitRequirementGroup[];
    informationTables?: ServiceUnitTable[];
    downloads?: ServiceUnitDownload[];
    highlights?: ServiceUnitHighlight[];
    links?: ServiceUnitLink[];
    featured?: boolean;
};
