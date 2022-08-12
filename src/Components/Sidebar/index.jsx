import React, { useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { Button, Offcanvas } from 'react-bootstrap'
import Example from './Example'
const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <div id="wrapper" className="toggled">
    // <Button className="offcanvas-btn d-lg-none" onClick={handleShow}><i class="fa-solid fa-bars"></i></Button>

    // <Offcanvas  className="bg-black" show={show} onHide={handleClose} responsive="lg">
    // <Offcanvas.Header closeButton closeVariant="white">
    //       <Offcanvas.Title></Offcanvas.Title>
    // </Offcanvas.Header>
    //   <Offcanvas.Body>
    //   <div id="sidebar-wrapper">
    //         <ul className="sidebar-nav txt-white">
    //           <li className="sidebar-item">
    //             <Link to='/'>Home</Link>
    //           </li>
    //           <li className="sidebar-item">
    //             {" "}
    //             <Link to="/about">About</Link>{" "}
    //           </li>
    //           <li className="sidebar-item">
    //             {" "}
    //             <Link to="#">My Skills</Link>{" "}
    //           </li>
    //           <li className="sidebar-item">
    //             {" "}
    //             <Link to="/work">Work</Link>{" "}
    //           </li>
    //           <li className="sidebar-item">
    //             {" "}
    //             <Link to="/contact">Contact</Link>{" "}
    //           </li>
    //           <li className="sidebar-item">
    //             {" "}
    //             <Link to="#">Blog</Link>{" "}
    //           </li>
    //           <li className="d-flex justify-content-center">
                // <div className="social-links my-4 d-flex"> 
                //     <a className="mx-2 my-3" href="https://www.linkedin.com/in/yogesh-chandra-sharma-59147b201/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in social-link-item"></i></a>
                //     <a className="mx-2 my-3" href="http://github.com/yogesh-nin/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-link-item"></i></a>
                //     <a className="mx-2 my-3" href="mailto:002chandra.yogesh@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope social-link-item"></i></a>
                // </div>
    //           </li>
    //         </ul>
            
    //       </div>
    //   </Offcanvas.Body>
    // </Offcanvas>


          
    // </div>
    <Example />
  )
}

export default Sidebar