import React, { useEffect, useRef } from "react";
import "./Certificate.css";
import dsa from "../assets/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6.pdf";

const certs = [
  {
    img: "../assets/mern.jpg",
    badge: "Certification",
    title: "Java with DSA & Full Stack Web Development",
    detail: "Full Stack Web Development",
    href: dsa,
    isImport: true,
  },
  {
    img: "../assets/Screenshot 2026-03-14 121718.png",
    badge: "3rd Place · ₹10,000",
    title: "Srushti Hackathon",
    detail: "Atria College · 3rd Place · ₹10,000 Prize",
    href: "../assets/Srushti.pdf",
  },
  {
    img: "../assets/Screenshot 2026-03-14 121808.png",
    badge: "1st Place",
    title: "Curious Scripts Hackathon",
    detail: "KIT College · 1st Place Winner",
    href: "../assets/achivements.pdf",
  },
  {
    img: "../assets/Screenshot 2026-03-14 121745.png",
    badge: "Participant",
    title: "GEC Mandya — Web Design",
    detail: "Web Design Hackathon · Participant",
    href: "../assets/webdesign.pdf",
  },
];

const Certificate = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".ct-anim");
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.11}s`;
              el.classList.add("ct-anim--in");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="certs" id="certificates" ref={sectionRef}>
      <div className="certs-inner">

        {/* Header */}
        <div className="certs-header ct-anim">
          <div className="certs-pill">
            <span className="pill-dot" />
            Credentials
          </div>
          <h2 className="certs-heading">
            Achievements &amp;{" "}
            <span className="certs-heading-accent">Certifications</span>
          </h2>
          <p className="certs-subhead">
            Certifications earned and competitions won along the journey.
          </p>
        </div>

        {/* Grid */}
        <div className="certs-grid">
          {certs.map((c, i) => (
            <a
              key={i}
              href={c.isImport ? c.href : c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card ct-anim"
              aria-label={`View certificate: ${c.title}`}
            >
              {/* Image */}
              <div className="cert-img-wrap">
                <img src={c.img} alt={c.title} className="cert-img" />
                <div className="cert-img-overlay" aria-hidden="true" />
              </div>

              {/* Badge */}
              <span className="cert-badge">
                <span className="cert-badge-dot" />
                {c.badge}
              </span>

              {/* Body */}
              <div className="cert-body">
                <p className="cert-title">{c.title}</p>
                <p className="cert-detail">{c.detail}</p>
                <span className="cert-cta">
                  View Certificate
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificate;