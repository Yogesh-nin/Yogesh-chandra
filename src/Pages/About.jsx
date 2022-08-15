import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PersonalInfo from "../Components/Personalnfo";
import Cloud from "../Components/Cloud";
import Skills from "../Components/Skills";
import TrackVisibility from "react-on-screen";
import Loader from "../Components/Loader";
import ScrollDownLeft from "../Components/scroll-down/ScrollDownLeft";
import ScrollDownRight from "../Components/scroll-down/ScrollDownRight";
const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="page-section section-division">
          <Container className='my-4'>
            <TrackVisibility once>
              {({ isVisible }) => (
                <h2
                  aria-labelledby="Me, Myself and I"
                  className={`section-heading txt-blue ${
                    isVisible ? "text-animation" : ""
                  }`}
                >
                  <span className="blast">M</span>
                  <span className="blast">e</span>
                  <span className="blast">,&nbsp;</span>
                  <span className="blast">M</span>
                  <span className="blast">y</span>
                  <span className="blast">s</span>
                  <span className="blast">e</span>
                  <span className="blast">l</span>
                  <span className="blast">f&nbsp;</span>
                  <span className="blast">&&nbsp;</span>
                  <span className="blast">I</span>
                </h2>
              )}
            </TrackVisibility>
            <Row className="d-flex justify-content-center">
              <PersonalInfo />
              <Cloud />
            </Row>
            <ScrollDownLeft />
            <ScrollDownRight/>
          </Container>
          <Skills />
        </div>
      )}
    </>
  );
};

export default About;
