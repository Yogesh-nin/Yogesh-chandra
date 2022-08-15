import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Container, Row, Col } from "react-bootstrap";
import img from '../../../assets/hotel-modal-img.png'
import "./index.css";
import TrackVisibility from "react-on-screen";
import ProjectModal from "../../Modal";
const ProjectCard = (props) => {
const [modalShow, setModalShow] = useState(false)

  return (
    <>
    <ProjectModal link={props.link} title={props.title} tech={props.tech} image={props.modalImg} show={modalShow} onHide={() => setModalShow(false)} />
    <div>

      <TrackVisibility  once>
        {({ isVisible }) => (
          <div
              className={`my-4 project ${
              isVisible ? `animate__animated ${props.animate}` : ""
            }`}
            onClick={()=> setModalShow(true)}
            style={{ height: "300px" }}
          >
            <img src={props.image} className="image " alt="" />
            <div className="overlay">
              <div className="text mb-3">
                <h3 className="project-title">{props.title}</h3>
                <p>{props.description}</p>
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

    </div>
    </>
  );
};

export default ProjectCard;
