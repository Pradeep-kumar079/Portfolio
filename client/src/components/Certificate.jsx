import React from 'react'
import './Certificate.css'

import alumni from '../assets/alumni.jpg'
import dsa from '../assets/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6.pdf'

const Certificate = () => {
  return (
    <section className="certificates-section" id="certificates">

      <h3>Achivements</h3>

      <div className="certificates-info">

        {/* CERT 1 */}
        <div className="certificate-card">
          <img src='../assets/mern.jpg' alt="MERN Certificate" />
          <p>Java with DSA </p>

          <div className="certificate-overlay">
            <p>Full Stack Web Development</p>
            <a href={dsa} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>

         <div className="certificate-card">
          <img src='../assets/Screenshot 2026-03-14 121718.png' alt="MERN Certificate" />
          <p>Srushti Hackathon (Atria college) </p>

          <div className="certificate-overlay">
            <p>Hackathon 3rd winner with 10000 price</p>
            <a href='../assets/Srushti.pdf' target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>

            <div className="certificate-card">
              <img src='../assets/Screenshot 2026-03-14 121808.png' alt="MERN Certificate" />
              <p>Curious scripts Hackathon (KIT college) </p>

              <div className="certificate-overlay">
                <p>Hackathon  1st price</p>
                <a href='../assets/achivements.pdf' target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>

             </div>

         <div className="certificate-card">
              <img src='../assets/Screenshot 2026-03-14 121745.png' alt="MERN Certificate" />
              <p>Government Engineering college Hackathon held at mandya </p>

              <div className="certificate-overlay">
                <p>Web design Hackathon</p>
                <a href='../assets/webdesign.pdf' target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>

             </div>


     

      </div>

    </section>
  )
}

export default Certificate