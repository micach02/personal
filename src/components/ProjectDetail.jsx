import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../styles/project-detail.css';

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
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EFinancial Learning Platform%3C/text%3E%3C/svg%3E",
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
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EFinancial Dashboard 1%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EFinancial Dashboard 2%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EFinancial Dashboard 3%3C/text%3E%3C/svg%3E"
      ]
    },
    {
      id: 2,
      title: "Banking Simulation App",
      description: "Interactive educational tool for learning banking concepts through hands-on simulation with virtual accounts and real-world scenarios.",
      fullDescription: `The Banking Simulation App is an interactive educational tool designed to teach users about core banking concepts and financial management through hands-on simulation. Users can create virtual accounts, perform transactions, and explore real-world banking scenarios in a safe, risk-free environment.

Built with HTML5, CSS3, Bootstrap, JavaScript, Chart.js, and PHP, the app emphasizes responsive design, security, and user-friendly workflows. It features modules for account management, transaction processing, loan calculations, analytics dashboards, and customizable scenarios, making it ideal for both self-learners and classroom use.

Key features include:
• Virtual account creation and management
• Real-time transaction processing simulation
• Loan calculation and approval workflows
• Interactive financial analytics dashboards
• Customizable banking scenarios for different learning levels
• Progress tracking and performance analytics
• Multi-user support for classroom environments
• Secure, risk-free learning environment
• Responsive design for various devices
• Comprehensive reporting and assessment tools

The platform provides an engaging way to understand banking operations, financial planning, and risk management concepts without the complexity of real financial systems.`,
      technologies: ["PHP", "JavaScript", "Bootstrap", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2328a745'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EBanking Simulation App%3C/text%3E%3C/svg%3E",
      category: "FinTech",
      challenges: [
        "Data Consistency & Validation: Ensuring all simulated transactions and account operations maintained data integrity and reflected real-world banking logic.",
        "Security Considerations: Implementing secure authentication and protecting sensitive user data, even in a simulated environment, to prevent misuse.",
        "Responsive Design: Making the application fully functional and visually appealing across a wide range of devices and screen sizes.",
        "Complex Feature Integration: Developing features like loan calculations, analytics dashboards, and customizable scenarios required careful planning and modular code structure.",
        "User Experience: Designing intuitive workflows for banking operations and providing clear feedback to users during simulations.",
        "Testing & Debugging: Thoroughly testing all features to identify and resolve bugs, especially in transaction logic and user progress tracking."
      ],
      roleAndResponsibilities: [
        "Full Stack Developer: Designed and implemented both the frontend and backend of the Banking Simulation App using HTML5, CSS3, Bootstrap, JavaScript, and PHP.",
        "UI/UX Design Collaboration: Contributed to the UI/UX design process, helping to create an intuitive, accessible, and responsive interface for a seamless user experience across devices.",
        "Feature Development: Developed core features such as virtual account management, transaction simulation, and analytics dashboard.",
        "Testing & Deployment: Conducted thorough testing, fixed bugs, and deployed the application for educational use."
      ],
      gallery: [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2328a745'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EBanking Interface 1%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2328a745'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EBanking Interface 2%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2328a745'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EBanking Interface 3%3C/text%3E%3C/svg%3E"
      ]
    },
    {
      id: 3,
      title: "Wealth Management App",
      description: "Comprehensive platform for tracking, analyzing, and optimizing personal finances and investments with interactive dashboards and analytics.",
      fullDescription: `The Wealth Management App is a comprehensive platform designed to help users track, analyze, and optimize their personal finances and investments. It empowers individuals to set financial goals, monitor portfolios, and make informed decisions through interactive dashboards and analytics.

Built with HTML5, CSS3, Bootstrap, JavaScript, Chart.js, and PHP, the app features secure authentication, real-time portfolio tracking, goal setting, asset allocation analysis, and personalized insights. Its responsive design ensures a seamless experience across devices, making it ideal for both novice and experienced investors.

Key features include:
• Comprehensive portfolio tracking across multiple asset classes
• Real-time market data integration and price updates
• Interactive financial analytics dashboards
• Goal-based investment planning and tracking
• Asset allocation analysis and optimization recommendations
• Risk assessment and diversification tools
• Performance benchmarking against market indices
• Personalized financial insights and recommendations
• Secure user authentication and data protection
• Responsive design for seamless cross-device experience
• Educational resources for informed decision-making
• Tax optimization strategies and planning tools

The platform combines powerful analytics with user-friendly interfaces, making complex financial concepts accessible to users of all experience levels while providing the depth needed for sophisticated investment management.`,
      technologies: ["PHP", "JavaScript", "jQuery", "Bootstrap", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2317a2b8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EReal Estate CRM%3C/text%3E%3C/svg%3E",
      category: "FinTech",
      challenges: [
        "Real-Time Data Integration: Integrating live market data and updating user portfolios in real time for accurate financial tracking.",
        "Security & Privacy: Ensuring secure authentication and protecting sensitive financial data from unauthorized access.",
        "Responsive Design: Delivering a seamless and visually appealing experience across desktops, tablets, and smartphones.",
        "Complex Analytics: Building interactive dashboards for asset allocation, risk analysis, and goal progress tracking.",
        "User Engagement: Designing features that motivate users to set, track, and achieve their financial goals.",
        "Testing & Debugging: Ensuring accuracy in financial calculations and reliability in data visualization components."
      ],
      roleAndResponsibilities: [
        "Full Stack Developer: Designed and implemented both the frontend and backend of the Wealth Management App using HTML5, CSS3, Bootstrap, JavaScript, and PHP.",
        "UI/UX Design Collaboration: Collaborated on creating an intuitive, accessible, and visually appealing interface for effortless financial management.",
        "Feature Development: Developed modules for portfolio tracking, goal setting, asset allocation, and interactive analytics dashboards.",
        "Testing & Deployment: Conducted comprehensive testing, resolved bugs, and deployed the application for end-user access."
      ],
      gallery: [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2317a2b8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3ECRM Dashboard 1%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2317a2b8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3ECRM Dashboard 2%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2317a2b8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3ECRM Dashboard 3%3C/text%3E%3C/svg%3E"
      ]
    },
    {
      id: 4,
      title: "3D Avatar Animation",
      description: "A lifelike 3D avatar speaker designed for presentations and e-learning content with synchronized mouth and facial movements.",
      fullDescription: `This project showcases a lifelike 3D avatar speaker designed for presentations and e-learning content. The avatar is animated to synchronize mouth and facial movements with audio, providing a natural and engaging user experience.

The project utilizes Blender for 3D modeling and animation, and NVIDIA Omniverse for real-time rendering and integration into web-based platforms.

Key features include:
• Realistic 3D character modeling optimized for speaking presentations
• Advanced facial rigging for natural mouth and expression movements
• Audio-synchronized lip-sync animation system
• Real-time rendering capabilities for web integration
• Smooth facial expressions that enhance communication
• Professional presentation-ready avatar design
• Cross-platform compatibility for various e-learning platforms
• Optimized performance for real-time applications

The avatar system is specifically designed for educational and professional use cases, making digital presentations more engaging and personal. The integration with NVIDIA Omniverse enables seamless deployment across different platforms while maintaining high visual quality.`,
      technologies: ["Blender", "NVIDIA Omniverse"],
      demoLink: "#",
      codeLink: "#",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23fd7e14'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EResponsive Web Design%3C/text%3E%3C/svg%3E",
      category: "Animation",
      challenges: [
        "Realistic Lip Sync: Achieving accurate synchronization between the avatar's mouth movements and audio required fine-tuning animation curves and experimenting with different speech-to-animation tools.",
        "Facial Expression Complexity: Creating natural and expressive facial animations involved detailed rigging and careful keyframing to avoid uncanny or robotic results.",
        "Performance Optimization: Ensuring smooth real-time rendering in web environments demanded optimization of 3D assets and efficient integration with NVIDIA Omniverse.",
        "Cross-Platform Compatibility: Integrating the animated avatar into various presentation platforms required addressing differences in browser and device support."
      ],
      roleAndResponsibilities: [
        "3D Modeling & Animation: Designed and rigged the avatar using Blender, ensuring lifelike facial and mouth movements.",
        "Speech Synchronization: Implemented audio-driven animation to match speech with avatar expressions.",
        "Integration: Embedded the animated avatar into web-based presentations using NVIDIA Omniverse and custom scripts."
      ],
      gallery: [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23fd7e14'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EResponsive Design 1%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23fd7e14'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EResponsive Design 2%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23fd7e14'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3EResponsive Design 3%3C/text%3E%3C/svg%3E"
      ]
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "A modern React-based portfolio website showcasing my professional skills, projects, and career journey with interactive components and responsive design.",
      fullDescription: `This is my personal portfolio website, built from scratch using React and modern web technologies to showcase my professional skills, projects, and career journey. The website serves as a comprehensive digital presence that demonstrates my expertise in full-stack development, UI/UX design, and modern web development practices.

Built with React, Vite, Bootstrap, and AOS (Animate On Scroll), the portfolio features a component-based architecture that ensures maintainability and scalability. The design emphasizes clean aesthetics, smooth animations, and user experience best practices.

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
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmY0MmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFQSSBJbnRlZ3JhdGlvbiBUb29sczwvdGV4dD48L3N2Zz4=",
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
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmY0MmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFQSSBUb29scyAxPC90ZXh0Pjwvc3ZnPg==",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmY0MmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFQSSBUb29scyAyPC90ZXh0Pjwvc3ZnPg==",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmY0MmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFQSSBUb29scyAzPC90ZXh0Pjwvc3ZnPg=="
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
          <p className="text-muted">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Project Not Found</h2>
          <p className="text-muted">The project you're looking for doesn't exist.</p>
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backdropFilter: 'blur(10px)'
        }}
        onClick={() => navigate('/')}
        title="Back to Home"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      {/* Modern Breadcrumb Navigation with Glass Effect */}
      <nav className="position-relative overflow-hidden" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <button 
                  className="btn btn-link p-0 text-decoration-none fw-medium"
                  onClick={() => navigate('/')}
                  style={{ color: '#667eea' }}
                >
                  <i className="fas fa-home me-2"></i>Home
                </button>
              </li>
              <li className="breadcrumb-item">
                <button 
                  className="btn btn-link p-0 text-decoration-none fw-medium"
                  onClick={() => navigate('/#projects')}
                  style={{ color: '#667eea' }}
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
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
                        gradient.addColorStop(0, '#667eea');
                        gradient.addColorStop(1, '#764ba2');
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, 400, 300);
                        
                        ctx.font = '64px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = 'white';
                        ctx.fillText('🚀', 200, 150);
                        
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
      <section id="project-details" className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Enhanced Content */}
            <div className="col-lg-8">
              {/* Modern Project Overview */}
              <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out' }}>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle p-4 me-4 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-info-circle fs-4"></i>
                  </div>
                  <div>
                    <h2 className="h2 mb-1 gradient-text">Project Overview</h2>
                    <p className="text-muted mb-0 mt-3">Comprehensive project details and insights</p>
                  </div>
                </div>
                <div 
                  className="modern-card p-5"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div 
                    className="text-muted lh-lg" 
                    style={{ 
                      whiteSpace: 'pre-line',
                      fontSize: '1.1rem',
                      color: '#5a6c7d'
                    }}
                  >
                    {project.fullDescription}
                  </div>
                </div>
              </div>

              {/* Modern Technical Challenges */}
              <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out 0.2s both' }}>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle p-4 me-4 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-cog fs-4"></i>
                  </div>
                  <div>
                    <h2 className="h2 mb-1" style={{ color: '#ffc107' }}>Technical Challenges</h2>
                    <p className="text-muted mb-0">Problems solved and solutions implemented</p>
                  </div>
                </div>
                <div 
                  className="modern-card p-5"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 193, 7, 0.1)'
                  }}
                >
                  <div className="row g-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="col-12">
                        <div 
                          className="d-flex align-items-start p-4 rounded-4"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(253, 126, 20, 0.1) 100%)',
                            border: '1px solid rgba(255, 193, 7, 0.2)',
                            animationName: 'slideInFromRight',
                            animationDuration: '0.6s',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'both',
                            animationDelay: `${index * 0.15}s`
                          }}
                        >
                          <div 
                            className="rounded-circle p-3 me-3 flex-shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                              color: 'white'
                            }}
                          >
                            <i className="fas fa-lightbulb"></i>
                          </div>
                          <div>
                            <span className="fw-medium" style={{ color: '#2c3e50' }}>{challenge}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Role & Responsibilities Section */}
              {project.roleAndResponsibilities && (
                <div className="mb-5" style={{ animation: 'slideInFromLeft 0.8s ease-out 0.4s both' }}>
                  <div className="d-flex align-items-center mb-4">
                    <div 
                      className="rounded-circle p-4 me-4 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
                        color: 'white'
                      }}
                    >
                      <i className="fas fa-user-tie fs-4"></i>
                    </div>
                    <div>
                      <h2 className="h2 mb-1" style={{ color: '#6f42c1' }}>Role & Responsibilities</h2>
                      <p className="text-muted mb-0">Key contributions and professional duties</p>
                    </div>
                  </div>
                  <div 
                    className="modern-card p-5"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(111, 66, 193, 0.1)'
                    }}
                  >
                    <div className="row g-4">
                      {project.roleAndResponsibilities.map((responsibility, index) => (
                        <div key={index} className="col-12">
                          <div 
                            className="d-flex align-items-start p-4 rounded-4"
                            style={{
                              background: 'linear-gradient(135deg, rgba(111, 66, 193, 0.1) 0%, rgba(232, 62, 140, 0.1) 100%)',
                              border: '1px solid rgba(111, 66, 193, 0.2)',
                              animationName: 'slideInFromRight',
                              animationDuration: '0.6s',
                              animationTimingFunction: 'ease-out',
                              animationFillMode: 'both',
                              animationDelay: `${index * 0.15}s`
                            }}
                          >
                            <div 
                              className="rounded-circle p-3 me-3 flex-shrink-0"
                              style={{
                                background: 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
                                color: 'white',
                                minWidth: '48px'
                              }}
                            >
                              <i className="fas fa-arrow-right"></i>
                            </div>
                            <div>
                              <span className="fw-medium" style={{ color: '#2c3e50' }}>{responsibility}</span>
                            </div>
                          </div>
                        </div>
                      ))}
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
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
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
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                              background: 'rgba(102, 126, 234, 0.1)',
                              color: '#667eea',
                              border: '1px solid rgba(102, 126, 234, 0.2)',
                              transition: 'all 0.3s ease',
                              animationName: 'slideInFromBottom',
                              animationDuration: '0.5s',
                              animationTimingFunction: 'ease-out',
                              animationFillMode: 'both',
                              animationDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                              e.target.style.transform = 'translateY(-2px) scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                              e.target.style.transform = 'translateY(0) scale(1)';
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Modern Project Stats */}
                    <div className="mb-4">
                      <label className="fw-bold text-muted small text-uppercase mb-3 d-block">Project Metrics</label>
                      <div className="row g-3">
                        <div className="col-6">
                          <div 
                            className="text-center p-3 rounded-4 hover-lift"
                            style={{
                              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                              border: '1px solid rgba(102, 126, 234, 0.2)'
                            }}
                          >
                            <div 
                              className="fw-bold fs-4 mb-1"
                              style={{ color: '#667eea' }}
                            >
                              {project.challenges.length}
                            </div>
                            <small className="text-muted fw-medium">Challenges</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div 
                            className="text-center p-3 rounded-4 hover-lift"
                            style={{
                              background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%)',
                              border: '1px solid rgba(40, 167, 69, 0.2)'
                            }}
                          >
                            <div 
                              className="fw-bold fs-4 mb-1"
                              style={{ color: '#28a745' }}
                            >
                              {project.technologies.length}
                            </div>
                            <small className="text-muted fw-medium">Technologies</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="d-grid gap-3">
                      {project.demoLink !== "#" && (
                        <a 
                          href={project.demoLink} 
                          className="btn btn-lg fw-bold rounded-pill"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                            e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)';
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
                            e.target.style.background = '#667eea';
                            e.target.style.borderColor = '#667eea';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = '#667eea';
                            e.target.style.color = '#667eea';
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

                {/* Modern Navigation Card */}
                <div 
                  className="modern-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div 
                    className="px-4 py-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      borderRadius: '20px 20px 0 0',
                      borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
                    }}
                  >
                    <h6 className="mb-0 fw-bold gradient-text">
                      <i className="fas fa-compass me-2"></i>
                      Quick Navigation
                    </h6>
                  </div>
                  <div className="p-4">
                    <div className="d-grid gap-3">
                      <button 
                        className="btn btn-outline-primary d-flex align-items-center justify-content-center fw-medium rounded-pill"
                        style={{ padding: '12px 24px', transition: 'all 0.3s ease' }}
                        onClick={() => navigate('/')}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#667eea';
                          e.target.style.borderColor = '#667eea';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.borderColor = '#667eea';
                          e.target.style.color = '#667eea';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="fas fa-home me-3"></i>
                        Back to Home
                      </button>
                      <button 
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center fw-medium rounded-pill"
                        style={{ padding: '12px 24px', transition: 'all 0.3s ease' }}
                        onClick={() => navigate('/#projects')}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#6c757d';
                          e.target.style.borderColor = '#6c757d';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.borderColor = '#6c757d';
                          e.target.style.color = '#6c757d';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="fas fa-th-large me-3"></i>
                        All Projects
                      </button>
                    </div>
                    
                    {/* Enhanced Project Navigation */}
                    <div className="section-divider"></div>
                    <small className="text-muted d-block mb-3 fw-medium">Browse Projects</small>
                    <div className="d-flex gap-3">
                      <button 
                        className="btn btn-outline-primary flex-fill rounded-pill"
                        style={{ 
                          minHeight: '45px',
                          transition: 'all 0.3s ease',
                          opacity: parseInt(id) <= 1 ? 0.5 : 1
                        }}
                        onClick={() => {
                          const prevId = Math.max(1, parseInt(id) - 1);
                          navigate(`/project/${prevId}`);
                        }}
                        disabled={parseInt(id) <= 1}
                      >
                        <i className="fas fa-chevron-left me-2"></i>
                        Previous
                      </button>
                      <button 
                        className="btn btn-outline-primary flex-fill rounded-pill"
                        style={{ 
                          minHeight: '45px',
                          transition: 'all 0.3s ease',
                          opacity: parseInt(id) >= projects.length ? 0.5 : 1
                        }}
                        onClick={() => {
                          const nextId = Math.min(projects.length, parseInt(id) + 1);
                          navigate(`/project/${nextId}`);
                        }}
                        disabled={parseInt(id) >= projects.length}
                      >
                        Next
                        <i className="fas fa-chevron-right ms-2"></i>
                      </button>
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
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
                      color: '#667eea',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => navigate('/#contact')}
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
                    onClick={() => navigate('/#projects')}
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
    </div>
  );
}

export default ProjectDetail;
