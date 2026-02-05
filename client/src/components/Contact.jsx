import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <p>Email: pradeep@example.com</p>
      <p>Phone: +1234567890</p>
      <p>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/pradeep" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/pradeep
        </a>
      </p>
      <p>
        GitHub: 
        <a href="https://github.com/pradeep" target="_blank" rel="noopener noreferrer">
          github.com/pradeep
        </a>
      </p>
    </div>
  )
}

export default Contact
