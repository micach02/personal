import { useEffect, useState } from 'react';
import AOS from 'aos';

function Education() {
  const [activeTab, setActiveTab] = useState('ongoing');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      institution: "Cebu Institute of Technology - University",
      period: "2012 - 2017",
      description: "Graduated with specialization in Software Development and Database Management. Gained comprehensive knowledge in programming fundamentals, system analysis, and project management.",
      type: "formal",
      icon: "🎓",
      color: "#28a745",
      achievements: [
        "Capstone project: School Library Management System"
      ],
      curriculum: [
        "Comprehensive training in software development, networking, databases, and systems analysis",
        "Hands-on experience in programming, web development, and IT infrastructure",
        "Developed strong skills in problem-solving, software engineering, and project collaboration",
        "Completed capstone projects and internships simulating real-world IT challenges"
      ]
    }
  ];

  const professionalDevelopment = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      provider: "Udemy",
      instructor: "Dr. Angela Yu",
      period: "2023 - Present",
      status: "In Progress",
      description: "Comprehensive full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and modern web development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
      progress: 30,
      icon: "🚀",
      color: "#007bff",
      url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      id: 2,
      title: "WordPress 2025: The Complete WordPress Website Course",
      provider: "Udemy",
      instructor: "Tanzeel Ur Rehman",
      period: "2025 - Present",
      status: "In Progress",
      description: "Comprehensive WordPress course covering website creation, theme customization, plugin development, e-commerce setup, and modern WordPress development practices.",
      technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "WooCommerce"],
      progress: 8,
      icon: "📝",
      color: "#21759b",
      url: "https://www.udemy.com/course/wordpress-2025-complete-wordpress-website-course/"
    },
    {
      id: 3,
      title: "Google UX Design Professional Certificate",
      provider: "Coursera",
      instructor: "Google",
      period: "2025 - Present",
      status: "In Progress",
      description: "Comprehensive UX design program covering user research, wireframing, prototyping, usability testing, and design thinking. Learn industry-standard tools and methodologies to create user-centered designs.",
      technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Wireframing", "Usability Testing"],
      progress: 23,
      icon: "🎨",
      color: "#4285f4",
      url: "https://www.coursera.org/professional-certificates/google-ux-design"
    }
  ];

  const ongoingCourses = professionalDevelopment.filter(course => course.status === "In Progress");
  const completedCourses = professionalDevelopment.filter(course => course.status === "Completed");

  return (
    <section id="education" className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div data-aos="fade-up" className="mb-4">
              <span 
                style={{ 
                  fontSize: '3.5rem', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                🎓
              </span>
            </div>
            <h2 
              className="display-4 fw-bold mb-3" 
              data-aos="fade-up" 
              data-aos-delay="100"
              style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Education & Growth
            </h2>
            <p 
              className="lead text-muted mx-auto" 
              data-aos="fade-up" 
              data-aos-delay="200"
              style={{ maxWidth: '600px' }}
            >
              My continuous journey of learning and professional development
            </p>
          </div>
        </div>

        {/* Formal Education Timeline */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 
              className="text-center mb-5 fw-bold" 
              data-aos="fade-up"
              style={{ color: '#1e293b', fontSize: '2rem' }}
            >
              🏛️ Academic Foundation
            </h3>
            
            {education.map((edu, index) => (
              <div key={edu.id} className="row justify-content-center mb-4">
                <div className="col-lg-10">
                  <div 
                    className="card border-0 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    style={{ 
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Decorative gradient bar */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: `linear-gradient(90deg, ${edu.color}, ${edu.color}80)`
                      }}
                    />
                    
                    <div className="card-body p-5">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="d-flex align-items-center mb-3">
                            <span 
                              style={{ 
                                fontSize: '2.5rem', 
                                marginRight: '20px',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                              }}
                            >
                              {edu.icon}
                            </span>
                            <div>
                              <span 
                                className="badge px-3 py-2"
                                style={{ 
                                  background: `linear-gradient(135deg, ${edu.color}, ${edu.color}80)`,
                                  color: 'white',
                                  fontSize: '0.9rem',
                                  borderRadius: '12px',
                                  fontWeight: '500'
                                }}
                              >
                                {edu.period}
                              </span>
                            </div>
                          </div>
                          
                          <h4 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.5rem' }}>
                            {edu.degree}
                          </h4>
                          <h5 className="text-muted mb-3" style={{ fontWeight: '400' }}>
                            {edu.institution}
                          </h5>
                          <p className="mb-4" style={{ lineHeight: '1.8', color: '#64748b' }}>
                            {edu.description}
                          </p>
                        </div>
                        
                        <div className="col-md-4">
                          <div className="text-center">
                            <div 
                              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 p-3"
                              style={{
                                width: '120px',
                                height: '120px',
                                background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}10)`,
                                border: `3px solid ${edu.color}30`,
                                overflow: 'hidden'
                              }}
                            >
                              <img 
                                src="./images/citu.png" 
                                alt="Cebu Institute of Technology - University Logo"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                  borderRadius: '50%'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {edu.achievements && (
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <h6 
                              className="fw-bold mb-3"
                              style={{ color: edu.color, fontSize: '1.1rem' }}
                            >
                              🏆 Key Achievements
                            </h6>
                            <ul className="list-unstyled">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                  <span 
                                    className="me-2 mt-1"
                                    style={{ 
                                      color: edu.color, 
                                      fontSize: '1.2rem',
                                      fontWeight: 'bold'
                                    }}
                                  >
                                    ✓
                                  </span>
                                  <span style={{ color: '#475569' }}>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="col-md-6">
                            {edu.curriculum && (
                              <>
                                <h6 
                                  className="fw-bold mb-3"
                                  style={{ color: edu.color, fontSize: '1.1rem' }}
                                >
                                  📚 Curriculum Highlights
                                </h6>
                                <ul className="list-unstyled">
                                  {edu.curriculum.slice(0, 3).map((item, i) => (
                                    <li key={i} className="mb-2 d-flex align-items-start">
                                      <span 
                                        className="me-2 mt-1"
                                        style={{ 
                                          color: edu.color,
                                          fontSize: '1rem'
                                        }}
                                      >
                                        •
                                      </span>
                                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 
              className="text-center mb-4 fw-bold" 
              data-aos="fade-up"
              style={{ color: '#1e293b', fontSize: '2rem' }}
            >
              🚀 Professional Development
            </h3>
            
            {/* Tab Navigation */}
            <div className="d-flex justify-content-center mb-5" data-aos="fade-up" data-aos-delay="100">
              <div 
                className="btn-group shadow-sm"
                style={{ borderRadius: '15px', overflow: 'hidden' }}
              >
                <button
                  className={`btn ${activeTab === 'ongoing' ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                  onClick={() => setActiveTab('ongoing')}
                  style={{
                    borderRadius: '0',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Currently Learning ({ongoingCourses.length})
                </button>
                <button
                  className={`btn ${activeTab === 'completed' ? 'btn-success' : 'btn-outline-success'} px-4 py-2`}
                  onClick={() => setActiveTab('completed')}
                  style={{
                    borderRadius: '0',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Completed ({completedCourses.length})
                </button>
              </div>
            </div>

            {/* Course Content */}
            <div className="row">
              {/* Ongoing Courses */}
              {activeTab === 'ongoing' && ongoingCourses.map((course, index) => (
                <div key={course.id} className="col-lg-6 col-xl-4 mb-4">
                  <div 
                    className="card h-100 border-0 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    style={{ 
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = `0 20px 40px ${course.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Progress indicator on top */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '5px',
                        width: `${course.progress}%`,
                        background: `linear-gradient(90deg, ${course.color}, ${course.color}80)`,
                        transition: 'width 0.5s ease'
                      }}
                    />
                    
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span 
                          style={{ 
                            fontSize: '2.5rem',
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                          }}
                        >
                          {course.icon}
                        </span>
                        <span 
                          className="badge px-3 py-2"
                          style={{ 
                            background: `linear-gradient(135deg, ${course.color}, ${course.color}80)`,
                            color: 'white',
                            fontSize: '0.8rem',
                            borderRadius: '12px',
                            fontWeight: '500'
                          }}
                        >
                          {course.status}
                        </span>
                      </div>
                      
                      <h5 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.2rem' }}>
                        {course.title}
                      </h5>
                      <h6 className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
                        {course.provider} • {course.instructor}
                      </h6>
                      <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                        {course.period}
                      </p>
                      <p className="mb-4" style={{ lineHeight: '1.6', color: '#64748b', fontSize: '0.9rem' }}>
                        {course.description}
                      </p>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold" style={{ color: '#1e293b', fontSize: '0.9rem' }}>
                            Progress
                          </span>
                          <span 
                            className="fw-bold"
                            style={{ 
                              color: course.color, 
                              fontSize: '1rem'
                            }}
                          >
                            {course.progress}%
                          </span>
                        </div>
                        <div 
                          style={{ 
                            height: '10px', 
                            backgroundColor: '#e2e8f0', 
                            borderRadius: '10px',
                            overflow: 'hidden',
                            position: 'relative'
                          }}
                        >
                          <div 
                            style={{ 
                              height: '100%', 
                              background: `linear-gradient(90deg, ${course.color}, ${course.color}80)`,
                              width: `${course.progress}%`,
                              borderRadius: '10px',
                              transition: 'width 0.8s ease',
                              position: 'relative'
                            }}
                          >
                            <div 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                animation: course.progress > 0 ? 'shimmer 2s infinite' : 'none'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mb-3">
                        <h6 
                          className="fw-bold mb-2"
                          style={{ color: course.color, fontSize: '0.95rem' }}
                        >
                          💻 Technologies
                        </h6>
                        <div className="d-flex flex-wrap gap-1">
                          {course.technologies.slice(0, 4).map((tech, i) => (
                            <span 
                              key={i}
                              className="badge"
                              style={{ 
                                backgroundColor: `${course.color}20`,
                                color: course.color,
                                fontSize: '0.7rem',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontWeight: '500'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {course.technologies.length > 4 && (
                            <span 
                              className="badge"
                              style={{ 
                                backgroundColor: '#94a3b820',
                                color: '#64748b',
                                fontSize: '0.7rem',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontWeight: '500'
                              }}
                            >
                              +{course.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Course Link */}
                      <div className="text-center mt-auto">
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                          style={{
                            background: `linear-gradient(135deg, ${course.color}, ${course.color}80)`,
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '0.5rem 1.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          View Course →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Completed Courses */}
              {activeTab === 'completed' && completedCourses.map((course, index) => (
                <div key={course.id} className="col-lg-6 col-xl-4 mb-4">
                  <div 
                    className="card h-100 border-0 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    style={{ 
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.20)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                    onClick={() => window.open(course.url, '_blank')}
                  >
                    {/* Completed indicator */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: 'linear-gradient(90deg, #22c55e, #16a34a)'
                      }}
                    />
                    
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span 
                          style={{ 
                            fontSize: '2.5rem',
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                          }}
                        >
                          {course.icon}
                        </span>
                        <span 
                          className="badge px-3 py-2"
                          style={{ 
                            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                            color: 'white',
                            fontSize: '0.8rem',
                            borderRadius: '12px',
                            fontWeight: '500'
                          }}
                        >
                          ✓ Completed
                        </span>
                      </div>
                      
                      <h6 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.1rem' }}>
                        {course.title}
                      </h6>
                      <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                        {course.provider} • {course.instructor}
                      </p>
                      <p className="text-muted mb-3" style={{ fontSize: '0.8rem' }}>
                        {course.period}
                      </p>
                      
                      <div className="mb-4">
                        <div className="d-flex flex-wrap gap-1">
                          {course.technologies.slice(0, 3).map((tech, i) => (
                            <span 
                              key={i}
                              className="badge"
                              style={{ 
                                backgroundColor: `${course.color}20`,
                                color: course.color,
                                fontSize: '0.7rem',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '6px',
                                fontWeight: '500'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {course.technologies.length > 3 && (
                            <span 
                              className="badge"
                              style={{ 
                                backgroundColor: '#94a3b820',
                                color: '#64748b',
                                fontSize: '0.7rem',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '6px',
                                fontWeight: '500'
                              }}
                            >
                              +{course.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <small className="text-muted fw-medium">
                          Click to view certificate →
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Summary Stats */}
        <div className="row">
          <div className="col-12">
            <div 
              className="card border-0 shadow-lg"
              data-aos="fade-up"
              style={{ 
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative elements */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '50%'
                }}
              />
              
              <div className="card-body p-5" style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="text-center mb-5 fw-bold">
                  📊 Learning Journey Overview
                </h3>
                <div className="row text-center g-4">
                  <div className="col-md-3 col-6">
                    <div className="mb-3">
                      <h1 className="display-4 fw-bold mb-0">{education.length}</h1>
                      <p className="mb-0 fw-medium opacity-75">Formal Degrees</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="mb-3">
                      <h1 className="display-4 fw-bold mb-0">{completedCourses.length}</h1>
                      <p className="mb-0 fw-medium opacity-75">Courses Completed</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="mb-3">
                      <h1 className="display-4 fw-bold mb-0">{ongoingCourses.length}</h1>
                      <p className="mb-0 fw-medium opacity-75">Currently Learning</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="mb-3">
                      <h1 className="display-4 fw-bold mb-0">∞</h1>
                      <p className="mb-0 fw-medium opacity-75">Growth Mindset</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="mb-0 opacity-75 fst-italic">
                    "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .btn-group .btn:first-child {
          border-top-left-radius: 15px !important;
          border-bottom-left-radius: 15px !important;
        }
        
        .btn-group .btn:last-child {
          border-top-right-radius: 15px !important;
          border-bottom-right-radius: 15px !important;
        }
      `}</style>
    </section>
  );
}

export default Education;
