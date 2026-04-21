import React from 'react'
import './Footer.css'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa"

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className='footer-container'>
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-info">
          <div className="logo-mark">Pradeep Kumar</div>
          <p>Full Stack Developer & Flutter Developer — building scalable, impactful products with MERN Stack and modern web technologies.</p>
          <div className="footer-social">
            <a href="https://github.com/Pradeep-kumar079" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:pradeepk9348@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+919972605831" aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-col-links">
            <a href="tel:+919972605831">
              <FaPhone /> +91 9972605831
            </a>
            <a href="mailto:pradeepk9348@gmail.com">
              <FaEnvelope /> pradeepk9348@gmail.com
            </a>
            <a href="https://github.com/Pradeep-kumar079" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <div className="footer-col-links">
            {["about", "skills", "projects", "certificates", "contact"].map(link => (
              <a key={link} href={`#${link}`} style={{textTransform:"capitalize"}}>
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>Pradeep Kumar</span>. Built with React.</p>
        <button className="scroll-top" onClick={scrollTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
