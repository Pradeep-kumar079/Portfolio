import React from 'react'
import './Poster.css'
import resume from '../assets/Kit_Cse_Pradeep_compressed.pdf'

const Poster = () => {
  return (
    <div className='poster'>

      <a href={resume} download className="resume-btn">
        Download Resume
      </a>
      
    </div>
  )
}

export default Poster