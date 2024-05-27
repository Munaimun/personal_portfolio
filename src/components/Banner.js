import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

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
                  <h1>
                    {`Hi! I'm Fahad,`}{" "}
                    <span className="txt-static">
                      {renderSpacedText(`Frontend React Developer`)}
                    </span>
                  </h1>
                  <p>
                    Final-year student at Sonargaon University, deeply
                    passionate about React development. Actively pursuing
                    internship/job opportunities to apply and enhance my skills.
                  </p>
                  <button>
                    Let’s Connect <ArrowRightCircle size={25} />
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
