'use client';

import { FC } from 'react';

import { motion, Variants } from 'framer-motion';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const slideInLVars: Variants = {
  offscreen: {
    x: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
    },
  },
};

const slideInRVars: Variants = {
  offscreen: {
    x: 10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
    },
  },
};

const Nav: FC = () => {
  return (
    <div id="nav-container">
      <motion.nav
        variants={slideInRVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
      >
        <a className="nav-link" href="#about">
          about me
        </a>
        <a className="nav-link" href="#tech">
          tech
        </a>
        <a className="nav-link" href="#projects">
          projects
        </a>
        <a className="nav-link" href="#contact">
          contact
        </a>
      </motion.nav>

      <motion.div
        id="socials-container"
        variants={slideInLVars}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: true,
          amount: 0.4,
        }}
      >
        <a href="https://github.com/hicass" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/cass-walters/" target="_blank">
          <AiFillLinkedin />
        </a>
      </motion.div>
    </div>
  );
};

export default Nav;
