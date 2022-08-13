import * as React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
const variants = {
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = (props) => {

  const style = {padding: "4px 2px" };
  return (
    <motion.li className='navigation-li'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder d-flex align-items-center justify-content-center" style={style}><i class={`${props.icon} fs-5`}></i></div>
    <div className="text-placeholder" style={style}><Link to={props.link}>{props.title}</Link> </div>
    </motion.li>
  );
};
