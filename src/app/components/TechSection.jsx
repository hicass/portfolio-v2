import { Slide } from 'react-awesome-reveal'
import { DiPostgresql } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoDjango } from 'react-icons/bi'
import { FaReact, FaGitAlt, FaCss3Alt } from 'react-icons/fa'


export default function TechSection() {
    return (
        <section id='tech' className='content-area'>
          <Slide direction='left' triggerOnce='true' fraction='1'>
            <h3>tech</h3>

            <p id='tech-stack-p'>Here are some of the technologies I have had the pleasure of working with so far:</p>
          </Slide>

          <Slide direction='right' triggerOnce='true' fraction='1'>
            <div className='skill-icon-container'>
              <div className='react-icon icon-container'>
                <FaReact />
                <p className='icon-name'>React</p>
              </div>

              <div className='next-icon icon-container'>
                <TbBrandNextjs className='skill-icon' />
                <p className='icon-name'>Next.js</p>
              </div>

              <div className='js-icon icon-container'>
                <BiLogoJavascript className='skill-icon' />
                <p className='icon-name'>JavaScript</p>
              </div>

              <div className='git-icon icon-container'>
                <FaGitAlt className='skill-icon' />
                <p className='icon-name'>Git</p>
              </div>

              <div className='html-icon icon-container'>
                <AiFillHtml5 className='skill-icon' />
                <p className='icon-name'>HTML</p>
              </div>

              <div className='css-icon icon-container'>
                <FaCss3Alt className='skill-icon' />
                <p className='icon-name'>CSS</p>
              </div>

              <div className='node-icon icon-container'>
                <BiLogoNodejs className='skill-icon' />
                <p className='icon-name'>Node.js</p>
              </div>

              <div className='mongo-icon icon-container'>
                <BiLogoMongodb className='skill-icon' />
                <p className='icon-name'>MongoDB</p>
              </div>

              <div className='python-icon icon-container'>
                <BiLogoPython className='skill-icon' />
                <p className='icon-name'>Python</p>
              </div>

              <div className='django-icon icon-container'>
                <BiLogoDjango className='skill-icon' />
                <p className='icon-name'>Django</p>
              </div>

              <div className='post-icon icon-container'>
                <DiPostgresql className='skill-icon' />
                <p className='icon-name'>PostgreSQL</p>
              </div>

              <div className='express-icon icon-container'>
                <SiExpress className='skill-icon' />
                <p className='icon-name'>Express.js</p>
              </div>
            </div>
          </Slide>
        </section>
    )
}