import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-pill">About Me</div>
      <h2>Passionate about building<br /><span>real-world products</span></h2>

      <p className="about-text">
        I'm a Full Stack Developer with strong expertise in React.js, Node.js, Express.js, MongoDB, and Java.
        I enjoy building scalable, user-friendly applications from idea to deployment — with a focus on
        performance, clean code, and great user experience.
      </p>
      <p className="about-text">
        I have hands-on experience developing real-world projects using the MERN Stack and Flutter, and I'm
        always learning, always improving. As a fresher, I'm seeking an opportunity to contribute my skills
        and grow alongside a talented team.
      </p>

      <div className="about-stats">
        <div className="stat-box">
          <div className="num">3+</div>
          <div className="label">Full-stack projects</div>
        </div>
        <div className="stat-box">
          <div className="num">2×</div>
          <div className="label">Hackathon winner</div>
        </div>
        <div className="stat-box">
          <div className="num">8+</div>
          <div className="label">Technologies</div>
        </div>
      </div>
    </section>
  );
};

export default About;
