import type {
    LibraryAccessStep,
    LibraryCollection,
    LibraryDigitalResource,
    LibraryHighlight,
    LibrarySchedule,
    LibraryStudySpace,
} from '@/types/library';

export const libraryCollections: LibraryCollection[] = [
    {
        id: 1,
        title: 'Print Collections',
        description:
            'Access core textbooks, recommended readings and general academic materials that support coursework and independent study.',
        image: '/public-site/images/libraries/libraries-thumb-01.webp',
        alt: 'Students using print library collections',
    },
    {
        id: 2,
        title: 'Journals & Periodicals',
        description:
            'Use current and archived journals, magazines and serial publications for assignments, projects and research reading.',
        image: '/public-site/images/libraries/libraries-thumb-02.webp',
        alt: 'Academic journals and periodicals in the library',
    },
    {
        id: 3,
        title: 'Reference & Special Collections',
        description:
            'Consult reference materials and selected special resources that support deeper academic enquiry and source discovery.',
        image: '/public-site/images/libraries/libraries-thumb-03.webp',
        alt: 'Reference and special collection materials',
    },
];

export const libraryDigitalResources: LibraryDigitalResource[] = [
    {
        id: 1,
        title: 'E-Books',
        category: 'Digital Reading',
        description: 'Digital book collections for coursework, revision and wider academic reading.',
        accessNote: 'Access guidance is provided through Library support channels.',
    },
    {
        id: 2,
        title: 'Electronic Journals',
        category: 'Scholarly Articles',
        description: 'Online journal access for research, assignments and current academic literature.',
        accessNote: 'Availability depends on approved institutional access.',
    },
    {
        id: 3,
        title: 'Research Databases',
        category: 'Research Tools',
        description: 'Search tools and indexes that help students locate credible academic sources.',
        accessNote: 'Students can request database orientation from Library staff.',
    },
    {
        id: 4,
        title: 'Digital Reference Materials',
        category: 'Reference',
        description: 'Online reference resources that support definitions, background reading and quick consultation.',
        accessNote: 'Use guidance may vary by resource type and access arrangement.',
    },
];

export const libraryStudySpaces: LibraryStudySpace[] = [
    {
        id: 1,
        title: 'Quiet Reading Areas',
        description: 'Calm reading zones for focused individual study, revision and academic preparation.',
        image: '/public-site/images/campus-life/campus-life-thumb-18.webp',
        alt: 'Quiet library reading area',
    },
    {
        id: 2,
        title: 'Group Study Spaces',
        description: 'Shared spaces where students can discuss coursework, prepare presentations and collaborate.',
        image: '/public-site/images/campus-life/campus-life-thumb-19.webp',
        alt: 'Students using a group study space',
    },
    {
        id: 3,
        title: 'General Reading Hall',
        description: 'Open study space for daily reading, research preparation and use of library materials.',
        image: '/public-site/images/campus-life/campus-life-thumb-20.webp',
        alt: 'General reading hall for students',
    },
];

export const libraryHighlights: LibraryHighlight[] = [
    {
        id: 1,
        label: 'Print',
        title: 'Core Collections',
        description: 'Books and reference materials for everyday learning.',
    },
    {
        id: 2,
        label: 'Digital',
        title: 'Online Access',
        description: 'Digital categories that support coursework and research.',
    },
    {
        id: 3,
        label: 'Study',
        title: 'Reading Spaces',
        description: 'Quiet and collaborative spaces for academic work.',
    },
    {
        id: 4,
        label: 'Support',
        title: 'Research Guidance',
        description: 'Help with finding, evaluating and using sources.',
    },
];

export const libraryAccessSteps: LibraryAccessStep[] = [
    {
        id: 1,
        title: '01. Register for Library Access',
        description: 'Confirm your current student or staff access before borrowing materials or using restricted resources.',
    },
    {
        id: 2,
        title: '02. Find the Resource You Need',
        description: 'Use shelf guides, digital discovery tools or librarian support to locate books, journals and references.',
    },
    {
        id: 3,
        title: '03. Borrow or Use Materials',
        description: 'Borrow eligible items or consult reference and restricted materials within approved library spaces.',
    },
    {
        id: 4,
        title: '04. Return or Renew Materials',
        description: 'Keep track of borrowed items and follow renewal or return guidance provided by the Library.',
    },
];

export const librarySchedule: LibrarySchedule[] = [
    {
        id: 1,
        day: 'Regular Study Period',
        status: 'Use published university Library hours.',
    },
    {
        id: 2,
        day: 'Examination Period',
        status: 'Extended access may be announced by the Library.',
    },
    {
        id: 3,
        day: 'Public Holidays',
        status: 'Access is subject to official university notices.',
    },
];
