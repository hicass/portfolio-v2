'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

const LoadingScreen: FC = () => {
  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p id="welcome-txt">Welcome to my portfolio!</p>
    </motion.div>
  );
};

export default LoadingScreen;
