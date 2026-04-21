import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="vibe-container">
        <div className="vibe-left">
          <div className="contact-pill">Let's Work Together</div>
          <h2 className="contact-title">
            Vibe Coder.<br />
            <span>Impact Builder.</span>
          </h2>
          <p className="vibe-tagline">
            I don't just build applications — <strong>I build impact.</strong><br />
            As a Vibe Coder, I transform imagination into intelligent,
            user-friendly products that make a difference.
          </p>
          <div className="vibe-cta-row">
            <a href="mailto:pradeepk9348@gmail.com" className="vibe-cta primary">
              <MdEmail size={16} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer" className="vibe-cta ghost">
              <FaLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="img">
          <img
            src="/assets/Gemini_Generated_Image_43bhbb43bhbb43bh-removebg-preview.png"
            alt="Pradeep Kumar — Vibe Coder"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
