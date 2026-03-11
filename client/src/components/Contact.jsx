import React from 'react'
import './Contact.css'

import { MdEmail } from "react-icons/md"
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-box">
          <div className="icon"><MdEmail /></div>
          <h3>Email</h3>
          <p>pradeepk9348@gmail.com</p>
        </div>

        <div className="contact-box">
          <div className="icon"><FaPhoneAlt /></div>
          <h3>Phone</h3>
          <p>+91 9353198519</p>
        </div>

        <div className="contact-box">
          <div className="icon"><FaLinkedin /></div>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/pradeep-kumar-56688725b/" target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>

        <div className="contact-box">
          <div className="icon"><FaGithub /></div>
          <h3>GitHub</h3>
          <a href="https://github.com/Pradeep-kumar079" target="_blank" rel="noreferrer">
            View Projects
          </a>
        </div>

      </div>

    </section>
  )
}

export default Contact