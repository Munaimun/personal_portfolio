import React, { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { useInView } from 'react-intersection-observer';

import complete_E from "../assets/img/complete_ecommerce.png";
import intelitalk from "../assets/img/intelitalk.png";
import ecommerce from "../assets/img/ecommerce.png";
import techcommerce from "../assets/img/techcommerce.png";
import fashionfusion from "../assets/img/FashionFusion.png";
import topcourses from "../assets/img/topcourses.jpg";
import viewfinder from "../assets/img/viewfinder.jpg";
import quizjs from "../assets/img/quiz.jpg";
import hospital from "../assets/img/hospital.png";
import restaurant from "../assets/img/restaurant.png";

// import "animate.css";

const projects = [
  {
    title: "Complete E-commerce",
    description:
      "Implemented product categorization, a dynamic cart system for adding and removing items, add to favorite section and a user authentication system for secure login. Integrated a payment system",
    imgUrl: complete_E,
    liveLink: "https://complete-e-commerce-7v1b.vercel.app/",
    githubLink: "https://github.com/Munaimun/Complete_E-commerce",
    stacks: [
      "React",
      "Redux",
      "Firebase",
      "Axios",
      "zustand",
      "react-paginate",
    ],
  },
  {
    title: "Ai-Powered Chatbot- InteliTalk",
    description:
      "Created a chatbot application that utilizes Axios to handle API requests for seamless data fetching from the backend and implements secure user authorization using JWT. A streamlined chat interface for accessing university information, complemented by an admin panel for efficient database and student list management.",
    imgUrl: intelitalk,
    liveLink: "https://intelitalk.onrender.com/",
    githubLink: "https://github.com/dev-saiful/InteliTalk/tree/frontend",
    stacks: ["React", "tailwind", "Mongo", "Axios"],
  },
  {
    title: "FashionFusion - Ecommerce",
    description:
      "Implemented features such as product categorization, a dynamic cart system for adding and removing items, and a user authentication system for secure login",
    imgUrl: fashionfusion,
    liveLink: "https://fashion-fusion-commerce.vercel.app/",
    githubLink: "https://github.com/Munaimun/Fashion_Fusion",
    stacks: [
      "React",
      "Redux",
      "Firebase",
      "Axios",
      "zustand",
      "react-paginate",
    ],
  },
  {
    title: "Top Courses - Course catalog application",
    description:
      "A dynamic course catalog application that interacts with an API to fetch and display various courses.The user interface includes some category buttons for easy course filtering. Implemented a toast feature, allowing users to 'like' and receive feedback on their preferred courses instantly.",
    imgUrl: topcourses,
    liveLink: "https://top-courses-eight-ecru.vercel.app/",
    githubLink: "https://github.com/Munaimun/TopCourses",
    stacks: ["React", "tailwind", "Firebase", "Axios", "react-paginate"],
  },
  {
    title: "ViewFinder - Tour Packages Application",
    description:
      "Developed a comprehensive Tour Packages Application, featuring detailed information on various tourist destinations. Implemented a user-friendly interface to showcase package details, enhancing the user experience - React, Javascript, HTML, Tailwind, CSS.",
    imgUrl: viewfinder,
    liveLink: "https://view-finder-nine.vercel.app/",
    githubLink: "https://github.com/Munaimun/ViewFinder",
    stacks: ["React", "Axios", "react-paginate"],
  },
  {
    title: "Quiz App",
    description:
      "Developed a quiz application using Vanilla JS that asks questions about JavaScript concepts, testing users' knowledge and providing an engaging learning experience.",
    imgUrl: quizjs,
    liveLink: "https://munaimun.github.io/ScriptTest/",
    githubLink: "https://github.com/Munaimun/Quiz_js",
    stacks: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Hospital Website",
    description:
      "Hospital Website is a comprehensive and responsive web application designed to provide an intuitive user experience for patients and healthcare providers alike. Built using React with Vite and Tailwind CSS, the website features a clean and modern design with a calming color scheme of blue, sky blue, and white. The homepage includes a dynamic image slider with health-related quotes that swipes every 2 seconds, creating an engaging first impression. The site is equipped with essential components such as a Doctors page, where users can view profiles of doctors categorized by expertise and department, and a Make an Appointment page with an interactive form that allows users to pick dates, times, select departments, and choose doctors. The Department section highlights different medical specialties, with options for emergency contact and appointment booking. The website also includes a Blog component focused on health consciousness, featuring expandable sections with 'Read More' options. A thoughtfully designed Footer component provides social media links, contact information, and a list of departments, ensuring easy navigation throughout the site. This project showcases my skills in front-end development, responsive design, and user-centric web applications.",
    imgUrl: hospital,
    liveLink: "https://hospital-website-five.vercel.app/",
    githubLink: "https://github.com/Munaimun/hospital_website",
    stacks: ["React", "tailwind", "Router Dom"],
  },
  {
    title: "Restaurant Web",
    description:
      "Restaurant App is a feature-rich web application designed to enhance the dining experience through a user-friendly interface and interactive features. Developed with React, this app includes a visually appealing homepage with a rotating banner that displays quotes about food, exclusive offers, and featured menu items. Users can easily navigate through the site, explore detailed menus, make reservations, and even place online orders. The app is responsive across devices, ensuring an optimal viewing experience whether accessed on a desktop or mobile device. The design incorporates a clean and modern aesthetic, with hover effects for navigation links and a footer that includes social media links, the restaurant’s address, and a list of available departments. This project demonstrates my ability to create visually appealing and functional web applications that prioritize user experience and accessibility.",
    imgUrl: restaurant,
    liveLink: "https://restaurant-app-eight-rho.vercel.app/",
    githubLink: "https://github.com/Munaimun/Restaurant_App",
    stacks: ["React", "react-router-dok", "react-icons"],
  },
  {
    title: "E-commerce",
    description:
      "This is a robust e-commerce platform developed using React, Redux, and REST API. The project delivers a seamless online shopping experience with dynamic product categorization, a responsive user interface, and a secure user authentication system. It features a real-time cart management system that allows users to add, remove, and update items effortlessly. The platform integrates various payment methods, ensuring a smooth and secure checkout process. Additionally, an admin dashboard is included for managing products, orders, and users, showcasing my proficiency in full stack front-end development and API integration.",
    imgUrl: ecommerce,
    liveLink: "https://munaimuns-ecommerce.netlify.app/",
    githubLink: "https://github.com/Munaimun/Ecommerce",
    stacks: [
      "React",
      "context-hook",
      "Firebase",
      "Axios",
      "reselect",
      "vite-plugin-svgr",
    ],
  },
  {
    title: "Tech-commerce(ongoing)",
    description:
      "Developed an e-commerce website featuring a user-friendly interface for seamless product browsing. The platform includes robust cart functionality, allowing users to effortlessly add and remove items. Secure user authentication and login management were implemented using Firebase.",
    imgUrl: techcommerce,
    liveLink: "https://github.com/Munaimun/TechCommerce",
    githubLink: "https://github.com/Munaimun/TechCommerce",
    stacks: ["React", "context-hook", "express", "Mongo"],
  },
];

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderLetters = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hover-letter">
        {char}
      </span>
    ));
  };

  const renderSpacedText = (text) => {
    const words = text.split(" ");
    return words.map((word, wordIndex) => (
      <span key={wordIndex}>
        {renderLetters(word)}
        {wordIndex < words.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
                  <h2 className="animate__animated animate__jackInTheBox">
                    {renderSpacedText(`Projects`)}
                  </h2>

                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                      hidden: {},
                    }}
                    className="container project-page"
                    id="container"
                  >
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="card"
                        variants={itemVariants}
                      >
                        <div>
                          <img
                            className="project-image"
                            src={project.imgUrl}
                            alt="Project"
                          />
                        </div>
                        <div className="project-info">
                          <h2 className="title">{project.title}</h2>

                          <p className="description">
                            {expandedIndex === index
                              ? project.description
                              : `${project.description.substring(0, 100)}...`}
                            <span
                              className="read-more-text"
                              onClick={() => handleReadMoreClick(index)}
                            >
                              {expandedIndex === index
                                ? " Read Less"
                                : " Read More"}
                            </span>
                          </p>

                          <span className="stack-span">
                            {project.stacks?.map((stack, stackIndex) => (
                              <button
                                key={stackIndex}
                                className="stack-button"
                              >
                                {stack}
                              </button>
                            ))}
                          </span>
                        </div>

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
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
