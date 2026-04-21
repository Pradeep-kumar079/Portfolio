import React from 'react'
import './Certificate.css'
// import alumni from '../assets/alumni.jpg'
import dsa from '../assets/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6.pdf'

const certs = [
  {
    img: '../assets/mern.jpg',
    badge: 'Certification',
    title: 'Java with DSA & Full Stack Web Development',
    overlay: 'Full Stack Web Development',
    href: dsa,
    isImport: true,
  },
  {
    img: '../assets/Screenshot 2026-03-14 121718.png',
    badge: '3rd Place · ₹10,000',
    title: 'Srushti Hackathon — Atria College',
    overlay: 'Hackathon · 3rd Place · ₹10,000 Prize',
    href: '../assets/Srushti.pdf',
  },
  {
    img: '../assets/Screenshot 2026-03-14 121808.png',
    badge: '1st Place',
    title: 'Curious Scripts Hackathon — KIT College',
    overlay: 'Hackathon · 1st Place Winner',
    href: '../assets/achivements.pdf',
  },
  {
    img: '../assets/Screenshot 2026-03-14 121745.png',
    badge: 'Participant',
    title: 'GEC Mandya — Web Design Hackathon',
    overlay: 'Web Design Hackathon',
    href: '../assets/webdesign.pdf',
  },
]

const Certificate = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2>Achievements &amp; <span>Certifications</span></h2>

      <div className="certificates-info">
        {certs.map((c, i) => (
          <div className="certificate-card" key={i}>
            <img src={c.isImport ? c.img : c.img} alt={c.title} />
            <span className="cert-badge">{c.badge}</span>
            <div className="certificate-card-body">
              <p>{c.title}</p>
            </div>
            <div className="certificate-overlay">
              <p>{c.overlay}</p>
              <a href={c.isImport ? c.href : c.href} target="_blank" rel="noreferrer">
                View Certificate
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
