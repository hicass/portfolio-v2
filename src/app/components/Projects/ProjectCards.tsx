'use client';

import { FC } from 'react';
import Image from 'next/image';

import { motion, Variants } from 'framer-motion';

import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';

import './Projects.css';

type Project = {
  title: string;
  description: string;
  date: string;
  imagePath: string;
  techList: string[];
  liveLink: string;
  repoLink: string;
};

const projects: Project[] = [
  {
    title: 'Tag Operations',
    description:
      "Solely designed and developed a modern, user-friendly website for Tag Ops, a company specializing in operational support. I created a responsive and engaging design that aligns with the company's personality.",
    date: 'May 2024',
    imagePath: '/images/tagops.png',
    techList: [
      'Next.js',
      'Tailwind CSS',
      'Email.js',
      'Framer Motion',
      'Vercel',
    ],
    liveLink: 'https://www.tagoperations.com/',
    repoLink: 'https://github.com/hicass/tag-ops-v3',
  },
  {
    title: 'Whiskered Grapes Co.',
    description:
      'Whiskered Grapes Co. is a digital space for a whimsical wine venture, managed by the fictional "Pepperoni family." Who stand out for their quirky ingredients of beards and oregano. I conceived this project to delve deeper into the world of React, simultaneously honing my frontend skills.',
    date: 'October 2023',
    imagePath: '/images/wgc.png',
    techList: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'CSS',
      'Heroku',
    ],
    liveLink: 'https://whiskered-grapes-co-9786d5309a36.herokuapp.com/',
    repoLink: 'https://github.com/hicass/whiskered-grapes-co',
  },
  {
    title: 'Chirp',
    description:
      'Chirp is a Twitter mock app specifically for complaining. It uses an emotion analysis API to accept or reject posts based on complaint-like sentiments. I developed and designed this project during my coding bootcamp, conquering the challenge of building it in just five days.',
    date: 'May 2023',
    imagePath: '/images/chirp.png',
    techList: [
      'JavaScript',
      'CSS',
      'Heroku',
      'MongoDB',
      'Express.js',
      'Node.js',
      'Twinword API',
    ],
    liveLink: 'https://chirpcw.herokuapp.com/',
    repoLink: 'https://github.com/hicass/chirp',
  },
  {
    title: 'Mancala',
    description:
      'This project was my second endeavor in web development, demonstrating my growing expertise and passion for crafting interactive experiences. Two players take turns strategically distributing the number of pebbles contained inside each of the pits counter-clockwise around the board, until there is a winner.',
    date: 'April 202',
    imagePath: '/images/mancala.png',
    techList: ['JavaScript', 'HTML', 'CSS', 'Github Pages'],
    liveLink: 'https://hicass.github.io/mancala/',
    repoLink: 'https://github.com/hicass/mancala',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'This was my inaugural project, a Tic Tac Toe game that marked the beginning of my web development journey. A modern electronic rendition of the classic board game, the objective is to be the first to form a horizontal, vertical, or diagonal line of three of your markers, thereby securing victory.',
    date: 'April 202',
    imagePath: '/images/tictactoe.png',
    techList: ['JavaScript', 'HTML', 'CSS', 'Github Pages'],
    liveLink: 'https://hicass.github.io/Tic-Tac-Toe/',
    repoLink: 'https://github.com/hicass/Tic-Tac-Toe',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard: FC = () => {
  return (
    <>
      {projects.map((project, idx) => (
        <motion.div
          className="project-card"
          key={idx}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <div className="project-card-left">
            <Image
              src={project.imagePath}
              className="project-img"
              width={2000}
              height={2000}
              alt="Screenshot of Tag Ops"
            />

            <div className="tech-container">
              {project.techList.map((tech, idx) => (
                <p className="tech-label" key={idx}>
                  {tech}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="project-card-right-top">
              <a
                className="project-link-container project-link"
                href={project.liveLink}
                target="_blank"
              >
                {project.title}
                <CgArrowsExpandUpRight />
              </a>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-card-bottom">
              <p className="project-date">{project.date}</p>
              <a className="repo-link" href={project.repoLink} target="_blank">
                <p className="repo-label">view repo</p>
                <BsCodeSlash />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
