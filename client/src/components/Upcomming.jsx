import React, { useEffect, useRef } from "react";
import "./Upcomming.css";

const roadmap = [
  {
    phase: "Phase 1 — Current",
    status: "in-progress",
    items: [
      {
        title: "Full Stack Advanced — Frontend",
        desc: "Deep diving into React performance, advanced hooks, code-splitting, lazy loading, React Query, and Zustand state management.",
        tags: ["React", "TypeScript", "Zustand", "React Query"],
      },
      {
        title: "Full Stack Advanced — Backend",
        desc: "Mastering REST API design patterns, JWT auth flows, role-based access control, rate limiting, and WebSocket integration.",
        tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
      },
    ],
  },
  {
    phase: "Phase 2 — Next Up",
    status: "upcoming",
    items: [
      {
        title: "Python Full Stack — FastAPI / Django",
        desc: "Learning Python web frameworks — FastAPI for high-performance APIs and Django for full-featured web applications with ORM and admin.",
        tags: ["Python", "FastAPI", "Django", "PostgreSQL"],
      },
      {
        title: "CI/CD Advanced & GitHub Actions",
        desc: "Building automated pipelines — multi-stage Docker builds, test runners, staging deployments, and GitHub Actions workflows.",
        tags: ["GitHub Actions", "Docker", "CI/CD", "YAML"],
      },
    ],
  },
  {
    phase: "Phase 3 — Planned",
    status: "planned",
    items: [
      {
        title: "Linux & DevOps Workflows",
        desc: "Advanced Linux administration, shell scripting, Nginx reverse proxy, process management, and cloud server hardening on AWS EC2.",
        tags: ["Linux", "Bash", "Nginx", "AWS EC2"],
      },
      {
        title: "Flutter + Firebase",
        desc: "Building cross-platform mobile apps with Flutter — widgets, navigation, state management with Riverpod, and Firebase backend services.",
        tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
      },
      {
        title: "Flutter + Supabase",
        desc: "Integrating Supabase as an open-source Firebase alternative — auth, real-time database, storage, and Row Level Security.",
        tags: ["Flutter", "Supabase", "PostgreSQL", "Realtime"],
      },
    ],
  },
];

const statusMeta = {
  "in-progress": { label: "In Progress", className: "status--active"   },
  "upcoming":    { label: "Up Next",     className: "status--upcoming" },
  "planned":     { label: "Planned",     className: "status--planned"  },
};

const Upcomming = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".up-anim");
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add("up-anim--in");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="upcoming" id="upcoming" ref={sectionRef}>
      <div className="upcoming-inner">

        {/* Header */}
        <div className="upcoming-header up-anim">
          <div className="upcoming-pill">
            <span className="pill-dot" />
            Learning Roadmap
          </div>
          <h2 className="upcoming-heading">
            Currently <span className="upcoming-heading-accent">Learning</span>
          </h2>
          <p className="upcoming-subhead">
            A structured roadmap of what I'm mastering now and what's coming next.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-track" aria-hidden="true" />

          {roadmap.map((phase, pi) => (
            <div key={phase.phase} className="timeline-phase up-anim">

              {/* Phase label */}
              <div className="phase-header">
                <div className="phase-node" aria-hidden="true">
                  <span className="phase-node-inner" />
                </div>
                <div className="phase-meta">
                  <span className="phase-name">{phase.phase}</span>
                  <span className={`phase-status ${statusMeta[phase.status].className}`}>
                    {phase.status === "in-progress" && (
                      <span className="status-blink" aria-hidden="true" />
                    )}
                    {statusMeta[phase.status].label}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="phase-items">
                {phase.items.map((item, ii) => (
                  <div key={item.title} className="timeline-card up-anim">
                    <div className="card-connector" aria-hidden="true" />
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      <div className="card-tags">
                        {item.tags.map((t) => (
                          <span key={t} className="card-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Upcomming;