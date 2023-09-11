'use client'
import Image from 'next/image'
import { Fade, AttentionSeeker, Slide } from 'react-awesome-reveal'
import boops from '../../public/images/boops.png'
import tendrils1 from '../../public/images/wave-tendrils.png'
import tendrils2 from '../../public/images/tendrils.png'
import GlowingCursor from './components/GlowingCursor'
import AboutSection from './components/AboutSection'
import { FaReact, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoDjango } from 'react-icons/Bi';
import { TbBrandNextjs } from 'react-icons/Tb';
import { AiFillHtml5, AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/Ai';
import { DiPostgresql } from 'react-icons/Di';
import { SiExpress } from 'react-icons/Si';
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

        <div id='nav-container'>
          <nav>
            <a className='nav-link' href='#about'>about me</a>
            <a className='nav-link' href='#skills'>my skills</a>
            <a className='nav-link' href='#projects'>projects</a>
            <a className='nav-link' href='https://docs.google.com/document/d/1Lab_5UAzTZFtO4_yt870kEugqLEtJbaHIQwj9QgAEz4/edit?usp=sharing'target='_blank'>resume</a>
            <a className='nav-link' href='#contact'>contact</a>
          </nav>

          <div id='socials-container'>
            <a 
              href='https://github.com/hicass'
              target='_blank'
            >
              <AiFillGithub />
            </a>
            <a 
              href='https://www.linkedin.com/in/cass-walters/' 
              target='_blank'
            >
              <AiFillLinkedin />
            </a>
            <a 
              href='https://www.instagram.com/byeeecass/?hl=en'
              target='_blank'
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <AboutSection />

        <section id='skills' className='content-area'>
          <Slide direction='left' triggerOnce='true'>
            <h3>skills</h3>
          </Slide>

          <Slide direction='right' triggerOnce='true'>
            <div className='skill-icon-container'>
              <FaReact />
              <TbBrandNextjs />
              <BiLogoJavascript />
              <FaGitAlt />
              <AiFillHtml5 />
              <FaCss3Alt />
              <BiLogoNodejs />
              <BiLogoMongodb />
              <BiLogoPython />
              <BiLogoDjango />
              <DiPostgresql />
              <SiExpress />
            </div>
          </Slide>
        </section>

        <section id='contact' className='content-area'>
          <h3>Contact</h3>

          <div id='contact-contents'>
            <p>
                Thank you for taking the time to explore my corner of the internet. I genuinely 
                appreciate your interest in my work. If you have any questions, or just want to 
                connect, feel free to reach out :)
            </p>

            <div id='contact-links-container'>
                <a href='mailto:hicass.dev@gmail.com'>hicass.dev@gmail.com</a>
            </div>
          </div>
        </section>

      </div>
        <GlowingCursor />
    </main>
  )
}
