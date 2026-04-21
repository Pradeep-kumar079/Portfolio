import React from 'react'
import './Upcomming.css'
import { FaMapMarkerAlt } from "react-icons/fa"

const Upcomming = () => {
  return (
    <section className="roadmap-section">

      <h2> <FaMapMarkerAlt />  Currently Learning Roadmap</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content">
            <h3>Flutter Basics</h3>
            <p>Learning widgets, layouts, navigation and state management.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content">
            <h3>Firebase Integration</h3>
            <p>Implementing authentication, Firestore database and file uploads.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content">
            <h3>devops Integration</h3>
            <p>linux docker, github actions awsec2 a.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content">
            <h3>Project Development</h3>
            <p>Building real-world mobile apps using Flutter + Firebase stack.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="dot"></div>
          <div className="content">
            <h3>Advanced Optimization</h3>
            <p>Improving performance, clean architecture and deployment.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Upcomming