import type { ServiceUnit, ServiceUnitStep } from '@/types/serviceUnit';

export const defaultServiceUnitAccessSteps: ServiceUnitStep[] = [
    {
        title: '01. Confirm the Right Office',
        description: 'Review the unit responsibilities and make sure the office handles the request or support you need.',
    },
    {
        title: '02. Prepare Requirements',
        description: 'Gather any student ID, staff ID, receipts, forms, approvals, or supporting documents listed for the service.',
    },
    {
        title: '03. Contact or Visit',
        description: 'Use the published email, location, or office hours to reach the unit through the approved university channel.',
    },
    {
        title: '04. Track the Outcome',
        description: 'Keep any reference, ticket, receipt, or acknowledgement issued until the request has been completed.',
    },
];

export const serviceUnits: ServiceUnit[] = [
    {
        id: 1,
        slug: 'university-library',
        name: 'University Library',
        category: 'Academic Support',
        summary: 'Supports study, teaching, and research through print collections, digital resources, and research guidance.',
        description:
            'The University Library provides learning resources, reading spaces, research support, and access to academic information services.',
        image: '/public-site/images/libraries/libraries-thumb-01.webp',
        location: 'Library Complex',
        contact: {
            email: 'library@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Learning Resources',
                description: 'Access print collections, reference materials, reading spaces, and study support resources.',
                items: ['Book lending guidance', 'Reference support', 'Reading room access'],
            },
            {
                title: 'Research Support',
                description: 'Receive help locating academic materials, using databases, and preparing credible research sources.',
                items: ['Database access guidance', 'Citation support', 'Research consultations'],
            },
            {
                title: 'Digital Library Access',
                description: 'Support for approved digital resources and institutional access to subscribed academic platforms.',
                items: ['E-resource orientation', 'Access troubleshooting', 'Digital catalogue support'],
            },
        ],
        accessSteps: [
            {
                title: '01. Register at the Library Desk',
                description: 'Present your university identification and complete any current library access registration.',
            },
            {
                title: '02. Search the Catalogue',
                description: 'Use the catalogue, shelf guides, or librarian support to identify the materials you need.',
            },
            {
                title: '03. Borrow or Consult Materials',
                description: 'Follow lending rules for borrowable items or use restricted resources within approved reading spaces.',
            },
            {
                title: '04. Return or Renew on Time',
                description: 'Keep loan records and return materials within the published lending period.',
            },
        ],
        requiredDocuments: [
            {
                title: 'Library Registration',
                items: ['Valid student or staff identification', 'Current admission or employment record where required'],
            },
        ],
        informationTables: [
            {
                title: 'Service Availability',
                columns: ['Service', 'Availability', 'Notes'],
                rows: [
                    ['Reading spaces', 'Published library hours', 'Subject to examination-period notices'],
                    ['Borrowing support', 'Weekdays', 'Requires valid registration'],
                    ['Research assistance', 'By librarian availability', 'Book early for detailed guidance'],
                ],
            },
        ],
        downloads: [
            {
                title: 'Library Registration Guide',
                description: 'Temporary placeholder for the official registration guide once backend file management is available.',
            },
        ],
        highlights: [
            {
                title: 'Digital Resource Orientation',
                description: 'Students are encouraged to request orientation before using subscribed academic databases.',
            },
        ],
        featured: true,
    },
    {
        id: 2,
        slug: 'ict-centre',
        name: 'ICT Centre',
        category: 'Technology',
        summary: 'Provides digital systems support, network access guidance, and help with approved campus technology services.',
        description:
            'The ICT Centre supports institutional technology services, including user access, learning platforms, and campus digital systems.',
        image: '/public-site/images/overview/overview-thumb-02.webp',
        location: 'ICT Building',
        contact: {
            email: 'ict@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'User Account Support',
                description: 'Guidance for approved university systems, login access, and institutional digital accounts.',
                items: ['Account access checks', 'Password support guidance', 'User onboarding assistance'],
            },
            {
                title: 'Network and Connectivity',
                description: 'Support for campus connectivity issues reported through approved channels.',
                items: ['Network issue reporting', 'Wi-Fi access guidance', 'Connectivity troubleshooting'],
            },
            {
                title: 'Learning Platform Support',
                description: 'Help for students and staff using approved learning technologies and academic systems.',
                items: ['Platform access guidance', 'Basic usage support', 'Escalation to technical teams'],
            },
        ],
        accessSteps: [
            {
                title: '01. Describe the Issue',
                description: 'Prepare your name, role, affected system, and a clear description of the problem.',
            },
            {
                title: '02. Submit Through ICT',
                description: 'Contact ICT by the approved support email or visit the help desk during published hours.',
            },
            {
                title: '03. Receive Guidance',
                description: 'Follow the troubleshooting steps or escalation instructions issued by the ICT team.',
            },
            {
                title: '04. Confirm Resolution',
                description: 'Confirm when access or service has been restored so the request can be closed.',
            },
        ],
        requiredDocuments: [
            {
                title: 'Support Request',
                items: ['Student or staff identification', 'Affected username or institutional email', 'Screenshots where helpful'],
            },
        ],
        downloads: [
            {
                title: 'ICT Support Guide',
                description: 'Temporary placeholder for the official support guide once backend file management is available.',
            },
        ],
        featured: true,
    },
    {
        id: 3,
        slug: 'registry',
        name: 'Registry',
        category: 'Administrative',
        summary: 'Coordinates official academic records, student documentation, verification, and core administrative processes.',
        description:
            'The Registry manages student records, academic documentation, verification support, and institution-wide administrative records.',
        image: '/public-site/images/requirement/requirement-thumb-01.webp',
        location: 'Administrative Block',
        contact: {
            email: 'registry@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Academic Records',
                description: 'Support for student files, record updates, verification, and official academic documentation.',
                items: ['Record verification', 'Transcript guidance', 'Student file support'],
            },
            {
                title: 'Documentation Requests',
                description: 'Guidance for official letters, records, and approved document processing.',
                items: ['Letters of introduction', 'Attestation guidance', 'Document status checks'],
            },
            {
                title: 'Administrative Coordination',
                description: 'Institutional support for academic calendars, records workflows, and policy-aligned processes.',
                items: ['Process guidance', 'Office referrals', 'Records coordination'],
            },
        ],
        requiredDocuments: [
            {
                title: 'Records and Verification',
                items: ['Valid identification', 'Student number or matriculation number', 'Evidence of payment where applicable'],
            },
            {
                title: 'Document Requests',
                items: ['Completed request form where required', 'Supporting records or approvals', 'Current contact information'],
            },
        ],
        informationTables: [
            {
                title: 'Common Registry Requests',
                columns: ['Request', 'Typical Handling', 'Notes'],
                rows: [
                    ['Transcript guidance', 'Reviewed through published registry procedures', 'Processing begins after requirements are complete'],
                    ['Verification support', 'Handled by records officers', 'Official requests may require institutional confirmation'],
                    ['Letters and attestations', 'Reviewed during office hours', 'Availability depends on record status'],
                ],
            },
        ],
        downloads: [
            {
                title: 'Transcript Request Form',
                description: 'Temporary placeholder for the official form once backend file management is available.',
            },
            {
                title: 'Records Update Checklist',
                description: 'Temporary placeholder for the official checklist once backend file management is available.',
            },
        ],
        highlights: [
            {
                title: 'Verified Records Required',
                description: 'Requests are processed against official university records and may require additional confirmation.',
            },
        ],
        featured: true,
    },
    {
        id: 4,
        slug: 'student-affairs',
        name: 'Student Affairs',
        category: 'Student Welfare',
        summary: 'Supports student welfare, campus guidance, orientation, clubs, and non-academic student development.',
        description:
            'Student Affairs provides welfare guidance, student support coordination, orientation assistance, and campus life services.',
        image: '/public-site/images/campus-life/campus-life-thumb-04.webp',
        location: 'Student Centre',
        contact: {
            email: 'studentaffairs@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Student Welfare Guidance',
                description: 'Support for non-academic student concerns and appropriate referrals across campus.',
                items: ['Welfare guidance', 'Student support referrals', 'Campus adjustment support'],
            },
            {
                title: 'Orientation and Campus Life',
                description: 'Coordination of student orientation, student groups, and approved campus activities.',
                items: ['Orientation support', 'Club guidance', 'Student conduct information'],
            },
            {
                title: 'Student Development',
                description: 'Programmes that encourage leadership, belonging, and responsible participation in university life.',
                items: ['Leadership guidance', 'Peer support coordination', 'Student engagement'],
            },
        ],
        highlights: [
            {
                title: 'Confidential Support Pathways',
                description: 'Student welfare concerns are handled through appropriate university support and referral channels.',
            },
        ],
    },
    {
        id: 5,
        slug: 'medical-centre',
        name: 'Medical Centre',
        category: 'Health',
        summary: 'Provides basic campus health support, consultations, referrals, and student health guidance.',
        description:
            'The Medical Centre supports the university community with campus health services, consultation support, and wellness guidance.',
        image: '/public-site/images/contact/contact-thumb-01.webp',
        location: 'Medical Centre',
        contact: {
            email: 'medicalcentre@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Campus Health Consultation',
                description: 'Basic medical consultation and guidance for students and staff within approved service hours.',
                items: ['Initial assessment', 'Health guidance', 'Referral coordination'],
            },
            {
                title: 'Preventive Health Support',
                description: 'Health education, wellness guidance, and preventive care information for the university community.',
                items: ['Wellness guidance', 'Health awareness', 'Preventive care support'],
            },
            {
                title: 'Emergency Guidance',
                description: 'Direction for urgent campus health situations and appropriate referral pathways.',
                items: ['Urgent assessment guidance', 'Referral support', 'Safety coordination'],
            },
        ],
        accessSteps: [
            {
                title: '01. Visit Reception',
                description: 'Report to the Medical Centre reception with your university identification.',
            },
            {
                title: '02. Initial Assessment',
                description: 'Provide the necessary health information for the clinical team to assess your concern.',
            },
            {
                title: '03. Receive Care or Referral',
                description: 'Follow the medical guidance, treatment support, or referral instructions provided.',
            },
            {
                title: '04. Follow Up',
                description: 'Return as advised for review, documentation, or continued care.',
            },
        ],
        requiredDocuments: [
            {
                title: 'Health Support',
                items: ['Valid student or staff identification', 'Health card or record where issued', 'Referral note where applicable'],
            },
        ],
        informationTables: [
            {
                title: 'Health Service Notes',
                columns: ['Service', 'Availability', 'Notes'],
                rows: [
                    ['Consultation', 'Published clinic hours', 'Urgent cases should report immediately'],
                    ['Wellness guidance', 'By clinic availability', 'May be delivered individually or through campaigns'],
                    ['Referral support', 'As assessed', 'External care may follow university procedures'],
                ],
            },
        ],
        highlights: [
            {
                title: 'Health Records Matter',
                description: 'Students should keep clinic documentation safe for follow-up visits and referrals.',
            },
        ],
    },
    {
        id: 6,
        slug: 'bursary',
        name: 'Bursary',
        category: 'Administrative',
        summary: 'Handles student payment guidance, receipts, financial documentation, and institution-related account enquiries.',
        description:
            'The Bursary provides support for approved payment processes, account enquiries, financial records, and related documentation.',
        image: '/public-site/images/tuition/tuition-thumb-01.webp',
        location: 'Administrative Block',
        contact: {
            email: 'bursary@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Payment Guidance',
                description: 'Support for approved student payments, receipts, and university financial documentation.',
                items: ['Payment confirmation guidance', 'Receipt support', 'Account enquiry handling'],
            },
            {
                title: 'Financial Records Support',
                description: 'Assistance with approved financial records, clearance checks, and payment-related documentation.',
                items: ['Clearance guidance', 'Statement support', 'Payment record checks'],
            },
        ],
        requiredDocuments: [
            {
                title: 'Payment Enquiries',
                items: ['Student number or applicant reference', 'Evidence of payment where applicable', 'Current contact information'],
            },
        ],
        informationTables: [
            {
                title: 'Bursary Support Areas',
                columns: ['Service', 'Availability', 'Notes'],
                rows: [
                    ['Receipt support', 'Weekdays', 'Requires verifiable payment information'],
                    ['Clearance checks', 'Published office hours', 'Processed through approved university records'],
                    ['Account enquiries', 'Weekdays', 'Complex cases may require follow-up'],
                ],
            },
        ],
        downloads: [
            {
                title: 'Payment Enquiry Checklist',
                description: 'Temporary placeholder for the official checklist once backend file management is available.',
            },
        ],
    },
    {
        id: 7,
        slug: 'security-unit',
        name: 'Security Unit',
        category: 'Security',
        summary: 'Supports campus safety coordination, access guidance, incident reporting, and visitor movement control.',
        description:
            'The Security Unit helps maintain a safe campus environment through access support, safety coordination, and incident reporting.',
        image: '/public-site/images/campus-life/campus-life-thumb-11.webp',
        location: 'Main Gate Security Office',
        contact: {
            email: 'security@univet.edu',
            officeHours: 'Contact the unit for current desk hours',
        },
        services: [
            {
                title: 'Campus Safety Support',
                description: 'Coordination of safety reporting, access support, and visitor movement guidance.',
                items: ['Incident reporting', 'Visitor guidance', 'Safety coordination'],
            },
            {
                title: 'Access Control',
                description: 'Support for approved movement through campus gates, facilities, and restricted areas.',
                items: ['Gate support', 'Movement guidance', 'Lost item reporting'],
            },
        ],
        accessSteps: [
            {
                title: '01. Report Clearly',
                description: 'State the location, time, people involved, and the nature of the safety concern.',
            },
            {
                title: '02. Contact Security',
                description: 'Reach the Security Unit or nearest approved security post as soon as possible.',
            },
            {
                title: '03. Follow Instructions',
                description: 'Cooperate with access, incident, or safety instructions given by the security team.',
            },
            {
                title: '04. Keep Records',
                description: 'Retain any report reference or follow-up instruction for future clarification.',
            },
        ],
        highlights: [
            {
                title: 'Report Urgent Issues Promptly',
                description: 'Safety concerns should be reported immediately through official campus security channels.',
            },
        ],
    },
    {
        id: 8,
        slug: 'works-and-maintenance',
        name: 'Works and Maintenance',
        category: 'Operations',
        summary: 'Coordinates facilities support, maintenance requests, repairs, and campus infrastructure services.',
        description:
            'Works and Maintenance supports the upkeep of university facilities, classrooms, offices, and shared campus infrastructure.',
        image: '/public-site/images/gallery/gallery-thumb-04.webp',
        location: 'Works Yard',
        contact: {
            email: 'works@univet.edu',
            officeHours: 'Weekdays during published university hours',
        },
        services: [
            {
                title: 'Facilities Maintenance',
                description: 'Support for repairs and maintenance across classrooms, offices, and shared campus spaces.',
                items: ['Repair request handling', 'Facilities checks', 'Maintenance scheduling'],
            },
            {
                title: 'Infrastructure Support',
                description: 'Coordination for approved works, utilities issues, and campus infrastructure concerns.',
                items: ['Utilities issue reporting', 'Infrastructure follow-up', 'Office relocation support'],
            },
        ],
        accessSteps: [
            {
                title: '01. Identify the Fault',
                description: 'Note the location, affected facility, and details of the maintenance issue.',
            },
            {
                title: '02. Submit the Request',
                description: 'Send the request through the approved office channel with relevant details.',
            },
            {
                title: '03. Await Scheduling',
                description: 'The unit reviews the request and schedules maintenance based on priority and resources.',
            },
            {
                title: '04. Confirm Completion',
                description: 'Notify the unit if the issue remains unresolved after maintenance work is completed.',
            },
        ],
        downloads: [
            {
                title: 'Maintenance Request Checklist',
                description: 'Temporary placeholder for the official checklist once backend file management is available.',
            },
        ],
    },
];

export const findServiceUnit = (slug: string): ServiceUnit | undefined =>
    serviceUnits.find((unit) => unit.slug === slug);
