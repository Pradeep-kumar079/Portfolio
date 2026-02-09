import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="containers">

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <h3>About Me</h3>

        {/* <img
          src="../assets/arrow-down.png"
          alt="About illustration"
          className="about-image"
        /> */}

        <div className="about-info">
          <p>
            I’m a passionate Full Stack Developer who enjoys building real-world
            web applications from idea to deployment. I work with modern
            technologies like React, Node.js, and MongoDB to create clean,
            scalable, and user-friendly solutions. I love solving problems,
            learning continuously, and turning complex ideas into simple
            experiences.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section" id="skills">
        <h3>Skills</h3>

        <div className="skills-info">
          <div className="skill-item">
            <img src="../assets/html.jpg" alt="HTML" />
          </div>
          <div className="skill-item">
            <img src="../assets/css.png" alt="CSS" />
          </div>
          <div className="skill-item">
            <img src="../assets/js.png" alt="JavaScript" />
          </div>
          <div className="skill-item">
            <img src="../assets/react.png" alt="React" />
          </div>
          <div className="skill-item">
            <img src="../assets/node.png" alt="Node.js" />
          </div>
          <div className="skill-item">
            <img src="../assets/mongo.png" alt="MongoDB" />
          </div>
           <div className="skill-item">
            <img src="../assets/express.png" alt="Express.js" />
          </div>

           <div className="skill-item">
            <img src="../assets/githu.png" alt="GitHub" />
          </div>

           <div className="skill-item">
            <img src="../assets/java.png" alt="Java" />
          </div>

           <div className="skill-item">
            <img src="../assets/python.png" alt="Python" />
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section className="projects" id="projects">
           <h3>Projects</h3>
        {/* ALUMNI PROJECT */}
        <div className="project">
          <h3>Alumni Management </h3>

          <div className="project-container">
            <img
              src="../assets/alumni.jpg"
              alt="Alumni Project"
              className="project-image"
            />

            <div className="project-text">
              <p>
                A full-stack web application designed to bridge the gap between students and alumni by providing a centralized platform for networking, communication, and collaboration. The system enables students to connect with alumni based on batch, branch, and interests, fostering mentorship and career guidance.

                The platform includes features such as user authentication, alumni–student connection requests, real-time messaging, post sharing, likes and comments, event and opportunity updates, and an admin dashboard for managing users, content, and reports. Built with a scalable backend and a responsive frontend, the project focuses on usability, performance, and real-world social networking workflows.

              </p>

              <p className="tech">
                <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB,
                HTML, CSS, JavaScript
              </p>

              <a
                href="https://kitalumni-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        {/* ECOMMERCE PROJECT */}
        <div className="project">
          <h3>E-Commerce Website</h3>

          <div className="project-container">
            <img
              src="../assets/ecommerce.jpg"
              alt="E-Commerce Project"
              className="project-image"
            />

            <div className="project-text">
              <p>
                  A full-stack e-commerce web application that enables users to browse products, view detailed descriptions, add items to the cart, and complete secure online purchases. The platform is designed to deliver a smooth and intuitive shopping experience with a focus on performance, usability, and scalability.
                  Key features include user authentication, product listing and filtering, cart and checkout management, order processing, payment integration, and an admin panel for managing products, orders, and users. The application follows real-world e-commerce workflows and is built with a responsive frontend and a robust backend.
              </p>

              <p className="tech">
                <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB,
                HTML, CSS, JavaScript
              </p>

              <a
                href="https://e-commerce-frontend-u0z8.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        {/* Travel PROJECT */}
        <div className="project">
          <h3>Travel Website</h3>

          <div className="project-container">
            <img
              src="../assets/travel.jpg"
              alt="Travel Project"
              className="project-image"
            />

            <div className="project-text">
              <p>
                  A full-stack travel booking web application that allows users to search buses, select seats in real time, enter passenger details, and complete secure online payments. The platform focuses on providing a smooth and user-friendly booking experience similar to real-world travel services.
                  Key features include dynamic bus search, seat availability and locking, fare calculation, user authentication, payment gateway integration, booking confirmation, and booking history management. The application is built with a scalable backend and a responsive frontend, ensuring reliability, performance, and ease of use across devices.


                                        
              </p>

              <p className="tech">
                <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB,
                HTML, CSS, JavaScript
              </p>

              <a
                href="https://e-commerce-frontend-u0z8.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* CERTIFICATES */}
      <section className="certificates-section" id="certificates">
        <h3>Certificates</h3>

        <div className="certificates-info">

          <div className="certificate-card">
            <img src="../assets/mern.jpg" alt="Full Stack Certificate" />
            <p>Full Stack Web Development (MERN)</p>
            <div className="certificate-overlay">
              <p>Full Stack Web Development (MERN)</p>
              <a href="../assets/mern.jpg" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          </div>

          <div className="certificate-card">
            <img src="../assets/alumni.jpg" alt="JavaScript Certificate" />
             <p>Advanced JavaScript Concepts</p>
            <div className="certificate-overlay">
              <p>Advanced JavaScript Concepts</p>
              <a href="../assets/alumni.jpg" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          </div>

          <div className="certificate-card">
            <img src="../assets/alumni.jpg" alt="Responsive Design Certificate" />
             <p>Responsive Web Design</p>
            <div className="certificate-overlay">
              <p>Responsive Web Design</p>
              <a href="../assets/alumni.jpg" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* contacts */}
      <section className="contact-section" id="contact">
        <h3>Contact Me</h3>
         <div className="phone">
          <img src="../assets/phone.png" alt="Phone Icon" />
          <span>+91 9353198519</span>
        </div>
        <div className="email">
          <img src="../assets/email.png" alt="Email Icon" />
          <span>pradeep@example.com</span>
        </div>

        <div className="github">
          <img src="../assets/githu.png" alt="GitHub Icon" />
          <span>https://github.com/Pradeep-kumar079</span>
        </div>

        <div className="linkdin">
          <img src="../assets/linkd.png" alt="LinkedIn Icon" />
          <span>https://www.linkedin.com/in/pradeep-kumar-56688725b/</span>
        </div>

      </section>

    </div>
  );
};

export default About;
