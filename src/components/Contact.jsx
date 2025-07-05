import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

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
    // Clear any existing error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Basic form validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields.');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Check if EmailJS is configured
      if (emailjsConfig.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please update emailjs.js with your credentials.');
      }

      // Prepare template parameters for EmailJS (matching your existing template)
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: `Subject: ${formData.subject.trim()}\n\n${formData.message.trim()}`,
        time: new Date().toISOString(),
        reply_to: formData.email.trim(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Success handling
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
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
      
      // Reset error message after 7 seconds
      setTimeout(() => setSubmitError(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Background decoration */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          zIndex: 1
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-10">
            <div className="text-center mb-5" data-aos="fade-up" data-aos-duration="600">
              <h2 className="display-4 fw-bold mb-3 text-white">
                Get In Touch
              </h2>
              <p className="lead text-white" style={{ opacity: '0.9' }}>
                I'm always interested in new opportunities and collaborations. 
                Let's discuss how we can work together!
              </p>
            </div>

            <div className="row g-4">
              {/* Contact Form */}
              <div className="col-lg-7 contact-form-container" data-aos="fade-right" data-aos-duration="600">
                <div 
                  className="card border-0 h-100 contact-card position-relative"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)';
                  }}
                >
                  {/* Glass effect overlay */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  <div className="card-body p-5 position-relative" style={{ zIndex: 2 }}>
                    <div className="d-flex align-items-center mb-4">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}
                      >
                        <i className="fas fa-paper-plane" style={{ fontSize: '18px' }}></i>
                      </div>
                      <h4 className="card-title mb-0 fw-bold" style={{ color: '#333' }}>
                        Send Me a Message
                      </h4>
                    </div>
                    
                    {isSubmitted && (
                      <div 
                        className="alert border-0 mb-4 d-flex align-items-center" 
                        style={{ 
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
                          color: '#155724',
                          border: '1px solid rgba(21, 87, 36, 0.2)'
                        }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#28a745',
                            color: 'white'
                          }}
                        >
                          <i className="fas fa-check" style={{ fontSize: '16px' }}></i>
                        </div>
                        <div>
                          <strong>Success!</strong> Your message has been sent successfully.
                        </div>
                      </div>
                    )}

                    {submitError && (
                      <div 
                        className="alert border-0 mb-4 d-flex align-items-center" 
                        style={{ 
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%)',
                          color: '#721c24',
                          border: '1px solid rgba(114, 28, 36, 0.2)'
                        }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#dc3545',
                            color: 'white'
                          }}
                        >
                          <i className="fas fa-exclamation-triangle" style={{ fontSize: '16px' }}></i>
                        </div>
                        <div>
                          <strong>Error:</strong> {submitError}
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label fw-semibold text-dark mb-2">
                            <i className="fas fa-user me-2" style={{ color: '#667eea' }}></i>
                            Name *
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control border-0 shadow-sm contact-form-input"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              style={{
                                borderRadius: '15px',
                                padding: '15px 20px',
                                backgroundColor: '#f8f9fa',
                                fontSize: '14px',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent'
                              }}
                              placeholder="Your Name"
                              onFocus={(e) => {
                                e.target.style.backgroundColor = '#ffffff';
                                e.target.style.borderColor = '#667eea';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
                              }}
                              onBlur={(e) => {
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-semibold text-dark mb-2">
                            <i className="fas fa-envelope me-2" style={{ color: '#667eea' }}></i>
                            Email *
                          </label>
                          <div className="position-relative">
                            <input
                              type="email"
                              className="form-control border-0 shadow-sm contact-form-input"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              style={{
                                borderRadius: '15px',
                                padding: '15px 20px',
                                backgroundColor: '#f8f9fa',
                                fontSize: '14px',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent'
                              }}
                              placeholder="your.email@example.com"
                              onFocus={(e) => {
                                e.target.style.backgroundColor = '#ffffff';
                                e.target.style.borderColor = '#667eea';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
                              }}
                              onBlur={(e) => {
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <label htmlFor="subject" className="form-label fw-semibold text-dark mb-2">
                          <i className="fas fa-tag me-2" style={{ color: '#667eea' }}></i>
                          Subject *
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control border-0 shadow-sm contact-form-input"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                              borderRadius: '15px',
                              padding: '15px 20px',
                              backgroundColor: '#f8f9fa',
                              fontSize: '14px',
                              transition: 'all 0.3s ease',
                              border: '2px solid transparent'
                            }}
                            placeholder="What's this about?"
                            onFocus={(e) => {
                              e.target.style.backgroundColor = '#ffffff';
                              e.target.style.borderColor = '#667eea';
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
                            }}
                            onBlur={(e) => {
                              e.target.style.backgroundColor = '#f8f9fa';
                              e.target.style.borderColor = 'transparent';
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <label htmlFor="message" className="form-label fw-semibold text-dark mb-2">
                          <i className="fas fa-comment-dots me-2" style={{ color: '#667eea' }}></i>
                          Message *
                        </label>
                        <div className="position-relative">
                          <textarea
                            className="form-control border-0 shadow-sm contact-form-input"
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                              borderRadius: '15px',
                              padding: '15px 20px',
                              backgroundColor: '#f8f9fa',
                              resize: 'vertical',
                              fontSize: '14px',
                              transition: 'all 0.3s ease',
                              border: '2px solid transparent'
                            }}
                            placeholder="Tell me about your project or idea..."
                            onFocus={(e) => {
                              e.target.style.backgroundColor = '#ffffff';
                              e.target.style.borderColor = '#667eea';
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.15)';
                            }}
                            onBlur={(e) => {
                              e.target.style.backgroundColor = '#f8f9fa';
                              e.target.style.borderColor = 'transparent';
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          ></textarea>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-lg w-100 border-0 contact-submit-btn mt-4 position-relative overflow-hidden"
                        disabled={isSubmitting}
                        style={{
                          borderRadius: '15px',
                          padding: '15px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          fontSize: '16px',
                          fontWeight: '600',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}
                        onMouseOver={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                          }
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                        }}
                      >
                        {/* Button background animation */}
                        <div 
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                        
                        <div className="position-relative d-flex align-items-center justify-content-center">
                          {isSubmitting ? (
                            <>
                              <div className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane me-2"></i>
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info & Social Links */}
              <div className="col-lg-5 contact-info-card" data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                <div 
                  className="card border-0 h-100 contact-card position-relative"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Glass effect overlay */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  <div className="card-body p-5 position-relative" style={{ zIndex: 2 }}>
                    <div className="d-flex align-items-center mb-4">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)'
                        }}
                      >
                        <i className="fas fa-address-card text-white" style={{ fontSize: '18px' }}></i>
                      </div>
                      <h4 className="card-title mb-0 text-white fw-bold">
                        Let's Connect
                      </h4>
                    </div>
                    
                    <div className="d-flex align-items-center mb-4 contact-info-item">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="fas fa-envelope" style={{ fontSize: '18px' }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-white fw-semibold d-block mb-1" style={{ opacity: '0.8' }}>Email</small>
                        <div>
                          <a 
                            href="mailto:michaelabellar75@gmail.com"
                            className="text-white text-decoration-none d-block fw-semibold"
                            style={{ 
                              fontSize: '14px',
                              lineHeight: '1.4',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.textDecoration = 'underline';
                              e.target.style.opacity = '0.8';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.textDecoration = 'none';
                              e.target.style.opacity = '1';
                            }}
                          >
                            michaelabellar75@gmail.com
                          </a>
                          <small className="text-white" style={{ fontSize: '12px', opacity: '0.7' }}>
                            Click to send email
                          </small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-4 contact-info-item">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3 mt-1"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="fas fa-map-marker-alt" style={{ fontSize: '18px' }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-white fw-semibold d-block mb-1" style={{ opacity: '0.8' }}>Location</small>
                        <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
                          <div className="mb-1 fw-semibold">
                            Cebu City, Philippines
                          </div>
                          <div style={{ fontSize: '13px', opacity: '0.8' }}>
                            #55 Panganiban St., Brgy. Pahina Central
                          </div>
                          <div style={{ fontSize: '13px', opacity: '0.8' }}>
                            Cebu, 6000
                          </div>
                          <small className="text-white mt-1 d-block" style={{ fontSize: '12px', opacity: '0.7' }}>
                            <i className="fas fa-clock me-1"></i>
                            Philippines Standard Time (PST)
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4 contact-info-item">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="fas fa-clock" style={{ fontSize: '18px' }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-white fw-semibold d-block mb-1" style={{ opacity: '0.8' }}>Response Time</small>
                        <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
                          <div className="mb-1 fw-semibold">
                            Usually within 24 hours
                          </div>
                          <small style={{ fontSize: '13px', opacity: '0.8' }}>
                            Available Mon-Fri, 9 AM - 6 PM PST
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-5 contact-info-item">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="fas fa-phone" style={{ fontSize: '18px' }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-white fw-semibold d-block mb-1" style={{ opacity: '0.8' }}>Phone</small>
                        <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
                          <div className="mb-1">
                            <a 
                              href="tel:+639393661843"
                              className="text-white text-decoration-none fw-semibold"
                              style={{ transition: 'all 0.3s ease' }}
                              onMouseOver={(e) => {
                                e.target.style.textDecoration = 'underline';
                                e.target.style.opacity = '0.8';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.textDecoration = 'none';
                                e.target.style.opacity = '1';
                              }}
                            >
                              +63 939 366 1843
                            </a>
                          </div>
                          <small className="text-white" style={{ fontSize: '12px', opacity: '0.7' }}>
                            Available for calls
                          </small>
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.3)', opacity: '0.5' }} />
                    
                    <h6 className="text-white mb-4 fw-bold d-flex align-items-center">
                      <i className="fas fa-share-alt me-2"></i>
                      Follow Me
                    </h6>
                    <div className="d-flex gap-3 flex-wrap justify-content-center">
                      {[
                        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/michael-vincent-abellar-971798a5/', label: 'LinkedIn', color: '#0077b5' },
                        { icon: 'fab fa-github', url: 'https://github.com/micach02', label: 'GitHub', color: '#333' },
                        { icon: 'fab fa-facebook', url: 'https://www.facebook.com/mykill.vitsen/', label: 'Facebook', color: '#1877f2' },
                        { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mykillvitsen/', label: 'Instagram', color: '#e4405f' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light rounded-circle contact-social-btn position-relative"
                          style={{
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid rgba(255,255,255,0.3)',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontSize: '18px'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = social.color;
                            e.target.style.borderColor = social.color;
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-5px) scale(1.1)';
                            e.target.style.boxShadow = `0 15px 35px ${social.color}40`;
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                          title={`Follow me on ${social.label}`}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <small className="text-white" style={{ fontSize: '12px', opacity: '0.7' }}>
                        <i className="fas fa-heart me-1" style={{ color: '#ff6b6b' }}></i>
                        Connect with me on social media for updates and insights
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
