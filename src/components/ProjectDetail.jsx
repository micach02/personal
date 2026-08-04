import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { IconCheck } from './icons/Icon';
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
          {heading && <p className="fw-bold mb-2" style={{ color: '#1e293b' }}>{heading}</p>}
          <ul className="list-unstyled mb-0">
            {bulletLines.map((line, j) => (
              <li key={j} className="d-flex align-items-start gap-2 mb-2">
                <span className="mt-1 flex-shrink-0" style={{ color: '#1a7a75' }}>
                  <IconCheck size={15} />
                </span>
                <span>{line.replace(/^•\s*/, '')}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <p key={i} className="mb-4">{lines.join(' ')}</p>;
  });
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

  // Project data (this could be moved to a separate data file or context)
  const projects = [
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
      image: `${import.meta.env.BASE_URL}images/projects/project1/project1_img1.png`,
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
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img1.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img2.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img3.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img4.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img5.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img6.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img7.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img8.png`,
        `${import.meta.env.BASE_URL}images/projects/project1/project1_img9.png`
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
      image: `${import.meta.env.BASE_URL}images/projects/project5/project5_img1.png`,
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
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img1.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img2.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img3.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img4.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img5.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img6.png`,
        `${import.meta.env.BASE_URL}images/projects/project5/project5_img7.png`
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
      image: `${import.meta.env.BASE_URL}images/projects/project6/project6_img1.png`,
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
        `${import.meta.env.BASE_URL}images/projects/project6/project6_img1.png`,
        `${import.meta.env.BASE_URL}images/projects/project6/project6_img2.png`,
        `${import.meta.env.BASE_URL}images/projects/project6/project6_img3.png`
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
      image: `${import.meta.env.BASE_URL}images/projects/project7/project7_img1.png`,
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
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img1.png`,
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img2.png`,
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img3.png`,
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img4.png`,
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img5.png`,
        `${import.meta.env.BASE_URL}images/projects/project7/project7_img6.png`
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
      image: `${import.meta.env.BASE_URL}images/projects/project8/project8_img1.png`,
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
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img1.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img2.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img3.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img4.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img5.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img6.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img7.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img8.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img9.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img10.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img11.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img12.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img13.png`,
        `${import.meta.env.BASE_URL}images/projects/project8/project8_img14.png`
      ]
    }
  ];

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
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

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p style={{ color: 'rgba(244, 246, 251, 0.65)' }}>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2 style={{ color: 'var(--text-primary, #f4f6fb)' }}>Project Not Found</h2>
          <p style={{ color: 'rgba(244, 246, 251, 0.65)' }}>The project you're looking for doesn't exist.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Modern Scroll Progress Indicator */}
      <div 
        className="position-fixed top-0 start-0 bg-primary" 
        style={{ 
          height: '3px', 
          width: `${scrollProgress}%`, 
          zIndex: 9999,
          transition: 'width 0.1s ease'
        }}
      />

      {/* Floating Back Button */}
      <button
        className="btn btn-primary position-fixed rounded-circle shadow-lg"
        style={{
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          zIndex: 1050,
          border: 'none',
          background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 100%)',
          backdropFilter: 'blur(10px)'
        }}
        onClick={() => {
          // Navigate to home page and scroll to top
          navigate('/', { replace: true });
          
          // Use setTimeout to ensure the home page is loaded before scrolling
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }}
        title="Back to Home"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      {/* Modern Breadcrumb Navigation with Glass Effect */}
      <nav className="position-relative overflow-hidden" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        marginTop: '74px'
      }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <button 
                  className="btn btn-link p-0 text-decoration-none fw-medium"
                  onClick={() => {
                    // Navigate to home page and scroll to top
                    navigate('/', { replace: true });
                    
                    // Use setTimeout to ensure the home page is loaded before scrolling
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{ color: '#1a7a75' }}
                >
                  <i className="fas fa-home me-2"></i>Home
                </button>
              </li>
              <li className="breadcrumb-item">
                <button 
                  className="btn btn-link p-0 text-decoration-none fw-medium"
                  onClick={() => {
                    // Navigate to home page and scroll to projects after navigation
                    navigate('/', { replace: true });
                    
                    // Use setTimeout to ensure the home page is loaded before scrolling
                    setTimeout(() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }, 100);
                  }}
                  style={{ color: '#1a7a75' }}
                >
                  <i className="fas fa-folder me-2"></i>Projects
                </button>
              </li>
              <li className="breadcrumb-item active fw-bold">{project?.title}</li>
            </ol>
            
            {/* Project Navigation Pills */}
            <div className="d-flex gap-2">
              <button 
                className="btn btn-sm btn-outline-primary rounded-pill"
                onClick={() => {
                  const prevId = Math.max(1, parseInt(id) - 1);
                  navigate(`/project/${prevId}`);
                }}
                disabled={parseInt(id) <= 1}
                style={{ minWidth: '40px' }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                className="btn btn-sm btn-outline-primary rounded-pill"
                onClick={() => {
                  const nextId = Math.min(projects.length, parseInt(id) + 1);
                  navigate(`/project/${nextId}`);
                }}
                disabled={parseInt(id) >= projects.length}
                style={{ minWidth: '40px' }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Ultra Modern Hero Section with Enhanced Visual Effects */}
      <section 
        ref={heroRef}
        className="position-relative overflow-hidden" 
        style={{
          background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 50%, #ff6b35 100%)',
          minHeight: '80vh'
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100">
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.1)',
              top: '10%',
              right: '10%',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.05)',
              bottom: '20%',
              left: '5%',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          />
        </div>

        {/* Glass Morphism Overlay */}
        <div className="position-absolute w-100 h-100" style={{
          background: 'rgba(0,0,0,0.1)',
          backdropFilter: 'blur(2px)'
        }}></div>

        <div className="container position-relative py-5">
          <div className="row align-items-center min-vh-70">
            <div className="col-lg-7">
              <div className="text-white">
                {/* Modern Category Badge */}
                <div className="d-flex align-items-center mb-4">
                  <span 
                    className="badge px-4 py-3 rounded-pill me-3 fw-bold"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <i className="fas fa-tag me-2"></i>
                    {project.category}
                  </span>
                  <div 
                    className="badge px-3 py-2 rounded-pill"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '0.8rem'
                    }}
                  >
                    Portfolio Showcase
                  </div>
                </div>
                
                <h1 
                  className="display-2 fw-bold mb-4"
                  style={{ 
                    textShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}
                >
                  {project.title}
                </h1>
                
                <p 
                  className="lead mb-5" 
                  style={{ 
                    fontSize: '1.4rem', 
                    lineHeight: '1.6',
                    textShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    maxWidth: '600px'
                  }}
                >
                  {project.description}
                </p>
                
                {/* Modern Technology Stack */}
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-code me-2 opacity-75"></i>
                    <small className="text-white-50 fw-medium">Tech Stack</small>
                  </div>
                  <div className="d-flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={tech} 
                        className="badge px-3 py-2 rounded-pill fw-medium"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          animationName: 'slideInFromBottom',
                          animationDuration: '0.5s',
                          animationTimingFunction: 'ease-out',
                          animationFillMode: 'both',
                          animationDelay: `${index * 0.1}s`
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="d-flex flex-wrap gap-4">
                  {project.demoLink !== "#" && (
                    <a 
                      href={project.demoLink} 
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg fw-bold"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                      }}
                    >
                      <i className="fas fa-rocket me-3"></i>
                      Live Demo
                    </a>
                  )}
                  {project.codeLink !== "#" && (
                    <a 
                      href={project.codeLink} 
                      className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className="fab fa-github me-3"></i>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  {/* Enhanced Project Image with Modern Frame */}
                  <div 
                    className="position-relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      padding: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid rounded-4 shadow-lg"
                      style={{ 
                        maxHeight: '450px',
                        width: 'auto',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
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

                        // Simple vector "image" placeholder glyph
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
                    {/* Glowing Border Effect */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                      style={{ 
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Main Content Section */}
      <section id="project-details" className="py-5" style={{ background: 'var(--bg-base, #0a0e17)' }}>
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Enhanced Content */}
            <div className="col-lg-8">
              {/* Enhanced Project Overview */}
              <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out' }}>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle p-4 me-4 shadow-lg position-relative"
                    style={{
                      background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 100%)',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-info-circle fs-4"></i>
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="h2 mb-1 gradient-text fw-bold">Project Overview</h2>
                    <p className="mb-0 fs-6" style={{ color: "rgba(244, 246, 251, 0.65)" }}>Comprehensive project details and insights</p>
                  </div>
                </div>
                <div 
                  className="modern-card overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(26, 122, 117, 0.1)',
                    boxShadow: '0 10px 40px rgba(26, 122, 117, 0.1)'
                  }}
                >
                  {/* Header with gradient */}
                  <div 
                    className="px-5 py-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(26, 122, 117, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%)',
                      borderBottom: '1px solid rgba(26, 122, 117, 0.1)'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-0 fw-bold text-primary">
                        <i className="fas fa-file-alt me-2"></i>
                        Project Description
                      </h5>
                      <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                        <i className="fas fa-star me-1"></i>
                        Featured Project
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div
                      className="position-relative"
                      style={{
                        fontSize: '1.1rem',
                        color: '#5a6c7d',
                        lineHeight: '1.8'
                      }}
                    >
                      {/* Add reading progress indicator */}
                      <div
                        className="position-absolute start-0 top-0"
                        style={{
                          width: '4px',
                          height: '100%',
                          background: 'linear-gradient(to bottom, #1a7a75, #ff6b35)',
                          borderRadius: '2px',
                          opacity: '0.3'
                        }}
                      />
                      <div className="ps-4">
                        {renderFormattedText(project.fullDescription)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out 0.15s both' }}>
                  <div className="d-flex align-items-center mb-4">
                    <div 
                      className="rounded-circle p-4 me-4 shadow-lg position-relative"
                      style={{
                        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                        color: 'white'
                      }}
                    >
                      <i className="fas fa-images fs-4"></i>
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                        style={{
                          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                          animation: 'pulse 2s ease-in-out infinite 0.3s'
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="h2 mb-1 fw-bold" style={{ color: '#28a745' }}>Project Gallery</h2>
                      <p className="mb-0 fs-6" style={{ color: "rgba(244, 246, 251, 0.65)" }}>Visual showcase of project features and interface</p>
                    </div>
                  </div>
                  <div 
                    className="modern-card overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(40, 167, 69, 0.15)',
                      boxShadow: '0 10px 40px rgba(40, 167, 69, 0.1)'
                    }}
                  >
                    {/* Header */}
                    <div 
                      className="px-5 py-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(32, 201, 151, 0.05) 100%)',
                        borderBottom: '1px solid rgba(40, 167, 69, 0.1)'
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 fw-bold" style={{ color: '#28a745' }}>
                          <i className="fas fa-photo-video me-2"></i>
                          Interactive Screenshots
                        </h5>
                        <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                          {project.gallery.length} Images
                        </span>
                      </div>
                    </div>
                    
                    {/* Gallery Content */}
                    <div className="p-5">
                      {/* Main Featured Image */}
                      <div className="mb-4">
                        <div 
                          className="position-relative rounded-4 overflow-hidden shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%)',
                            padding: '20px'
                          }}
                        >
                          <img 
                            src={project.gallery[activeImageIndex]} 
                            alt={`${project.title} - Image ${activeImageIndex + 1}`}
                            className="img-fluid rounded-3 w-100"
                            style={{ 
                              maxHeight: '500px',
                              objectFit: 'cover',
                              transition: 'all 0.5s ease'
                            }}
                            onError={(e) => {
                              const canvas = document.createElement('canvas');
                              canvas.width = 800;
                              canvas.height = 500;
                              const ctx = canvas.getContext('2d');
                              
                              const gradient = ctx.createLinearGradient(0, 0, 800, 500);
                              gradient.addColorStop(0, '#28a745');
                              gradient.addColorStop(1, '#20c997');
                              ctx.fillStyle = gradient;
                              ctx.fillRect(0, 0, 800, 500);

                              // Simple vector "image" placeholder glyph
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
                          
                          {/* Image Navigation Arrows */}
                          {project.gallery.length > 1 && (
                            <>
                              <button 
                                className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle shadow"
                                style={{ 
                                  width: '50px', 
                                  height: '50px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  background: 'rgba(255, 255, 255, 0.9)',
                                  backdropFilter: 'blur(10px)',
                                  border: 'none',
                                  transition: 'all 0.3s ease'
                                }}
                                onClick={() => setActiveImageIndex(prev => 
                                  prev === 0 ? project.gallery.length - 1 : prev - 1
                                )}
                                onMouseEnter={(e) => {
                                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                                  e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                  e.target.style.transform = 'scale(1)';
                                }}
                              >
                                <i className="fas fa-chevron-left text-success"></i>
                              </button>
                              <button 
                                className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle shadow"
                                style={{ 
                                  width: '50px', 
                                  height: '50px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  background: 'rgba(255, 255, 255, 0.9)',
                                  backdropFilter: 'blur(10px)',
                                  border: 'none',
                                  transition: 'all 0.3s ease'
                                }}
                                onClick={() => setActiveImageIndex(prev => 
                                  prev === project.gallery.length - 1 ? 0 : prev + 1
                                )}
                                onMouseEnter={(e) => {
                                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                                  e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                  e.target.style.transform = 'scale(1)';
                                }}
                              >
                                <i className="fas fa-chevron-right text-success"></i>
                              </button>
                            </>
                          )}
                          
                          {/* Image Counter */}
                          <div 
                            className="position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-pill"
                            style={{
                              background: 'rgba(0, 0, 0, 0.7)',
                              color: 'white',
                              fontSize: '0.85rem',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {activeImageIndex + 1} / {project.gallery.length}
                          </div>
                        </div>
                      </div>

                      {/* Thumbnail Gallery */}
                      {project.gallery.length > 1 && (
                        <div className="row g-3">
                          {project.gallery.map((image, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                              <div 
                                className="position-relative rounded-3 overflow-hidden shadow-sm cursor-pointer"
                                style={{
                                  aspectRatio: '16/10',
                                  border: activeImageIndex === index ? '3px solid #28a745' : '2px solid transparent',
                                  transition: 'all 0.3s ease',
                                  background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(32, 201, 151, 0.05) 100%)'
                                }}
                                onClick={() => setActiveImageIndex(index)}
                                onMouseEnter={(e) => {
                                  if (activeImageIndex !== index) {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.borderColor = '#28a745';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (activeImageIndex !== index) {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                  }
                                }}
                              >
                                <img 
                                  src={image} 
                                  alt={`${project.title} - Thumbnail ${index + 1}`}
                                  className="img-fluid w-100 h-100"
                                  style={{ 
                                    objectFit: 'cover',
                                    opacity: activeImageIndex === index ? 1 : 0.7,
                                    transition: 'opacity 0.3s ease'
                                  }}
                                  onError={(e) => {
                                    const canvas = document.createElement('canvas');
                                    canvas.width = 200;
                                    canvas.height = 125;
                                    const ctx = canvas.getContext('2d');
                                    
                                    const gradient = ctx.createLinearGradient(0, 0, 200, 125);
                                    gradient.addColorStop(0, '#28a745');
                                    gradient.addColorStop(1, '#20c997');
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
                                  <div 
                                    className="position-absolute top-50 start-50 translate-middle"
                                    style={{
                                      background: 'rgba(40, 167, 69, 0.8)',
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: '30px',
                                      height: '30px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <i className="fas fa-eye" style={{ fontSize: '12px' }}></i>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Technical Challenges */}
              <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out 0.2s both' }}>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle p-4 me-4 shadow-lg position-relative"
                    style={{
                      background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-cog fs-4"></i>
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                        animation: 'pulse 2s ease-in-out infinite 0.5s'
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="h2 mb-1 fw-bold" style={{ color: '#fd7e14' }}>Technical Challenges</h2>
                    <p className="mb-0 fs-6" style={{ color: "rgba(244, 246, 251, 0.65)" }}>Problems solved and solutions implemented</p>
                  </div>
                </div>
                <div 
                  className="modern-card overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 193, 7, 0.15)',
                    boxShadow: '0 10px 40px rgba(255, 193, 7, 0.1)'
                  }}
                >
                  {/* Header */}
                  <div 
                    className="px-5 py-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(253, 126, 20, 0.05) 100%)',
                      borderBottom: '1px solid rgba(255, 193, 7, 0.1)'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-0 fw-bold" style={{ color: '#fd7e14' }}>
                        <i className="fas fa-brain me-2"></i>
                        Problem-Solving Journey
                      </h5>
                      <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill">
                        {project.challenges.length} Challenges Solved
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="row g-4">
                      {project.challenges.map((challenge, index) => {
                        const [title, description] = challenge.split(': ');
                        return (
                          <div key={index} className="col-12">
                            <div 
                              className="challenge-card p-4 rounded-4 h-100"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, rgba(253, 126, 20, 0.08) 100%)',
                                border: '1px solid rgba(255, 193, 7, 0.2)',
                                transition: 'all 0.3s ease',
                                animationName: 'slideInFromRight',
                                animationDuration: '0.6s',
                                animationTimingFunction: 'ease-out',
                                animationFillMode: 'both',
                                animationDelay: `${index * 0.15}s`,
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 193, 7, 0.2)';
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 193, 7, 0.12) 0%, rgba(253, 126, 20, 0.12) 100%)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, rgba(253, 126, 20, 0.08) 100%)';
                              }}
                            >
                              <div className="d-flex align-items-start">
                                <div 
                                  className="rounded-circle p-3 me-4 flex-shrink-0"
                                  style={{
                                    background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                    color: 'white',
                                    minWidth: '52px',
                                    height: '52px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <i className="fas fa-lightbulb fs-5"></i>
                                </div>
                                <div className="flex-grow-1">
                                  {title && description ? (
                                    <>
                                      <h6 className="fw-bold mb-2" style={{ color: '#fd7e14' }}>
                                        {title}
                                      </h6>
                                      <p className="mb-0 text-muted lh-lg" style={{ fontSize: '0.95rem' }}>
                                        {description}
                                      </p>
                                    </>
                                  ) : (
                                    <span className="fw-medium text-dark lh-lg" style={{ fontSize: '0.95rem' }}>
                                      {challenge}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Role & Responsibilities Section */}
              {project.roleAndResponsibilities && (
                <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out 0.4s both' }}>
                  <div className="d-flex align-items-center mb-4">
                    <div 
                      className="rounded-circle p-4 me-4 shadow-lg position-relative"
                      style={{
                        background: 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
                        color: 'white'
                      }}
                    >
                      <i className="fas fa-user-tie fs-4"></i>
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                        style={{
                          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                          animation: 'pulse 2s ease-in-out infinite 1s'
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="h2 mb-1 fw-bold" style={{ color: '#6f42c1' }}>Role & Responsibilities</h2>
                      <p className="mb-0 fs-6" style={{ color: "rgba(244, 246, 251, 0.65)" }}>Key contributions and professional duties</p>
                    </div>
                  </div>
                  <div 
                    className="modern-card overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(111, 66, 193, 0.15)',
                      boxShadow: '0 10px 40px rgba(111, 66, 193, 0.1)'
                    }}
                  >
                    {/* Header */}
                    <div 
                      className="px-5 py-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(111, 66, 193, 0.05) 0%, rgba(232, 62, 140, 0.05) 100%)',
                        borderBottom: '1px solid rgba(111, 66, 193, 0.1)'
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 fw-bold" style={{ color: '#6f42c1' }}>
                          <i className="fas fa-briefcase me-2"></i>
                          Professional Contributions
                        </h5>
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                          {project.roleAndResponsibilities.length} Key Roles
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="row g-4">
                        {project.roleAndResponsibilities.map((responsibility, index) => {
                          const [role, description] = responsibility.split(': ');
                          return (
                            <div key={index} className="col-12">
                              <div 
                                className="responsibility-card p-4 rounded-4 h-100"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(111, 66, 193, 0.08) 0%, rgba(232, 62, 140, 0.08) 100%)',
                                  border: '1px solid rgba(111, 66, 193, 0.2)',
                                  transition: 'all 0.3s ease',
                                  animationName: 'slideInFromRight',
                                  animationDuration: '0.6s',
                                  animationTimingFunction: 'ease-out',
                                  animationFillMode: 'both',
                                  animationDelay: `${index * 0.15}s`,
                                  cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(111, 66, 193, 0.2)';
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(111, 66, 193, 0.12) 0%, rgba(232, 62, 140, 0.12) 100%)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow = 'none';
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(111, 66, 193, 0.08) 0%, rgba(232, 62, 140, 0.08) 100%)';
                                }}
                              >
                                <div className="d-flex align-items-start">
                                  <div 
                                    className="rounded-circle p-3 me-4 flex-shrink-0"
                                    style={{
                                      background: 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
                                      color: 'white',
                                      minWidth: '52px',
                                      height: '52px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <i className="fas fa-check-circle fs-5"></i>
                                  </div>
                                  <div className="flex-grow-1">
                                    {role && description ? (
                                      <>
                                        <h6 className="fw-bold mb-2" style={{ color: '#6f42c1' }}>
                                          {role}
                                        </h6>
                                        <p className="mb-0 text-muted lh-lg" style={{ fontSize: '0.95rem' }}>
                                          {description}
                                        </p>
                                      </>
                                    ) : (
                                      <span className="fw-medium text-dark lh-lg" style={{ fontSize: '0.95rem' }}>
                                        {responsibility}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ultra Modern Right Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '2rem', animation: 'slideInFromRight 0.8s ease-out 0.3s both' }}>
                {/* Enhanced Project Info Card */}
                <div 
                  className="modern-card mb-4 overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                  }}
                >
                  <div 
                    className="text-white text-center py-5 position-relative"
                    style={{
                      background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 50%, #ff6b35 100%)'
                    }}
                  >
                    {/* Floating Decoration */}
                    <div 
                      className="position-absolute rounded-circle"
                      style={{
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        top: '-20px',
                        right: '-20px',
                        animation: 'float 6s ease-in-out infinite'
                      }}
                    />
                    <div 
                      className="position-absolute rounded-circle"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        bottom: '-10px',
                        left: '-10px',
                        animation: 'float 8s ease-in-out infinite reverse'
                      }}
                    />
                    
                    <div className="position-relative">
                      <i className="fas fa-rocket fs-1 mb-3" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}></i>
                      <h5 className="mb-0 fw-bold">Project Details</h5>
                      <small className="opacity-75">Technical Information</small>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* Modern Category Display */}
                    <div className="mb-4">
                      <label className="fw-bold text-muted small text-uppercase mb-2 d-block">Category</label>
                      <div className="mt-1">
                        <span 
                          className="badge fs-6 px-4 py-2 rounded-pill"
                          style={{
                            background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 100%)',
                            color: 'white'
                          }}
                        >
                          <i className="fas fa-tag me-2"></i>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Technologies Display */}
                    <div className="mb-4">
                      <label className="fw-bold text-muted small text-uppercase mb-3 d-block">
                        Tech Stack ({project.technologies.length})
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={tech} 
                            className="badge px-3 py-2 rounded-pill"
                            style={{
                              background: 'rgba(26, 122, 117, 0.1)',
                              color: '#1a7a75',
                              border: '1px solid rgba(26, 122, 117, 0.2)',
                              transition: 'all 0.3s ease',
                              animationName: 'slideInFromBottom',
                              animationDuration: '0.5s',
                              animationTimingFunction: 'ease-out',
                              animationFillMode: 'both',
                              animationDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = 'rgba(26, 122, 117, 0.2)';
                              e.target.style.transform = 'translateY(-2px) scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'rgba(26, 122, 117, 0.1)';
                              e.target.style.transform = 'translateY(0) scale(1)';
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="d-grid gap-3">
                      {project.demoLink !== "#" && (
                        <a 
                          href={project.demoLink} 
                          className="btn btn-lg fw-bold rounded-pill"
                          style={{
                            background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                            e.target.style.boxShadow = '0 15px 40px rgba(26, 122, 117, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 8px 25px rgba(26, 122, 117, 0.2)';
                          }}
                        >
                          <i className="fas fa-rocket me-3"></i>
                          Launch Demo
                        </a>
                      )}
                      {project.codeLink !== "#" && (
                        <a 
                          href={project.codeLink} 
                          className="btn btn-outline-primary btn-lg fw-bold rounded-pill"
                          style={{
                            borderWidth: '2px',
                            padding: '15px 30px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={(e) => {
                            e.target.style.background = '#1a7a75';
                            e.target.style.borderColor = '#1a7a75';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = '#1a7a75';
                            e.target.style.color = '#1a7a75';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          <i className="fab fa-github me-3"></i>
                          View Source
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

      {/* Ultra Modern Call to Action Section */}
      <section 
        className="position-relative py-5 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a7a75 0%, #ff6b35 50%, #ff6b35 100%)',
          marginTop: '5rem'
        }}
      >
        {/* Background Animation Elements */}
        <div className="position-absolute w-100 h-100">
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.1)',
              top: '20%',
              right: '10%',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.05)',
              bottom: '30%',
              left: '5%',
              animation: 'float 10s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="text-white">
                <div 
                  className="mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '50px',
                    padding: '15px 30px',
                    display: 'inline-block',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <i className="fas fa-handshake me-2"></i>
                  Let's Collaborate
                </div>
                
                <h3 
                  className="display-5 fw-bold mb-4"
                  style={{ 
                    textShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    letterSpacing: '-0.02em' 
                  }}
                >
                  Ready to Build Something Amazing?
                </h3>
                
                <p 
                  className="fs-4 mb-5 opacity-90"
                  style={{ 
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    textShadow: '0 4px 16px rgba(0,0,0,0.2)'
                  }}
                >
                  I'm passionate about creating innovative solutions and collaborating with talented teams to bring ideas to life.
                </p>
                
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                  <button 
                    className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: 'none',
                      color: '#1a7a75',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => {
                      // Navigate to home page and scroll to contact after navigation
                      navigate('/', { replace: true });
                      
                      // Use setTimeout to ensure the home page is loaded before scrolling
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 100);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px) scale(1.05)';
                      e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)';
                      e.target.style.background = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                    }}
                  >
                    <i className="fas fa-paper-plane me-3"></i>
                    Start a Conversation
                  </button>
                  
                  <button 
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => {
                      // Navigate to home page and scroll to projects after navigation
                      navigate('/', { replace: true });
                      
                      // Use setTimeout to ensure the home page is loaded before scrolling
                      setTimeout(() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                          projectsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 100);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    <i className="fas fa-rocket me-3"></i>
                    Explore More Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom styles for consistency and enhanced UX */}
      <style>{`
        /* Custom scrollbar for consistency */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1a7a75, #ff6b35);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #5a6fd8, #6a4190);
        }
        
        /* Enhanced animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(255,255,255,0.5); 
            transform: scale(1);
          }
          50% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.8); 
            transform: scale(1.05);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Enhanced utility classes */
        .gradient-text {
          background: linear-gradient(135deg, #1a7a75 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .modern-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        }
        
        .challenge-card, .responsibility-card {
          position: relative;
          overflow: hidden;
        }
        
        .challenge-card::before, .responsibility-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        
        .challenge-card:hover::before, .responsibility-card:hover::before {
          left: 100%;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(26, 122, 117, 0.3), transparent);
          margin: 1.5rem 0;
        }
        
        /* Improved mobile responsiveness */
        @media (max-width: 768px) {
          .modern-card {
            margin-left: -15px;
            margin-right: -15px;
            border-radius: 16px !important;
          }
          
          .challenge-card, .responsibility-card {
            padding: 1rem !important;
          }
          
          .d-flex.align-items-center.mb-4 {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1rem;
          }
          
          .d-flex.align-items-center.mb-4 > div:first-child {
            align-self: center;
          }
          
          .d-flex.align-items-center.mb-4 > div:last-child {
            text-align: center;
            width: 100%;
          }
        }
        
        /* Enhanced focus states for accessibility */
        .challenge-card:focus-within,
        .responsibility-card:focus-within {
          outline: 2px solid #1a7a75;
          outline-offset: 2px;
        }
        
        /* Loading states */
        .loading-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

export default ProjectDetail;
