import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { IconCheck, IconFileText, IconImage, IconTarget, IconBriefcase, IconMail } from './icons/Icon';
import { PROJECTS } from '../data/projects';
import { resumeUrl } from '../config/site';
import '../styles/project-detail.css';

// ---------- helpers ----------

// Splits the long description into lead paragraph, body paragraphs and "• " feature lists
// (a short heading line directly above a list becomes that list's title).
function parseDescription(text) {
  if (!text) return [];
  return text
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
      let heading = null;
      let rest = lines;
      if (lines.length > 1 && !lines[0].startsWith('•') && lines.slice(1).every((l) => l.startsWith('•'))) {
        heading = lines[0];
        rest = lines.slice(1);
      }
      if (rest.length > 0 && rest.every((l) => l.startsWith('•'))) {
        return { type: 'list', heading, items: rest.map((l) => l.replace(/^•\s*/, '')) };
      }
      return { type: 'p', text: lines.join(' ') };
    });
}

// "Title: description" strings → { title, description } (splits on the first colon only)
function splitEntry(entry) {
  const i = entry.indexOf(': ');
  return i === -1 ? { title: null, description: entry } : { title: entry.slice(0, i), description: entry.slice(i + 2) };
}

// <img> that swaps to a plain placeholder if the file fails to load. Pass key={src} so it resets.
function SafeImage({ src, alt, className, ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`cs-img-fallback ${className || ''}`} role="img" aria-label={alt}>
        <IconImage size={28} />
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
}

// ---------- page ----------

function CaseStudy({ project, index }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const lightboxRef = useRef(null);
  const lightboxTriggerRef = useRef(null);

  const gallery = project.gallery || [];
  const blocks = parseDescription(project.fullDescription);
  const role = (project.roleAndResponsibilities || []).map(splitEntry);
  const challenges = (project.challenges || []).map(splitEntry);

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const sections = [
    { id: 'overview', label: 'Overview', icon: IconFileText },
    gallery.length > 0 && { id: 'gallery', label: 'Screenshots', icon: IconImage },
    role.length > 0 && { id: 'role', label: 'My role', icon: IconBriefcase },
    challenges.length > 0 && { id: 'challenges', label: 'Challenges', icon: IconTarget },
  ].filter(Boolean);

  // Start each case study at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Highlight the section being read in the "On this page" list
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    document.querySelectorAll('.cs-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToHomeSection = (id) => {
    navigate('/');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
  };

  const showPrevImage = () => setActiveImage((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const showNextImage = () => setActiveImage((i) => (i === gallery.length - 1 ? 0 : i + 1));

  const openLightbox = (e) => {
    lightboxTriggerRef.current = e?.currentTarget ?? null;
    setLightboxOpen(true);
  };

  // Lightbox: move focus in, lock page scroll, and restore focus to the trigger on close
  useEffect(() => {
    if (!lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => lightboxRef.current?.focus());
    const trigger = lightboxTriggerRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(frame);
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [lightboxOpen]);

  // Escape closes, Left/Right browse images, Tab stays trapped inside
  const handleLightboxKeyDown = (e) => {
    if (e.key === 'Escape') return setLightboxOpen(false);
    if (e.key === 'ArrowLeft') { e.preventDefault(); return showPrevImage(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); return showNextImage(); }
    if (e.key !== 'Tab' || !lightboxRef.current) return;
    const focusable = lightboxRef.current.querySelectorAll('button:not([disabled])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const hasLinks = project.demoLink !== '#' || project.codeLink !== '#';

  return (
    <div className="cs" id="main">
      {/* ---- Header ---- */}
      <header className="cs-head">
        <div className="container">
          <button type="button" className="cs-back" onClick={() => goToHomeSection('projects')}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i> All projects
          </button>

          <div className="cs-head-grid">
            <div>
              <span className="eyebrow">{project.personal ? `Personal project · ${project.category}` : project.category}</span>
              <h1 className="cs-title">{project.title}</h1>
              <p className="cs-lede">{project.description}</p>

              <div className="chip-row cs-stack" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

              {hasLinks && (
                <div className="cs-actions">
                  {project.demoLink !== '#' && (
                    <a href={project.demoLink} className="btn-modern-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Live demo
                    </a>
                  )}
                  {project.codeLink !== '#' && (
                    <a href={project.codeLink} className="btn-modern-outline" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github" aria-hidden="true"></i> Source code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <figure className="cs-shot">
            <div className="cs-shot-bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <SafeImage key={project.image} src={project.image} alt={`${project.title} screenshot`} fetchPriority="high" decoding="async" />
          </figure>
        </div>
      </header>

      {/* ---- Body ---- */}
      <div className="container cs-body">
        <article className="cs-main">
          <section id="overview" className="cs-section">
            <h2 className="cs-h2">Overview</h2>
            {blocks.map((block, i) =>
              block.type === 'list' ? (
                <div key={i} className="cs-features">
                  {block.heading && <h3 className="cs-h3">{block.heading.replace(/:$/, '')}</h3>}
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}><IconCheck size={15} /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p key={i} className={i === 0 ? 'cs-p lead-p' : 'cs-p'}>{block.text}</p>
              )
            )}
          </section>

          {gallery.length > 0 && (
            <section id="gallery" className="cs-section">
              <h2 className="cs-h2">Screenshots</h2>

              <div className="cs-gallery">
                <div className="cs-gallery-main">
                  <SafeImage
                    key={gallery[activeImage]}
                    src={gallery[activeImage]}
                    alt={`${project.title} — screenshot ${activeImage + 1} of ${gallery.length}`}
                    loading="lazy"
                    decoding="async"
                    onClick={openLightbox}
                  />
                  <button type="button" className="cs-icon-btn cs-expand" onClick={openLightbox} aria-label="View full size" title="View full size">
                    <i className="fas fa-expand" aria-hidden="true"></i>
                  </button>
                  {gallery.length > 1 && (
                    <>
                      <button type="button" className="cs-icon-btn cs-prev" onClick={showPrevImage} aria-label="Previous screenshot">
                        <i className="fas fa-chevron-left" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="cs-icon-btn cs-next" onClick={showNextImage} aria-label="Next screenshot">
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                      </button>
                      <span className="cs-counter" aria-live="polite">{activeImage + 1} / {gallery.length}</span>
                    </>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="cs-thumbs" role="list">
                    {gallery.map((image, i) => (
                      <button
                        key={image}
                        type="button"
                        role="listitem"
                        className={`cs-thumb ${i === activeImage ? 'active' : ''}`}
                        onClick={() => setActiveImage(i)}
                        aria-label={`Show screenshot ${i + 1}`}
                        aria-current={i === activeImage ? 'true' : undefined}
                      >
                        <SafeImage src={image} alt="" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {role.length > 0 && (
            <section id="role" className="cs-section">
              <h2 className="cs-h2">My role</h2>
              <dl className="cs-role">
                {role.map(({ title, description }) => (
                  <div key={description} className="cs-role-row">
                    {title && <dt>{title}</dt>}
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {challenges.length > 0 && (
            <section id="challenges" className="cs-section">
              <h2 className="cs-h2">Challenges &amp; solutions</h2>
              <ol className="cs-challenges">
                {challenges.map(({ title, description }, i) => (
                  <li key={description}>
                    <span className="cs-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      {title && <h3 className="cs-h3">{title}</h3>}
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </article>

        <aside className="cs-side" aria-label="Case study navigation">
          <nav className="cs-toc" aria-label="On this page">
            <div className="cs-side-label">On this page</div>
            {sections.map((s) => {
              const SectionIcon = s.icon;
              return (
                <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'active' : ''} aria-current={activeSection === s.id ? 'true' : undefined}>
                  <SectionIcon size={15} />{s.label}
                </a>
              );
            })}
          </nav>

          <div className="cs-hire">
            <div className="cs-side-label">Hiring?</div>
            <p>I&rsquo;m open to new roles. Let&rsquo;s talk.</p>
            <button type="button" className="btn-modern-primary" onClick={() => goToHomeSection('contact')}>
              <IconMail size={16} /> Get in touch
            </button>
            {resumeUrl && (
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="cs-resume-link">
                <i className="fas fa-file-arrow-down" aria-hidden="true"></i> Download résumé
              </a>
            )}
          </div>
        </aside>
      </div>

      {/* ---- More projects ---- */}
      <section className="cs-more" aria-label="More projects">
        <div className="container">
          {/* The sidebar CTA is hidden on small screens, so repeat it here for them */}
          <div className="cs-hire cs-hire-mobile">
            <p>Like what you see? I&rsquo;m open to new roles.</p>
            <button type="button" className="btn-modern-primary" onClick={() => goToHomeSection('contact')}>
              <IconMail size={16} /> Get in touch
            </button>
          </div>

          <div className="cs-more-grid">
            {[{ p: prev, dir: 'Previous project', arrow: 'left' }, { p: next, dir: 'Next project', arrow: 'right' }].map(({ p, dir, arrow }) => (
              <Link key={dir} to={`/project/${p.id}`} className={`cs-more-card ${arrow}`}>
                <SafeImage key={p.image} src={p.image} alt="" loading="lazy" decoding="async" />
                <span className="cs-more-text">
                  <small>
                    {arrow === 'left' && <i className="fas fa-arrow-left" aria-hidden="true"></i>} {dir}{' '}
                    {arrow === 'right' && <i className="fas fa-arrow-right" aria-hidden="true"></i>}
                  </small>
                  <strong>{p.title}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Lightbox ---- */}
      {lightboxOpen && gallery.length > 0 && (
        <div className="cs-lightbox" onClick={() => setLightboxOpen(false)}>
          <div
            className="cs-lightbox-inner"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} — screenshot ${activeImage + 1} of ${gallery.length}`}
            ref={lightboxRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleLightboxKeyDown}
          >
            <button type="button" className="cs-icon-btn cs-lb-close" onClick={() => setLightboxOpen(false)} aria-label="Close full-size view">
              <i className="fas fa-xmark" aria-hidden="true"></i>
            </button>
            <img src={gallery[activeImage]} alt={`${project.title} — screenshot ${activeImage + 1}`} decoding="async" />
            {gallery.length > 1 && (
              <>
                <button type="button" className="cs-icon-btn cs-lb-prev" onClick={showPrevImage} aria-label="Previous screenshot">
                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button type="button" className="cs-icon-btn cs-lb-next" onClick={showNextImage} aria-label="Next screenshot">
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button>
                <span className="cs-counter cs-lb-counter" aria-live="polite">{activeImage + 1} / {gallery.length}</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = PROJECTS.findIndex((p) => p.id === parseInt(id, 10));

  if (index === -1) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '70vh', paddingTop: '8rem' }} id="main">
        <h1 className="section-heading mb-3" style={{ fontSize: '2rem' }}>Project not found</h1>
        <p className="section-subtitle mb-4">The project you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <button type="button" className="btn-modern-primary" onClick={() => navigate('/')}>Back to home</button>
      </div>
    );
  }

  // key resets gallery/lightbox state when moving between projects
  return <CaseStudy key={PROJECTS[index].id} project={PROJECTS[index]} index={index} />;
}

export default ProjectDetail;
