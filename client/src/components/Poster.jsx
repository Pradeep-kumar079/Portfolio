import React, { useEffect, useRef } from "react";
import "./Poster.css";
import resume from "../assets/Kit_Cse_Pradeep_MernStack.pdf";
import profileImg from "../assets/poster.png";

const Poster = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll(".poster-animate");
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add("poster-animate--in");
    });
  }, []);

  return (
    <section className="poster">
      {/* Background image layer */}
      <div className="poster-bg" aria-hidden="true">
        <img src={profileImg} alt="" className="poster-bg-img" />
        <div className="poster-bg-overlay" />
        <div className="poster-bg-fade" />
        <div className="poster-bg-vignette" />
      </div>

      {/* Floating code snippets decoration */}
      <div className="poster-deco" aria-hidden="true">
        <span className="deco-tag deco-tag--1">{"<Developer />"}</span>
        <span className="deco-tag deco-tag--2">{"{ MERN }"}</span>
        <span className="deco-tag deco-tag--3">{"Flutter()"}</span>
      </div>

      {/* Main content */}
      <div className="poster-content">
        <div className="poster-left">

          <div className="poster-eyebrow poster-animate">
            <span className="eyebrow-dot" />
            Available for Work
          </div>

          <h1 className="poster-title poster-animate" ref={titleRef}>
            Hey, I'm <br />
            <span className="highlight">Pradeep<br className="title-break" /> Kumar</span>
          </h1>

          <p className="poster-subtitle poster-animate">
            I craft scalable web apps & mobile experiences —
            from pixel-perfect UI to production-ready APIs.
          </p>

          <div className="poster-stack poster-animate">
            {["MERN Stack", "Flutter", "Java"].map((tech) => (
              <span key={tech} className="stack-pill">{tech}</span>
            ))}
          </div>

          <div className="poster-actions poster-animate">
            <a href={resume} download className="resume-btn">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M7.5 2v8M4.5 7.5l3 3 3-3M2 12h11"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </a>
            <a href="#projects" className="view-work-btn">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="poster-stats poster-animate">
            {[
              { number: "2+", label: "Years Exp." },
              { number: "15+", label: "Projects" },
              { number: "10+", label: "Technologies" },
            ].map(({ number, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — subtle profile card on larger screens */}
        <div className="poster-right poster-animate" aria-hidden="true">
          <div className="profile-card">
            <div className="profile-card-inner">
              <img src={profileImg} alt="Pradeep Kumar" className="profile-card-img" />
              <div className="profile-card-badge">
                <span className="badge-dot" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="poster-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse">
          <span className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Poster;