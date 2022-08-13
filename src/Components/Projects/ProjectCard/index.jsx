import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../../assets/hotel-project.png";
import "./index.css";
import TrackVisibility from "react-on-screen";
import ProjectModal from "../../Modal";
const ProjectCard = (props) => {
const [modalShow, setModalShow] = useState(false)

const openProject = () =>{
  setModalShow(true);
  return <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
}

  return (
    <>
    <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    <Col md={6} lg={4}>

      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={`my-4 project ${
              isVisible ? `animate__animated ${props.animate}` : ""
            }`}
            onClick={()=> setModalShow(true)}
            style={{ height: "300px" }}
          >
            <img src={props.image} className="image " alt="" />
            <div class="overlay">
              <div class="text mb-3">
                <h3 className="project-title">{props.title}</h3>
                <p>{props.description}</p>
                {/* <Badge pill className="mx-2 badge-skill">
                  HTML
                </Badge>
                <Badge pill className="mx-2 badge-skill">
                  CSS
                </Badge>
                <Badge pill className="mx-2 badge-skill">
                  Javascript
                </Badge>
                <Badge pill className="mx-2 badge-skill">
                  React
                </Badge> */}
                {
                  [...Array(props.tech.length)].map((index, key)=>{
                    return <Badge pill className="mx-2 badge-skill">{props.tech[key]}</Badge>
                  })
                }
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>

    </Col>
    </>
  );
};

export default ProjectCard;
