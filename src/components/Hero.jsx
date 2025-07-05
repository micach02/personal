import { useEffect, useState, useRef, useCallback } from "react";

function Hero() {
  const [animate, setAnimate] = useState(false);
  const [backgroundScale, setBackgroundScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const requestRef = useRef();

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const scrollTop = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const progress = Math.min(scrollTop / sectionHeight, 1);
      
      setScrollProgress(progress);
      // Parallax effect: scale from 1 to 1.15 based on scroll
      const scale = 1 + (progress * 0.15);
      setBackgroundScale(scale);
      
      // Visibility for performance optimization
      setIsVisible(progress < 1.2);
    }
  }, []);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e) => {
    if (requestRef.current) return;
    
    requestRef.current = requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      setMousePosition({ x, y });
      requestRef.current = null;
    });
  }, []);

  useEffect(() => {
    // Initial animation trigger
    const timer = setTimeout(() => setAnimate(true), 100);

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Initial scroll calculation
    handleScroll();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <section
      ref={sectionRef}
      className="hero-section text-white text-center d-flex align-items-start justify-content-center position-relative overflow-hidden"
      style={{ 
        minHeight: "100vh",
        paddingTop: "120px",
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            var(--primary-teal-dark, #0a4d4a) 0%, 
            var(--primary-teal, #1a7a75) 35%, 
            var(--orange-accent, #ff6b35) 100%
          )
        `,
        opacity: isVisible ? 1 : 0.95,
        transition: 'opacity 0.3s ease'
      }}
    >
      {/* Enhanced Background with Better Performance */}
      <div 
        className="hero-background position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/images/michael.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `scale(${backgroundScale}) translateZ(0)`,
          transition: "transform 0.1s ease-out",
          zIndex: 0,
          opacity: 0.25,
          filter: 'blur(0.5px)',
          willChange: 'transform'
        }}
      ></div>

      {/* Dynamic Gradient Overlay with Better Performance */}
      <div 
        className="hero-gradient position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            linear-gradient(
              135deg,
              var(--primary-teal-dark, #0a4d4a) 0%,
              transparent 30%,
              var(--orange-accent-30, rgba(255, 107, 53, 0.3)) 70%,
              var(--orange-soft, #ffab7a) 100%
            )
          `,
          zIndex: 1,
          opacity: 0.8
        }}
      ></div>

      {/* Enhanced Floating Elements with Better Animation */}
      <div className="floating-shapes position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-shape position-absolute"
            style={{
              width: `${15 + i * 8}px`,
              height: `${15 + i * 8}px`,
              background: i % 3 === 0 
                ? 'var(--orange-accent-20, rgba(255, 107, 53, 0.2))' 
                : i % 3 === 1 
                ? 'var(--primary-teal-20, rgba(26, 122, 117, 0.2))'
                : 'rgba(255, 255, 255, 0.1)',
              borderRadius: i % 3 === 0 ? '50%' : 
                          i % 3 === 1 ? 'var(--radius-lg, 12px)' : '20%',
              top: `${8 + i * 12}%`,
              left: `${3 + i * 13}%`,
              animation: `float${(i % 6) + 1} ${5 + i * 0.5}s ease-in-out infinite`,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transform: `translateZ(0) rotate(${i * 45}deg)`,
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      {/* Particle Effect Layer */}
      <div className="particles position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle position-absolute"
            style={{
              width: '3px',
              height: '3px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content with enhanced animations */}
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="hero-content"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(60px)",
                transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Enhanced Typography with Better Hierarchy */}
              <div className="mb-5">
                <div 
                  className="hero-badge text-uppercase fw-medium mb-3"
                  style={{
                    fontSize: 'var(--font-size-sm, 0.875rem)',
                    letterSpacing: 'var(--letter-spacing-wide, 0.15em)',
                    color: 'var(--cream-light, #f5f5dc)',
                    opacity: animate ? 0.9 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: "all 1s ease 0.2s",
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <i className="fas fa-star me-2" style={{ color: 'var(--orange-accent, #ff6b35)' }}></i>
                  Welcome to my digital space
                </div>
                
                <h1 
                  className="hero-title display-1 fw-bold mb-4"
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    background: 'linear-gradient(135deg, #ffffff 0%, var(--cream-light, #f5f5dc) 50%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                    lineHeight: '1.1',
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(30px)",
                    transition: "all 1.2s ease 0.4s"
                  }}
                >
                  Hi, I'm{' '}
                  <span 
                    className="hero-name"
                    style={{ 
                      color: 'var(--orange-accent, #ff6b35)',
                      WebkitTextFillColor: 'var(--orange-accent, #ff6b35)',
                      position: 'relative',
                      display: 'inline-block'
                    }}
                  >
                    Michael Vincent
                    <span 
                      className="name-underline"
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '0',
                        width: '100%',
                        height: '4px',
                        background: 'var(--orange-accent, #ff6b35)',
                        borderRadius: '2px',
                        transform: animate ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 1s ease 1s'
                      }}
                    ></span>
                  </span>
                </h1>
                
                <p 
                  className="hero-subtitle lead mb-5"
                  style={{
                    fontSize: 'var(--font-size-xl, 1.25rem)',
                    fontWeight: 'var(--font-weight-normal, 400)',
                    color: 'var(--cream-light, #f5f5dc)',
                    lineHeight: 'var(--line-height-relaxed, 1.75)',
                    maxWidth: '650px',
                    margin: '0 auto var(--space-8, 2rem)',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: "all 1.3s ease 0.6s"
                  }}
                >
                  Web Application Developer passionate about creating{' '}
                  <span style={{ 
                    color: 'var(--orange-soft, #ffab7a)',
                    fontWeight: '500',
                    position: 'relative'
                  }}>
                    innovative
                  </span>{' '}
                  and user-centered digital experiences that solve real-world problems 
                  and make a meaningful impact.
                </p>
              </div>

              {/* Enhanced CTA Buttons with Better Interactions */}
              <div 
                className="hero-cta d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center mb-5"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1.4s ease 0.8s"
                }}
              >
                <button
                  className="btn btn-primary btn-lg px-5 py-3 hero-btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, var(--orange-accent, #ff6b35) 0%, var(--orange-soft, #ffab7a) 100%)',
                    border: 'none',
                    borderRadius: 'var(--radius-2xl, 1rem)',
                    color: 'white',
                    fontWeight: 'var(--font-weight-semibold, 600)',
                    fontSize: 'var(--font-size-lg, 1.125rem)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                    minWidth: '220px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-6px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 53, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.3)';
                  }}
                >
                  <i className="fas fa-rocket me-2"></i>
                  Explore My Work
                  <span 
                    className="btn-shine position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.6s ease'
                    }}
                  ></span>
                </button>
                
                <button
                  className="btn btn-outline-light btn-lg px-5 py-3 hero-btn-secondary"
                  style={{
                    borderColor: 'var(--cream-light, #f5f5dc)',
                    color: 'var(--cream-light, #f5f5dc)',
                    borderRadius: 'var(--radius-2xl, 1rem)',
                    fontWeight: 'var(--font-weight-semibold, 600)',
                    fontSize: 'var(--font-size-lg, 1.125rem)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    minWidth: '220px',
                    borderWidth: '2px',
                    background: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--cream-light, #f5f5dc)';
                    e.target.style.color = 'var(--primary-teal, #1a7a75)';
                    e.target.style.transform = 'translateY(-6px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = 'var(--cream-light, #f5f5dc)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Progress */}
      <div
        className="scroll-indicator position-absolute start-50 translate-middle-x"
        style={{
          bottom: 30,
          cursor: 'pointer',
          zIndex: 3,
          transition: 'all 0.3s ease',
          opacity: scrollProgress > 0.3 ? 0 : 1
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-50%, 0) scale(1.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(-50%, 0) scale(1)';
        }}
      >
        <div
          className="scroll-indicator-wrapper"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-full, 50px)',
            padding: 'var(--space-3, 0.75rem)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: "bounce 2s infinite",
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <i 
            className="fas fa-chevron-down" 
            style={{ 
              fontSize: "1.5rem", 
              color: 'var(--cream-light, #f5f5dc)',
              opacity: 0.9,
              display: 'block'
            }}
          ></i>
          <span 
            className="scroll-text position-absolute"
            style={{
              bottom: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.7rem',
              color: 'var(--cream-light, #f5f5dc)',
              opacity: 0.7,
              whiteSpace: 'nowrap'
            }}
          >
            Scroll Down
          </span>
        </div>
      </div>

      {/* Enhanced CSS Animations and Responsive Design */}
      <style>{`
        /* Performance optimized animations */
        @keyframes bounce {
          0%, 100% { 
            transform: translate(-50%, 0) translateZ(0); 
          }
          50% { 
            transform: translate(-50%, 10px) translateZ(0); 
          }
        }

        @keyframes gradientShift {
          0%, 100% { 
            opacity: 0.8;
          }
          50% { 
            opacity: 0.6;
          }
        }

        /* Optimized floating animations */
        @keyframes float1 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-25px) rotate(180deg) translateZ(0); } 
        }
        @keyframes float2 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-20px) rotate(-180deg) translateZ(0); } 
        }
        @keyframes float3 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-30px) rotate(90deg) translateZ(0); } 
        }
        @keyframes float4 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-22px) rotate(-90deg) translateZ(0); } 
        }
        @keyframes float5 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-28px) rotate(270deg) translateZ(0); } 
        }
        @keyframes float6 { 
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0); } 
          50% { transform: translateY(-18px) rotate(-270deg) translateZ(0); } 
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1) translateZ(0); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) translateZ(0); 
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        /* Button hover effects */
        .hero-btn-primary:hover .btn-shine {
          transform: translateX(100%) !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(2rem, 10vw, 3rem) !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
            padding: 0 1rem;
          }
          
          .hero-cta {
            flex-direction: column !important;
          }
          
          .hero-btn-primary,
          .hero-btn-secondary {
            min-width: 280px !important;
          }
          
          .floating-shapes {
            display: none;
          }
          
          .particles {
            opacity: 0.5;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 100px !important;
          }
        }

        /* Improved accessibility */
        @media (prefers-reduced-motion: reduce) {
          .floating-shapes,
          .particles,
          .hero-gradient {
            animation: none !important;
          }
          
          .hero-content * {
            transition: opacity 0.3s ease !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .hero-section {
            background: #000 !important;
          }
          
          .hero-title,
          .hero-subtitle {
            color: #fff !important;
            -webkit-text-fill-color: #fff !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
