import React from 'react'
import ProjectCard from './ProjectCard'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonComponent from '../Button/ButtonComponent'
import img1 from '../../assets/hotel-project.png';
import img2 from '../../assets/instaverse.png'
import img3 from '../../assets/clinic-website.png'
import img4 from '../../assets/restaurant.png'
import img5 from '../../assets/news-monkey.png'
import img6 from '../../assets/js-quiz.png'
import TrackVisibility from "react-on-screen";
import { useLocation, useNavigate } from 'react-router-dom';

const projects = [
  {
    image: img1,
    title: "Hotel Bhabha",
    description: "Hotel bhabha website",
    tech: ["MERN", "Reactjs", "Bootstrap", "Express"]
  },
  {
    image: img2,
    title: "Instaverse",
    description: "A photo sharing app",
    tech: ["MERN", "Reactjs", "material-ui", "Express"]
  },
  {
    image: img3,
    title: "Coochebehar polyclinic",
    description: "Website created for coochebehar polyclinic",
    tech: ["HTML", "CSS", "Javascript", "Jquery"]
  },
  {
    image: img4,
    title: "Con Fusion",
    description: "A restaurant website",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"]
  },
  {
    image: img5,
    title: "NewsMonkey",
    description: "Get your daily dose of news",
    tech: ["ReactJs", "Bootstrap", "News API"]
  },
  {
    image: img6,
    title: "Javascript quiz",
    description: "A simple javascript quiz",
    tech: ["Javascript", "HTML", "CSS"]
  },
]

const ProjectContainer = () => {

  const location = useLocation();
  let navigate = useNavigate();
  return (
    <Container>
        <Row className="d-flex justify-content-between">
        <TrackVisibility>
            
            {({isVisible})=>
             <h2 aria-labelledby="Contact me" className={`section-heading txt-blue ${isVisible ? "text-animation": ""}`}>
              <span className='blast'>M</span>
              <span className='blast'>y&nbsp;</span>
              <span className='blast'>P</span>
              <span className='blast'>r</span>
              <span className='blast'>o</span>
              <span className='blast'>j</span>
              <span className='blast'>e</span>
              <span className='blast'>c</span>
              <span className='blast'>t</span>
              <span className='blast'>s</span>
            </h2>
            }
            </TrackVisibility>
            <Col lg={6}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt distinctio laborum corporis sunt laboriosam dolores officia cum maxime fuga!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt distinctio laborum corporis sunt laboriosam dolores officia cum maxime fuga!</p>
            </Col>
            {
            (location.pathname==='/' && <Col lg={3}>
              <ButtonComponent name="See more..." route="/work"/>
            </Col>)}
            </Row>
            <Row>

            {
              projects.map((project_item, index)=>{
                return <ProjectCard animate="animate__fadeInUp" {...project_item} />
              })
            }
            </Row>
    </Container>
  )
}

export default ProjectContainer