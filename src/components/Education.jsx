import { useEffect } from 'react';
import AOS from 'aos';
import {
  IconGraduationCap, IconRocket, IconEdit, IconPalette, IconLandmark,
  IconAward, IconCheck, IconBookOpen, IconBarChart
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

const professionalDevelopment = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    provider: "Udemy",
    instructor: "Dr. Angela Yu",
    period: "2023 - Present",
    status: "In Progress",
    description: "Comprehensive full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and modern web development practices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    progress: 30,
    icon: IconRocket,
    color: "#ff6b35",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 2,
    title: "WordPress 2025: The Complete WordPress Website Course",
    provider: "Udemy",
    instructor: "Tanzeel Ur Rehman",
    period: "2025 - Present",
    status: "In Progress",
    description: "Comprehensive WordPress course covering website creation, theme customization, plugin development, e-commerce setup, and modern WordPress development practices.",
    technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "WooCommerce"],
    progress: 8,
    icon: IconEdit,
    color: "#1a7a75",
    url: "https://www.udemy.com/course/wordpress-2025-complete-wordpress-website-course/"
  },
  {
    id: 3,
    title: "Google UX Design Professional Certificate",
    provider: "Coursera",
    instructor: "Google",
    period: "2025 - Present",
    status: "In Progress",
    description: "Comprehensive UX design program covering user research, wireframing, prototyping, usability testing, and design thinking. Learn industry-standard tools and methodologies to create user-centered designs.",
    technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Wireframing", "Usability Testing"],
    progress: 23,
    icon: IconPalette,
    color: "#ff6b35",
    url: "https://www.coursera.org/professional-certificates/google-ux-design"
  }
];

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const ongoingCourses = professionalDevelopment.filter(course => course.status === "In Progress");
  const completedCourses = professionalDevelopment.filter(course => course.status === "Completed");

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
                            src="/personal/images/citu.png"
                            alt="Cebu Institute of Technology - University Logo"
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

        {/* Summary */}
        <div
          className="rounded-4 position-relative overflow-hidden p-4 p-md-5"
          style={{ background: 'var(--brand-gradient)' }}
          data-aos="fade-up"
        >
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />

          <div className="position-relative" style={{ zIndex: 1 }}>
            <h3 className="text-center text-white mb-5 fw-bold d-flex align-items-center justify-content-center gap-2">
              <IconBarChart size={26} />
              Learning Journey Overview
            </h3>
            <div className="row text-center g-4">
              <div className="col-md-3 col-6">
                <h1 className="display-4 fw-bold mb-0 text-white">{education.length}</h1>
                <p className="mb-0 fw-medium text-white opacity-75">Formal Degrees</p>
              </div>
              <div className="col-md-3 col-6">
                <h1 className="display-4 fw-bold mb-0 text-white">{completedCourses.length}</h1>
                <p className="mb-0 fw-medium text-white opacity-75">Courses Completed</p>
              </div>
              <div className="col-md-3 col-6">
                <h1 className="display-4 fw-bold mb-0 text-white">{ongoingCourses.length}</h1>
                <p className="mb-0 fw-medium text-white opacity-75">Currently Learning</p>
              </div>
              <div className="col-md-3 col-6">
                <h1 className="display-4 fw-bold mb-0 text-white">&infin;</h1>
                <p className="mb-0 fw-medium text-white opacity-75">Growth Mindset</p>
              </div>
            </div>
            <p className="text-center text-white opacity-75 fst-italic mt-4 mb-0">
              &ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo; &mdash; Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
