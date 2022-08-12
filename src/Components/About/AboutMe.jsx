import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import './index.css'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import Cloud from '../Cloud';
const AboutMe = () => {
  return (
    <Container className="">
        <Row className='d-flex justify-content-between'>
            <Col lg={5}>
              <TrackVisibility>
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

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quasi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique ullam corporis laborum quaerat repudiandae at obcaecati commodi eius possimus fugit, quidem enim accusantium odit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor ipsam, odio unde tenetur voluptatum quam necessitatibus accusantium.</p>
            </Col>
            <Col className='' lg={5}>
              <Cloud />
            </Col>
        </Row>
    </Container>
  )
}

export default AboutMe