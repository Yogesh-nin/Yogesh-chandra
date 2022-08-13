import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";
const Skills = () => {
  return (
    <div>
      <Container className="my-4">
        <h2 className="text-center">My Skills</h2>
        <Row>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#e44b23",
                  pathColor: "#e44b23",
                  trailColor: "#252525",
                })}
                value="90"
                text="90%"
              />
            </div>
            <span className="text-center mt-2">HTML</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#563d7c",
                  pathColor: "#563d7c",
                  trailColor: "#252525",
                })}
                value="80"
                text="80%"
              />
            </div>
            <span className="text-center mt-2">CSS</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#f1e05a",
                  pathColor: "#f1e05a",
                  trailColor: "#252525",
                })}
                value="87"
                text="87%"
              />
            </div>
            <span className="text-center mt-2">JAVASCRIPT</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#8A2BE2",
                  pathColor: "#8A2BE2",
                  trailColor: "#252525",
                })}
                value="86"
                text="86%"
              />
            </div>
            <span className="text-center mt-2">REACT</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#FFB400",
                  pathColor: "#FFB400",
                  trailColor: "#252525",
                })}
                value="83"
                text="83%"
              />
            </div>
            <span className="text-center mt-2">MERN STACK</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#375eab",
                  pathColor: "#375eab",
                  trailColor: "#252525",
                })}
                value="60"
                text="60%"
              />
            </div>
            <span className="text-center mt-2">GOLANG</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#f34b7d",
                  pathColor: "#f34b7d",
                  trailColor: "#252525",
                })}
                value="89"
                text="89%"
              />
            </div>
            <span className="text-center mt-2">BOOTSTRAP</span>
          </Col>
          <Col
            className="d-flex flex-column align-items-center justify-content-center my-4"
            xs={6}
            lg={3}
          >
            <div className="skill-item">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#3572A5",
                  pathColor: "#3572A5",
                  trailColor: "#252525",
                })}
                value="85"
                text="85%"
              />
            </div>
            <span className="text-center mt-2">PYTHON</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
