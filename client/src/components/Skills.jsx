import React, { useEffect, useRef } from "react";
import "./Skills.css";

import html     from "../assets/html.jpg";
import css      from "../assets/css.png";
import js       from "../assets/js.png";
import reactImg from "../assets/react.png";
import node     from "../assets/node.png";
import mongo    from "../assets/mongo.png";
import java     from "../assets/java.png";
import flutter  from "../assets/flutter.jpg";
import github   from "../assets/github.png";
import linux    from "../assets/linux.png";
import cicd     from "../assets/cicd.png";
import docker   from "../assets/docker.png";
import awsec2   from "../assets/awsec2.png";

const categories = [
  {
    label: "Frontend",
    skills: [
      { img: html,     name: "HTML"       },
      { img: css,      name: "CSS"        },
      { img: js,       name: "JavaScript" },
      { img: reactImg, name: "React"      },
    ],
  },
  {
    label: "Backend",
    skills: [
      { img: node,  name: "Node.js"  },
      { img: mongo, name: "MongoDB"  },
      { img: java,  name: "Java"     },
    ],
  },
  {
    label: "Mobile & Tools",
    skills: [
      { img: flutter, name: "Flutter" },
      { img: github,  name: "GitHub"  },
      { img: linux,   name: "Linux"   },
      { img: docker,  name: "Docker"  },
      { img: cicd,    name: "CI/CD"   },
      { img: awsec2,  name: "AWS EC2" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".sk-anim");
            items.forEach((el, i) => {
              el.style.animationDelay = `${i * 0.07}s`;
              el.classList.add("sk-anim--in");
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
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-inner">

        {/* Header */}
        <div className="skills-header sk-anim">
          <div className="skills-pill">
            <span className="pill-dot" />
            Expertise
          </div>
          <h2 className="skills-heading">
            Skills &amp; <span className="skills-heading-accent">Technologies</span>
          </h2>
          <p className="skills-subhead">
            Tools and technologies I work with to build great products.
          </p>
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.label} className="skills-group sk-anim">
            <div className="skills-group-header">
              <span className="skills-group-label">{cat.label}</span>
              <span className="skills-group-line" aria-hidden="true" />
            </div>

            <div className="skills-grid">
              {cat.skills.map((sk) => (
                <div key={sk.name} className="skill-card sk-anim">
                  <div className="skill-img-wrap">
                    <img src={sk.img} alt={sk.name} className="skill-img" />
                  </div>
                  <span className="skill-name">{sk.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;