import { site, resumeUrl, getYearsOfExperience } from '../config/site';
import { PROJECTS } from '../data/projects';
import { IconBriefcase, IconMapPin, IconCode, IconMail } from './icons/Icon';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function Hero() {
  const years = getYearsOfExperience();

  const snapshot = [
    { icon: IconBriefcase, label: 'Currently', value: 'Web Application Developer at PV Multimedia Inc.' },
    { icon: IconCode, label: 'Builds with', value: 'JavaScript, TypeScript, React, PHP & MySQL' },
    { icon: IconMapPin, label: 'Based in', value: `${site.location} · open to remote` },
    { icon: IconMail, label: 'Reach me', value: site.email },
  ];

  const stats = [
    { num: `${years}+`, label: 'Years building for the web' },
    { num: 'Full-stack', label: 'JavaScript front-ends with PHP & MySQL back-ends' },
    { num: PROJECTS.length, label: 'Case studies below' },
  ];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            {site.openToWork && (
              <span className="status-pill" data-aos="fade-up">
                <span className="status-dot" aria-hidden="true"></span>
                Open to new opportunities
              </span>
            )}

            <h1 id="hero-title" className="hero-title" data-aos="fade-up" data-aos-delay="80">
              Hi, I&rsquo;m <span className="accent">{site.shortName}</span>.
            </h1>
            <div className="hero-role" data-aos="fade-up" data-aos-delay="140">{site.role}</div>

            <p className="hero-pitch" data-aos="fade-up" data-aos-delay="200">
              I build fast, responsive web applications &mdash; from interactive e-learning modules to internal
              production tools &mdash; working closely with designers to turn UI/UX concepts into production-ready apps.
            </p>

            <div className="hero-cta" data-aos="fade-up" data-aos-delay="260">
              <button type="button" className="btn-modern-primary" onClick={() => scrollTo('projects')}>
                View my work <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
              {resumeUrl && (
                <a className="btn-modern-outline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-arrow-down" aria-hidden="true"></i> Résumé
                </a>
              )}
              <button type="button" className="btn-modern-outline" onClick={() => scrollTo('contact')}>
                Contact me
              </button>
            </div>

            <div className="hero-links" data-aos="fade-up" data-aos-delay="320">
              <span className="label">Find me on</span>
              {site.social.slice(0, 2).map((s) => (
                <a key={s.label} className="icon-link" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                  <i className={s.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <aside className="snapshot" aria-label="At a glance">
              <div className="snapshot-profile">
                <img
                  src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
                  alt={`Portrait of ${site.name}`}
                  width="72"
                  height="72"
                  fetchPriority="high"
                  decoding="async"
                />
                <div>
                  <div className="name">{site.name}</div>
                  <div className="role">{site.role}</div>
                </div>
              </div>
              {snapshot.map((row) => {
                const RowIcon = row.icon;
                return (
                  <div className="snapshot-row" key={row.label}>
                    <div className="snapshot-ico"><RowIcon size={18} /></div>
                    <div>
                      <div className="k">{row.label}</div>
                      <div className="v">{row.value}</div>
                    </div>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>

        <div className="stat-strip" data-aos="fade-up" data-aos-delay="100">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
