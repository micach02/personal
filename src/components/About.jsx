import { IconUser, IconBriefcase, IconMapPin, IconClock } from './icons/Icon';
import { site, getYearsOfExperience } from '../config/site';

function About() {
  const years = getYearsOfExperience();

  const facts = [
    { icon: IconBriefcase, label: 'Experience', value: `${years}+ years` },
    { icon: IconMapPin, label: 'Work style', value: 'Remote & on-site' },
    { icon: IconClock, label: 'Looking for', value: 'Full-time & projects' },
  ];

  return (
    <section id="about" className="section-modern alt section-compact">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4 text-center text-lg-start" data-aos="fade-right">
            <img
              src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
              alt={`Portrait of ${site.name}`}
              className="about-photo"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="col-lg-8 about-copy" data-aos="fade-left">
            <span className="eyebrow"><IconUser size={14} />About me</span>
            <h2 className="section-heading mt-3 mb-4" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
              A developer who cares about the details
            </h2>

            <p>
              I&rsquo;m a <strong>Web Application Developer</strong> at PV Multimedia Inc., building digital experiences
              that bridge innovative design and robust functionality.
            </p>
            <p>
              With <strong>{years}+ years of hands-on experience</strong>, I specialise in modern web technologies and
              care about clean, efficient code. Curiosity and continuous learning have driven my career, along with a
              taste for solving complex problems with simple solutions.
            </p>
            <p>
              Away from the keyboard you&rsquo;ll find me hunting for authentic ramen, travelling, taking photos or
              staying active. Those experiences make me a more creative problem-solver.
            </p>

            <div className="fact-grid">
              {facts.map((fact) => {
                const FactIcon = fact.icon;
                return (
                  <div className="fact" key={fact.label}>
                    <FactIcon size={20} />
                    <div>
                      <div className="k">{fact.label}</div>
                      <div className="v">{fact.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
