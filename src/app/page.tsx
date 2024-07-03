import { FC } from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import GlowingCursor from './components/GlowingCursor/GlowingCursor';
import './main.css';

const Home: FC = () => {
  return (
    <main>
      <div id="parallax-wrapper">
        <Header />
        <Nav />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
      <GlowingCursor />
    </main>
  );
};

export default Home;
