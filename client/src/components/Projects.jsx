import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

const projects = {
  ecommerce: {
    label: "E-Commerce",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A complete e-commerce web application enabling users to browse products, manage their cart, and complete secure purchases. Includes user authentication, product filtering, order processing, payment integration, and an admin panel — all built around real-world shopping workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    link: "https://e-commerce-frontend-u0z8.onrender.com",
    number: "01",
  },
  alumni: {
    label: "Alumni Network",
    title: "Alumni Management Platform",
    description:
      "A social networking platform bridging students and alumni for mentorship, real-time messaging, and collaboration. Features connection requests, post sharing, likes & comments, event updates, and a full admin dashboard for user and content management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "CSS"],
    link: "https://pradeepkumar.site/",
    number: "02",
  },
  travel: {
    label: "Travel Booking",
    title: "Travel Booking Application",
    description:
      "A full-stack bus booking platform with real-time seat selection and locking, dynamic fare calculation, payment gateway integration, booking confirmation, and booking history — modelled after production travel services.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Payment API", "CSS"],
    link: "https://travels-frontend.onrender.com",
    number: "03",
  },
};

const Projects = () => {
  const [active, setActive] = useState("ecommerce");
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef(null);
  const p = projects[active];

  // Scroll reveal
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".pr-anim");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".pr-anim");
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.11}s`;
              el.classList.add("pr-anim--in");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTab = (key) => {
    setActive(key);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-inner">

        {/* Header */}
        <div className="projects-header pr-anim">
          <div className="projects-pill">
            <span className="pill-dot" />
            My Work
          </div>
          <h2 className="projects-heading">
            Featured <span className="projects-heading-accent">Projects</span>
          </h2>
          <p className="projects-subhead">
            A selection of real-world applications built from concept to deployment.
          </p>
        </div>

        {/* Tab bar */}
        <div className="projects-tabs pr-anim" role="tablist">
          {Object.entries(projects).map(([key, val]) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              className={`tab-btn ${active === key ? "tab-btn--active" : ""}`}
              onClick={() => handleTab(key)}
            >
              <span className="tab-num">{val.number}</span>
              {val.label}
            </button>
          ))}
        </div>

        {/* Project card */}
        <div key={animKey} className="project-card pr-anim">

          {/* Card top bar */}
          <div className="card-top">
            <span className="card-label">
              <span className="card-label-dot" />
              {p.label}
            </span>
            <span className="card-number">{p.number}</span>
          </div>

          <h3 className="card-title">{p.title}</h3>
          <p className="card-desc">{p.description}</p>

          <div className="card-divider" />

          {/* Tech stack */}
          <div className="card-tech">
            {p.stack.map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>

          {/* Action */}
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            View Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;