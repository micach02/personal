import { useEffect } from 'react';
import AOS from 'aos';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Web App Developer",
      company: "PV Multimedia Inc.",
      period: "June 2017 - Present",
      location: "On-site",
      type: "Full-time",
      description: "Team Lead Front-end Development responsible for collaborating with designers and stakeholders in designing UI/UX elements. Translate storyboards and wireframes into responsive web applications, develop and maintain interactive e-learning modules using HTML5, JavaScript, and CSS. Create animated 3D avatar tutors for educational content and develop simulation apps using PHP and JavaScript.",
      technologies: ["HTML5", "JavaScript", "CSS", "PHP", "Adobe Creative Suite", "3D Animation"],
      achievements: [
        "Led front-end development team for multiple e-learning projects",
        "Created animated 3D avatar tutors for educational content",
        "Developed interactive simulation apps and e-learning modules",
        "Translated complex storyboards into responsive web applications"
      ],
      icon: "💼",
      color: "#007bff"
    },
    {
      id: 2,
      title: "Technician",
      company: "Channel Technologies Inc.",
      period: "Oct 2016 - Mar 2017",
      location: "On-site",
      type: "Internship",
      description: "Assisted senior technicians with the installation and testing of POS machines in various retail stores and money transfer facilities. Gained hands-on experience in hardware installation and system testing procedures.",
      technologies: ["POS Systems", "Hardware Installation", "System Testing", "Technical Support"],
      achievements: [
        "Successfully assisted with POS machine installations across multiple locations",
        "Gained experience in retail and financial technology systems",
        "Learned hardware testing and troubleshooting procedures",
        "Developed field service and customer support skills"
      ],
      icon: "🎓",
      color: "#6f42c1"
    },
    {
      id: 3,
      title: "Technician",
      company: "CEBU CITY HALL, MICS Department",
      period: "April - June 2016",
      location: "On-site",
      type: "Internship",
      description: "Assisted senior technicians with software installation and updates across city hall departments. Gained valuable experience in technical support and system maintenance in a government environment.",
      technologies: ["Windows OS", "Software Installation", "System Updates", "Technical Support"],
      achievements: [
        "Successfully assisted with software installations across multiple departments",
        "Gained experience in government IT infrastructure",
        "Learned system maintenance and troubleshooting procedures",
        "Developed technical support skills in a professional environment"
      ],
      icon: "🎓",
      color: "#6f42c1"
    }
  ];

  return (
    <section id="experience" className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="d-inline-flex align-items-center justify-content-center mb-3">
            <div 
              className="rounded-circle me-3 d-flex align-items-center justify-content-center"
              style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                color: 'white',
                fontSize: '1.8rem'
              }}
            >
              💼
            </div>
            <h2 className="display-5 fw-bold text-dark mb-0">
              Work Experience
            </h2>
          </div>
          <p className="lead text-muted mb-0">
            My professional journey and career milestones
          </p>
          <div 
            className="mx-auto mt-3"
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(135deg, #007bff, #0056b3)',
              borderRadius: '2px'
            }}
          ></div>
        </div>

        {/* Timeline Container */}
        <div className="position-relative">
          {/* Timeline Line */}
          <div 
            className="position-absolute d-none d-lg-block"
            style={{
              left: '30px',
              top: '60px',
              bottom: '60px',
              width: '3px',
              background: 'linear-gradient(to bottom, #007bff, #6c757d)',
              borderRadius: '2px',
              opacity: '0.3'
            }}
          ></div>

          {/* Experience Cards */}
          <div className="row">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="col-12 mb-5" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="experience-card position-relative">
                  {/* Timeline Dot */}
                  <div 
                    className="timeline-dot position-absolute d-none d-lg-flex align-items-center justify-content-center"
                    style={{
                      left: '18px',
                      top: '40px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: exp.color,
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 0 0 3px rgba(0,123,255,0.3)',
                      zIndex: 2
                    }}
                  ></div>

                  {/* Main Card */}
                  <div 
                    className="card border-0 shadow-lg h-100 ms-lg-5 position-relative overflow-hidden"
                    style={{
                      borderRadius: '20px',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Gradient Border Top */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80)`
                      }}
                    ></div>

                    <div className="card-body p-4 p-lg-5">
                      <div className="row align-items-start">
                        {/* Left Content */}
                        <div className="col-lg-8 order-2 order-lg-1">
                          {/* Header */}
                          <div className="d-flex align-items-start mb-4">
                            <div 
                              className="rounded-circle d-flex align-items-center justify-content-center me-4 flex-shrink-0"
                              style={{
                                width: '70px',
                                height: '70px',
                                background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}10)`,
                                border: `2px solid ${exp.color}30`,
                                fontSize: '2rem'
                              }}
                            >
                              {exp.icon}
                            </div>
                            <div className="flex-grow-1">
                              <h3 className="mb-2 text-dark fw-bold" style={{ fontSize: '1.5rem' }}>
                                {exp.title}
                              </h3>
                              <h4 className="mb-2 fw-semibold" style={{ color: exp.color, fontSize: '1.2rem' }}>
                                {exp.company}
                              </h4>
                              <div className="d-flex flex-wrap gap-3 text-muted small">
                                <span className="d-flex align-items-center">
                                  <i className="fas fa-calendar-alt me-2"></i>
                                  {exp.period}
                                </span>
                                <span className="d-flex align-items-center">
                                  <i className="fas fa-map-marker-alt me-2"></i>
                                  {exp.location}
                                </span>
                                <span className="d-flex align-items-center">
                                  <i className="fas fa-briefcase me-2"></i>
                                  {exp.type}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="mb-4">
                            <p className="text-muted lh-lg mb-0" style={{ fontSize: '1.05rem' }}>
                              {exp.description}
                            </p>
                          </div>

                          {/* Key Achievements */}
                          <div className="mb-4">
                            <h6 className="text-dark mb-3 fw-bold d-flex align-items-center">
                              <span 
                                className="me-2"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  backgroundColor: `${exp.color}20`,
                                  borderRadius: '6px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '12px'
                                }}
                              >
                                🎯
                              </span>
                              Key Achievements
                            </h6>
                            <div className="row">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="col-md-6 mb-2">
                                  <div className="achievement-item d-flex align-items-start">
                                    <span 
                                      className="me-3 mt-1 flex-shrink-0"
                                      style={{
                                        color: exp.color,
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                      }}
                                    >
                                      ✓
                                    </span>
                                    <span className="text-muted" style={{ fontSize: '0.95rem' }}>
                                      {achievement}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h6 className="text-dark mb-3 fw-bold d-flex align-items-center">
                              <span 
                                className="me-2"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  backgroundColor: `${exp.color}20`,
                                  borderRadius: '6px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '12px'
                                }}
                              >
                                ⚡
                              </span>
                              Technologies
                            </h6>
                            <div className="d-flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span 
                                  key={i} 
                                  className="tech-badge badge px-3 py-2"
                                  style={{
                                    backgroundColor: `${exp.color}15`,
                                    color: exp.color,
                                    border: `1px solid ${exp.color}40`,
                                    borderRadius: '25px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = exp.color;
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = `${exp.color}15`;
                                    e.target.style.color = exp.color;
                                    e.target.style.transform = 'translateY(0)';
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                          <div 
                            className="p-4 rounded-3 text-center h-100"
                            style={{
                              background: `linear-gradient(135deg, ${exp.color}08, ${exp.color}15)`,
                              border: `1px solid ${exp.color}20`
                            }}
                          >
                            <div 
                              className="mb-3 mx-auto"
                              style={{
                                width: '80px',
                                height: '80px',
                                background: exp.company === "PV Multimedia Inc." ? 'skyblue' : (exp.company === "Channel Technologies Inc." || exp.company === "CEBU CITY HALL, MICS Department") ? '#f8f9fa' : `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '2rem',
                                boxShadow: `0 10px 20px ${exp.color}30`,
                                border: (exp.company === "PV Multimedia Inc." || exp.company === "Channel Technologies Inc." || exp.company === "CEBU CITY HALL, MICS Department") ? `2px solid ${exp.color}` : 'none'
                              }}
                            >
                              {exp.company === "PV Multimedia Inc." ? (
                                <img 
                                  src="/personal/images/pvm_logo.svg" 
                                  alt="PV Multimedia Inc. Logo"
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'contain'
                                  }}
                                />
                              ) : exp.company === "Channel Technologies Inc." ? (
                                <img 
                                  src="/personal/images/channel_technologies_inc_logo.jpg" 
                                  alt="Channel Technologies Inc. Logo"
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'contain',
                                    borderRadius: '8px'
                                  }}
                                />
                              ) : exp.company === "CEBU CITY HALL, MICS Department" ? (
                                <img 
                                  src="/personal/images/cebu_city.png" 
                                  alt="Cebu City Hall Logo"
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'contain'
                                  }}
                                />
                              ) : (
                                exp.icon
                              )}
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: exp.color }}>
                              {exp.type}
                            </h5>
                            <p className="text-muted mb-0 small">
                              Duration: {exp.period.split(' - ')[1] === 'Present' 
                                ? `${exp.period.split(' - ')[0]} - Present` 
                                : exp.period}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div 
                      className="position-absolute"
                      style={{
                        bottom: '20px',
                        right: '20px',
                        width: '100px',
                        height: '100px',
                        background: `radial-gradient(circle, ${exp.color}05 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
          <div 
            className="p-4 rounded-4 d-inline-block"
            style={{
              background: 'linear-gradient(135deg, #007bff10, #0056b320)',
              border: '2px solid #007bff20'
            }}
          >
            <h5 className="mb-2 text-dark fw-bold">Ready to work together?</h5>
            <p className="text-muted mb-3">Let's discuss how my experience can benefit your projects</p>
            <a 
              href="#contact" 
              className="cta-button btn btn-primary btn-lg px-4 py-2"
              style={{
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                border: 'none',
                boxShadow: '0 5px 15px rgba(0,123,255,0.3)'
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
