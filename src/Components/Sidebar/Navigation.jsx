import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [
  {
    id: 0,
    title: "Home",
    icon: "fa-solid fa-house-chimney",
    link: '/'
   },
  {
    id: 1,
    title: "About",
    icon: "fa-solid fa-user",
    link: '/about'
   },
  {
    id: 2,
    title: "Work",
    icon: "fa-solid fa-briefcase",
    link: '/work'
   },
  {
    id: 3,
    title: "Contact",
    icon: "fa-solid fa-envelope-open",
    link: '/contact'
   },
  ]
   

export const Navigation = (props) => {
    return(
        <motion.ul className='navigation-ul' variants={variants}>
            {itemIds.map(i => (
            <MenuItem toggle={()=> props.toggle}  title={i.title} icon={i.icon} key={i.id} link={i.link} />
            ))}

            {/* <div className="my-4 d-flex justify-content-center mx-3"> 
                <a className="mx-2 my-3" href="https://www.linkedin.com/in/yogesh-chandra-sharma-59147b201/" target="_blank" rel="noopenernoreferrer"><i class="fa-brands fa-linkedin-in social-link-item fs-5"></i></a>
                <a className="mx-2 my-3" href="http://github.com/yogesh-nin/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-link-item fs-5"></i></a>
                <a className="mx-2 my-3" href="mailto:002chandra.yogesh@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope social-link-item fs-5"></i></a>
            </div> */}
        </motion.ul>
    );
};


