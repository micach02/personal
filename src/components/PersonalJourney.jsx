import { useState, useEffect } from 'react';

function PersonalJourney() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const journeySection = document.getElementById('personal-journey');
    if (journeySection) {
      observer.observe(journeySection);
    }

    return () => observer.disconnect();
  }, []);

  const personalMilestones = [
    {
      year: "Early Years",
      title: "Childhood Dreams",
      icon: "🌟",
      color: "primary",
      description: "Growing up without a father figure, I found strength and unconditional love in my mother's embrace. As an only child, I often found myself in quiet solitude, which became my greatest teacher. My world was one of endless curiosity - every toy became a puzzle to solve, every broken appliance an adventure waiting to unfold. Armed with screwdrivers and boundless imagination, I transformed discarded radios, electric fans, and old televisions into my personal laboratories. In those moments of discovery, taking apart the mysteries of how things worked, I was unknowingly building the foundation for my future in technology. Solitude taught me to think deeply, and curiosity taught me to never stop asking 'how' and 'why.'"
    },
    {
      year: "Grade School",
      title: "First Computer",
      icon: "💻",
      color: "success",
      description: "At 12, I fell in love with computers when our school introduced us to the basics of computing. Coming from a low-income family meant no computer at home, but that didn't diminish my curiosity. I spent every free moment at school exploring every corner of the system, clicking on every icon, and discovering new features. Those precious hours in the computer lab ignited a passion that would shape my entire future."
    },
    {
      year: "High School",
      title: "Programming & Creative Discovery",
      icon: "⚡",
      color: "info",
      description: "High school transformed my curiosity into concrete skills through my first computer science class. Writing my first Visual Basic program felt like casting a spell - watching lines of code breathe life into digital forms was pure magic. As I explored HTML, CSS, and JavaScript, I discovered that programming was like digital architecture. This realization sparked another passion: sketching and designing building structures. Whether I was crafting code or drawing blueprints, both involved creating something from nothing, turning abstract ideas into tangible realities. These dual interests taught me that creativity and logic aren't opposites - they're partners."
    },
    {
      year: "High School",
      title: "The Crossroads Decision",
      icon: "🎯",
      color: "warning",
      description: "High school brought me to a defining crossroads where dreams met reality. My heart was torn between two passions: the elegance of architectural design and the limitless possibilities of technology. Architecture called to me with its promise of creating spaces that touch lives, but the financial reality was stark - tuition fees and material costs far exceeded what even scholarship programs could cover. It was a painful but necessary choice. Choosing Information Technology wasn't settling for less; it was recognizing that technology could be my canvas for creation. Sometimes life redirects our dreams, and in retrospect, this redirection led me exactly where I needed to be."
    },
    {
      year: "College Years",
      title: "Forging Character Through Challenge",
      icon: "💪",
      color: "success",
      description: "College was where dreams met determination. As a working scholar at CIT University, I discovered that success isn't just about talent—it's about resilience, grit, and the courage to transform obstacles into opportunities. Balancing classes with my part-time job taught me invaluable lessons in time management and prioritization that no textbook could provide. My days were packed with responsibilities, but my nights belonged to my true passion: coding. Those late-night study sessions naturally evolved into programming marathons, where I found profound joy in creating software that could solve real-world problems. During these challenging yet rewarding years, I forged lifelong friendships with fellow dreamers who shared my passion for technology. Together, we pushed each other to innovate and grow beyond our limits. The working scholar program opened doors to exclusive seminars and workshops that expanded both my knowledge and professional network. While it took five years to complete what was traditionally a four-year degree due to limited course loads, every extra semester was an investment in building the character and work ethic that would define my professional journey. When I failed a major subject, instead of seeing it as a setback, I embraced it as a lesson in resilience. I learned to adapt, seek help when needed, and never give up on my dreams. Those years weren't just about earning a degree—they were about discovering who I was and who I wanted to become."
    },
    {
      year: "First Job",
      title: "Professional Awakening",
      icon: "🚀",
      color: "info",
      description: "Three months after graduation, I embarked on my professional journey as an HTML5 Developer at a vibrant local startup. The leap from academic theory to real-world application was both thrilling and humbling—I quickly learned that classroom coding and production development were entirely different universes. The intense pressure of tight deadlines became my greatest teacher, transforming every challenge into a masterclass in growth. The startup's fast-paced environment forged skills that no textbook could teach: agility, resourcefulness, and the art of innovation under pressure. What began as my first job evolved into my professional sanctuary, where I continue to flourish as a developer. Here, I discovered mentors who became lifelong guides and colleagues who transformed into cherished friends, all believing in my potential when I barely believed in myself. Their faith ignited a confidence that propels me forward every day. The company even sent me to Singapore, an unforgettable journey where I connected with global teammates and immersed myself in a new culture. Every day here is an opportunity to push boundaries, solve meaningful problems, and create technology that genuinely impacts lives."
    },
    {
      year: "Personal Growth",
      title: "Strength Through Adversity",
      icon: "💎",
      color: "warning",
      description: "Life shaped me through challenges that would have seemed insurmountable to many. Abandoned early in life and literally discarded by my biological parents, I learned to navigate the world with resilience as my compass and determination as my guide. The absence of a father figure became an unexpected teacher, revealing the value of self-reliance and the incredible strength that lives within us all. Every struggle I faced—from academic hurdles to balancing work and study—transformed from stumbling blocks into stepping stones. These experiences instilled in me a deep appreciation for perseverance and taught me that true growth often emerges from life's most challenging moments. Growing up with profound gratitude toward my foster mother and relatives who opened their hearts and home to me, I felt both the weight of their sacrifice and the pressure to rise above our circumstances. While their expectations were heavy, they became the very fuel that ignited my drive to succeed and break free from poverty's grip. Through this journey, I learned to embrace vulnerability as a form of strength, challenges as opportunities for growth, and setbacks as setups for powerful comebacks. These profound experiences revealed a fundamental truth that guides me still: it's not the struggles that define us, but how we choose to rise through them that unveils our true potential and shapes our character."
    }
  ];

  const lifeValues = [
    {
      icon: "❤️",
      title: "Family First",
      description: "Family is everything. They've been my support system through every challenge and celebration."
    },
    {
      icon: "🌱",
      title: "Continuous Growth",
      description: "Never stop learning, never stop growing. Every day is an opportunity to become a better version of myself."
    },
    {
      icon: "🤝",
      title: "Genuine Connections",
      description: "Building meaningful relationships with people who inspire and challenge me to be better."
    },
    {
      icon: "🎯",
      title: "Purpose-Driven",
      description: "Everything I do should have a purpose and make a positive impact on others."
    }
  ];

  const funFacts = [
    { fact: "I've tried ramen in over 50 different restaurants (Kanto Ramen da best 😉)", icon: "🍜" },
    { fact: "Can solve a Rubik's cube in under 2 minutes", icon: "🧩" },
    { fact: "Plays chess", icon: "♟️" },
    { fact: "Can play table tennis", icon: "🏓" },
    { fact: "Plays Mobile Legends", icon: "🎮" },
    { fact: "Listening to music is my therapy.", icon: "🎵" },
    { fact: "Loves going out to beaches.", icon: "🏖️" },
    { fact: "Learned to cook during the pandemic", icon: "👨‍🍳" }
  ];

  return (
    <section id="personal-journey" className="py-5" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5 mt-5">
          <h1 className={`display-3 fw-bold mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
            My Personal Journey
            <span className="ms-3">🗺️</span>
          </h1>
          <div className="mx-auto" style={{ width: '120px', height: '4px', background: 'rgba(255,255,255,0.8)', borderRadius: '2px' }}></div>
          <p className="lead mt-4 opacity-90">
            Beyond the code and career milestones, here's the story of who I am as a person
          </p>
        </div>

        {/* Personal Story Introduction */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-lg" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body p-5">
                <h3 className="text-white mb-4">The Person Behind the Developer</h3>
                <p className="text-light lh-lg mb-4">
                  Life is more than just work and achievements. It's about the moments that shape us, 
                  the people we meet, the experiences we cherish, and the dreams we chase. My journey 
                  has been filled with curiosity, challenges, laughter, and growth.
                </p>
                <p className="text-light lh-lg mb-0">
                  From a curious kid who loved taking things apart to an adult who loves putting 
                  digital pieces together, every step has been meaningful. Here's my story...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Timeline */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold mb-5 text-center text-white">Life Milestones</h3>
            <div className="timeline-container position-relative">
              {personalMilestones.map((milestone, index) => (
                <div key={index} className={`timeline-item row align-items-center mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className="col-md-5">
                    <div className="card border-0 shadow-lg h-100" style={{ background: 'rgba(255,255,255,0.95)' }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center mb-3">
                          <span className="fs-3 me-3">{milestone.icon}</span>
                          <div>
                            <h5 className={`text-${milestone.color} fw-bold mb-1`}>{milestone.title}</h5>
                            <span className={`badge bg-${milestone.color}`}>{milestone.year}</span>
                          </div>
                        </div>
                        <p className="text-muted mb-0 lh-lg">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    <div className={`timeline-dot bg-${milestone.color} rounded-circle d-flex align-items-center justify-content-center`} 
                         style={{ width: '50px', height: '50px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                      <span className="text-white fs-5">{milestone.icon}</span>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Life Values */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold mb-5 text-center text-white">What Drives Me</h3>
            <div className="row">
              {lifeValues.map((value, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card border-0 shadow-lg h-100" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <div className="card-body p-4 text-center">
                      <div className="fs-1 mb-3">{value.icon}</div>
                      <h5 className="text-white fw-bold mb-3">{value.title}</h5>
                      <p className="text-light mb-0">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold mb-5 text-center text-white">Fun Facts About Me</h3>
            <div className="row">
              {funFacts.map((fact, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card border-0 shadow-lg h-100" style={{ background: 'rgba(255,255,255,0.95)' }}>
                    <div className="card-body p-4 text-center">
                      <div className="fs-2 mb-3">{fact.icon}</div>
                      <p className="text-dark mb-0 fw-medium">{fact.fact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="card border-0 shadow-lg" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body p-5">
                <h4 className="text-white fw-bold mb-4">Life is an Adventure</h4>
                <p className="text-light lh-lg mb-4">
                  Every day brings new possibilities, new connections, and new reasons to be grateful. 
                  I believe in living authentically, pursuing passions, and making a positive impact 
                  wherever possible.
                </p>
                <p className="text-light lh-lg mb-4">
                  Whether it's through the code I write, the relationships I build, or the small acts 
                  of kindness I can offer, I want my journey to matter.
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => {
                      // First navigate to home page if not already there
                      if (window.location.pathname !== '/') {
                        window.location.href = '/#contact';
                      } else {
                        // If already on home page, scroll to contact section
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          // Fallback: try to navigate to contact
                          window.location.href = '#contact';
                        }
                      }
                    }}
                    className="btn btn-light btn-lg px-5 fw-semibold"
                  >
                    <i className="bi bi-heart me-2"></i>Let's Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
          border-radius: 2px;
          z-index: 1;
        }
        
        .timeline-item .card {
          transition: all 0.3s ease;
        }
        
        .timeline-item .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
        }
        
        .timeline-dot {
          box-shadow: 0 0 0 6px rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .timeline-dot:hover {
          transform: scale(1.2);
          box-shadow: 0 0 0 8px rgba(255,255,255,0.4);
        }
        
        @media (max-width: 768px) {
          .timeline-container::before {
            left: 30px !important;
            transform: none !important;
          }
          
          .timeline-item {
            flex-direction: row !important;
          }
          
          .timeline-item .col-md-5:first-child {
            padding-left: 80px !important;
            order: 2 !important;
          }
          
          .timeline-item .col-md-2 {
            order: 1 !important;
            position: absolute;
            left: 0;
            width: 60px;
            z-index: 3;
          }
          
          .timeline-dot {
            margin: 0;
            margin-left: 5px;
          }
        }
      `}</style>
    </section>
  );
}

export default PersonalJourney;
