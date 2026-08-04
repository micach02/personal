import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import { IconMail, IconMapPin, IconClock, IconCheck } from './icons/Icon';

const socialLinks = [
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/michael-vincent-abellar-971798a5/', label: 'LinkedIn', color: '#0077b5' },
  { icon: 'fab fa-github', url: 'https://github.com/micach02', label: 'GitHub', color: '#333' },
  { icon: 'fab fa-facebook', url: 'https://www.facebook.com/mykill.vitsen/', label: 'Facebook', color: '#1877f2' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mykillvitsen/', label: 'Instagram', color: '#e4405f' }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields.');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      if (emailjsConfig.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please update emailjs.js with your credentials.');
      }

      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: `Subject: ${formData.subject.trim()}\n\n${formData.message.trim()}`,
        time: new Date().toISOString(),
        reply_to: formData.email.trim(),
      };

      const result = await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Failed to send email:', error);

      let errorMessage = 'Failed to send message. Please try again or contact me directly.';

      if (error.message.includes('EmailJS not configured')) {
        errorMessage = 'Email service not configured. Please contact the administrator.';
      } else if (error.message.includes('fill in all required fields')) {
        errorMessage = error.message;
      } else if (error.message.includes('valid email address')) {
        errorMessage = error.message;
      } else if (error.text && error.text.includes('rate limit')) {
        errorMessage = 'Too many requests. Please try again later.';
      }

      setSubmitError(errorMessage);
      setTimeout(() => setSubmitError(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-modern">
      <div className="section-glow" style={{ width: 500, height: 500, top: -170, left: -170, background: 'radial-gradient(circle, rgba(26,122,117,0.28), transparent 70%)' }} />
      <div className="section-glow" style={{ width: 440, height: 440, bottom: -150, right: -150, background: 'radial-gradient(circle, rgba(255,107,53,0.22), transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-10">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="eyebrow mb-3"><IconMail size={14} />Contact</span>
              <h2 className="section-heading display-4 mt-3 mb-3">Get In Touch</h2>
              <p className="section-subtitle lead">
                I&rsquo;m always interested in new opportunities and collaborations.
                Let&rsquo;s discuss how we can work together!
              </p>
            </div>

            <div className="row g-4">
              {/* Contact form */}
              <div className="col-lg-7" data-aos="fade-right">
                <div className="glass-card interactive h-100 p-4 p-lg-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: '50px', height: '50px', background: 'var(--brand-gradient)', color: '#fff' }}
                    >
                      <i className="fas fa-paper-plane" style={{ fontSize: '18px' }}></i>
                    </div>
                    <h4 className="section-heading mb-0">Send Me a Message</h4>
                  </div>

                  {isSubmitted && (
                    <div
                      className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                      style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34,197,94,0.35)' }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '36px', height: '36px', background: '#22c55e', color: 'white' }}
                      >
                        <IconCheck size={16} />
                      </div>
                      <div className="section-subtitle">
                        <strong style={{ color: '#4ade80' }}>Success!</strong> Your message has been sent successfully.
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div
                      className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                      style={{ background: 'rgba(220, 53, 69, 0.12)', border: '1px solid rgba(220,53,69,0.35)' }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '36px', height: '36px', background: '#dc3545', color: 'white' }}
                      >
                        <i className="fas fa-exclamation-triangle" style={{ fontSize: '14px' }}></i>
                      </div>
                      <div className="section-subtitle"><strong style={{ color: '#f87171' }}>Error:</strong> {submitError}</div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold section-subtitle mb-2">Name *</label>
                        <input
                          type="text" className="form-control contact-input" id="name" name="name"
                          value={formData.name} onChange={handleChange} required placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold section-subtitle mb-2">Email *</label>
                        <input
                          type="email" className="form-control contact-input" id="email" name="email"
                          value={formData.email} onChange={handleChange} required placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="subject" className="form-label fw-semibold section-subtitle mb-2">Subject *</label>
                      <input
                        type="text" className="form-control contact-input" id="subject" name="subject"
                        value={formData.subject} onChange={handleChange} required placeholder="What's this about?"
                      />
                    </div>

                    <div className="mt-3">
                      <label htmlFor="message" className="form-label fw-semibold section-subtitle mb-2">Message *</label>
                      <textarea
                        className="form-control contact-input" id="message" name="message" rows="6"
                        value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or idea..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-modern-primary w-100 justify-content-center border-0 mt-4" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact info & social */}
              <div className="col-lg-5" data-aos="fade-left" data-aos-delay="150">
                <div className="glass-card interactive h-100 p-4 p-lg-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: '50px', height: '50px', background: 'var(--surface-strong)', border: '1px solid var(--border-subtle)' }}
                    >
                      <i className="fas fa-address-card" style={{ fontSize: '18px', color: 'var(--text-primary)' }}></i>
                    </div>
                    <h4 className="section-heading mb-0">Let&rsquo;s Connect</h4>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', background: 'var(--surface-strong)', border: '1px solid var(--border-subtle)', color: 'var(--teal-300)' }}>
                      <IconMail size={18} />
                    </div>
                    <div className="flex-grow-1">
                      <small className="section-subtitle d-block mb-1">Email</small>
                      <a href="mailto:michaelabellar75@gmail.com" className="d-block fw-semibold text-decoration-none" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>
                        michaelabellar75@gmail.com
                      </a>
                      <small className="section-subtitle" style={{ fontSize: '12px' }}>Click to send email</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{ width: '46px', height: '46px', background: 'var(--surface-strong)', border: '1px solid var(--border-subtle)', color: 'var(--orange-300)' }}>
                      <IconMapPin size={18} />
                    </div>
                    <div className="flex-grow-1" style={{ fontSize: '14px', lineHeight: 1.4 }}>
                      <small className="section-subtitle d-block mb-1">Location</small>
                      <div className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Cebu City, Philippines</div>
                      <div className="section-subtitle" style={{ fontSize: '13px' }}>#55 Panganiban St., Brgy. Pahina Central</div>
                      <div className="section-subtitle" style={{ fontSize: '13px' }}>Cebu, 6000</div>
                      <small className="section-subtitle mt-1 d-block" style={{ fontSize: '12px' }}>Philippines Standard Time (PST)</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', background: 'var(--surface-strong)', border: '1px solid var(--border-subtle)', color: 'var(--teal-300)' }}>
                      <IconClock size={18} />
                    </div>
                    <div className="flex-grow-1" style={{ fontSize: '14px', lineHeight: 1.4 }}>
                      <small className="section-subtitle d-block mb-1">Response Time</small>
                      <div className="mb-1 fw-semibold" style={{ color: 'var(--text-primary)' }}>Usually within 24 hours</div>
                      <small className="section-subtitle" style={{ fontSize: '13px' }}>Available Mon-Fri, 9 AM - 6 PM PST</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-5">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', background: 'var(--surface-strong)', border: '1px solid var(--border-subtle)', color: 'var(--orange-300)' }}>
                      <i className="fas fa-phone" style={{ fontSize: '16px' }}></i>
                    </div>
                    <div className="flex-grow-1" style={{ fontSize: '14px', lineHeight: 1.4 }}>
                      <small className="section-subtitle d-block mb-1">Phone</small>
                      <a href="tel:+639393661843" className="fw-semibold text-decoration-none" style={{ color: 'var(--text-primary)' }}>+63 939 366 1843</a>
                      <small className="section-subtitle d-block" style={{ fontSize: '12px' }}>Available for calls</small>
                    </div>
                  </div>

                  <hr style={{ borderColor: 'var(--border-subtle)', opacity: 0.6 }} />

                  <h6 className="section-heading mb-4 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                    <i className="fas fa-share-alt"></i>
                    Follow Me
                  </h6>
                  <div className="d-flex gap-3 flex-wrap justify-content-center">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn rounded-circle d-flex align-items-center justify-content-center"
                        style={{ '--social-color': social.color }}
                        title={`Follow me on ${social.label}`}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 text-center section-subtitle" style={{ fontSize: '12px' }}>
                    <i className="fas fa-heart me-1" style={{ color: '#ff6b6b' }}></i>
                    Connect with me on social media for updates and insights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-input {
          border-radius: 15px;
          padding: 15px 20px;
          background: var(--surface);
          border: 1.5px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .contact-input::placeholder { color: var(--text-muted); }
        .contact-input:focus {
          background: var(--surface-hover);
          border-color: var(--teal-300);
          box-shadow: 0 8px 25px rgba(26, 122, 117, 0.18);
          color: var(--text-primary);
          outline: none;
        }
        .social-btn {
          width: 50px;
          height: 50px;
          color: var(--text-primary);
          background: var(--surface);
          border: 1.5px solid var(--border-subtle);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 18px;
        }
        .social-btn:hover {
          background: var(--social-color);
          border-color: var(--social-color);
          color: #fff;
          transform: translateY(-5px) scale(1.08);
        }
      `}</style>
    </section>
  );
}

export default Contact;
