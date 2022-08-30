import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Intro.css";
import TrackVisibility from "react-on-screen";
import starsImg from '../../assets/stars.png'
import moonImg from '../../assets/moon.png'
import mountainBack from '../../assets/mountains_behind.png'
import mountainFront from '../../assets/mountains_front.png'
import resume from '../../assets/resume.pdf'
import ScrollDownLeft from "../scroll-down/ScrollDownLeft";
import ScrollDownRight from "../scroll-down/ScrollDownRight";
const Intro = () => {

useEffect(() => {

  let stars = document.getElementById("stars");
  let moon = document.getElementById("moon");
  let mountains_back = document.getElementById("mountains_back");
  let mountains_front = document.getElementById("mountains_front");

  window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_back.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
  });
  
});


  return (
    <Container fluid className="d-flex align-items-center p-0">
      <section class="home-section">
        <img src={starsImg} alt="Stars overlay" id="stars" />
        <img src={moonImg} alt="Moon" id="moon" />
        <img src={mountainBack} alt="Mountains back" id="mountains_back" />
        {/* <a href="#about" id="btn-letsgo">Let's go!</a> */}
        <img src={mountainFront} alt="Mountains front" id="mountains_front" />
        <Row className="w-100">
        <Col className="heading-container offset-lg-2">
          <TrackVisibility once>

          {({isVisible})=>
           <h1 className={`main-heading ${isVisible ? "text-animation" : ""}`}>
            <span className="blast hover-red">H</span>
            <span className="blast hover-red">i</span>
            <span className="blast hover-red">,</span> <br />
            <span className="blast hover-red">I</span>
            <span className="blast hover-red">'</span>
            <span className="blast hover-red">m&nbsp;</span>
            <span className="blast hover-red">Y</span>
            <span className="blast hover-red">o</span>
            <span className="blast hover-red">g</span>
            <span className="blast hover-red">e</span>
            <span className="blast hover-red">s</span>
            <span className="blast hover-red">h</span>
            <span className="blast hover-red">,</span> <br />
            <span className="blast hover-red">w</span>
            <span className="blast hover-red">e</span>
            <span className="blast hover-red">b&nbsp;</span>
            <span className="blast hover-red">D</span>
            <span className="blast hover-red">e</span>
            <span className="blast hover-red">v</span>
            <span className="blast hover-red">e</span>
            <span className="blast hover-red">l</span>
            <span className="blast hover-red">o</span>
            <span className="blast hover-red">p</span>
            <span className="blast hover-red">e</span>
            <span className="blast hover-red">r</span>
          </h1>}
          </TrackVisibility>
        <h3 className="sub-heading">Front End Web Developer / React Developer</h3>
        <Button href={resume} target="_blank"  className='button my-4'>My resume!</Button>
        </Col>

      </Row>
      <ScrollDownLeft />
      <ScrollDownRight />
    </section>
    </Container>
  );
};

export default Intro;
