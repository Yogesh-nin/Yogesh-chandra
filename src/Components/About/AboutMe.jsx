import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import './index.css'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import Cloud from '../Cloud';
import { Link } from 'react-router-dom'
const AboutMe = () => {
  return (
    <Container className="section-division">
        <Row className='d-flex justify-content-between'>
            <Col lg={5}>
              <span className="tags">&lt;h2&gt; </span>
              <TrackVisibility once>
                {({isVisible})=> 
                <h2 aria-labelledby='Me, Myself and I' className={`section-heading txt-blue ${isVisible ? "text-animation" : ""}`}>
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
                </h2>}
                </TrackVisibility>
                <span className="tags"> &lt;/h2&gt; <br/></span>

                <span className="tags"> &lt;p&gt;</span>
                <p>Hello there! I am Yogesh Chandra, a Mern Stack developer proficient in ReactJs. </p>
                <p>Well-organised person, zealous, problem solver, person with high attention to details, fan of anime and TV series.</p>
                <p>Intrested in frontend and backend spectrum and working on ambitious projects with positive people.</p>

                <span><Link className='para-link' to="./about">want to know more...</Link><br/></span>
                <span className="tags"> &lt;/p&gt; <br/></span>

            </Col>

              <Cloud />
        </Row>
    </Container>
  )
}

export default AboutMe