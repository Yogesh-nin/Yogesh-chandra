import React, {useEffect, useRef} from 'react'
import Intro from '../Components/Intro/Intro'
import AboutMe from '../Components/About/AboutMe'
import ContactForm from '../Components/Contact/ContactForm'
import ProjectContainer from '../Components/Projects/ProjectContainer'
import Cloud from '../Components/Cloud'


const Home = () => {
  return (
      <div>
        <Intro />
        <AboutMe />
        <ProjectContainer />
        <ContactForm />
      </div>
  )
}

export default Home