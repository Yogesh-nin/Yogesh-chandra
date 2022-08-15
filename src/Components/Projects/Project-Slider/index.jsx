import React from 'react'
import { Col } from 'react-bootstrap';
import Slider from "react-slick";
import ProjectCard from '../ProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

const ProjectSlider = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <Slider {...settings}>
        {
            (props.projects).map((project_item, key)=>{
                return <ProjectCard {...project_item} /> 
            })
            
        }
        
    </Slider>
    </>
  )
}

export default ProjectSlider