'use client'
import { Fade, AttentionSeeker, Slide } from 'react-awesome-reveal'
import GlowingCursor from './components/GlowingCursor'
import { FaReact, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoDjango } from 'react-icons/Bi';
import { TbBrandNextjs } from 'react-icons/Tb';
import { AiFillHtml5, AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/Ai';
import { DiResponsive, DiPostgresql } from 'react-icons/Di';
import './styles/main.css'


export default function Home() {

  return (
    <main>
      <section id='top'>
        <div id='name'>
          <h2>hi i'm</h2>
          <AttentionSeeker effect='headShake' triggerOnce='true'>
            <h1>Cass</h1>
          </AttentionSeeker>
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


      <section id='about' className='content-area'>
        <Fade>
          <h3>about me!</h3>
          <div id='about-contents'>
            <p className='about-me-p'>
                Creativity is at the heart of everything I do. I view coding as an art 
                form, where every line of code has the potential to be elegant and 
                expressive. I value the importance of visual appeal, attention to 
                detail, and believe in the power that blending creativity and technology has.
            </p>
            <p className='about-me-p'>
                As a coding bootcamp graduate, I have developed a strong aptitude 
                for fast learning, enabling me to quickly grasp new concepts and 
                technologies. I thrive on the excitement of exploring and mastering 
                cutting-edge tools and frameworks, continuously expanding my skillset.
            </p>
            <p className='about-me-p'>
                Beyond the code, I am an artist who loves expressing myself 
                through digital mediums. I also enjoy getting out into nature,
                spending quality time with my dog and partner, and diving into the immersive 
                worlds of video games when it’s time to unwind.
            </p>
            </div>
          </Fade>
      </section>

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
            <DiResponsive />
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

      <GlowingCursor />
    </main>
  )
}
