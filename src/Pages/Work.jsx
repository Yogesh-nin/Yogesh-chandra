import React, {useState, useEffect} from 'react'
import Loader from '../Components/Loader';
import ProjectContainer from '../Components/Projects/ProjectContainer'
const Work = () => {
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
        <div className="page-section">
          <ProjectContainer />
        </div>
      )
    }
    </>
    
  )
}

export default Work