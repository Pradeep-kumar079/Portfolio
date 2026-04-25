import React, { useEffect } from "react";
import "./Poster.css";
import resume from "../assets/Kit_Cse_Pradeep_MernStack.pdf";
import profileImg from "../assets/poster.png";

const Poster = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".p-anim");
    els.forEach((el, i) => {
      el.style.animationDelay = `${0.1 + i * 0.13}s`;
      el.classList.add("p-anim--in");
    });
  }, []);

  const stack = ["MERN Stack", "Flutter", "Java"];

  return (
    <section className="poster">
      {/* Background image */}
      <div className="poster-bg" aria-hidden="true">
        <img src={profileImg} alt="" className="poster-bg-img" />
        <div className="poster-bg-overlay" />
        <div className="poster-bg-fade-bottom" />
        <div className="poster-bg-fade-right" />
      </div>

      {/* Content */}
      <div className="poster-content">
        <div className="poster-left">

          {/* Eyebrow */}
          <div className="poster-eyebrow p-anim">
            <span className="eyebrow-dot" />
            Full Stack Developer
          </div>

          {/* Heading */}
          <h1 className="poster-title p-anim">
            Hey, I'm<br />
            <span className="poster-title-name">Pradeep Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="poster-subtitle p-anim">
            I build scalable web applications &amp; mobile
            experiences — from concept to deployment.
          </p>

          {/* Stack pills */}
          <div className="poster-stack p-anim">
            {stack.map((t) => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="poster-actions p-anim">
            <a href={resume} download className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v7M4.5 7l2.5 2.5L9.5 7M2 12h10"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="poster-stats p-anim">
            {[
              { n: "2+",  l: "Years Exp." },
              { n: "15+", l: "Projects"   },
              { n: "10+", l: "Technologies" },
            ].map(({ n, l }) => (
              <div key={l} className="stat-item">
                <span className="stat-number">{n}</span>
                <span className="stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile card — desktop only */}
        <div className="poster-right p-anim" aria-hidden="true">
          <div className="profile-card">
            <img src={profileImg} alt="Pradeep Kumar" className="profile-card-img" />
            <div className="profile-card-footer">
              <span className="profile-status-dot" />
              Open to Opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="poster-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse"><span className="scroll-dot" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Poster;