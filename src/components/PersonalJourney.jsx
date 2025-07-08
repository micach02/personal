import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Prevent common keyboard shortcuts for saving/downloading images
    const preventImageSaving = (e) => {
      // Prevent Ctrl+S (Save), Ctrl+Shift+S (Save As), F12 (DevTools), Ctrl+U (View Source)
      if (
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        e.key === 'F12' ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C')
      ) {
        e.preventDefault();
        return false;
      }
    };
    
    document.addEventListener('keydown', preventImageSaving);
    
    return () => {
      document.removeEventListener('keydown', preventImageSaving);
    };
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
    { fact: "Singing is my passion, but I'm not the best at it.", icon: "🎤" },
    { fact: "Loves going out to beaches.", icon: "🏖️" },
    { fact: "Learned to cook during the pandemic", icon: "👨‍🍳" },
    { fact: "Riding motorcycles is also my hobby. Loves long rides.", icon: "🏍️" }
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

        {/* Photo Gallery */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-lg h-100" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body p-5">
                <h3 className="text-white mb-4">
                  Life Through My Lens
                  <span className="ms-3">📸</span>
                </h3>
                <p className="text-light lh-lg mb-4">
                  Moments that matter, memories that last forever. Each photo tells a story of 
                  my journey - from quiet moments of reflection to adventures that shaped who 
                  I am today.
                </p>
                <p className="text-light lh-lg mb-4">
                  Photography has been my way of capturing the beauty in everyday life, 
                  preserving memories that bring joy and inspiration whenever I look back 
                  at them.
                </p>
                <p className="text-light lh-lg mb-0">
                  These images represent chapters of my personal story - click on any photo 
                  to explore the collection and get a glimpse into my world beyond coding.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gallery-container">
              <div className="row g-2">
                {[
                  'FB_IMG_1746857461511.jpg',
                  'IMG_20240825_132059.jpg',
                  'IMG_20241020_202537.jpg',
                  'IMG_20241117_202735.jpg',
                  'IMG_20241124_171319.jpg',
                  'IMG_20241126_183302.jpg',
                  'IMG_20241223_200638.jpg',
                  'IMG_20250120_195219.jpg',
                  'IMG_20250501_155020.jpg',
                  'IMG_20250501_162423.jpg',
                  'IMG_20250521_190754.jpg',
                  'IMG_20250607_171130.jpg',
                  'IMG_20250608_084227.jpg',
                  'IMG_20250629_182706.jpg',
                  'IMG_20250629_182733.jpg',
                  'IMG_20250629_183013.jpg',
                  'IMG_5450.JPG',
                  'IMG_5757.jpg',
                  'IMG_6232.jpg',
                  'IMG_6524.jpg',
                  'IMG_6635.JPG',
                  'IMG_6728.jpg',
                  'IMG_6751.jpg',
                  'IMG_6901.jpg',
                  'IMG_6964.jpg'
                ].slice(0, 12).map((photo, index) => (
                  <div key={index} className="col-4 col-sm-4 col-md-4">
                    <div 
                      className="gallery-item"
                      style={{
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      <div 
                        className="gallery-image-container"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          
                          // Create modal overlay
                          const modal = document.createElement('div');
                          modal.className = 'gallery-modal';
                          modal.style.cssText = `
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.95);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 9999;
                            animation: modalFadeIn 0.3s ease-out;
                          `;
                          
                          modal.innerHTML = `
                            <div class="gallery-modal-content" style="position: relative; max-width: 90vw; max-height: 90vh; text-align: center;">
                              <span class="gallery-modal-close" style="position: absolute; top: -50px; right: 0; font-size: 2.5rem; color: white; cursor: pointer; background: rgba(255,255,255,0.1); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; backdrop-filter: blur(10px);">&times;</span>
                              <img src="images/gallery/${photo}" alt="Gallery photo ${index + 1}" class="gallery-modal-image" style="max-width: 100%; max-height: 85vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); user-select: none; pointer-events: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;" draggable="false" oncontextmenu="return false;" ondragstart="return false;" onselectstart="return false;">
                              <div class="gallery-modal-nav" style="position: absolute; top: 50%; transform: translateY(-50%); width: calc(100% + 100px); left: -50px; display: flex; justify-content: space-between; pointer-events: none;">
                                <button class="gallery-nav-btn gallery-prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: white; font-size: 2rem; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px); pointer-events: all; display: flex; align-items: center; justify-content: center;">❮</button>
                                <button class="gallery-nav-btn gallery-next-btn" style="background: rgba(255,255,255,0.1); border: none; color: white; font-size: 2rem; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px); pointer-events: all; display: flex; align-items: center; justify-content: center;">❯</button>
                              </div>
                            </div>
                          `;
                          
                          document.body.appendChild(modal);
                          document.body.style.overflow = 'hidden';
                          
                          // Close modal functionality
                          const closeModal = () => {
                            try {
                              if (modal && modal.parentNode) {
                                document.body.removeChild(modal);
                              }
                              document.body.style.overflow = 'auto';
                              document.removeEventListener('keydown', handleKeyPress);
                            } catch (error) {
                              console.log('Modal cleanup error:', error);
                            }
                          };
                          
                          // Event listeners
                          const closeBtn = modal.querySelector('.gallery-modal-close');
                          if (closeBtn) {
                            closeBtn.addEventListener('click', closeModal);
                            closeBtn.addEventListener('mouseover', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.2)';
                              e.target.style.transform = 'scale(1.1)';
                            });
                            closeBtn.addEventListener('mouseout', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.1)';
                              e.target.style.transform = 'scale(1)';
                            });
                          }
                          
                          modal.addEventListener('click', (e) => {
                            if (e.target === modal) closeModal();
                          });
                          
                          // Navigation functionality
                          const photos = [
                            'FB_IMG_1746857461511.jpg',
                            'IMG_20240825_132059.jpg',
                            'IMG_20241020_202537.jpg',
                            'IMG_20241117_202735.jpg',
                            'IMG_20241124_171319.jpg',
                            'IMG_20241126_183302.jpg',
                            'IMG_20241223_200638.jpg',
                            'IMG_20250120_195219.jpg',
                            'IMG_20250501_155020.jpg',
                            'IMG_20250501_162423.jpg',
                            'IMG_20250521_190754.jpg',
                            'IMG_20250607_171130.jpg',
                            'IMG_20250608_084227.jpg',
                            'IMG_20250629_182706.jpg',
                            'IMG_20250629_182733.jpg',
                            'IMG_20250629_183013.jpg',
                            'IMG_5450.JPG',
                            'IMG_5757.jpg',
                            'IMG_6232.jpg',
                            'IMG_6524.jpg',
                            'IMG_6635.JPG',
                            'IMG_6728.jpg',
                            'IMG_6751.jpg',
                            'IMG_6901.jpg',
                            'IMG_6964.jpg'
                          ];
                          
                          let currentIndex = index;
                          const modalImage = modal.querySelector('.gallery-modal-image');
                          
                          const updateImage = (newIndex) => {
                            if (modalImage) {
                              modalImage.src = `images/gallery/${photos[newIndex]}`;
                              modalImage.alt = `Gallery photo ${newIndex + 1}`;
                              modalImage.draggable = false;
                              modalImage.oncontextmenu = () => false;
                              modalImage.ondragstart = () => false;
                              modalImage.onselectstart = () => false;
                            }
                          };
                          
                          const prevBtn = modal.querySelector('.gallery-prev-btn');
                          const nextBtn = modal.querySelector('.gallery-next-btn');
                          
                          if (prevBtn) {
                            prevBtn.addEventListener('click', () => {
                              currentIndex = (currentIndex - 1 + photos.length) % photos.length;
                              updateImage(currentIndex);
                            });
                            prevBtn.addEventListener('mouseover', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.2)';
                              e.target.style.transform = 'scale(1.1)';
                            });
                            prevBtn.addEventListener('mouseout', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.1)';
                              e.target.style.transform = 'scale(1)';
                            });
                          }
                          
                          if (nextBtn) {
                            nextBtn.addEventListener('click', () => {
                              currentIndex = (currentIndex + 1) % photos.length;
                              updateImage(currentIndex);
                            });
                            nextBtn.addEventListener('mouseover', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.2)';
                              e.target.style.transform = 'scale(1.1)';
                            });
                            nextBtn.addEventListener('mouseout', (e) => {
                              e.target.style.background = 'rgba(255,255,255,0.1)';
                              e.target.style.transform = 'scale(1)';
                            });
                          }
                          
                          // Keyboard navigation
                          const handleKeyPress = (e) => {
                            if (e.key === 'Escape') closeModal();
                            if (e.key === 'ArrowLeft') {
                              currentIndex = (currentIndex - 1 + photos.length) % photos.length;
                              updateImage(currentIndex);
                            }
                            if (e.key === 'ArrowRight') {
                              currentIndex = (currentIndex + 1) % photos.length;
                              updateImage(currentIndex);
                            }
                          };
                          
                          document.addEventListener('keydown', handleKeyPress);
                        }}
                      >
                        <img
                          src={`images/gallery/${photo}`}
                          alt={`Gallery photo ${index + 1}`}
                          className="gallery-image"
                          loading="lazy"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          onSelectStart={(e) => e.preventDefault()}
                          style={{ userSelect: 'none', pointerEvents: 'none' }}
                        />
                        <div className="gallery-overlay">
                          <div className="gallery-overlay-content">
                            <div style={{fontSize: '2rem', marginBottom: '5px'}}>🔍</div>
                            <p className="mt-1 mb-0" style={{fontSize: '0.8rem'}}>View</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                <small className="text-light opacity-75">
                  Showing 12 of 25 photos • Click any image to view full gallery
                </small>
                <br />
                <small className="text-light opacity-50" style={{ fontSize: '0.7rem' }}>
                  © All photos are protected by copyright. Unauthorized downloading or distribution is prohibited.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold mb-5 text-center text-white">
              Fun Facts About Me
              <span className="ms-3">🎉</span>
            </h3>
            <div className="row g-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div 
                    className="fun-fact-card card border-0 shadow-lg h-100" 
                    style={{ 
                      background: 'rgba(255,255,255,0.95)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      cursor: 'pointer',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="card-body p-4 text-center position-relative overflow-hidden">
                      <div 
                        className="fun-fact-icon fs-1 mb-3 position-relative z-index-2" 
                        style={{ 
                          transition: 'all 0.3s ease',
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                        }}
                      >
                        {fact.icon}
                      </div>
                      <p className="text-dark mb-0 fw-medium position-relative z-index-2" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {fact.fact}
                      </p>
                      <div 
                        className="fun-fact-bg-effect position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                          transform: 'scale(0)',
                          transition: 'transform 0.3s ease',
                          borderRadius: '12px'
                        }}
                      ></div>
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
                      // Navigate to home page and scroll to contact after navigation
                      navigate('/', { replace: true });
                      
                      // Use setTimeout to ensure the home page is loaded before scrolling
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 100);
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
        
        /* Custom scrollbar for consistency */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #667eea, #764ba2);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #5a6fd8, #6a4190);
        }
        
        /* Fun Facts Enhanced Animations */
        .fun-fact-card {
          border-radius: 16px !important;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fun-fact-card:hover {
          transform: translateY(-12px) scale(1.05) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        
        .fun-fact-card:hover .fun-fact-icon {
          transform: scale(1.2) rotate(10deg);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2)) !important;
        }
        
        .fun-fact-card:hover .fun-fact-bg-effect {
          transform: scale(1) !important;
        }
        
        .fun-fact-card:active {
          transform: translateY(-8px) scale(1.02) !important;
        }
        
        /* Subtle pulse animation for icons */
        .fun-fact-icon {
          animation: subtlePulse 3s ease-in-out infinite;
        }
        
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* Staggered animation delay for cards */
        .fun-fact-card:nth-child(1) { animation-delay: 0.1s; }
        .fun-fact-card:nth-child(2) { animation-delay: 0.2s; }
        .fun-fact-card:nth-child(3) { animation-delay: 0.3s; }
        .fun-fact-card:nth-child(4) { animation-delay: 0.4s; }
        .fun-fact-card:nth-child(5) { animation-delay: 0.5s; }
        .fun-fact-card:nth-child(6) { animation-delay: 0.6s; }
        .fun-fact-card:nth-child(7) { animation-delay: 0.7s; }
        .fun-fact-card:nth-child(8) { animation-delay: 0.8s; }
        .fun-fact-card:nth-child(9) { animation-delay: 0.9s; }
        .fun-fact-card:nth-child(10) { animation-delay: 1.0s; }
        
        /* Gallery Styles */
        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .gallery-item {
          animation: galleryFadeIn 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes galleryFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gallery-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          aspect-ratio: 1;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .gallery-image-container:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 16px 32px rgba(0,0,0,0.3);
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }
        
        .gallery-image-container:hover .gallery-image {
          transform: scale(1.1);
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          border-radius: 16px;
        }
        
        .gallery-image-container:hover .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-overlay-content {
          text-align: center;
          color: white;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }
        
        .gallery-image-container:hover .gallery-overlay-content {
          transform: translateY(0);
        }
        
        /* Gallery Modal Styles */
        .gallery-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .gallery-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          text-align: center;
        }
        
        .gallery-modal-image {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
          pointer-events: none;
        }
        
        .gallery-modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          font-size: 2.5rem;
          color: white;
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .gallery-modal-close:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.1);
        }
        
        .gallery-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: calc(100% + 100px);
          left: -50px;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }
        
        .gallery-nav-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          font-size: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          pointer-events: all;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gallery-nav-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.1);
        }
        
        /* Additional Image Protection */
        .gallery-container * {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Disable image dragging and context menu */
        .gallery-image,
        .gallery-modal-image {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
        
        /* Prevent right-click context menu on gallery */
        .gallery-container {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Responsive adjustments for gallery */
        @media (max-width: 768px) {
          .gallery-image-container {
            border-radius: 12px;
          }
          
          .gallery-overlay {
            border-radius: 12px;
          }
          
          .gallery-modal-close {
            top: -40px;
            right: 10px;
            font-size: 2rem;
            width: 40px;
            height: 40px;
          }
          
          .gallery-nav-btn {
            font-size: 1.5rem;
            width: 45px;
            height: 45px;
          }
          
          .gallery-modal-nav {
            width: calc(100% + 80px);
            left: -40px;
          }
          
          .gallery-modal-image {
            max-height: 75vh;
            border-radius: 8px;
          }
        }
        
        /* Responsive adjustments for fun facts */
        @media (max-width: 768px) {
          .fun-fact-card {
            margin-bottom: 1rem;
          }
          
          .fun-fact-card:hover {
            transform: translateY(-8px) scale(1.02) !important;
          }
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
