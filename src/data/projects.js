// Project case-study data. Shared by the home-page cards (Projects.jsx) and the detail page (ProjectDetail.jsx).

import { GITHUB_PROJECTS } from './githubProjects';

const PROJECT_DATA = [
  {
    id: 1,
    summary: "Responsive HTML5 e-learning modules with interactive quizzes, data visualisations and progress tracking.",
    title: "Interactive E-Learning Modules",
    description: "Responsive HTML5 e-learning modules with interactive quizzes, animations, and progress tracking. Designed for modern educational needs.",
    fullDescription: `This project is an interactive e-learning platform focused on financial literacy and data analysis. It features responsive modules, real-time data visualizations, and hands-on coding exercises to enhance user engagement and learning outcomes.

The platform integrates quizzes, progress tracking, downloadable resources, and a built-in code editor, providing a comprehensive and practical learning experience. Technologies used include HTML5, CSS3, JavaScript, jQuery, PHP, and Jupyter Notebook, with a strong emphasis on accessibility and user experience.

Key features include:
• Interactive quizzes with real-time feedback and scoring
• Real-time data visualizations for financial concepts
• Hands-on coding exercises with built-in code editor
• Progress tracking system that saves user progress across sessions
• Downloadable resources and learning materials
• Responsive design optimized for various screen sizes
• User authentication and profile management
• Analytics dashboard for instructors to track student progress
• Financial literacy modules with practical examples
• Data analysis tutorials with interactive components

The project was built using modern web technologies and follows best practices for accessibility and performance. The modular architecture allows for easy content updates and scalability, making it perfect for educational institutions and self-learners.`,
    technologies: ["HTML5", "JavaScript", "CSS3", "jQuery", "Bootstrap", "PHP"],
    demoLink: "#",
    codeLink: "#",
    image: `${import.meta.env.BASE_URL}images/projects/project1/project1_img1.webp`,
    category: "Web Development",
    challenges: [
      "Dynamic Data Integration: Incorporating real-time financial datasets required robust data fetching, validation, and error handling to ensure accuracy and reliability.",
      "Interactive UI Complexity: Building responsive, interactive quizzes and dashboards that worked seamlessly across devices involved careful planning and extensive testing.",
      "User Progress Tracking: Designing a system to accurately track user progress and manage personalized learning paths presented both technical and privacy challenges.",
      "Resource Management: Handling downloadable resources and ensuring their availability and version control was essential for a smooth user experience.",
      "Accessibility & UX: Creating an intuitive, accessible interface that met diverse user needs required ongoing collaboration and iteration with UI/UX designers.",
      "Performance Optimization: Ensuring fast load times and smooth interactions, especially with rich media and interactive components, demanded careful optimization of assets and code.",
      "Continuous Content Update: Regularly updating course materials and features to keep content relevant and engaging required a streamlined workflow and close monitoring of user feedback.",
      "Build from Template: Adapting and customizing a template-based structure to accelerate development while ensuring flexibility for unique project requirements."
    ],
    roleAndResponsibilities: [
      "Frontend Developer: Designed and implemented responsive user interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
      "Data Visualization: Developed interactive charts and dashboards using real-time financial datasets.",
      "E-Learning Experience: Built quiz modules, progress tracking, and certification logic.",
      "Resource Management: Managed downloadable resources and ensured data accuracy.",
      "Continuous Improvement: Maintained the platform, updated content, and implemented new features based on user feedback.",
      "UI/UX Design Collaboration: Contributed to the UI/UX design process, helping to create an intuitive, accessible, and responsive interface for a seamless user experience across devices."
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img1.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img2.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img3.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img4.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img5.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img6.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img7.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img8.webp`,
      `${import.meta.env.BASE_URL}images/projects/project1/project1_img9.webp`
    ]
  },
  {
    id: 2,
    summary: "This portfolio: a React + Vite site rebuilt from plain HTML, CSS and JavaScript.",
    title: "Personal Portfolio Website",
    description: "A modern React-based portfolio website showcasing my professional skills, projects, and career journey with interactive components and responsive design.",
    fullDescription: `This personal portfolio website represents my journey as a full-stack developer, originally crafted from scratch using fundamental web technologies (HTML5, CSS3, and JavaScript) before being completely reimagined and rebuilt with React and modern development frameworks. The transformation showcases my evolution as a developer and serves as a comprehensive digital showcase of my professional skills, innovative projects, and career progression.

Built with React, Vite, Bootstrap, and AOS (Animate On Scroll), the portfolio features a sophisticated component-based architecture that ensures maintainability and scalability. The design emphasizes clean aesthetics, smooth animations, and user experience best practices.

Key features include:
• Modern React component architecture with reusable components
• Responsive design optimized for desktop, tablet, and mobile devices
• Interactive project showcase with detailed project pages
• Smooth scroll animations and micro-interactions using AOS library
• Professional sections: Hero, Projects, Experience, Skills, About, Education, and Contact
• EmailJS integration for functional contact form
• Case-study pages with a screenshot gallery, full-size lightbox and previous/next project navigation
• SEO optimization and performance optimization
• Clean, modern UI design with consistent branding
• Fast loading times with Vite build optimization
• Accessible design following web accessibility standards
• Cross-browser compatibility and testing

The development process followed modern best practices including component-based architecture, version control with Git, responsive design principles, and performance optimization. This portfolio not only showcases my projects but also demonstrates my ability to create professional, user-friendly web applications from concept to deployment.`,
    technologies: ["React", "Vite", "Bootstrap", "AOS"],
    demoLink: "#",
    codeLink: "#",
    image: `${import.meta.env.BASE_URL}images/projects/project5/project5_img1.webp`,
    category: "Web Development",
    challenges: [
      "Component Architecture: Designing a scalable React component structure that promotes reusability and maintainability across different sections.",
      "Performance Optimization: Ensuring fast loading times and smooth animations while maintaining high-quality visuals and interactive elements.",
      "Responsive Design: Creating a seamless experience across all device types, from mobile phones to large desktop screens.",
      "Animation Integration: Implementing smooth scroll animations and micro-interactions using AOS library without compromising performance.",
      "EmailJS Integration: Setting up functional contact form with email delivery while maintaining security and preventing spam.",
      "Cross-Browser Compatibility: Ensuring consistent functionality and appearance across different browsers and their various versions."
    ],
    roleAndResponsibilities: [
      "Full Stack Developer: Designed and developed the complete portfolio website using React, Vite, Bootstrap, and modern web technologies.",
      "UI/UX Designer: Created the visual design, user interface, and user experience ensuring professional presentation and easy navigation.",
      "Frontend Architect: Implemented component-based architecture with reusable React components for maintainability and scalability.",
      "Performance Engineer: Optimized loading times, implemented lazy loading, and ensured smooth animations across all devices.",
      "Integration Specialist: Set up EmailJS for contact form functionality and integrated AOS library for scroll animations.",
      "Quality Assurance: Conducted thorough testing across different browsers and devices to ensure consistent user experience."
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img1.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img2.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img3.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img4.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img5.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img6.webp`,
      `${import.meta.env.BASE_URL}images/projects/project5/project5_img7.webp`
    ]
  },
  {
    id: 3,
    summary: "Internal production tracker managing course, video and game pipelines across multiple teams.",
    title: "PVM Project Tracker",
    description: "Internal production tracker for PV Multimedia Inc., managing course module, video, and game development pipelines across multiple teams with real-time status tracking.",
    fullDescription: `PVM Project Tracker is an internal production management system built for PV Multimedia Inc. to coordinate content production across four distinct workspaces: BMAI course modules, Fitforbanking course modules, video production, and game development. Each workspace tracks development status, assigned developers, versioning, and delivery to stakeholders across hundreds of production entries.

The application is a hand-rolled PHP MVC built without a framework, using a PSR-4 autoloader and flat-file JSON storage instead of a database, which keeps the tool lightweight and easy to deploy while still handling a growing catalog of production records. It includes a full developer and editor management workspace, a searchable and filterable module catalog, and a dark/light theme that syncs across every page.

Key features include:
• Four dedicated tracker workspaces: BMAI, Fitforbanking, Video, and Game development
• Searchable, filterable module catalog with category, series, developer, and status filters
• Developer and editor management shared across all trackers
• Bulk edit support for updating multiple entries at once
• Nested module hierarchy (course → chapter → module) with expandable rows
• Dark/light theme toggle persisted across sessions
• Built-in onboarding tour for new team members

The system replaced a set of scattered spreadsheets with a single, purpose-built tool the whole team now uses daily to track exactly what has been built, by whom, and what still needs review.`,
    technologies: ["PHP", "JavaScript", "JSON", "Custom MVC"],
    demoLink: "#",
    codeLink: "#",
    image: `${import.meta.env.BASE_URL}images/projects/project6/project6_img1.webp`,
    category: "Web Development",
    challenges: [
      "Framework-Free Architecture: Building a maintainable PSR-4 autoloaded MVC from scratch, without a framework, required careful separation of controllers, models, and views to keep the codebase organized as it grew.",
      "Flat-File Data at Scale: Managing hundreds of production records in JSON files instead of a database meant writing careful read/write logic to avoid data corruption during concurrent edits.",
      "Cross-Tracker Consistency: Keeping shared concepts (developers, editors, statuses) consistent across four independently evolving tracker workspaces required a shared data layer.",
      "Usability for Non-Developers: Designing bulk-edit and filtering tools that production staff could use confidently without technical training."
    ],
    roleAndResponsibilities: [
      "Sole Developer: Designed and built the entire application end to end, from the MVC core and routing to every tracker view.",
      "Data Architecture: Designed the JSON-based data layer and models for projects, catalogs, developers, and activity logs.",
      "UI/UX Design: Designed the full interface, including the dark/light theme system and the interactive onboarding tour.",
      "Ongoing Maintenance: Continue to maintain and extend the tool based on day-to-day feedback from the production team."
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/project6/project6_img1.webp`,
      `${import.meta.env.BASE_URL}images/projects/project6/project6_img2.webp`,
      `${import.meta.env.BASE_URL}images/projects/project6/project6_img3.webp`
    ]
  },
  {
    id: 4,
    summary: "PHP MVC admin panel for deploying game and web projects with ZIP-based versioning and audit logging.",
    title: "Game Projects Manager",
    description: "PHP MVC admin panel for deploying and managing game and web projects, with ZIP-based semantic versioning, a built-in database manager, and full activity audit logging.",
    fullDescription: `Game Projects Manager (internally "Cebu Projects Admin Panel") is a PHP MVC admin system for deploying, versioning, and operating a portfolio of game and web projects from a single dashboard. Projects are deployed by uploading a ZIP file; the system automatically extracts it, detects whether the project name already exists, and bumps the semantic version accordingly, keeping every previous release live and addressable at its own URL.

Beyond deployment, it includes a full database manager for browsing tables, running raw SQL queries, and inserting or truncating rows without leaving the admin panel, plus a storyboard module for attaching and organizing supporting documents (PDF, Word, Excel, PowerPoint) per project. Every action taken in the panel, from login attempts to deletions, is written to a rotating activity log with timestamp, IP address, and outcome.

Key features include:
• ZIP-based project deployment with automatic semantic version bumping
• Database manager: browse, search, insert, truncate, drop, and run raw SQL
• Storyboard document management per project (PDF, Word, Excel, PowerPoint)
• Full activity audit log for every admin action, with IP and status
• bcrypt authentication with rate limiting and account lockout
• CSRF protection on every form and hardened session cookies
• Path-traversal and symlink checks on every ZIP upload
• Live dashboard with recent projects and server disk space usage

The panel is the operational backbone for shipping and maintaining a growing library of interactive game and web builds without manual FTP juggling or untracked server changes.`,
    technologies: ["PHP", "MySQL", "JavaScript", "Custom MVC"],
    demoLink: "#",
    codeLink: "#",
    image: `${import.meta.env.BASE_URL}images/projects/project7/project7_img1.webp`,
    category: "Web Development",
    challenges: [
      "Safe ZIP Deployment: Extracting untrusted ZIP uploads safely required explicit checks against path traversal and symlink attacks before any file touched the filesystem.",
      "Semantic Versioning Logic: Automatically detecting whether an upload was a patch, minor, or major update relative to the existing deployed project needed careful diffing logic.",
      "Admin Security: Implementing bcrypt password hashing, rate-limited login attempts, CSRF tokens, and hardened session cookies to production-grade standards for an internally facing tool.",
      "Direct Database Access: Building a safe-enough raw SQL query interface for trusted admins while still guarding against accidental destructive operations."
    ],
    roleAndResponsibilities: [
      "Sole Developer: Designed and built the full admin panel, including the deployment pipeline, database manager, and audit logging system.",
      "Security Implementation: Implemented authentication, CSRF protection, security headers, and upload validation.",
      "DevOps Tooling: Designed the semantic versioning and ZIP deployment workflow used to ship every game and web project.",
      "Documentation: Authored the full setup, deployment, and troubleshooting documentation for the panel."
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img1.webp`,
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img2.webp`,
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img3.webp`,
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img4.webp`,
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img5.webp`,
      `${import.meta.env.BASE_URL}images/projects/project7/project7_img6.webp`
    ]
  },
  {
    id: 5,
    summary: "A growing series of browser-based financial-literacy simulation games on a shared engine.",
    title: "Fitforbanking Game Series",
    description: "A continuously growing series of browser-based financial literacy simulation games built on a shared engine, featuring leaderboards, PDF certificate export, and instructor-led session tools.",
    fullDescription: `The Fitforbanking Game Series is an ongoing collection of browser-based financial literacy simulations built for the Fitforbanking training platform. It started with titles like Bank Management, Money Market Challenge, Managing FX Exposure, Managing Bond Portfolio, Bond Hedging Challenge, and WM Index Tracking, and has continued to grow since, with newer additions such as Corporate Finance, Market Risk Management, Managing Option Portfolios, and Wealth Management - Asset Allocation. Each game turns a specific banking or finance concept into a hands-on, scored simulation instead of a passive lesson.

Every game in the series shares a common PHP and JavaScript engine: a lightweight client-side router, a shared leaderboard API with CSRF protection and rate limiting, idle-session detection for classroom use, and a game-master mode that lets a facilitator run a session for a group of players. Session results can be exported directly to PDF as a shareable certificate or report, and every game persists progress to a MySQL-backed leaderboard. That shared foundation is what lets new titles get added to the series on an ongoing basis rather than being built from scratch each time.

Key features include:
• A continuously expanding library of financial simulation games sharing one underlying engine
• Real-time leaderboard with CSRF-protected, rate-limited submission API
• Game-master mode for instructor-led classroom sessions
• PDF certificate and report export on session completion
• Idle-session detection to gracefully handle inactive players
• Config-driven game data (e.g. balance sheets) for easy content updates
• Responsive, presentation-friendly UI reused consistently across the series

The series turned a stack of financial theory into an engaging, replayable practice tool that training teams use directly in live sessions, backed by a shared engine that keeps adding new games to the lineup fast and low-effort.`,
    technologies: ["HTML5", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    codeLink: "#",
    image: `${import.meta.env.BASE_URL}images/projects/project8/project8_img1.webp`,
    category: "FinTech",
    challenges: [
      "Shared Engine Design: Building a single router, leaderboard API, and UI framework flexible enough to support many different game mechanics without duplicating code per title.",
      "Session Integrity: Implementing CSRF protection, rate limiting, and idle-session detection to keep leaderboard submissions fair and abuse-resistant.",
      "Facilitator Tooling: Designing a game-master mode that lets an instructor run and monitor a live session for a full classroom of players.",
      "Certificate Generation: Integrating client-side PDF export so players could walk away with a shareable record of their results."
    ],
    roleAndResponsibilities: [
      "Sole Developer: Built the shared game engine and continue to build new games in the series, from UI to leaderboard backend.",
      "Backend Development: Implemented the PHP leaderboard API, CSRF protection, rate limiting, and MySQL schema shared across games.",
      "Game Design: Translate banking and finance concepts into scored, replayable game mechanics for each new title.",
      "Facilitator Tools: Built the game-master mode and PDF export used in live, instructor-led training sessions."
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img1.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img2.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img3.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img4.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img5.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img6.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img7.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img8.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img9.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img10.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img11.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img12.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img13.webp`,
      `${import.meta.env.BASE_URL}images/projects/project8/project8_img14.webp`
    ]
  }
];

// Order shown on the site (strongest work first). Detail-page prev/next follows this order too.
const DISPLAY_ORDER = [5, 9, 3, 6, 4, 7, 1, 8, 2];

export const PROJECTS = DISPLAY_ORDER.map((id) => [...PROJECT_DATA, ...GITHUB_PROJECTS].find((p) => p.id === id));
