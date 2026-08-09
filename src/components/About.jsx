import { useState } from 'react';
import { IconUser, IconBriefcase, IconZap, IconRocket, IconMapPin, IconClock } from './icons/Icon';

const EXPERIENCE_START = new Date(2017, 5, 1); // June 2017, per Experience section

function getYearsOfExperience(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  const hadAnniversaryThisYear =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() >= startDate.getDate());
  if (!hadAnniversaryThisYear) years--;
  return years;
}

function About() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const yearsOfExperience = getYearsOfExperience(EXPERIENCE_START);

  const stats = [
    { number: `${yearsOfExperience}+`, label: 'Years Experience', description: 'Professional development experience', icon: IconBriefcase },
    { number: '24/7', label: 'Available', description: 'Ready for new challenges', icon: IconZap }
  ];

  return (
    <section id="about" className="section-modern">
      <div className="section-glow" style={{ width: 500, height: 500, top: -180, left: -180, background: 'radial-gradient(circle, rgba(26,122,117,0.28), transparent 70%)' }} />
      <div className="section-glow" style={{ width: 420, height: 420, bottom: -140, right: -140, background: 'radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="eyebrow mb-3"><IconUser size={14} />About Me</span>
        </div>

        <div className="row align-items-center g-5 mb-5">
          {/* Profile photo */}
          <div className="col-lg-4 text-center" data-aos="fade-right">
            <div className="position-relative d-inline-block">
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: '260px',
                  height: '260px',
                  top: '-10px',
                  left: '-10px',
                  background: 'conic-gradient(from 0deg, var(--teal-500), var(--orange-500), var(--teal-500))',
                  animation: 'spin 14s linear infinite',
                  opacity: 0.55,
                  filter: 'blur(1px)'
                }}
              />
              <div className="glass-card position-relative p-2 d-inline-flex" style={{ zIndex: 1 }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/michael2.jpg`}
                  alt="Michael - Web Developer"
                  loading="lazy"
                  decoding="async"
                  className="rounded-circle"
                  style={{
                    width: '220px',
                    height: '220px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.08)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              <div
                className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '54px', height: '54px', top: '-6px', right: '-10px',
                  background: 'var(--brand-gradient)', boxShadow: 'var(--shadow-glow-orange)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <span className="text-white fw-bold">{yearsOfExperience}+</span>
              </div>
              <div
                className="glass-card position-absolute rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '48px', height: '48px', bottom: '4px', left: '-14px', color: 'var(--teal-300)', animation: 'float 3s ease-in-out infinite 1.5s' }}
              >
                <IconRocket size={22} />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="col-lg-8" data-aos="fade-left">
            <h3 className="section-heading mb-3">Hello! I&rsquo;m Michael</h3>
            <p className="section-subtitle lh-lg mb-3 fs-5">
              A passionate <strong style={{ color: 'var(--orange-300)' }}>Web Application Developer</strong> at PV Multimedia Inc.,
              dedicated to creating exceptional digital experiences that bridge the gap between innovative design and robust functionality.
            </p>
            <p className="section-subtitle lh-lg mb-3">
              With over <strong style={{ color: 'var(--teal-300)' }}>{yearsOfExperience} years of hands-on experience</strong>, I specialize in modern web technologies
              and have a genuine love for clean, efficient code that makes a difference. My journey in tech has been driven by curiosity,
              continuous learning, and a passion for solving complex problems with elegant solutions.
            </p>
            <p className="section-subtitle lh-lg mb-4">
              When I&rsquo;m not coding, you&rsquo;ll find me exploring new cuisines <strong style={{ color: 'var(--orange-300)' }}>(especially authentic ramen!)</strong>,
              traveling to discover new cultures, capturing moments through photography, or staying active through fitness. I believe that diverse experiences
              make me a better developer and a more creative problem-solver.
            </p>

            {/* Quick facts */}
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="glass-card p-3 d-flex align-items-center gap-3">
                  <div style={{ color: 'var(--teal-300)' }}><IconMapPin size={22} /></div>
                  <div>
                    <small className="section-subtitle d-block">Location</small>
                    <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>Remote & On-site</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="glass-card p-3 d-flex align-items-center gap-3">
                  <div style={{ color: 'var(--orange-300)' }}><IconClock size={22} /></div>
                  <div>
                    <small className="section-subtitle d-block">Availability</small>
                    <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>Full-time & Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div className="col-md-5 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div
                  className="glass-card interactive text-center p-4 h-100"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div
                    className="d-inline-flex mb-3 p-3 rounded-circle"
                    style={{
                      background: 'rgba(255, 107, 53, 0.12)',
                      color: 'var(--orange-400, #ff8c5a)',
                      transform: hoveredStat === index ? 'scale(1.1) rotate(8deg)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <StatIcon size={30} />
                  </div>
                  <h3 className="section-heading display-6 mb-1">{stat.number}</h3>
                  <div className="section-subtitle fw-semibold mb-1">{stat.label}</div>
                  <small className="section-subtitle opacity-75">{stat.description}</small>
                </div>
              </div>
            );
          })}
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
      `}</style>
    </section>
  );
}

export default About;
