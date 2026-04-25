import React from 'react'
import './Footer.css'

/* ── Inline SVG icons (no react-icons dependency) ──── */

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4l-8 8h5v8h6v-8h5z" />
  </svg>
)

const NAV_LINKS = ['about', 'skills', 'projects', 'certificates', 'contact']

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* ── Brand ── */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-dot" />
              Pradeep Kumar
            </a>
            <p className="footer__brand-desc">
              Full Stack &amp; Flutter Developer — building scalable, impactful
              products with MERN Stack and modern web technologies.
            </p>
            <div className="footer__social">
              <a href="https://github.com/Pradeep-kumar079" target="_blank" rel="noreferrer"
                className="footer__social-link" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer"
                className="footer__social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="mailto:pradeepk9348@gmail.com"
                className="footer__social-link" aria-label="Email">
                <EmailIcon />
              </a>
              <a href="tel:+919972605831"
                className="footer__social-link" aria-label="Phone">
                <PhoneIcon />
              </a>
            </div>
          </div>

          {/* ── Contact column ── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Contact</h4>
            <div className="footer__links">
              <a href="tel:+919972605831" className="footer__link">
                <PhoneIcon /> +91 9972605831
              </a>
              <a href="mailto:pradeepk9348@gmail.com" className="footer__link">
                <EmailIcon /> pradeepk9348@gmail.com
              </a>
              <a href="https://github.com/Pradeep-kumar079" target="_blank" rel="noreferrer" className="footer__link">
                <GithubIcon /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer" className="footer__link">
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* ── Navigate column ── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Navigate</h4>
            <div className="footer__links">
              {NAV_LINKS.map(link => (
                <a key={link} href={`#${link}`} className="footer__link footer__link--plain">
                  {link}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © 2025 <span>Pradeep Kumar</span>. Built with React.
        </p>
        <button className="footer__scroll-top" onClick={scrollTop} aria-label="Scroll to top">
          <ArrowUpIcon />
        </button>
      </div>
    </footer>
  )
}

export default Footer