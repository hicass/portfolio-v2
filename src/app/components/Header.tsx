'use client';

import { FC } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import boops from '../../../public/images/boops.png';
import tendrils1 from '../../../public/images/wave-tendrils.png';
import tendrils2 from '../../../public/images/tendrils.png';

const Header: FC = () => {
  return (
    <motion.section id="top">
      <Image
        src={boops}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-boops"
        alt="Little dots floating whimsicaly whimsically"
      />
      <Image
        src={tendrils1}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-tendrils1"
        alt="Smoke like lines appear behind the floating dots in a wavy pattern"
      />
      <Image
        src={tendrils2}
        placeholder="blur"
        className="parallax-boops"
        id="parallax-top-tendrils2"
        alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
      />

      <motion.div
        id="name"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>hi i'm</h2>
        <h1>Cass</h1>
      </motion.div>

      <motion.p
        id="mid-bio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am a Software Developer who weaves code and dreams into tangible
        realities.
      </motion.p>
    </motion.section>
  );
};

export default Header;
