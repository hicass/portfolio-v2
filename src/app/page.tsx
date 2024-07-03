import { FC } from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects/ProjectsSection';
import Contact from './components/Contact';
import GlowingCursor from './components/GlowingCursor';

import './styles/main.css';

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
