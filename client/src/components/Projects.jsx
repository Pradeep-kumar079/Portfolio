import React, { useState } from 'react'
import './Projects.css'

const projects = {
  ecommerce: {
    label: "E-Commerce",
    title: "Full-Stack E-Commerce Platform",
    description: "A complete e-commerce web application enabling users to browse products, manage their cart, and complete secure purchases. Includes user authentication, product filtering, order processing, payment integration, and an admin panel — all built around real-world shopping workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    link: "https://e-commerce-frontend-u0z8.onrender.com",
  },
  alumni: {
    label: "Alumni Network",
    title: "Alumni Management Platform",
    description: "A social networking platform bridging students and alumni for mentorship, real-time messaging, and collaboration. Features connection requests, post sharing, likes & comments, event updates, and a full admin dashboard for user and content management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "CSS"],
    link: "https://kitalumni-frontend.onrender.com/",
  },
  travel: {
    label: "Travel Booking",
    title: "Travel Booking Application",
    description: "A full-stack bus booking platform with real-time seat selection and locking, dynamic fare calculation, payment gateway integration, booking confirmation, and booking history — modelled after production travel services.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Payment API", "CSS"],
    link: "https://travels-frontend.onrender.com",
  },
}

const Projects = () => {
  const [active, setActive] = useState("ecommerce")
  const p = projects[active]

  return (
    <section className="projects-section" id="projects">
      <h2>My <span>Works</span></h2>

      <div className="projects-tabs">
        {Object.entries(projects).map(([key, val]) => (
          <button
            key={key}
            className={`tab-btn ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
          >
            {val.label}
          </button>
        ))}
      </div>

      <div key={active} className="project-card">
        <div className="project-card-label">{p.label}</div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>

        <div className="project-tech">
          {p.stack.map(t => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Projects
