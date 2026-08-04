import { IconArrowUp } from './icons/Icon';

const socialLinks = [
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/michael-vincent-abellar-971798a5/', label: 'LinkedIn' },
  { icon: 'fab fa-github', url: 'https://github.com/micach02', label: 'GitHub' },
  { icon: 'fab fa-facebook', url: 'https://www.facebook.com/mykill.vitsen/', label: 'Facebook' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mykillvitsen/', label: 'Instagram' }
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-base, #0a0e17)',
        color: 'var(--text-secondary, rgba(244,246,251,0.72))',
        borderTop: '1px solid var(--border-subtle, rgba(255,255,255,0.09))'
      }}
    >
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div
            className="fw-bold"
            style={{
              background: 'linear-gradient(135deg, #fff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '15px'
            }}
          >
            Michael Vincent Abellar
          </div>

          <div className="d-flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="footer-icon-btn rounded-circle d-flex align-items-center justify-content-center"
              >
                <i className={social.icon} style={{ fontSize: '15px' }}></i>
              </a>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              title="Back to top"
              className="footer-icon-btn footer-icon-btn-accent rounded-circle d-flex align-items-center justify-content-center border-0"
            >
              <IconArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mt-3" style={{ fontSize: '13px', opacity: 0.6 }}>
          &copy; {year} Michael Vincent Abellar. All rights reserved.
        </div>
      </div>

      <style>{`
        .footer-icon-btn {
          width: 38px;
          height: 38px;
          color: var(--text-secondary);
          background: var(--surface);
          border: 1px solid var(--border-subtle);
          transition: all 0.25s ease;
        }
        .footer-icon-btn:hover {
          background: rgba(255, 107, 53, 0.15);
          border-color: rgba(255, 107, 53, 0.4);
          color: var(--orange-300);
          transform: translateY(-3px);
        }
        .footer-icon-btn-accent {
          color: var(--orange-300);
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.25);
        }
        .footer-icon-btn-accent:hover {
          background: rgba(255, 107, 53, 0.2);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
