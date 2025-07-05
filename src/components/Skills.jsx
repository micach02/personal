import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const programmingSkills = [
    { name: 'HTML5 & CSS3', level: 95, icon: '🌐', color: '#e34c26' },
    { name: 'JavaScript (ES6+)', level: 92, icon: '⚡', color: '#f7df1e' },
    { name: 'TypeScript', level: 80, icon: '🛡️', color: '#3178c6' },
    { name: 'React.js', level: 88, icon: '⚛️', color: '#61dafb' },
    { name: 'PHP', level: 70, icon: '🐘', color: '#777bb4' },
    { name: 'Bootstrap', level: 85, icon: '🎨', color: '#7952b3' },
    { name: 'WordPress', level: 75, icon: '📝', color: '#21759b' },
    { name: 'Git & GitHub', level: 85, icon: '📦', color: '#f05032' },
  ];

  const softwareSkills = [
    { name: 'Canva', level: 85, icon: '🎨', color: '#00c4cc' },
    { name: 'Adobe XD', level: 75, icon: '🎯', color: '#ff61f6' },
    { name: 'Figma', level: 80, icon: '🎭', color: '#f24e1e' },
    { name: 'Adobe Photoshop', level: 70, icon: '🖼️', color: '#31a8ff' },
    { name: 'Adobe Animate', level: 65, icon: '🎬', color: '#cc2936' },
    { name: 'VS Code', level: 95, icon: '💻', color: '#007acc' },
    { name: 'Blender', level: 60, icon: '🔥', color: '#e87d0d' },
  ];

  const allSkills = [...programmingSkills, ...softwareSkills];

  // Refs for each skill card
  const cardRefs = useRef([]);
  const [widths, setWidths] = useState(allSkills.map(() => 0));

  useEffect(() => {
    const observers = [];
    cardRefs.current = cardRefs.current.slice(0, allSkills.length);
    allSkills.forEach((_, i) => {
      observers[i] = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setWidths(prev => {
              const newWidths = [...prev];
              newWidths[i] = allSkills[i].level;
              return newWidths;
            });
            observers[i].disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (cardRefs.current[i]) {
        observers[i].observe(cardRefs.current[i]);
      }
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, [allSkills.length]);

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#2c3e50' }}>
            Professional Skills
          </h2>
          <p className="lead text-muted mb-4">
            Technologies and tools that drive my development journey
          </p>
          <div className="mx-auto" style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #007bff, #6f42c1)',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Skills Grid */}
        <div className="row g-4">
          {/* Programming Skills Section */}
          <div className="col-12">
            <div className="mb-5">
              <div className="text-center mb-4" data-aos="fade-up">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                     style={{ 
                       width: '80px', 
                       height: '80px', 
                       background: 'linear-gradient(135deg, #007bff, #0056b3)',
                       color: 'white',
                       fontSize: '2rem'
                     }}>
                  💻
                </div>
                <h3 className="h3 fw-bold text-primary mb-2">Programming & Frameworks</h3>
                <p className="text-muted">Core development technologies and frameworks</p>
              </div>
              
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {programmingSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="col"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    ref={el => (cardRefs.current[index] = el)}
                  >
                    <div className="card border-0 h-100 shadow-sm" 
                         style={{ 
                           transition: 'all 0.3s ease',
                           cursor: 'pointer'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-5px)';
                           e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                         }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ 
                              width: '55px', 
                              height: '55px',
                              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                              border: `2px solid ${skill.color}`,
                              fontSize: '22px'
                            }}
                          >
                            {skill.icon}
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="fw-bold mb-1" style={{ fontSize: '0.95rem' }}>{skill.name}</h6>
                            <small className="text-muted">Proficiency</small>
                          </div>
                        </div>
                        
                        <div className="progress mb-3" style={{ height: '8px', borderRadius: '20px', backgroundColor: '#e9ecef' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${widths[index]}%`,
                              transition: 'width 2.5s cubic-bezier(0.4,0,0.2,1)',
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              borderRadius: '20px',
                              position: 'relative'
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div style={{
                              position: 'absolute',
                              top: '50%',
                              right: '8px',
                              transform: 'translateY(-50%)',
                              width: '4px',
                              height: '4px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              opacity: widths[index] > 0 ? 1 : 0,
                              transition: 'opacity 0.5s ease'
                            }}></div>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted small">Level</span>
                          <span className="fw-bold" style={{ color: skill.color, fontSize: '0.9rem' }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design & Tools Section */}
          <div className="col-12">
            <div className="mb-4">
              <div className="text-center mb-4" data-aos="fade-up">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                     style={{ 
                       width: '80px', 
                       height: '80px', 
                       background: 'linear-gradient(135deg, #28a745, #20c997)',
                       color: 'white',
                       fontSize: '2rem'
                     }}>
                  🛠️
                </div>
                <h3 className="h3 fw-bold text-success mb-2">Design & Development Tools</h3>
                <p className="text-muted">Creative software and productivity tools</p>
              </div>
              
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {softwareSkills.map((skill, index) => (
                  <div
                    key={index + programmingSkills.length}
                    className="col"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    ref={el => (cardRefs.current[index + programmingSkills.length] = el)}
                  >
                    <div className="card border-0 h-100 shadow-sm" 
                         style={{ 
                           transition: 'all 0.3s ease',
                           cursor: 'pointer'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-5px)';
                           e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                         }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ 
                              width: '55px', 
                              height: '55px',
                              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                              border: `2px solid ${skill.color}`,
                              fontSize: '22px'
                            }}
                          >
                            {skill.icon}
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="fw-bold mb-1" style={{ fontSize: '0.95rem' }}>{skill.name}</h6>
                            <small className="text-muted">Proficiency</small>
                          </div>
                        </div>
                        
                        <div className="progress mb-3" style={{ height: '8px', borderRadius: '20px', backgroundColor: '#e9ecef' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${widths[index + programmingSkills.length]}%`,
                              transition: 'width 2.5s cubic-bezier(0.4,0,0.2,1)',
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              borderRadius: '20px',
                              position: 'relative'
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div style={{
                              position: 'absolute',
                              top: '50%',
                              right: '8px',
                              transform: 'translateY(-50%)',
                              width: '4px',
                              height: '4px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              opacity: widths[index + programmingSkills.length] > 0 ? 1 : 0,
                              transition: 'opacity 0.5s ease'
                            }}></div>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted small">Level</span>
                          <span className="fw-bold" style={{ color: skill.color, fontSize: '0.9rem' }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="row mt-5 pt-4" data-aos="fade-up">
          <div className="col-12">
            <div className="text-center p-4 rounded-3" style={{ backgroundColor: 'white', boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}>
              <div className="row row-cols-2 row-cols-md-4 g-4">
                <div className="col">
                  <div className="h3 fw-bold text-primary mb-1">{programmingSkills.length}</div>
                  <div className="small text-muted">Programming Skills</div>
                </div>
                <div className="col">
                  <div className="h3 fw-bold text-success mb-1">{softwareSkills.length}</div>
                  <div className="small text-muted">Design Tools</div>
                </div>
                <div className="col">
                  <div className="h3 fw-bold text-info mb-1">
                    {Math.round(programmingSkills.reduce((acc, skill) => acc + skill.level, 0) / programmingSkills.length)}%
                  </div>
                  <div className="small text-muted">Avg Programming</div>
                </div>
                <div className="col">
                  <div className="h3 fw-bold text-warning mb-1">
                    {Math.round(softwareSkills.reduce((acc, skill) => acc + skill.level, 0) / softwareSkills.length)}%
                  </div>
                  <div className="small text-muted">Avg Design Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
