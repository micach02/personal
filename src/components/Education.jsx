import { IconGraduationCap, IconAward } from './icons/Icon';

const education = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'Cebu Institute of Technology – University',
  period: '2012 – 2017',
  description:
    'Graduated with a specialisation in Software Development and Database Management, with training in programming fundamentals, systems analysis and project management.',
  capstone: 'Capstone project: School Library Management System',
};

function Education() {
  return (
    <section id="education" className="section-modern section-compact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow"><IconGraduationCap size={14} />Education</span>
          <h2 className="section-heading">Academic foundation</h2>
        </div>

        <div className="xp-card" data-aos="fade-up">
          <div className="xp-top mb-3">
            <div className="xp-logo">
              <img
                src={`${import.meta.env.BASE_URL}images/citu.png`}
                alt="Cebu Institute of Technology – University logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h3 className="xp-title">{education.degree}</h3>
              <div className="xp-company">{education.institution}</div>
              <div className="xp-meta"><span>{education.period}</span></div>
            </div>
          </div>
          <p className="xp-desc">{education.description}</p>
          <div className="d-flex align-items-center gap-2" style={{ color: 'var(--teal-300)' }}>
            <IconAward size={18} />
            <span className="section-subtitle">{education.capstone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
