import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              className="skill-bx wow zoomIn"
            >
              <motion.h2 variants={itemVariants}>Skills</motion.h2>
              <motion.p variants={itemVariants}>
                A dedicated Frontend Developer with a versatile skill set,
                including:
              </motion.p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {[
                  "React.JS",
                  "Next.JS",
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "OOP",
                  "Git & Github",
                  "HTML & CSS",
                  "Tailwind",
                  "Bootstrap",
                  "C & C++[Basic]",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="item"
                    variants={itemVariants}
                  >
                    <h5>{skill}</h5>
                  </motion.div>
                ))}
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};