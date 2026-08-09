import {
  IconGlobe, IconZap, IconShield, IconAtom, IconCode, IconLayoutGrid, IconEdit, IconGitBranch,
  IconPalette, IconTarget, IconLayers, IconImage, IconFilm, IconTerminal, IconBox,
  IconMonitor, IconTool, IconBrush
} from './icons/Icon';

const programmingSkills = [
  { name: 'HTML5', level: 95, icon: IconGlobe, color: '#e34c26' },
  { name: 'CSS3', level: 90, icon: IconBrush, color: '#264de4' },
  { name: 'JavaScript (ES6+)', level: 92, icon: IconZap, color: '#f7df1e' },
  { name: 'TypeScript', level: 80, icon: IconShield, color: '#3178c6' },
  { name: 'React.js', level: 88, icon: IconAtom, color: '#61dafb' },
  { name: 'PHP', level: 70, icon: IconCode, color: '#777bb4' },
  { name: 'Bootstrap', level: 85, icon: IconLayoutGrid, color: '#7952b3' },
  { name: 'WordPress', level: 75, icon: IconEdit, color: '#21759b' },
  { name: 'Git & GitHub', level: 85, icon: IconGitBranch, color: '#f05032' },
];

const softwareSkills = [
  { name: 'Canva', level: 85, icon: IconPalette, color: '#00c4cc' },
  { name: 'Adobe XD', level: 75, icon: IconTarget, color: '#ff61f6' },
  { name: 'Figma', level: 80, icon: IconLayers, color: '#f24e1e' },
  { name: 'Adobe Photoshop', level: 70, icon: IconImage, color: '#31a8ff' },
  { name: 'Adobe Animate', level: 65, icon: IconFilm, color: '#cc2936' },
  { name: 'VS Code', level: 95, icon: IconTerminal, color: '#007acc' },
  { name: 'Blender', level: 60, icon: IconBox, color: '#e87d0d' },
];

function ProficiencyDots({ level, color }) {
  const filled = Math.round(level / 20);
  return (
    <div className="d-flex gap-1 mt-2" role="img" aria-label={`${level}% proficiency`} title={`${level}% proficiency`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          style={{
            width: '14px',
            height: '4px',
            borderRadius: '2px',
            background: i < filled ? color : 'var(--border-subtle)',
            transition: 'background 0.3s ease'
          }}
        />
      ))}
    </div>
  );
}

function SkillGroup({ title, icon, accent, skills, delayBase }) {
  const GroupIcon = icon;
  return (
    <div className="mb-5">
      <div className="d-flex align-items-center gap-3 mb-4" data-aos="fade-up">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
          style={{ width: '52px', height: '52px', background: `${accent}1f`, border: `1.5px solid ${accent}55`, color: accent }}
        >
          <GroupIcon size={24} />
        </div>
        <h3 className="section-heading mb-0" style={{ fontSize: '1.5rem' }}>{title}</h3>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="col" data-aos="fade-up" data-aos-delay={delayBase + index * 60}>
            <div className="glass-card interactive p-3 d-flex align-items-center gap-3 h-100">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '48px', height: '48px', background: `${skill.color}1f`, border: `1.5px solid ${skill.color}55`, color: skill.color }}
              >
                <skill.icon size={22} />
              </div>
              <div className="flex-grow-1">
                <div className="fw-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{skill.name}</div>
                <ProficiencyDots level={skill.level} color={skill.color} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const avg = (list) => Math.round(list.reduce((acc, s) => acc + s.level, 0) / list.length);

  const summary = [
    { number: programmingSkills.length, label: 'Programming Skills', color: 'var(--teal-300)' },
    { number: softwareSkills.length, label: 'Design Tools', color: 'var(--orange-300)' },
    { number: `${avg(programmingSkills)}%`, label: 'Avg Programming', color: 'var(--teal-300)' },
    { number: `${avg(softwareSkills)}%`, label: 'Avg Design Tools', color: 'var(--orange-300)' },
  ];

  return (
    <section id="skills" className="section-modern alt">
      <div className="section-glow" style={{ width: 460, height: 460, top: -160, right: -160, background: 'radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)' }} />
      <div className="section-glow" style={{ width: 420, height: 420, bottom: -140, left: -140, background: 'radial-gradient(circle, rgba(26,122,117,0.25), transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="eyebrow mb-3"><IconZap size={14} />Skills</span>
          <h2 className="section-heading display-4 mt-3 mb-3">Technologies I Work With</h2>
          <p className="section-subtitle lead mx-auto" style={{ maxWidth: '620px' }}>
            Tools and technologies that drive my development journey
          </p>
        </div>

        <SkillGroup title="Programming & Frameworks" icon={IconMonitor} accent="var(--teal-300)" skills={programmingSkills} delayBase={0} />
        <SkillGroup title="Design & Development Tools" icon={IconTool} accent="var(--orange-300)" skills={softwareSkills} delayBase={100} />

        {/* Summary stats */}
        <div className="glass-card p-4 p-md-5" data-aos="fade-up">
          <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
            {summary.map((item, i) => (
              <div className="col" key={i}>
                <div className="section-heading display-6 mb-1" style={{ color: item.color }}>{item.number}</div>
                <div className="section-subtitle small">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
