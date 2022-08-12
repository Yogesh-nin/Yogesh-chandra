import React, { useRef, useEffect } from "react";
import ButtonComponent from "../Button/ButtonComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Intro.css";
import TrackVisibility from "react-on-screen";
import starsImg from '../../assets/stars.png'
import moonImg from '../../assets/moon.png'
import mountainBack from '../../assets/mountains_behind.png'
import mountainFront from '../../assets/mountains_front.png'
const Intro = () => {
  // const starRef = useRef(null)
  // const moonRef = useRef(null)
  // const mountainBackRef = useRef(null)
  // const mountainFrontRef = useRef(null)

  

useEffect(() => {

  let stars = document.getElementById("stars");
  let moon = document.getElementById("moon");
  let mountains_back = document.getElementById("mountains_back");
  let mountains_front = document.getElementById("mountains_front");
  let btn = document.getElementById("btn-letsgo");
  let header = document.querySelector("header");

  window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_back.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    // btn.style.marginTop = value * 1 + "px";
    // header.style.top = value * 0.5 + "px";
  });
  
});


  return (
    <Container fluid className="d-flex align-items-center p-0">
      <section class="home-section">
        <img src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/stars.png" alt="Stars overlay" id="stars" />
        <img src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/moon.png" alt="Moon" id="moon" />
        <img src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_back.png" alt="Mountains back" id="mountains_back" />
        {/* <a href="#about" id="btn-letsgo">Let's go!</a> */}
        <img src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_front.png" alt="Mountains front" id="mountains_front" />
        <Row className="w-100">
        <Col className="heading-container offset-lg-2">
          <TrackVisibility>

          {({isVisible})=>
           <h1 className={`main-heading ${isVisible ? "text-animation" : ""}`}>
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span> <br />
            <span className="blast">I</span>
            <span className="blast">'</span>
            <span className="blast">m&nbsp;</span>
            <span className="blast">Y</span>
            <span className="blast">o</span>
            <span className="blast">g</span>
            <span className="blast">e</span>
            <span className="blast">s</span>
            <span className="blast">h</span>
            <span className="blast">,</span> <br />
            <span className="blast">w</span>
            <span className="blast">e</span>
            <span className="blast">b&nbsp;</span>
            <span className="blast">D</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">p</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
          </h1>}
          </TrackVisibility>
        <h3 className="sub-heading">Front End Web Developer</h3>
        <ButtonComponent name="My Resume!" />
        </Col>

      </Row>
      
    </section>
    </Container>
  );
};

export default Intro;
