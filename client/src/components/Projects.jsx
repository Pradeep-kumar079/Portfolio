import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {

  const [activeProject, setActiveProject] = useState("ecommerce")

  return (
    <div className='container' id='projects'>
      

      <div className="left">

        <div 
          className={activeProject === "ecommerce" ? "item active" : "item"}
          onClick={() => setActiveProject("ecommerce")}
        >
          E-commerce
        </div>

        <div 
          className={activeProject === "alumni" ? "item active" : "item"}
          onClick={() => setActiveProject("alumni")}
        >
          Alumni
        </div>

        <div 
          className={activeProject === "travel" ? "item active" : "item"}
          onClick={() => setActiveProject("travel")}
        >
          Travel
        </div>

      </div>

      <div className="right">

        <h3>My Works</h3>


        {activeProject === "ecommerce" && (
          <div>
             <div className="project">
          <h3>E-Commerce Website</h3>

          <div className="project-container">
            

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

          </div>
        )}

        {activeProject === "alumni" && (
          <div>
            <div className="project">
          <h3>Alumni Management </h3>

          <div className="project-container">
             
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

          </div>
        )}

        {activeProject === "travel" && (
          <div>
            <div className="project">
          <h3>Travel Website</h3>

          <div className="project-container">
            

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
                href="https://travels-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>


          </div>
        </div>


          </div>
        )}

      </div>

    </div>
  )
}

export default Projects