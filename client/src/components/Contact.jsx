import React from 'react'
import './Contact.css'

import { MdEmail } from "react-icons/md"
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <h2 className="contact-title">Vibe Coder</h2>

      <div className="vibe-container">

        <div className="details">
         I don’t just develop applications, I develop impact.
As a Vibe Coder, I transform imagination into intelligent and user-friendly products.
        </div>

        <div className="img">
          <img 
            src="/assets/Gemini_Generated_Image_43bhbb43bhbb43bh-removebg-preview.png" 
            alt="vibe coder" 
          />
        </div>

      </div>

    </section>
  )
}

export default Contact