import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import { site, resumeUrl } from '../config/site';
import { IconMail, IconMapPin, IconClock, IconCheck } from './icons/Icon';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields.');
      return;
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: `Subject: ${formData.subject.trim()}\n\n${formData.message.trim()}`,
          time: new Date().toISOString(),
          reply_to: formData.email.trim(),
        },
        emailjsConfig.PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData(EMPTY_FORM);
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError(
        error?.text?.includes('rate limit')
          ? 'Too many requests. Please try again later.'
          : `Couldn't send your message. Please email me directly at ${site.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkedIn = site.social.find((s) => s.label === 'LinkedIn');

  const directLines = [
    { icon: <IconMail size={18} />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: <i className="fas fa-phone" aria-hidden="true"></i>, label: 'Phone', value: site.phone, href: site.phoneHref },
    { icon: <i className="fab fa-linkedin-in" aria-hidden="true"></i>, label: 'LinkedIn', value: 'michael-vincent-abellar', href: linkedIn?.url, external: true },
    { icon: <IconMapPin size={18} />, label: 'Location', value: `${site.location} (${site.timezone})` },
    { icon: <IconClock size={18} />, label: 'Response time', value: 'Usually within 24 hours' },
  ];

  return (
    <section id="contact" className="section-modern alt section-compact">
      <div className="container">
        <div className="contact-panel" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="eyebrow"><IconMail size={14} />Contact</span>
              <h2 className="section-heading mt-3 mb-3" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
                Let&rsquo;s talk about your team
              </h2>
              <p className="section-subtitle mb-0" style={{ lineHeight: 1.7 }}>
                Hiring for a front-end or web application role, or have a project in mind? Send a note and I&rsquo;ll
                get back to you.
              </p>

              <div className="contact-direct">
                {directLines.map((line) => {
                  const content = (
                    <>
                      <span className="ico">{line.icon}</span>
                      <span>
                        <span className="k">{line.label}</span>
                        <span className="v">{line.value}</span>
                      </span>
                    </>
                  );
                  return line.href ? (
                    <a
                      key={line.label}
                      className="contact-line"
                      href={line.href}
                      {...(line.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={line.label} className="contact-line">{content}</div>
                  );
                })}
              </div>

              {resumeUrl && (
                <a className="btn-modern-outline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-arrow-down" aria-hidden="true"></i> Download résumé
                </a>
              )}
            </div>

            <div className="col-lg-7">
              <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
                <h3 className="section-heading mb-4" style={{ fontSize: '1.3rem' }}>Send me a message</h3>

                {isSubmitted && (
                  <div
                    role="status"
                    className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                    style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34,197,94,0.35)' }}
                  >
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: 32, height: 32, background: '#22c55e', color: '#fff' }}
                    >
                      <IconCheck size={16} />
                    </span>
                    <span className="section-subtitle">
                      <strong style={{ color: '#4ade80' }}>Message sent.</strong> Thanks &mdash; I&rsquo;ll reply soon.
                    </span>
                  </div>
                )}

                {submitError && (
                  <div
                    role="alert"
                    className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                    style={{ background: 'rgba(220, 53, 69, 0.12)', border: '1px solid rgba(220,53,69,0.35)' }}
                  >
                    <i className="fas fa-triangle-exclamation" style={{ color: '#f87171' }} aria-hidden="true"></i>
                    <span className="section-subtitle">{submitError}</span>
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text" className="form-control contact-input" id="name" name="name" autoComplete="name"
                      value={formData.name} onChange={handleChange} required placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email" className="form-control contact-input" id="email" name="email" autoComplete="email"
                      value={formData.email} onChange={handleChange} required placeholder="you@company.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text" className="form-control contact-input" id="subject" name="subject"
                      value={formData.subject} onChange={handleChange} required placeholder="Front-end role at …"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control contact-input" id="message" name="message" rows="5"
                      value={formData.message} onChange={handleChange} required placeholder="Tell me about the role or project…"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-modern-primary w-100 justify-content-center mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" aria-hidden="true"></i>
                      Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
