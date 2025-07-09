import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Enhanced project data with more details
  const projects = [
    {
      id: 1,
      title: "Interactive E-Learning Modules",
      description: "Responsive HTML5 e-learning modules with interactive quizzes, animations, and progress tracking. Designed for modern educational needs with AI-powered personalization.",
      technologies: ["HTML5", "JavaScript", "CSS3", "jQuery", "Bootstrap", "PHP"],
      demoLink: "#",
      codeLink: "#",
      image: `${import.meta.env.BASE_URL}images/projects/project1/project1_img1.png`,
      category: "Web Development",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Banking Simulation App",
      description: "Web-based banking simulation app for training, with real-time feedback and scoring. Includes interactive charts and analytics powered by machine learning.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
      image: `${import.meta.env.BASE_URL}images/projects/project2/project2_img1.png`,
      category: "FinTech",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "Wealth Management App",
      description: "A responsive web application for managing personal finances, tracking investments, and visualizing wealth growth with interactive dashboards and predictive analytics.",
      technologies: ["PHP", "JavaScript","jQuery", "Bootstrap", "Chart.js", "Analytics"],
      demoLink: "#",
      codeLink: "#",
      image: `${import.meta.env.BASE_URL}images/projects/project3/project3_img1.png`,
      category: "FinTech",
      color: "#f093fb"
    },
    {
      id: 4,
      title: "3D Avatar Animation",
      description: "3D modeling and animation of a personalized avatar using Blender and NVIDIA Omniverse, showcasing advanced 3D design techniques and real-time rendering capabilities.",
      technologies: ["Blender", "NVIDIA Omniverse", "3D Modeling"],
      demoLink: "#",
      codeLink: "#",
      image: `${import.meta.env.BASE_URL}images/projects/project4/project4_img1.png`,
      category: "Animation",
      color: "#f5576c"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "My own responsive portfolio website, designed and developed from scratch to showcase my skills, projects, and professional journey with modern design principles.",
      technologies: ["React", "Vite", "Bootstrap", "AOS", "Modern CSS"],
      demoLink: "#",
      codeLink: "#",
      image: `${import.meta.env.BASE_URL}images/projects/project5/project5_img1.png`,
      category: "Web Development",
      color: "#4facfe"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  // Handle modal close
  const handleCloseModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Closing modal'); // Debug log
    setSelectedProject(null);
  };

  return (
    <section ref={sectionRef} id="projects" className="ultra-modern-projects">
      {/* Dynamic Background */}
      <div className="projects-bg-container">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="gradient-mesh"></div>
      </div>

      <div className="container position-relative">
        {/* Ultra Modern Header */}
        <div className="projects-hero-section text-center mb-5">
          <div className="hero-badge" data-aos="fade-down">
            <span className="badge-content">
              <i className="fas fa-rocket me-2"></i>
              Featured Portfolio
            </span>
          </div>
          
          <h1 className="projects-hero-title" data-aos="fade-up" data-aos-delay="100">
            <span className="title-line">Crafting Digital</span>
            <span className="title-line gradient-text">Experiences</span>
          </h1>
          
          <p className="projects-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Transforming ideas into pixel-perfect realities through innovative design and cutting-edge technology
          </p>

          {/* Modern Stats Grid */}
          <div className="stats-grid" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-card">
              <div className="stat-number">{projects.length}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{[...new Set(projects.flatMap(p => p.technologies))].length}</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* Advanced Filter System */}
        <div className="filter-system" data-aos="fade-up" data-aos-delay="400">
          <div className="filter-container">
            <div className="filter-label">Filter by category:</div>
            <div className="filter-pills">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="pill-text">{category}</span>
                  <span className="pill-count">
                    {category === "All" ? projects.length : projects.filter(p => p.category === category).length}
                  </span>
                  <div className="pill-glow"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Projects Grid */}
        <div className="projects-main-section" data-aos="fade-up" data-aos-delay="600">
          <h3 className="section-title">
            <span className="title-icon">🚀</span>
            {activeCategory === "All" ? "All Projects" : `${activeCategory} Projects`}
          </h3>
          
          <div className="projects-masonry">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card-ultra ${hoveredProject === project.id ? 'hovered' : ''}`}
                style={{ 
                  '--project-color': project.color,
                  '--card-index': index,
                  '--total-cards': filteredProjects.length
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="card-glow"></div>
                
                <div className="project-thumbnail">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      const canvas = document.createElement('canvas');
                      canvas.width = 400;
                      canvas.height = 250;
                      const ctx = canvas.getContext('2d');
                      
                      const gradient = ctx.createLinearGradient(0, 0, 400, 250);
                      gradient.addColorStop(0, project.color);
                      gradient.addColorStop(1, project.color + '60');
                      ctx.fillStyle = gradient;
                      ctx.fillRect(0, 0, 400, 250);
                      
                      ctx.fillStyle = '#ffffff';
                      ctx.font = 'bold 18px Arial';
                      ctx.textAlign = 'center';
                      ctx.fillText(project.title, 200, 125);
                      
                      e.target.src = canvas.toDataURL();
                    }}
                  />
                  
                  <div className="thumbnail-overlay">
                    <div className="overlay-icons">
                      <button className="icon-btn" title="View Details">
                        <i className="fas fa-eye"></i>
                      </button>
                      {project.demoLink !== "#" && (
                        <a href={project.demoLink} className="icon-btn" title="Live Demo" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.codeLink !== "#" && (
                        <a href={project.codeLink} className="icon-btn" title="Source Code" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-badges">
                    <span className="category-badge">{project.category}</span>
                  </div>
                </div>
                
                <div className="project-info">
                  <h5 className="project-name">{project.title}</h5>
                  <p className="project-summary">{project.description.substring(0, 120)}...</p>
                  
                  <div className="project-tech-grid">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-chip">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more-chip">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-footer">
                    <button 
                      className="explore-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/project/${project.id}`);
                      }}
                    >
                      Explore
                      <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Empty State */}
        {filteredProjects.length === 0 && (
          <div className="empty-state-ultra" data-aos="fade-up">
            <div className="empty-animation">
              <div className="search-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="empty-ripples">
                <div className="ripple"></div>
                <div className="ripple"></div>
                <div className="ripple"></div>
              </div>
            </div>
            <h4 className="empty-title">No Projects Found</h4>
            <p className="empty-subtitle">
              No projects match the category "{activeCategory}". Try exploring other categories or view all projects.
            </p>
            <button 
              className="reset-filter-btn"
              onClick={() => setActiveCategory("All")}
            >
              <i className="fas fa-refresh me-2"></i>
              Show All Projects
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="projects-cta-ultra" data-aos="fade-up" data-aos-delay="700">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-subtitle">
              Let's collaborate and bring your vision to life with cutting-edge technology and creative design
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                <i className="fas fa-paper-plane me-2"></i>
                Get In Touch
              </a>
              <a href="#about" className="cta-btn secondary">
                <i className="fas fa-user me-2"></i>
                Learn More
              </a>
            </div>
          </div>
          <div className="cta-background">
            <div className="cta-particles"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div 
          className="project-modal-backdrop" 
          onClick={(e) => {
            console.log('Backdrop clicked');
            handleCloseModal(e);
          }}
        >
          <div 
            className="project-modal-enhanced" 
            onClick={(e) => {
              console.log('Modal clicked, stopping propagation');
              e.stopPropagation();
            }}
          >
            {/* Modal Header with Hero Image */}
            <div className="modal-hero-section">
              <div 
                className="modal-hero-image"
                style={{ 
                  backgroundImage: `url(${selectedProject.image})`,
                  backgroundColor: selectedProject.color 
                }}
              >
                <div className="modal-hero-overlay">
                  <div className="modal-hero-content">
                    <span className="modal-category-badge">{selectedProject.category}</span>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                  </div>
                </div>
              </div>
              
              <button 
                className="modal-close-enhanced" 
                onClick={(e) => {
                  console.log('Close button clicked');
                  handleCloseModal(e);
                }}
                type="button"
                title="Close modal"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content-enhanced">
              {/* Project Description */}
              <div className="modal-section">
                <div className="section-header">
                  <i className="fas fa-info-circle section-icon"></i>
                  <h4 className="section-title">Project Overview</h4>
                </div>
                <p className="modal-description">{selectedProject.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button 
                  className="modal-btn-enhanced primary"
                  onClick={() => navigate(`/project/${selectedProject.id}`)}
                >
                  <i className="fas fa-eye me-2"></i>
                  View Full Details
                  <div className="btn-glow"></div>
                </button>
                
                {selectedProject.demoLink !== "#" && (
                  <a 
                    href={selectedProject.demoLink} 
                    className="modal-btn-enhanced secondary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    Live Demo
                    <div className="btn-glow"></div>
                  </a>
                )}
                
                {selectedProject.codeLink !== "#" && (
                  <a 
                    href={selectedProject.codeLink} 
                    className="modal-btn-enhanced tertiary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github me-2"></i>
                    Source Code
                    <div className="btn-glow"></div>
                  </a>
                )}
              </div>
            </div>

            {/* Modal Background Decoration */}
            <div className="modal-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
