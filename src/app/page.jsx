'use client'
import Image from 'next/image'
import boops from '../../public/images/boops.png'
import tendrils1 from '../../public/images/wave-tendrils.png'
import tendrils2 from '../../public/images/tendrils.png'
import Nav from './components/Nav'
import AboutSection from './components/AboutSection'
import TechSection from './components/TechSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import GlowingCursor from './components/GlowingCursor'
import './styles/main.css'


export default function Home() {

  return (
    <main>
      <div id='wrapper'>
        <section id='top'>
            <Image src={boops} className='boops' id='top-boops'/>
            <Image src={tendrils1} className='boops' id='top-tendrils1'/>
            <Image src={tendrils2} className='boops' id='top-tendrils2'/>

          <div id='name'>
            <h2>hi i'm</h2>
              <h1>Cass</h1>
          </div>

          <p id='mid-bio'>
            I am a Software Developer who weaves<br /> 
            code and dreams into tangible realities.
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
  )
}
