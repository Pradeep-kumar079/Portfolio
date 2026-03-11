import React from 'react'
import './Certificate.css'

import alumni from '../assets/alumni.jpg'
import efset from '../assets/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6.pdf'

const Certificate = () => {
  return (
    <section className="certificates-section" id="certificates">

      <h3>Certificates</h3>

      <div className="certificates-info">

        {/* CERT 1 */}
        <div className="certificate-card">
          <img src={alumni} alt="MERN Certificate" />
          <p>Full Stack Web Development (MERN)</p>

          <div className="certificate-overlay">
            <p>Full Stack Web Development</p>
            <a href={alumni} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>


        {/* CERT 2 */}
        <div className="certificate-card">
          <img src={alumni} alt="JavaScript Certificate" />
          <p>Advanced JavaScript Concepts</p>

          <div className="certificate-overlay">
            <p>Advanced JavaScript</p>
            <a href={alumni} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>


        {/* CERT 3 */}
        <div className="certificate-card">
          <img src={alumni} alt="EF SET Certificate" />
          <p>English Certification (EF SET)</p>

          <div className="certificate-overlay">
            <p>EF SET English Certificate</p>
            <a href={efset} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Certificate