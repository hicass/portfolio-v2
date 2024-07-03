'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

import './Tech.css';

type Tech = {
  name: string;
  icon: IconType;
};

const TechList: Tech[] = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: BiLogoNodejs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const TechSection: FC = () => {
  return (
    <section id="tech" className="content-area">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        tech
      </motion.h3>

      <motion.div
        className="skill-icon-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {TechList.map((tech, idx) => (
          <div className="react-icon icon-container" key={idx}>
            <tech.icon />
            <p className="icon-name">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechSection;
