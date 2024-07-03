'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

import ProjectCards from './ProjectCards';
import './Projects.css'

const Projects: FC = () => {
  return (
    <section id="projects" className="content-area">
      <motion.h3
        id="projects-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        projects
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Here's a collection of the web development projects I've crafted and
        designed—a journey through my skills, creativity, and growth as a
        developer.
      </motion.p>

      <div className="project-card-container">
        <ProjectCards />
      </div>
    </section>
  );
};

export default Projects;
