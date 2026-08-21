# School CMS

School CMS is a full-stack institutional website and content management system currently being developed at Nervego using Laravel, Vue.js, Inertia.js, TypeScript, and Tailwind CSS.

The project is designed to provide a modern digital platform for an educational institution, bringing public-facing institutional content and future administrative content-management workflows into a single application.

I am currently responsible for the design and development of the application, including its Laravel architecture, Vue/Inertia frontend, authentication and security foundation, public-facing pages, and ongoing CMS development.

> **Status:** In active development. The public-facing application architecture and core institutional pages are currently being implemented, while the dynamic content-management and administrative backend is still under development.  
> **Audience:** This repository is intended for internal Nervego collaborators and authorized reviewers.

## Tech Stack

**Backend**

<p>
  <img src="https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white" alt="PHP">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white" alt="Laravel">
  <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white" alt="MySQL">
</p>

**Frontend**

<p>
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue.js">
  <img src="https://img.shields.io/badge/Inertia.js-9553E9?logo=inertia&logoColor=white" alt="Inertia.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
</p>

**Quality & Testing**

<p>
  <img src="https://img.shields.io/badge/PHPUnit-366488?logo=php&logoColor=white" alt="PHPUnit">
  <img src="https://img.shields.io/badge/Larastan-Static_Analysis-FF2D20?logo=laravel&logoColor=white" alt="Larastan">
  <img src="https://img.shields.io/badge/Laravel_Pint-Code_Style-FF2D20?logo=laravel&logoColor=white" alt="Laravel Pint">
</p>

## Core Functionality

### Institutional Website

The public-facing application provides the foundation for presenting institutional information through a structured set of pages and reusable frontend components.

The current application includes sections for areas such as:

- Institutional information
- Faculties
- Departments
- News
- Events
- Service units
- Alumni-related content
- Other institutional resources

These sections are being developed as part of a larger CMS architecture that will eventually allow institutional content to be managed dynamically.

### Faculties & Departments

The application includes public-facing structures for presenting faculties and departments within the institution.

Routes and page structures currently provide the frontend foundation for navigating and displaying this information while the underlying dynamic content-management workflows continue to be developed.

### News & Institutional Content

The application includes interfaces for presenting news and other institutional content.

The current implementation focuses on the public presentation layer and reusable page architecture, with database-driven publishing and administrative management forming part of the ongoing CMS development.

### Service Units

Dedicated public-facing sections are being developed for institutional service units and related information.

These pages share the application's common layouts and component architecture while allowing different institutional areas to maintain their own content structure.

### Authentication & Account Security

The project includes a Laravel-based authentication and account-management foundation.

Current security and account functionality includes support for:

- User authentication
- Profile management
- Password management
- Account security settings
- Passkey-related authentication infrastructure

These features provide the foundation for the administrative side of the CMS as development progresses.

## Application Architecture

School CMS uses Laravel as the backend application framework with Vue.js rendered through Inertia.js.

This allows the application to maintain Laravel's routing, authentication, middleware, and server-side architecture while using Vue components for the interactive frontend without requiring a separate frontend API application.

The frontend is organized around reusable layouts and components shared across institutional pages.

TypeScript is used throughout the Vue application to improve type safety and maintainability as the frontend grows.

## Frontend Architecture

A significant part of the current development work focuses on creating a reusable frontend structure for the institutional website.

This includes:

- Shared public layouts
- Reusable Vue components
- Responsive navigation
- Institutional page structures
- Reusable content sections
- Responsive interfaces
- Integration of existing design assets into the Laravel/Vue application

The goal is to maintain visual consistency while allowing individual sections of the institutional website to evolve independently.

## Content Management Direction

The project is being developed toward a CMS architecture where institutional information can be managed through administrative workflows rather than remaining embedded directly within public-facing pages.

Planned dynamic content areas include:

- Faculties
- Departments
- Courses
- News and announcements
- Events
- Service units
- Alumni content
- Other institutional information

The administrative and database-backed content-management layer is still under active development.

## Testing & Code Quality

The project includes tooling for automated testing, static analysis, formatting, and frontend type checking.

Current development tooling includes:

- PHPUnit for automated testing
- Larastan for PHP static analysis
- Laravel Pint for PHP code formatting
- TypeScript type checking
- Frontend linting and formatting
- Composer scripts for repeatable project verification

These tools help maintain consistency as the application and CMS functionality continue to grow.

## Technical Highlights

The project currently demonstrates:

- Laravel 13 application architecture
- PHP 8.4 development
- Full-stack Laravel/Vue integration through Inertia.js
- Vue 3 component architecture
- TypeScript-based frontend development
- Reusable layouts and UI components
- Responsive institutional web design
- Laravel authentication and account security
- Passkey-related authentication infrastructure
- Static analysis and automated code-quality tooling
- Automated testing infrastructure
- Structured development toward a database-driven CMS

## Current Development Status

### Implemented / In Progress

- Core Laravel application architecture
- Vue 3 and Inertia.js integration
- TypeScript frontend architecture
- Public application layouts
- Responsive institutional interface
- Faculty-facing page structures
- Department-facing page structures
- News presentation
- Event-related pages
- Service-unit pages
- Alumni-related pages
- Authentication and account settings
- Security and passkey infrastructure
- Automated testing and code-quality tooling

### Remaining / Planned

- Dynamic database-backed institutional content
- CMS administration dashboard
- Faculty and department administration
- Course management
- News and announcement publishing workflows
- Event management
- Service-unit content management
- Alumni content management
- Administrative roles and permissions
- Expanded automated test coverage
- Final content migration and interface polishing
- Production hardening and deployment preparation

## Repository Access

This is a private project developed as part of work at Nervego. Repository access and project materials are intended for authorized collaborators and reviewers only.

## License

Proprietary and internal to Nervego. Unauthorized use, distribution, or disclosure is not permitted.
