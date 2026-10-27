import { IconArrowUp } from './icons/Icon';
import { site } from '../config/site';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div className="text-center text-md-start">
            <div className="fw-semibold" style={{ color: 'var(--text-primary)' }}>{site.name}</div>
            <small>{site.role} · {site.location}</small>
          </div>

          <div className="d-flex gap-2">
            {site.social.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="icon-link"
              >
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              title="Back to top"
              className="icon-link"
              style={{ color: 'var(--orange-300)' }}
            >
              <IconArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>&copy; {year} {site.name}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
