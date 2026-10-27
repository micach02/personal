import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { site } from '../config/site';

const SECTION_IDS = ['projects', 'experience', 'skills', 'about', 'education', 'contact'];

const menuItems = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const progressRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close the mobile menu on Escape, or on a click/tap outside the header
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Header background + scroll progress bar (written straight to the DOM so scrolling doesn't re-render)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section sitting in the upper-middle band of the viewport
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Above the first section (the hero) nothing should be highlighted
    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHome]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigation = (id) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToId(id), 120);
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const current = isHome ? activeSection : '';

  return (
    <header ref={headerRef} className={`site-header ${scrolled || menuOpen ? 'scrolled' : ''}`}>
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="container">
        <div className="site-header-inner">
          <button type="button" className="brand" onClick={goHome} aria-label={`${site.name} — go to top`}>
            <span className="brand-mark">{site.initials}</span>
            <span className="brand-name d-none d-sm-inline">{site.shortName}</span>
          </button>

          <nav className="nav-links" aria-label="Primary">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-link-btn ${current === item.id ? 'active' : ''}`}
                aria-current={current === item.id ? 'true' : undefined}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button type="button" className="btn-modern-primary nav-cta" onClick={() => handleNavigation('contact')}>
              Get in touch
            </button>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div id="mobile-nav-menu" className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav-inner">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link-btn ${current === item.id ? 'active' : ''}`}
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className="btn-modern-primary" onClick={() => handleNavigation('contact')}>
            Get in touch
          </button>
        </div>
      </div>

      <div ref={progressRef} className="scroll-progress" style={{ width: '100%', transform: 'scaleX(0)' }} aria-hidden="true" />
    </header>
  );
}

export default Header;
