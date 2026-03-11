import React from 'react'
// import './Card.css'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Certificate from './Certificate'
import Skills from './Skills'
import Upcomming from './Upcomming'
import Contact from './Contact'
import Poster from './Poster'

const Card = () => {
  return (
    <div className="card-container">

      <Navbar />
      <Poster />
      <About />
      <Projects />
      <Certificate />
      <Skills />
      <Upcomming />
      <Contact />

    </div>
  )
}

export default Card