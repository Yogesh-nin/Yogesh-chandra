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
import { useLocation } from 'react-router-dom';

import hotelModal from '../../assets/hotel-modal-img.png'
import instaModal from '../../assets/instaverse-modal.png'
import jsModal from '../../assets/js-quiz-modal.png'
import restaurantModal from '../../assets/restaurant-modal.png'
import newsModal from '../../assets/news-app-modal.png'
import clinicModal from '../../assets/clinic-website-modal.png'
import ProjectSlider from './Project-Slider';


const projects = [
  {
    image: img1,
    title: "Hotel Bhabha",
    description: "Hotel bhabha website",
    tech: ["MERN", "Reactjs", "Bootstrap", "Express"],
    modalImg: hotelModal,
    link: 'https://hotel-bhabha.vercel.app/'
  },
  {
    image: img2,
    title: "Instaverse",
    description: "A photo sharing app",
    tech: ["MERN", "Reactjs", "material-ui", "Express"],
    modalImg: instaModal,
    link: 'https://instaverse-project.vercel.app/'
  },
  {
    image: img3,
    title: "Coochebehar polyclinic",
    description: "Website created for coochebehar polyclinic",
    tech: ["HTML", "CSS", "Javascript", "Jquery"],
    modalImg: clinicModal,
    link: 'https://yogesh-nin.github.io/clinic-website/'
  },
  {
    image: img4,
    title: "Con Fusion",
    description: "A restaurant website",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    modalImg: restaurantModal,
    link: 'https://yogesh-nin.github.io/conFusion/'
  },
  {
    image: img5,
    title: "NewsMonkey",
    description: "Get your daily dose of news",
    tech: ["ReactJs", "Bootstrap", "News API"],
    modalImg: newsModal,
    link: ''
  },
  {
    image: img6,
    title: "Javascript quiz",
    description: "A simple javascript quiz",
    tech: ["Javascript", "HTML", "CSS"],
    modalImg: jsModal,
    link: 'https://yogesh-nin.github.io/javascript-Quiz/'
  },
]

const ProjectContainer = () => {

  const location = useLocation();
  return (
    <div className='w-100' style={{overflow:'hidden', position:'relative'}}>
    <Container className="section-division">
          <div className="big-fake">Work</div>
          
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={4}>
        <span className="tags"> &lt;h2&gt;</span>
        <TrackVisibility once>
            
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
           <span className="tags"> &lt;/h2&gt;</span>
           </Col>
           {
            (location.pathname==='/' && <Col md={4} lg={3}>
              <ButtonComponent name="See more..." route="/work"/>
            </Col>)}
            </Row>

            <Row>
            <Col lg={6}>
              <span className="tags"> &lt;p&gt;</span>

              <p><strong>Skills grow. So will this portfolio</strong> </p>
              <p>These are some projects I have build in past one year.</p>
              <span className="tags"> &lt;/p&gt;</span>

            </Col>
            
            </Row>
            {
              location.pathname === '/' && (
                <Row className='d-block d-md-none'>
                  <ProjectSlider projects={projects} />
                </Row>
              )
            }
            <Row className={`${location.pathname==='/' ? 'd-none d-md-flex' : ''}`}>
            
            {
              projects.map((project_item, index)=>{
                return(
                  <Col md={6} lg={4}>
                    <ProjectCard animate="animate__fadeInUp" {...project_item} />
                  </Col>

                ) 
              })
            }
            </Row>
    </Container>
    </div>
  )
}

export default ProjectContainer