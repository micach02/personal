import { useEffect } from 'react';
import AOS from 'aos';
import { IconBriefcase, IconGraduationCap, IconTarget, IconCheck, IconZap, IconCalendar, IconMapPin } from './icons/Icon';

const experiences = [
  {
    id: 1,
    title: "Web App Developer",
    company: "PV Multimedia Inc.",
    logo: "/personal/images/pvm_logo.svg",
    period: "June 2017 - Present",
    location: "On-site",
    type: "Full-time",
    description: "Team Lead Front-end Development responsible for collaborating with designers and stakeholders in designing UI/UX elements. Translate storyboards and wireframes into responsive web applications, develop and maintain interactive e-learning modules using HTML5, JavaScript, and CSS. Create animated 3D avatar tutors for educational content and develop simulation apps using PHP and JavaScript.",
    technologies: ["HTML5", "JavaScript", "CSS", "PHP", "Adobe Creative Suite", "3D Animation"],
    achievements: [
      "Led front-end development team for multiple e-learning projects",
      "Created animated 3D avatar tutors for educational content",
      "Developed interactive simulation apps and e-learning modules",
      "Translated complex storyboards into responsive web applications"
    ],
    icon: IconBriefcase,
    color: "#ff6b35"
  },
  {
    id: 2,
    title: "Technician",
    company: "Channel Technologies Inc.",
    logo: "/personal/images/channel_technologies_inc_logo.jpg",
    period: "Oct 2016 - Mar 2017",
    location: "On-site",
    type: "Internship",
    description: "Assisted senior technicians with the installation and testing of POS machines in various retail stores and money transfer facilities. Gained hands-on experience in hardware installation and system testing procedures.",
    technologies: ["POS Systems", "Hardware Installation", "System Testing", "Technical Support"],
    achievements: [
      "Successfully assisted with POS machine installations across multiple locations",
      "Gained experience in retail and financial technology systems",
      "Learned hardware testing and troubleshooting procedures",
      "Developed field service and customer support skills"
    ],
    icon: IconGraduationCap,
    color: "#1a7a75"
  },
  {
    id: 3,
    title: "Technician",
    company: "CEBU CITY HALL, MICS Department",
    logo: "/personal/images/cebu_city.png",
    period: "April - June 2016",
    location: "On-site",
    type: "Internship",
    description: "Assisted senior technicians with software installation and updates across city hall departments. Gained valuable experience in technical support and system maintenance in a government environment.",
    technologies: ["Windows OS", "Software Installation", "System Updates", "Technical Support"],
    achievements: [
      "Successfully assisted with software installations across multiple departments",
      "Gained experience in government IT infrastructure",
      "Learned system maintenance and troubleshooting procedures",
      "Developed technical support skills in a professional environment"
    ],
    icon: IconGraduationCap,
    color: "#1a7a75"
  }
];

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="section-modern">
      <div className="section-glow" style={{ width: 480, height: 480, top: -160, left: -160, background: 'radial-gradient(circle, rgba(26,122,117,0.25), transparent 70%)' }} />
      <div className="section-glow" style={{ width: 420, height: 420, bottom: -140, right: -140, background: 'radial-gradient(circle, rgba(255,107,53,0.2), transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="eyebrow mb-3"><IconBriefcase size={14} />Experience</span>
          <h2 className="section-heading display-4 mt-3 mb-3">Work Experience</h2>
          <p className="section-subtitle lead mx-auto" style={{ maxWidth: '620px' }}>
            My professional journey and career milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="position-relative">
          <div
            className="position-absolute d-none d-lg-block"
            style={{
              left: '30px', top: '20px', bottom: '20px', width: '2px',
              background: 'linear-gradient(to bottom, var(--teal-500), var(--orange-500))',
              opacity: 0.35
            }}
          />

          <div className="row">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="col-12 mb-4" data-aos="fade-up" data-aos-delay={index * 120}>
                <div className="position-relative">
                  <div
                    className="position-absolute d-none d-lg-block"
                    style={{
                      left: '19px', top: '38px', width: '22px', height: '22px', borderRadius: '50%',
                      background: exp.color, border: '4px solid var(--bg-base)', boxShadow: `0 0 0 3px ${exp.color}55`, zIndex: 2
                    }}
                  />

                  <div className="glass-card interactive ms-lg-5 overflow-hidden position-relative">
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80)` }} />

                    <div className="p-4 p-lg-5">
                      <div className="row align-items-start g-4">
                        {/* Main content */}
                        <div className="col-lg-8 order-2 order-lg-1">
                          <div className="d-flex align-items-start gap-3 mb-4">
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{ width: '64px', height: '64px', background: `${exp.color}1f`, border: `1.5px solid ${exp.color}55`, color: exp.color }}
                            >
                              <exp.icon size={28} />
                            </div>
                            <div className="flex-grow-1">
                              <h3 className="section-heading mb-1" style={{ fontSize: '1.5rem' }}>{exp.title}</h3>
                              <div className="fw-semibold mb-2" style={{ color: exp.color }}>{exp.company}</div>
                              <div className="d-flex flex-wrap gap-3 section-subtitle small">
                                <span className="d-flex align-items-center gap-1"><IconCalendar size={14} />{exp.period}</span>
                                <span className="d-flex align-items-center gap-1"><IconMapPin size={14} />{exp.location}</span>
                                <span className="d-flex align-items-center gap-1"><IconBriefcase size={14} />{exp.type}</span>
                              </div>
                            </div>
                          </div>

                          <p className="section-subtitle lh-lg mb-4">{exp.description}</p>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h6 className="section-heading mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                              <span
                                className="d-flex align-items-center justify-content-center rounded-2"
                                style={{ width: '24px', height: '24px', background: `${exp.color}20`, color: exp.color }}
                              >
                                <IconTarget size={14} />
                              </span>
                              Key Achievements
                            </h6>
                            <div className="row">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="col-md-6 mb-2">
                                  <div className="d-flex align-items-start gap-2">
                                    <span className="flex-shrink-0 mt-1" style={{ color: exp.color }}>
                                      <IconCheck size={16} />
                                    </span>
                                    <span className="section-subtitle" style={{ fontSize: '0.92rem' }}>{achievement}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h6 className="section-heading mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                              <span
                                className="d-flex align-items-center justify-content-center rounded-2"
                                style={{ width: '24px', height: '24px', background: `${exp.color}20`, color: exp.color }}
                              >
                                <IconZap size={14} />
                              </span>
                              Technologies
                            </h6>
                            <div className="d-flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="pill-tag"
                                  style={{ borderColor: `${exp.color}40`, color: exp.color }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 order-1 order-lg-2">
                          <div
                            className="p-4 rounded-4 text-center h-100"
                            style={{ background: `${exp.color}0d`, border: `1px solid ${exp.color}25` }}
                          >
                            <div
                              className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-4"
                              style={{
                                width: '84px', height: '84px',
                                background: exp.company === 'PV Multimedia Inc.' ? exp.color : '#fff',
                                boxShadow: `0 10px 25px ${exp.color}30`
                              }}
                            >
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '6px' }}
                              />
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: exp.color }}>{exp.type}</h5>
                            <p className="section-subtitle mb-0 small">
                              Duration: {exp.period.split(' - ')[1] === 'Present'
                                ? `${exp.period.split(' - ')[0]} - Present`
                                : exp.period}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <div className="glass-card d-inline-block p-4 p-md-5">
            <h5 className="section-heading mb-2">Ready to work together?</h5>
            <p className="section-subtitle mb-3">Let&rsquo;s discuss how my experience can benefit your projects</p>
            <a href="#contact" className="btn-modern-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
