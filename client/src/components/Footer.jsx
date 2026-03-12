import React from 'react'
import './Footer.css'

import {
 FaPhone,
 FaEnvelope,
 FaGithub,
 FaLinkedin,
 FaArrowUp
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className='footer-container'>

      <div className="footer-info">
        <h2>Pradeep</h2>
        <p>Full Stack Developer Portfolio</p>
      </div>

      <div className="footer-contact">
        <h3>Address</h3>

        <a href="tel:+919972605831">
          <FaPhone /> +91 9972605831
        </a>

        <a href="mailto:pradeepk9348@gmail.com">
          <FaEnvelope /> pradeepk9348@gmail.com
        </a>

        <a
          href="https://github.com/Pradeep-kumar079"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/pradeep-kumar-56688725b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>

      <div className="footer-links">
        <h3>Links</h3>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="scroll-top" onClick={scrollTop}>
        <FaArrowUp />
      </div>

    </footer>
  )
}

export default Footer