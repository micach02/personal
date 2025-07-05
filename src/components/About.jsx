import { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '7+', label: 'Years Experience', icon: '💼', color: 'primary', description: 'Professional development experience' },
    { number: '24/7', label: 'Available', icon: '⚡', color: 'info', description: 'Ready for new challenges' }
  ];

  return (
    <section id="about" className="py-5" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className={`display-4 fw-bold mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
            About Me
            <span className="text-primary ms-3">👨‍💻</span>
          </h2>
          <div className="mx-auto" style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #007bff, #20c997)', borderRadius: '2px' }}></div>
        </div>

        <div className="row align-items-center mb-5">
          {/* Enhanced Profile Image Column */}
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <div className="position-relative d-inline-block">
              {/* Animated background circle */}
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: '240px',
                  height: '240px',
                  background: 'linear-gradient(45deg, #007bff, #20c997, #fd7e14)',
                  animation: 'spin 20s linear infinite',
                  top: '-20px',
                  left: '-20px',
                  zIndex: 0
                }}
              ></div>
              
              <div 
                className="rounded-circle p-2 d-inline-block position-relative bg-white shadow-lg"
                style={{ zIndex: 1 }}
              >
                <img
                  src="/public/images/michael2.jpg"
                  alt="Michael - Web Developer"
                  className="rounded-circle"
                  style={{ 
                    width: '200px', 
                    height: '200px', 
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1) rotate(5deg)';
                    e.target.style.filter = 'brightness(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                    e.target.style.filter = 'brightness(1)';
                  }}
                />
              </div>

              {/* Floating elements */}
              <div className="position-absolute top-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: '40px', height: '40px', transform: 'translate(10px, -10px)', animation: 'float 3s ease-in-out infinite' }}>
                <span className="text-white fw-bold">7+</span>
              </div>
              <div className="position-absolute bottom-0 start-0 bg-success rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: '35px', height: '35px', transform: 'translate(-10px, 10px)', animation: 'float 3s ease-in-out infinite 1.5s' }}>
                <span className="text-white">🚀</span>
              </div>
            </div>
          </div>

          {/* Enhanced Content Column */}
          <div className="col-lg-8">
            <div className="ps-lg-4">
              <div className="mb-4">
                <h3 className="h4 fw-bold text-primary mb-3">Hello! I'm Michael 👋</h3>
                <p className="lead text-dark lh-lg mb-4" style={{ fontSize: '1.1rem' }}>
                  A passionate <span className="fw-bold text-primary">Web Application Developer</span> at PV Multimedia Inc., 
                  dedicated to creating exceptional digital experiences that bridge the gap between innovative design and robust functionality.
                </p>
                
                <p className="text-muted lh-lg mb-4">
                  With over <span className="fw-bold text-success">7 years of hands-on experience</span>, I specialize in modern web technologies 
                  and have a genuine love for clean, efficient code that makes a difference. My journey in tech has been driven by curiosity, 
                  continuous learning, and a passion for solving complex problems with elegant solutions.
                </p>

                <p className="text-muted lh-lg mb-4">
                  When I'm not coding, you'll find me exploring new cuisines 
                  <span className="text-warning fw-bold"> (especially authentic ramen! 🍜)</span>, traveling to discover new cultures, 
                  capturing moments through photography, or staying active through fitness. I believe that diverse experiences 
                  make me a better developer and a more creative problem-solver.
                </p>
              </div>

              {/* Philosophy Card - Enhanced */}
              <div className="card border-0 shadow-sm mb-4 position-relative overflow-hidden" 
                   style={{ 
                     background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                     border: '1px solid rgba(0,123,255,0.1) !important'
                   }}>
                <div className="position-absolute top-0 start-0" 
                     style={{ 
                       width: '4px', 
                       height: '100%', 
                       background: 'linear-gradient(to bottom, #007bff, #20c997)' 
                     }}></div>
                <div className="card-body p-4 ps-5">
                  <h5 className="card-title text-primary mb-3 d-flex align-items-center">
                    <i className="bi bi-lightbulb me-2 fs-4"></i>My Development Philosophy
                  </h5>
                  <blockquote className="blockquote mb-0">
                    <p className="card-text text-muted mb-3" style={{ fontStyle: 'italic' }}>
                      "Great code is not just about making things work—it's about creating solutions that are elegant, 
                      maintainable, and deliver real value to users. Every project is an opportunity to learn something new 
                      and push the boundaries of what's possible."
                    </p>
                    <footer className="blockquote-footer text-primary">
                      <small>Michael's approach to development</small>
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
                    <div>
                      <small className="text-muted d-block">Location</small>
                      <span className="fw-semibold">Remote & On-site</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3">
                    <i className="bi bi-clock-fill text-success me-3 fs-5"></i>
                    <div>
                      <small className="text-muted d-block">Availability</small>
                      <span className="fw-semibold">Full-time & Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="row mb-5 justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div 
                className={`card border-0 shadow-sm h-100 text-center transition-all ${hoveredStat === index ? 'shadow-lg' : ''}`}
                style={{ 
                  cursor: 'pointer',
                  transform: hoveredStat === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: hoveredStat === index ? `linear-gradient(135deg, ${stat.color === 'primary' ? '#007bff' : stat.color === 'success' ? '#28a745' : stat.color === 'info' ? '#17a2b8' : '#ffc107'} 0%, #ffffff 100%)` : 'white'
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="card-body p-4">
                  <div className="fs-1 mb-3" style={{ 
                    transform: hoveredStat === index ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>{stat.icon}</div>
                  <h3 className={`text-${stat.color} fw-bold mb-2`} style={{
                    fontSize: hoveredStat === index ? '2.5rem' : '2rem',
                    transition: 'font-size 0.3s ease'
                  }}>{stat.number}</h3>
                  <p className="text-muted mb-2 fw-semibold">{stat.label}</p>
                  <small className="text-muted opacity-75">{stat.description}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Journey Button */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="card border-0 shadow-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="card-body p-5 text-white">
                <h4 className="fw-bold mb-3">Want to Know More About My Personal Story?</h4>
                <p className="mb-4 opacity-90">
                  Beyond the professional journey, discover the person behind the code. 
                  Learn about my personal experiences, values, and what makes me who I am.
                </p>
                <a href="/personal-journey" className="btn btn-light btn-lg px-5 fw-semibold">
                  <i className="bi bi-heart me-2"></i>My Personal Journey
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mb-5">
          <div className="card border-0 shadow-lg position-relative overflow-hidden" 
               style={{ background: 'linear-gradient(135deg, #007bff 0%, #20c997 100%)' }}>
            {/* Animated background elements */}
            <div className="position-absolute" style={{
              top: '-50px',
              right: '-50px',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              animation: 'float 6s ease-in-out infinite'
            }}></div>
            <div className="position-absolute" style={{
              bottom: '-30px',
              left: '-30px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              animation: 'float 4s ease-in-out infinite 2s'
            }}></div>
            
            <div className="card-body p-5 text-white position-relative">
              <h4 className="fw-bold mb-3 fs-2">Let's Create Something Amazing Together! 🚀</h4>
              <p className="mb-4 opacity-90 fs-5">
                Ready to bring your ideas to life? I'm always excited to work on new challenges and collaborate with amazing people. 
                Let's discuss how we can turn your vision into reality.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#contact" className="btn btn-light btn-lg px-5 fw-semibold shadow-sm"
                   style={{ 
                     borderRadius: '50px',
                     transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'translateY(0)';
                     e.target.style.boxShadow = '';
                   }}>
                  <i className="bi bi-envelope me-2"></i>Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline-light btn-lg px-5 fw-semibold"
                   style={{ 
                     borderRadius: '50px',
                     transition: 'all 0.3s ease',
                     borderWidth: '2px'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'translateY(0)';
                     e.target.style.backgroundColor = 'transparent';
                   }}>
                  <i className="bi bi-eye me-2"></i>View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .transition-all {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced button hover effects */
        .btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn:hover::before {
          left: 100%;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #007bff, #20c997);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0056b3, #17a085);
        }
        
        /* Accessibility improvements */
        .card:focus-visible {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }
          
          .card-body {
            padding: 1.5rem !important;
          }
          
          .fs-1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
