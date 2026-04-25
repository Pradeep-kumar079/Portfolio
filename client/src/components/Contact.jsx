import React from 'react'
import './Contact.css'
import image from '../assets/poster.png'

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="vibe-container">

        {/* Left column */}
        <div className="vibe-left">
          <div className="contact-pill">Let's Work Together</div>

          <h2 className="contact-title">
            Vibe Coder.<br />
            <span>Impact Builder.</span>
          </h2>

          <p className="vibe-tagline">
            I don't just build applications — <strong>I build impact.</strong><br />
            As a Vibe Coder, I transform imagination into intelligent,
            user-friendly products that make a real difference.
          </p>

          <hr className="contact-divider" />

          {/* Contact meta */}
          <div className="contact-meta">
            <a href="mailto:pradeepk9348@gmail.com" className="contact-meta-row">
              <EmailIcon />
              pradeepk9348@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-kumar-56688725b/"
              target="_blank"
              rel="noreferrer"
              className="contact-meta-row"
            >
              <LinkedInIcon />
              linkedin.com/in/pradeep-kumar-56688725b
            </a>
          </div>

          {/* CTA buttons */}
          <div className="vibe-cta-row">
            <a href="mailto:pradeepk9348@gmail.com" className="vibe-cta primary">
              <EmailIcon />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-kumar-56688725b/"
              target="_blank"
              rel="noreferrer"
              className="vibe-cta ghost"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right column — image */}
        <div className="img">
          <img
            src={image}
            alt="Pradeep Kumar — Vibe Coder"
          />
        </div>

      </div>
    </section>
  )
}

export default Contact