'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import IntroScreen from './IntroScreen';
import boops from '../../../../public/images/boops.png';
import tendrils1 from '../../../../public/images/wave-tendrils.png';
import tendrils2 from '../../../../public/images/tendrils.png';

import './Header.css';

const Header: FC = () => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {intro && <IntroScreen />}
      <motion.section id="top" style={{ display: intro ? 'none' : 'flex' }}>
        <Image
          src={boops}
          placeholder="blur"
          className="parallax-boops"
          id="parallax-top-boops"
          alt="Little dots floating whimsicaly whimsically"
          priority={true}
        />
        <Image
          src={tendrils1}
          placeholder="blur"
          className="parallax-boops"
          id="parallax-top-tendrils1"
          alt="Smoke like lines appear behind the floating dots in a wavy pattern"
          priority={true}
        />
        <Image
          src={tendrils2}
          placeholder="blur"
          className="parallax-boops"
          id="parallax-top-tendrils2"
          alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
          priority={true}
        />

        <motion.div
          id="name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          <h2>hi i'm</h2>
          <h1>Cass</h1>
        </motion.div>

        <motion.p
          id="mid-bio"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          I am a Software Developer who weaves code and dreams into tangible
          realities.
        </motion.p>
      </motion.section>
    </>
  );
};

export default Header;
