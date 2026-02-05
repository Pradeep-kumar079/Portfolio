import React from 'react'
import Navbar from './Navbar'
import './Card.css'
// import Certificate from './Certificate'
import About from './About'

const Card = () => {
  return (
    <div>

      <div className="nav">
        <Navbar />
      </div>

      <div className="card-container">
        <div className="txts">
          <h2>HY! I AM PRADEEP,
          <br /> FULL STACK DEVELOPER
          </h2>

          <div className="btns">
            <div className="rsume">
            <button className="resumebtn">
              <a href="../assets/Resume.pdf" download="Resume.pdf">
                Download Resume
              </a>
            </button>
          </div>

          <button className="hirebtn">Hire Me</button>
          </div>
        </div>

        <div className="imags">

          <div className="myimg">
            <img src="../assets/imag.png" alt="My Image" />
          </div>
        </div>
      </div>

      {/* <About /> */}

      {/* <div className="certificates">
        <Certificate />
      </div> */}

      
    </div>
  )
}

export default Card
