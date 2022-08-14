import React, { useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { Button, Offcanvas } from 'react-bootstrap'
import Example from './Example'
import { motion } from "framer-motion";

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wrapper" className="toggled">
    <Button className="offcanvas-btn" onClick={handleShow}><i class="fa-solid fa-bars"></i></Button>

    <Offcanvas className="bg-black sidebar-offcanvas" show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title></Offcanvas.Title>
    </Offcanvas.Header>
      <Offcanvas.Body>
      <div id="sidebar-wrapper">
            <motion.ul variants={variantsUl} className="sidebar-nav txt-white">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={variantsLi} className="sidebar-item">
                
                <Link onClick={handleClose} to='/'><span className="sidebar-icon"><i className="fa-solid fa-house-chimney"></i></span>Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={variantsLi} className="sidebar-item">
                
                <Link to="/about" onClick={handleClose} ><span className="sidebar-icon"><i className="fa-solid fa-user"></i></span>About</Link>{" "}
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={variantsLi} className="sidebar-item">
                
                <Link onClick={handleClose} to="/work"><span className="sidebar-icon"><i className="fa-solid fa-briefcase"></i></span>Work</Link>{" "}
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={variantsLi} className="sidebar-item">
                
                <Link onClick={handleClose} to="/contact"><span className="sidebar-icon"><i className="fa-solid fa-envelope-open"></i></span>Contact</Link>{" "}
              </motion.li>

              <li className="d-flex justify-content-center">
                <div className="sidebar-social-links my-4 d-flex"> 
                    <a className="mx-3 my-3" href="https://www.linkedin.com/in/yogesh-chandra-sharma-59147b201/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in social-link-item"></i></a>
                    <a className="mx-3 my-3" href="http://github.com/yogesh-nin/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-link-item"></i></a>
                    <a className="mx-3 my-3" href="mailto:002chandra.yogesh@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope social-link-item"></i></a>
                </div>
              </li>
            </motion.ul>
            
          </div>
      </Offcanvas.Body>
    </Offcanvas>


          
    </div>
    // <Example />
  )
}

export default Sidebar