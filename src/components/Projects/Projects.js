import React from 'react';
import { motion } from "framer-motion";

import './Projects.css';
import framerMotion from '../../helpers/framerMotion';

function Projects(props) {
  return (
    <motion.div
      exit="out" 
      animate="in" 
      initial="out" 
      variants={framerMotion.pageVariants} 
      transitions={framerMotion.pageTransition}
      className="projects__container"
    >
      <div className="projects__cardContainer">
        <h1>My Projects</h1>
      </div>

    </motion.div>
  );
}

export default Projects;