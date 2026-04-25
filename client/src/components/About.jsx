import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".a-anim");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".a-anim");
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.12}s`;
              el.classList.add("a-anim--in");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { num: "3+", label: "Full-stack Projects" },
    { num: "2×", label: "Hackathon Winner"    },
    { num: "8+", label: "Technologies"        },
  ];

  const skills = [
    "React.js", "Node.js", "Express.js",
    "MongoDB", "Flutter", "Java",
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-inner">

        {/* Left column */}
        <div className="about-left">
          <div className="about-pill a-anim">
            <span className="pill-dot" />
            About Me
          </div>

          <h2 className="about-heading a-anim">
            Passionate about building<br />
            <span className="about-heading-accent">real-world products</span>
          </h2>

          <p className="about-text a-anim">
            I'm a Full Stack Developer with strong expertise in React.js, Node.js,
            Express.js, MongoDB, and Java. I enjoy building scalable, user-friendly
            applications from idea to deployment — with a focus on performance,
            clean code, and great user experience.
          </p>

          <p className="about-text a-anim">
            I have hands-on experience developing real-world projects using the
            MERN Stack and Flutter, and I'm always learning, always improving.
            As a fresher, I'm eager to contribute my skills and grow alongside
            a talented team.
          </p>

          {/* Skill tags */}
          <div className="about-skills a-anim">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>

          <a href="#contact" className="about-cta a-anim">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right column — stats */}
        <div className="about-right">
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-card a-anim">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}

          {/* Decorative quote */}
          <blockquote className="about-quote a-anim">
            "Always learning,<br />always improving."
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default About;