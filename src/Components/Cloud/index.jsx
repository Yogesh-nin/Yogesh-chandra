import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import TagCloud from 'TagCloud'
import './index.css'



const Cloud = () => {

  const effectRan = useRef(false)
  
    const Texts = [
        'HTML', 'CSS', 'Javascript',
        'React', 'Bootstrap', 'Node',
        'express', 'mongoDB', 'Jquery',
        'C++', 'python', 'Java',
        'Go', 'Git', 'Github',
        "DBMS", "Machine Learning",
        "SASS", "JSON", "npm", "SQL"
    ]
    
useEffect(() => {
  if(effectRan.current === false){
    var tagcloud = TagCloud('.Sphere', Texts, {
      radius: 250,
  
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    });

  }
  return () => effectRan.current = true;
  
}, [])

  
  return (
    <div className="Sphere d-md-flex justify-content-center d-none d-sm-block">
      
    </div>
  )
}

export default Cloud