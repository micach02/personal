import { IconBriefcase, IconCheck, IconCalendar, IconMapPin } from './icons/Icon';
import { getYearsOfExperience } from '../config/site';

const BASE = import.meta.env.BASE_URL;

const experiences = [
  {
    id: 1,
    title: 'Web Application Developer',
    company: 'PV Multimedia Inc.',
    logo: `${BASE}images/pvm_logo.svg`,
    logoDark: true,
    period: 'June 2017 – Present',
    location: 'On-site',
    type: 'Full-time',
    primary: true,
    description:
      'Develop and maintain web applications for corporate and e-learning systems, working with designers and stakeholders to turn UI/UX concepts, storyboards and wireframes into responsive, production-ready apps.',
    achievements: [
      'Built interactive banking simulation modules with dynamic graphs, balance-sheet calculations and financial reporting',
      'Migrated legacy Adobe Edge Animate projects to modern native HTML, CSS and JavaScript',
      'Developed and maintained a web-based project tracking application with real-time dashboards, reporting and workflow tracking',
      'Integrated dynamic charts and dashboards using Chart.js',
      'Created responsive WordPress websites and custom front-end interfaces',
      'Created animated 3D avatar tutors for educational content',
      'Use AI tools to speed up development, debugging and code refactoring',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'Chart.js', 'WordPress', 'Figma'],
  },
  {
    id: 2,
    title: 'Technician (Intern)',
    company: 'Channel Technologies Inc.',
    logo: `${BASE}images/channel_technologies_inc_logo.jpg`,
    period: 'Oct 2016 – Mar 2017',
    location: 'On-site',
    type: 'Internship',
    description:
      'Assisted senior technicians with installing and testing POS machines in retail stores and money-transfer facilities, gaining hands-on experience in hardware installation, system testing and field support.',
  },
  {
    id: 3,
    title: 'Technician (Intern)',
    company: 'Cebu City Hall — MICS Department',
    logo: `${BASE}images/cebu_city.png`,
    period: 'April – June 2016',
    location: 'On-site',
    type: 'Internship',
    description:
      'Assisted senior technicians with software installation and updates across city hall departments, gaining experience in technical support and system maintenance in a government environment.',
  },
];

function Experience() {
  const years = getYearsOfExperience();

  return (
    <section id="experience" className="section-modern alt section-compact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow"><IconBriefcase size={14} />Experience</span>
          <h2 className="section-heading">Where I&rsquo;ve worked</h2>
          <p className="section-subtitle">{years}+ years building e-learning and web applications at PV Multimedia.</p>
        </div>

        <div className="xp-list">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className={`xp-card ${exp.primary ? 'primary' : 'compact'}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="xp-top">
                <div className={`xp-logo ${exp.logoDark ? 'dark' : ''}`}>
                  <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3 className="xp-title">{exp.title}</h3>
                  <div className="xp-company">{exp.company}</div>
                  <div className="xp-meta">
                    <span><IconCalendar size={14} />{exp.period}</span>
                    <span><IconMapPin size={14} />{exp.location}</span>
                    <span><IconBriefcase size={14} />{exp.type}</span>
                  </div>
                </div>
              </div>

              <p className="xp-desc">{exp.description}</p>

              {exp.achievements && (
                <ul className="xp-points">
                  {exp.achievements.map((point) => (
                    <li key={point}><IconCheck size={16} /><span>{point}</span></li>
                  ))}
                </ul>
              )}

              {exp.technologies && (
                <div className="chip-row mb-0">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
