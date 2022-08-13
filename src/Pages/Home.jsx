import React, {useEffect, useState} from 'react'
import Intro from '../Components/Intro/Intro'
import AboutMe from '../Components/About/AboutMe'
import ContactForm from '../Components/Contact/ContactForm'
import ProjectContainer from '../Components/Projects/ProjectContainer'
import Loader from '../Components/Loader'


const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
    {
      loading ? <Loader /> :
      (
        <div>
          <Intro />
          <AboutMe />
          <ProjectContainer />
          <ContactForm />
        </div>
      )
    }
     
      </>
  )
}

export default Home