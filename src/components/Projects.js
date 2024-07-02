import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import intelitalk from "../assets/img/intelitalk.png";
import fashionfusion from "../assets/img/FashionFusion.png";
import topcourses from "../assets/img/topcourses.jpg";
import viewfinder from "../assets/img/viewfinder.jpg";
import quizjs from "../assets/img/quiz.jpg";
import "animate.css";

const projects = [
  {
    title: "InteliTalk- Chatbot",
    description:
      "Created a chatbot application that utilizes Axios to handle API requests for seamless data fetching from the backend and implements secure user authorization using JWT. A streamlined chat interface for accessing university information, complemented by an admin panel for efficient database and student list management.",
    imgUrl: intelitalk,
    liveLink: "https://intelitalk-production.up.railway.app/",
    githubLink: "https://github.com/dev-saiful/InteliTalk/tree/frontend",
  },
  {
    title: "FashionFusion - Ecommerce",
    description:
      "Implemented features such as product categorization, a dynamic cart system for adding and removing items, and a user authentication system for secure login",
    imgUrl: fashionfusion,
    liveLink: "https://fashion-fusion-commerce.vercel.app/",
    githubLink: "https://github.com/Munaimun/Fashion_Fusion",
  },
  {
    title: "Top Courses - Course catalog application",
    description:
      "A dynamic course catalog application that interacts with an API to fetch and display various courses.The user interface includes some category buttons for easy course filtering. Implemented a toast feature, allowing users to 'like' and receive feedback on their preferred courses instantly.",
    imgUrl: topcourses,
    liveLink: "https://top-courses-eight-ecru.vercel.app/",
    githubLink: "https://github.com/Munaimun/TopCourses",
  },
  {
    title: "ViewFinder - Tour Packages Application",
    description:
      "Developed a comprehensive Tour Packages Application, featuring detailed information on various tourist destinations. Implemented a user-friendly interface to showcase package details, enhancing the user experience - React, Javascript, HTML, Tailwind, CSS.",
    imgUrl: viewfinder,
    liveLink: "https://view-finder-nine.vercel.app/",
    githubLink: "https://github.com/Munaimun/ViewFinder",
  },
  {
    title: "Quiz App",
    description:
      "Developed a quiz application using Vanilla JS that asks questions about JavaScript concepts, testing users' knowledge and providing an engaging learning experience.",
    imgUrl: quizjs,
    liveLink: "https://munaimun.github.io/Quiz_js/",
    githubLink: "https://github.com/Munaimun/Quiz_js",
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <div className="container project-page" id="container">
                    {projects.map((project, index) => (
                      <div className="card" key={index}>
                        <div>
                          <img
                            className="project-image"
                            src={project.imgUrl}
                            alt="Project"
                          />
                        </div>
                        <div className="project-info">
                          <h2 className="title">{project.title}</h2>
                          <p className="description">{project.description}</p>
                          <div className="buttons">
                            <a
                              className="project-link"
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                            <a
                              className="project-link"
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
