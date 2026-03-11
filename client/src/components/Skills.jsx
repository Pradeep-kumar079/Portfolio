import React from 'react'
import './Skills.css'

import html from '../assets/html.jpg'
import css from '../assets/css.png'
import js from '../assets/js.png'
import reactImg from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import java from '../assets/java.png'
import flutter from '../assets/flutter.jpg'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-card"><img src={html} alt="" /><span>HTML</span></div>
        <div className="skill-card"><img src={css} alt="" /><span>CSS</span></div>
        <div className="skill-card"><img src={js} alt="" /><span>JavaScript</span></div>
        <div className="skill-card"><img src={reactImg} alt="" /><span>React</span></div>
        <div className="skill-card"><img src={node} alt="" /><span>Node.js</span></div>
        <div className="skill-card"><img src={mongo} alt="" /><span>MongoDB</span></div>
        <div className="skill-card"><img src={java} alt="" /><span>Java</span></div>
        <div className="skill-card"><img src={flutter} alt="" /><span>Flutter</span></div>

      </div>

    </section>
  )
}

export default Skills