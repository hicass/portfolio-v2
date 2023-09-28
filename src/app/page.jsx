'use client';
import Image from 'next/image';
import boops from '../../public/images/boops.png';
import tendrils1 from '../../public/images/wave-tendrils.png';
import tendrils2 from '../../public/images/tendrils.png';
import Nav from './components/Nav';
import AboutSection from './components/AboutSection';
import TechSection from './components/TechSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import GlowingCursor from './components/GlowingCursor';
import './styles/main.css';

export default function Home() {
  return (
    <main>
      <div id="wrapper">
        <section id="top">
          <Image
            src={boops}
            priority={true}
            className="boops"
            id="top-boops"
            alt="Background Decorations"
          />
          <Image
            src={tendrils1}
            priority={true}
            className="boops"
            id="top-tendrils1"
            alt="Background Decorations"
          />
          <Image
            src={tendrils2}
            priority={true}
            className="boops"
            id="top-tendrils2"
            alt="Background Decorations"
          />

          <div id="name">
            <h2>hi i'm</h2>
            <h1>Cass</h1>
          </div>

          <p id="mid-bio">
            I am a Software Developer who weaves code and dreams into tangible
            realities.
          </p>
        </section>

        <Nav />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <GlowingCursor />
    </main>
  );
}
