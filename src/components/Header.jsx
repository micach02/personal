import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Fallback method to detect active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 150; // Offset for header height
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Track active section for highlighting nav items
  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
    const observerOptions = {
      threshold: [0.1, 0.25, 0.5, 0.75],
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0;
      let activeEntry = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });
      
      if (activeEntry) {
        setActiveSection(activeEntry.target.id);
      }
    }, observerOptions);

    // Only observe sections when on the home page
    if (location.pathname === '/') {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
      });
    } else {
      // Clear active section when not on home page
      setActiveSection('');
    }

    return () => observer.disconnect();
  }, [location.pathname]);
  
  const handleNavigation = (href) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { label: 'About', href: '#about', icon: '👨‍💻' },
    { label: 'Skills', href: '#skills', icon: '🚀' },
    { label: 'Experience', href: '#experience', icon: '💼' },
    { label: 'Education', href: '#education', icon: '🎓' },
    { label: 'Projects', href: '#projects', icon: '💡' },
    { label: 'Contact', href: '#contact', icon: '📧' }
  ];

  return (
    <header
      className="fixed-top shadow-lg"
      style={{
        background: scrolled 
          ? "rgba(27, 31, 59, 0.95)" 
          : "rgba(27, 31, 59, 0.85)",
        color: "white",
        zIndex: 1030,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all 0.3s ease-in-out",
        borderBottom: scrolled ? "1px solid rgba(255, 111, 60, 0.2)" : "none",
        padding: scrolled ? "0.5rem 0" : "1rem 0"
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center position-relative">
          {/* Enhanced Brand/Logo */}
          <div 
            className="fw-bold d-flex align-items-center gap-2 position-relative"
            style={{ 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div
              style={{
                fontSize: scrolled ? 24 : 28,
                background: "linear-gradient(135deg, #FF6F3C, #00A8E8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}
            >
              MV
            </div>
            <span 
              className="d-none d-md-inline"
              style={{
                fontSize: scrolled ? 14 : 16,
                background: "linear-gradient(135deg, #fff, #e0e0e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "all 0.3s ease"
              }}
            >
              Michael Vincent
            </span>
            {/* Subtle glow effect */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255, 111, 60, 0.1) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                zIndex: -1,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              className="logo-glow"
            />
          </div>

          {/* Enhanced Hamburger for mobile */}
          <button
            className="d-md-none btn btn-link p-2 border-0 position-relative"
            aria-label="Toggle navigation"
            style={{ 
              color: "#FF6F3C", 
              fontSize: 24,
              transition: 'all 0.3s ease',
              background: 'rgba(255, 111, 60, 0.1)',
              borderRadius: '8px'
            }}
            onClick={() => setMenuOpen((open) => !open)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 111, 60, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 111, 60, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div style={{ position: 'relative', width: '24px', height: '24px' }}>
              <span 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: '#FF6F3C',
                  top: menuOpen ? '50%' : '20%',
                  transform: menuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%)',
                  transition: 'all 0.3s ease'
                }}
              />
              <span 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: '#FF6F3C',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: menuOpen ? 0 : 1,
                  transition: 'all 0.3s ease'
                }}
              />
              <span 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: '#FF6F3C',
                  top: menuOpen ? '50%' : '80%',
                  transform: menuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center gap-1">
            {menuItems.map((item, index) => (
              <button 
                key={item.href}
                className="btn position-relative overflow-hidden"
                style={{
                  color: activeSection === item.href.slice(1) ? '#FF6F3C' : '#fff',
                  border: 'none',
                  background: activeSection === item.href.slice(1) 
                    ? 'rgba(255, 111, 60, 0.15)' 
                    : 'transparent',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  margin: '0 4px',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  boxShadow: activeSection === item.href.slice(1) 
                    ? '0 2px 8px rgba(255, 111, 60, 0.3)' 
                    : 'none'
                }}
                onClick={() => handleNavigation(item.href)}
                onMouseEnter={(e) => {
                  if (activeSection !== item.href.slice(1)) {
                    e.currentTarget.style.background = 'rgba(255, 111, 60, 0.1)';
                    e.currentTarget.style.color = '#FF6F3C';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 111, 60, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href.slice(1)) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="me-2" style={{ fontSize: '16px' }}>
                  {item.icon}
                </span>
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '60%',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #FF6F3C, transparent)',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Enhanced Mobile menu */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            background: 'rgba(27, 31, 59, 0.98)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '0 0 20px 20px',
            padding: menuOpen ? '1.5rem' : '0',
            maxHeight: menuOpen ? '400px' : '0',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: menuOpen ? '1px solid rgba(255, 111, 60, 0.2)' : 'none',
            borderTop: 'none',
            boxShadow: menuOpen ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
            zIndex: 1000
          }}
          className="d-md-none"
        >
          {menuItems.map((item, index) => (
            <button
              key={item.href}
              className="d-block btn w-100 text-start mb-2"
              style={{
                background: activeSection === item.href.slice(1) 
                  ? 'rgba(255, 111, 60, 0.15)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: activeSection === item.href.slice(1) ? '#FF6F3C' : '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '15px',
                fontWeight: '500',
                transition: `all 0.3s ease ${index * 0.1}s`,
                transform: menuOpen ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.95)',
                opacity: menuOpen ? 1 : 0,
                boxShadow: activeSection === item.href.slice(1) 
                  ? '0 2px 8px rgba(255, 111, 60, 0.3)' 
                  : 'none'
              }}
              onClick={() => handleNavigation(item.href)}
            >
              <span className="me-3" style={{ fontSize: '18px' }}>
                {item.icon}
              </span>
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span 
                  className="float-end"
                  style={{ 
                    color: '#FF6F3C',
                    fontSize: '12px',
                    marginTop: '2px'
                  }}
                >
                  ●
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .logo-glow:hover {
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }
        
        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
}

export default Header;
