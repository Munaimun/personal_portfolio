import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

import headerImg from "../assets/img/profile.jpg";

// import "animate.css";

export const Banner = () => {
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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="animate__animated animate__rotateInDownLeft">
                    {`Hi! I'm Fahad,`}{" "}
                    <span className="txt-static">
                      {renderSpacedText(`Frontend React Developer`)}
                    </span>
                  </h1>
                  <p>
                    Deeply passionate about Frontend React development. Actively
                    pursuing job opportunities to apply and enhance my skills.
                  </p>
                  <button>
                    <a
                      className="lets-connect"
                      href="https://www.linkedin.com/in/munaimun/"
                      target="blank"
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
