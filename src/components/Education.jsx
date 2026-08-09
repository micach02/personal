import {
  IconGraduationCap, IconLandmark,
  IconAward, IconCheck, IconBookOpen
} from './icons/Icon';

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology",
    institution: "Cebu Institute of Technology - University",
    period: "2012 - 2017",
    description: "Graduated with specialization in Software Development and Database Management. Gained comprehensive knowledge in programming fundamentals, system analysis, and project management.",
    icon: IconGraduationCap,
    color: "#1a7a75",
    achievements: [
      "Capstone project: School Library Management System"
    ],
    curriculum: [
      "Comprehensive training in software development, networking, databases, and systems analysis",
      "Hands-on experience in programming, web development, and IT infrastructure",
      "Developed strong skills in problem-solving, software engineering, and project collaboration",
      "Completed capstone projects and internships simulating real-world IT challenges"
    ]
  }
];

function Education() {
  return (
    <section id="education" className="section-modern alt">
      <div className="section-glow" style={{ width: 460, height: 460, top: -160, right: -160, background: 'radial-gradient(circle, rgba(26,122,117,0.25), transparent 70%)' }} />
      <div className="section-glow" style={{ width: 420, height: 420, bottom: -140, left: -140, background: 'radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="eyebrow mb-3"><IconGraduationCap size={14} />Education</span>
          <h2 className="section-heading display-4 mt-3 mb-3">Education & Growth</h2>
          <p className="section-subtitle lead mx-auto" style={{ maxWidth: '620px' }}>
            My continuous journey of learning and professional development
          </p>
        </div>

        {/* Formal education */}
        <div className="mb-5">
          <h3 className="section-heading text-center mb-4 d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" style={{ fontSize: '1.5rem' }}>
            <IconLandmark size={22} style={{ color: 'var(--teal-300)' }} />
            Academic Foundation
          </h3>

          {education.map((edu, index) => (
            <div key={edu.id} className="row justify-content-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="col-lg-10">
                <div className="glass-card interactive position-relative overflow-hidden">
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${edu.color}, ${edu.color}80)` }} />

                  <div className="p-4 p-lg-5">
                    <div className="row align-items-center g-4">
                      <div className="col-md-8">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{ width: '56px', height: '56px', background: `${edu.color}1f`, border: `1.5px solid ${edu.color}55`, color: edu.color }}
                          >
                            <edu.icon size={26} />
                          </div>
                          <span
                            className="pill-tag"
                            style={{ borderColor: `${edu.color}55`, color: edu.color, background: `${edu.color}15` }}
                          >
                            {edu.period}
                          </span>
                        </div>

                        <h4 className="section-heading mb-2">{edu.degree}</h4>
                        <h5 className="section-subtitle mb-3" style={{ fontWeight: 400 }}>{edu.institution}</h5>
                        <p className="section-subtitle mb-0" style={{ lineHeight: 1.8 }}>{edu.description}</p>
                      </div>

                      <div className="col-md-4 text-center">
                        <div
                          className="rounded-circle d-inline-flex align-items-center justify-content-center p-3"
                          style={{ width: '120px', height: '120px', background: '#fff', border: `3px solid ${edu.color}40` }}
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}images/citu.png`}
                            alt="Cebu Institute of Technology - University Logo"
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                          />
                        </div>
                      </div>
                    </div>

                    {(edu.achievements || edu.curriculum) && (
                      <div className="row mt-4 g-4">
                        {edu.achievements && (
                          <div className="col-md-6">
                            <h6 className="section-heading mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                              <IconAward size={18} style={{ color: edu.color }} />
                              Key Achievements
                            </h6>
                            <ul className="list-unstyled">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start gap-2">
                                  <span style={{ color: edu.color }}><IconCheck size={16} /></span>
                                  <span className="section-subtitle">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.curriculum && (
                          <div className="col-md-6">
                            <h6 className="section-heading mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                              <IconBookOpen size={18} style={{ color: edu.color }} />
                              Curriculum Highlights
                            </h6>
                            <ul className="list-unstyled">
                              {edu.curriculum.slice(0, 3).map((item, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start gap-2">
                                  <span style={{ color: edu.color }}>&bull;</span>
                                  <span className="section-subtitle" style={{ fontSize: '0.95rem' }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
