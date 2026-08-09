import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { IconCheck, IconCheckCircle, IconFileText, IconImage, IconTarget, IconBriefcase, IconLightbulb, IconRocket } from './icons/Icon';
import '../styles/project-detail.css';

// Splits a description string (plain paragraphs plus "• " bulleted blocks,
// separated by blank lines) into properly formatted paragraphs and lists.
function renderFormattedText(text) {
  if (!text) return null;
  const blocks = text.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);

    // A block can be a lone list, or a short heading line followed by a list
    // (e.g. "Key features include:" immediately above the "• " lines).
    let heading = null;
    let bulletLines = lines;
    if (lines.length > 1 && !lines[0].startsWith('•') && lines.slice(1).every((l) => l.startsWith('•'))) {
      heading = lines[0];
      bulletLines = lines.slice(1);
    }
    const isList = bulletLines.length > 0 && bulletLines.every((l) => l.startsWith('•'));

    if (isList) {
      return (
        <div key={i} className="mb-4">
          {heading && <p className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>{heading}</p>}
          <ul className="list-unstyled mb-0">
            {bulletLines.map((line, j) => (
              <li key={j} className="d-flex align-items-start gap-2 mb-2">
                <span className="mt-1 flex-shrink-0" style={{ color: 'var(--teal-300)' }}>
                  <IconCheck size={15} />
                </span>
                <span className="section-subtitle">{line.replace(/^•\s*/, '')}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <p key={i} className="mb-4 section-subtitle" style={{ lineHeight: 1.8 }}>{lines.join(' ')}</p>;
  });
}

// Static project data, kept at module scope so it isn't recreated on every render
// (and so the effect below that reads it doesn't need it in its dependency array).
const PROJECTS = [
  {
    id: 1,
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
      "Lead Frontend Developer: Designed and implemented responsive user interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
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
    title: "Personal Portfolio Website",
    description: "A modern React-based portfolio website showcasing my professional skills, projects, and career journey with interactive components and responsive design.",
    fullDescription: `This personal portfolio website represents my journey as a full-stack developer, originally crafted from scratch using fundamental web technologies (HTML5, CSS3, and JavaScript) before being completely reimagined and rebuilt with React and modern development frameworks. The transformation showcases my evolution as a developer and serves as a comprehensive digital showcase of my professional skills, innovative projects, and career progression.

Built with React, Vite, Bootstrap, and AOS (Animate On Scroll), the portfolio features a sophisticated component-based architecture that ensures maintainability and scalability. The design emphasizes clean aesthetics, smooth animations, and user experience best practices.

Key features include:
• Modern React component architecture with reusable components
• Responsive design optimized for desktop, tablet, and mobile devices
• Interactive project showcase with detailed project pages
• Smooth scroll animations and micro-interactions using AOS library
• Professional sections: Hero, About, Skills, Experience, Education, Projects, and Contact
• EmailJS integration for functional contact form
• Dynamic project filtering and categorization
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

// A titled glass-card section with a colored icon badge — the recurring shell used
// for Overview / Gallery / Challenges / Role & Responsibilities below.
function DetailSection({ icon, color, title, subtitle, badge, children }) {
  const Icon = icon;
  return (
    <div className="mb-5" data-aos="fade-up">
      <div className="d-flex align-items-center gap-3 mb-4 flex-wrap detail-section-header">
        <div className="detail-icon-circle" style={{ background: `${color}1f`, border: `1.5px solid ${color}55`, color }}>
          <Icon size={24} />
        </div>
        <div className="flex-grow-1">
          <h2 className="section-heading mb-1" style={{ fontSize: '1.6rem' }}>{title}</h2>
          <p className="section-subtitle mb-0">{subtitle}</p>
        </div>
        {badge && (
          <span className="pill-tag" style={{ borderColor: `${color}55`, color, background: `${color}15` }}>
            {badge}
          </span>
        )}
      </div>
      <div className="glass-card p-4 p-lg-5">{children}</div>
    </div>
  );
}

// A single challenge / responsibility card. Hover lift comes from CSS (.detail-card:hover)
// instead of per-element onMouseEnter/onMouseLeave DOM mutation.
function DetailCard({ icon, color, title, description }) {
  const Icon = icon;
  return (
    <div className="detail-card p-4 rounded-4 h-100" style={{ '--accent': color, background: `${color}0d`, borderColor: `${color}30` }}>
      <div className="d-flex align-items-start gap-3">
        <div className="detail-card-icon flex-shrink-0" style={{ background: color }}>
          <Icon size={18} />
        </div>
        <div className="flex-grow-1">
          {title ? (
            <>
              <h6 className="fw-bold mb-2" style={{ color }}>{title}</h6>
              <p className="mb-0 section-subtitle" style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>{description}</p>
            </>
          ) : (
            <span className="section-subtitle" style={{ fontSize: '0.93rem' }}>{description}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  // Handle scroll progress for modern scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const foundProject = PROJECTS.find(p => p.id === parseInt(id));
    setProject(foundProject);
    setIsLoading(false);

    // Smooth scroll to top with modern animation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add entrance animation to hero section
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heroRef.current.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, [id]);

  const goHome = () => {
    navigate('/', { replace: true });
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const goToSection = (sectionId) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
        <div className="text-center">
          <div className="spinner-border mb-3" role="status" style={{ width: '3rem', height: '3rem', color: 'var(--teal-300)' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="section-subtitle">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container py-5" style={{ minHeight: '70vh', background: 'var(--bg-base)' }}>
        <div className="text-center py-5">
          <h2 className="section-heading mb-3">Project Not Found</h2>
          <p className="section-subtitle mb-4">The project you&rsquo;re looking for doesn&rsquo;t exist.</p>
          <button className="btn-modern-primary border-0" onClick={goHome}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Scroll progress indicator */}
      <div
        className="position-fixed top-0 start-0"
        style={{
          height: '3px',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          background: 'var(--brand-gradient)',
          transition: 'width 0.1s ease'
        }}
      />

      {/* Floating back button */}
      <button
        className="back-to-home-fab"
        onClick={goHome}
        title="Back to Home"
        aria-label="Back to Home"
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      {/* Breadcrumb navigation */}
      <nav className="project-detail-nav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3 flex-wrap gap-2">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <button className="breadcrumb-link" onClick={goHome}>
                  <i className="fas fa-home me-2"></i>Home
                </button>
              </li>
              <li className="breadcrumb-item">
                <button className="breadcrumb-link" onClick={() => goToSection('projects')}>
                  <i className="fas fa-folder me-2"></i>Projects
                </button>
              </li>
              <li className="breadcrumb-item active fw-bold" aria-current="page" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </li>
            </ol>

            <div className="d-flex gap-2">
              <button
                className="nav-pill-btn"
                onClick={() => navigate(`/project/${Math.max(1, parseInt(id) - 1)}`)}
                disabled={parseInt(id) <= 1}
                aria-label="Previous project"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="nav-pill-btn"
                onClick={() => navigate(`/project/${Math.min(PROJECTS.length, parseInt(id) + 1)}`)}
                disabled={parseInt(id) >= PROJECTS.length}
                aria-label="Next project"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section ref={heroRef} className="project-hero position-relative overflow-hidden">
        <div className="project-hero-decor position-absolute w-100 h-100">
          <div className="hero-decor-circle hero-decor-circle-1" />
          <div className="hero-decor-circle hero-decor-circle-2" />
        </div>
        <div className="position-absolute w-100 h-100" style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(2px)' }} />

        <div className="container position-relative py-5">
          <div className="row align-items-center min-vh-70">
            <div className="col-lg-7">
              <div className="text-white">
                <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                  <span className="hero-badge">
                    <i className="fas fa-tag me-2"></i>{project.category}
                  </span>
                  <span className="hero-badge hero-badge-subtle">Portfolio Showcase</span>
                </div>

                <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.3)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {project.title}
                </h1>

                <p className="lead mb-5" style={{ fontSize: '1.35rem', lineHeight: 1.6, textShadow: '0 4px 16px rgba(0,0,0,0.2)', maxWidth: '600px', color: 'rgba(255,255,255,0.92)' }}>
                  {project.description}
                </p>

                <div className="mb-5">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-code me-2 opacity-75"></i>
                    <small className="text-white-50 fw-medium text-uppercase" style={{ letterSpacing: '0.08em' }}>Tech Stack</small>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="hero-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} className="btn-modern-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-rocket"></i>Live Demo
                    </a>
                  )}
                  {project.codeLink !== "#" && (
                    <a href={project.codeLink} className="hero-btn-outline" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="text-center">
                <div className="project-hero-image-frame d-inline-block position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    fetchPriority="high"
                    decoding="async"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ maxHeight: '450px', width: 'auto' }}
                    onError={(e) => {
                      const canvas = document.createElement('canvas');
                      canvas.width = 400;
                      canvas.height = 300;
                      const ctx = canvas.getContext('2d');
                      const gradient = ctx.createLinearGradient(0, 0, 400, 300);
                      gradient.addColorStop(0, '#1a7a75');
                      gradient.addColorStop(1, '#ff6b35');
                      ctx.fillStyle = gradient;
                      ctx.fillRect(0, 0, 400, 300);
                      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
                      ctx.lineWidth = 4;
                      ctx.lineJoin = 'round';
                      ctx.lineCap = 'round';
                      ctx.strokeRect(150, 105, 100, 75);
                      ctx.beginPath();
                      ctx.arc(172, 128, 6, 0, Math.PI * 2);
                      ctx.stroke();
                      ctx.beginPath();
                      ctx.moveTo(160, 172);
                      ctx.lineTo(190, 142);
                      ctx.lineTo(210, 162);
                      ctx.lineTo(240, 132);
                      ctx.lineTo(240, 180);
                      ctx.lineTo(160, 180);
                      ctx.closePath();
                      ctx.stroke();
                      e.target.src = canvas.toDataURL();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-5" style={{ background: 'var(--bg-base)' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <DetailSection
                icon={IconFileText}
                color="var(--teal-300)"
                title="Project Overview"
                subtitle="Comprehensive project details and insights"
                badge="Featured Project"
              >
                {renderFormattedText(project.fullDescription)}
              </DetailSection>

              {project.gallery && project.gallery.length > 0 && (
                <DetailSection
                  icon={IconImage}
                  color="var(--orange-300)"
                  title="Project Gallery"
                  subtitle="Visual showcase of project features and interface"
                  badge={`${project.gallery.length} Images`}
                >
                  <div className="gallery-main-frame position-relative rounded-4 overflow-hidden mb-4">
                    <img
                      src={project.gallery[activeImageIndex]}
                      alt={`${project.title} - Image ${activeImageIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="img-fluid rounded-3 w-100"
                      style={{ maxHeight: '500px', objectFit: 'cover' }}
                      onError={(e) => {
                        const canvas = document.createElement('canvas');
                        canvas.width = 800;
                        canvas.height = 500;
                        const ctx = canvas.getContext('2d');
                        const gradient = ctx.createLinearGradient(0, 0, 800, 500);
                        gradient.addColorStop(0, '#1a7a75');
                        gradient.addColorStop(1, '#ff6b35');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, 800, 500);
                        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
                        ctx.lineWidth = 7;
                        ctx.lineJoin = 'round';
                        ctx.lineCap = 'round';
                        ctx.strokeRect(300, 200, 200, 150);
                        ctx.beginPath();
                        ctx.arc(344, 246, 12, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(320, 335);
                        ctx.lineTo(380, 275);
                        ctx.lineTo(420, 315);
                        ctx.lineTo(480, 255);
                        ctx.lineTo(480, 350);
                        ctx.lineTo(320, 350);
                        ctx.closePath();
                        ctx.stroke();
                        e.target.src = canvas.toDataURL();
                      }}
                    />

                    {project.gallery.length > 1 && (
                      <>
                        <button
                          className="gallery-nav-btn gallery-nav-prev"
                          onClick={() => setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                          aria-label="Previous image"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                          className="gallery-nav-btn gallery-nav-next"
                          onClick={() => setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                          aria-label="Next image"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </>
                    )}

                    <div className="gallery-counter">
                      {activeImageIndex + 1} / {project.gallery.length}
                    </div>
                  </div>

                  {project.gallery.length > 1 && (
                    <div className="row g-3">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                          <button
                            type="button"
                            className={`gallery-thumb ${activeImageIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`View image ${index + 1}`}
                          >
                            <img
                              src={image}
                              alt={`${project.title} - Thumbnail ${index + 1}`}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                const canvas = document.createElement('canvas');
                                canvas.width = 200;
                                canvas.height = 125;
                                const ctx = canvas.getContext('2d');
                                const gradient = ctx.createLinearGradient(0, 0, 200, 125);
                                gradient.addColorStop(0, '#1a7a75');
                                gradient.addColorStop(1, '#ff6b35');
                                ctx.fillStyle = gradient;
                                ctx.fillRect(0, 0, 200, 125);
                                ctx.font = '24px Arial';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = 'white';
                                ctx.fillText(`${index + 1}`, 100, 62.5);
                                e.target.src = canvas.toDataURL();
                              }}
                            />
                            {activeImageIndex === index && (
                              <span className="gallery-thumb-check">
                                <IconCheck size={13} />
                              </span>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </DetailSection>
              )}

              <DetailSection
                icon={IconTarget}
                color="var(--orange-300)"
                title="Technical Challenges"
                subtitle="Problems solved and solutions implemented"
                badge={`${project.challenges.length} Challenges Solved`}
              >
                <div className="row g-4">
                  {project.challenges.map((challenge, index) => {
                    const [title, description] = challenge.split(': ');
                    return (
                      <div key={index} className="col-12">
                        <DetailCard icon={IconLightbulb} color="var(--orange-300)" title={title} description={description || challenge} />
                      </div>
                    );
                  })}
                </div>
              </DetailSection>

              {project.roleAndResponsibilities && (
                <DetailSection
                  icon={IconBriefcase}
                  color="var(--teal-300)"
                  title="Role & Responsibilities"
                  subtitle="Key contributions and professional duties"
                  badge={`${project.roleAndResponsibilities.length} Key Roles`}
                >
                  <div className="row g-4">
                    {project.roleAndResponsibilities.map((responsibility, index) => {
                      const [role, description] = responsibility.split(': ');
                      return (
                        <div key={index} className="col-12">
                          <DetailCard icon={IconCheckCircle} color="var(--teal-300)" title={role} description={description || responsibility} />
                        </div>
                      );
                    })}
                  </div>
                </DetailSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '2rem' }}>
                <div className="glass-card overflow-hidden mb-4">
                  <div className="text-white text-center py-5 position-relative overflow-hidden" style={{ background: 'var(--brand-gradient)' }}>
                    <div className="hero-decor-circle hero-decor-circle-1" style={{ width: 100, height: 100, top: -20, right: -20 }} />
                    <div className="hero-decor-circle hero-decor-circle-2" style={{ width: 60, height: 60, bottom: -10, left: -10 }} />
                    <div className="position-relative">
                      <IconRocket size={34} className="mb-3" />
                      <h5 className="mb-0 fw-bold">Project Details</h5>
                      <small className="opacity-75">Technical Information</small>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-4">
                      <label className="fw-bold small text-uppercase mb-2 d-block section-subtitle" style={{ letterSpacing: '0.06em' }}>Category</label>
                      <span className="pill-tag" style={{ background: 'var(--brand-gradient)', color: '#fff', border: 'none' }}>
                        <i className="fas fa-tag me-2"></i>{project.category}
                      </span>
                    </div>

                    <div className="mb-4">
                      <label className="fw-bold small text-uppercase mb-3 d-block section-subtitle" style={{ letterSpacing: '0.06em' }}>
                        Tech Stack ({project.technologies.length})
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="pill-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="d-grid gap-3">
                      {project.demoLink !== "#" && (
                        <a href={project.demoLink} className="btn-modern-primary justify-content-center border-0" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-rocket"></i>Launch Demo
                        </a>
                      )}
                      {project.codeLink !== "#" && (
                        <a href={project.codeLink} className="btn-modern-outline justify-content-center" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>View Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="project-cta position-relative overflow-hidden">
        <div className="project-hero-decor position-absolute w-100 h-100">
          <div className="hero-decor-circle hero-decor-circle-1" />
          <div className="hero-decor-circle hero-decor-circle-2" />
        </div>

        <div className="container position-relative py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="text-white">
                <span className="hero-badge hero-badge-subtle mb-4 d-inline-block">
                  <i className="fas fa-handshake me-2"></i>Let&rsquo;s Collaborate
                </span>

                <h3 className="display-5 fw-bold mb-4" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.3)', letterSpacing: '-0.02em' }}>
                  Ready to Build Something Amazing?
                </h3>

                <p className="fs-5 mb-5" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, textShadow: '0 4px 16px rgba(0,0,0,0.2)', color: 'rgba(255,255,255,0.92)' }}>
                  I&rsquo;m passionate about creating innovative solutions and collaborating with talented teams to bring ideas to life.
                </p>

                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <button className="cta-btn-light" onClick={() => goToSection('contact')}>
                    <i className="fas fa-paper-plane"></i>Start a Conversation
                  </button>
                  <button className="hero-btn-outline" onClick={() => goToSection('projects')}>
                    <i className="fas fa-rocket"></i>Explore More Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
