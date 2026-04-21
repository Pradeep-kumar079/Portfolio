import React from 'react'
import './Poster.css'
import resume from '../assets/Kit_Cse_Pradeep_MernStack.pdf'

const Poster = () => {
  return (
    <div className='poster'>
      <div className="poster-content">
        <div className="poster-eyebrow">Full Stack Developer</div>
        <h1 className="poster-title">
          Hey, I'm<br />
          <span className="highlight">Pradeep Kumar</span>
        </h1>
        <p className="poster-subtitle">
          I build scalable web applications and mobile experiences — from concept to deployment. MERN Stack · Flutter · Java.
        </p>
        <div className="poster-actions">
          <a href={resume} download className="resume-btn">
            Download Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" className="resume-btn" style={{background:'rgba(255,255,255,0.07)',color:'#e8f0eb',boxShadow:'none',border:'1px solid rgba(255,255,255,0.12)'}}>
            View Work
          </a>
        </div>
      </div>

      <div className="poster-scroll-hint">
        <div className="scroll-mouse" />
        Scroll
      </div>
    </div>
  )
}

export default Poster
