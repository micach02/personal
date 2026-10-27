import { IconZap, IconMonitor, IconTerminal, IconPalette, IconCode } from './icons/Icon';

const groups = [
  {
    title: 'Front-end',
    icon: IconMonitor,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'React', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Chart.js'],
  },
  {
    title: 'Back-end & data',
    icon: IconCode,
    warm: true,
    skills: ['PHP', 'MySQL', 'SQL / PDO', 'Supabase (Postgres, RLS, Auth)', 'REST API integration', 'WordPress'],
  },
  {
    title: 'Tools & workflow',
    icon: IconTerminal,
    skills: ['Git & GitHub', 'VS Code', 'XAMPP', 'FileZilla', 'Vite', 'Cross-browser testing', 'Performance optimization'],
  },
  {
    title: 'Design & AI tools',
    icon: IconPalette,
    warm: true,
    skills: ['Figma', 'Photoshop', 'Adobe Creative Suite', 'Adobe Animate', 'Claude', 'ChatGPT', 'GitHub Copilot'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-modern section-compact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow"><IconZap size={14} />Skills</span>
          <h2 className="section-heading">The toolkit I use day to day</h2>
          <p className="section-subtitle">
            Front-end first, with PHP and MySQL behind it, plus the design background to work closely with
            designers and AI tooling to move faster.
          </p>
        </div>

        <div className="skill-groups">
          {groups.map((group, index) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.title}
                className={`skill-group ${group.warm ? 'warm' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <h3>
                  <span className="ico"><GroupIcon size={18} /></span>
                  {group.title}
                </h3>
                <ul className="chip-row list-unstyled mb-0">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
