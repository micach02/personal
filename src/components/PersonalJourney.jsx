import { useState, useEffect } from 'react';

function PersonalJourney() {
  const [isVisible, setIsVisible] = useState(false);

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
      description: "Growing up with a curious mind, always taking apart toys to see how they worked. My family often found me with screwdrivers and broken electronics, trying to understand the magic behind the machines."
    },
    {
      year: "High School",
      title: "First Computer",
      icon: "💻",
      color: "success",
      description: "Got my first computer at 16. Spent countless hours not just gaming, but exploring every corner of the system. This is where my love for technology truly began to flourish."
    },
    {
      year: "College Years",
      title: "Finding My Path",
      icon: "🎓",
      color: "warning",
      description: "Studied hard but also discovered my passion for creating things that matter. Late night study sessions turned into late night coding sessions. Met lifelong friends who shared the same passion."
    },
    {
      year: "First Job",
      title: "Real World",
      icon: "🚀",
      color: "info",
      description: "The transition from student life to professional world was eye-opening. Learning that soft skills matter just as much as technical skills. Every challenge became a learning opportunity."
    },
    {
      year: "Personal Growth",
      title: "Life Balance",
      icon: "⚖️",
      color: "danger",
      description: "Discovered the importance of work-life balance. Started traveling, picked up new hobbies, and learned that the best code comes from a well-rested and inspired mind."
    },
    {
      year: "Today",
      title: "Living the Dream",
      icon: "✨",
      color: "secondary",
      description: "Every day is a new adventure. Whether it's trying a new ramen place, exploring a new city, or solving a complex coding problem - life is full of possibilities and I'm grateful for every moment."
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
    { fact: "I've tried ramen in over 50 different restaurants", icon: "🍜" },
    { fact: "Traveled to 15+ countries and counting", icon: "✈️" },
    { fact: "Can solve a Rubik's cube in under 2 minutes", icon: "🧩" },
    { fact: "Morning person who loves watching sunrises", icon: "🌅" },
    { fact: "Learned to cook during the pandemic", icon: "👨‍🍳" },
    { fact: "Collects vintage tech gadgets", icon: "📱" }
  ];

  return (
    <section id="personal-journey" className="py-5" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <div className="container">
        {/* Back Button */}
        <div className="mb-4">
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline-light"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to About
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-5">
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
                    onClick={() => window.location.href = '/#contact'} 
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
