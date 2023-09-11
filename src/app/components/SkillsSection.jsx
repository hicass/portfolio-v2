import { Slide } from 'react-awesome-reveal'
import { DiPostgresql } from 'react-icons/Di'
import { SiExpress } from 'react-icons/Si'
import { AiFillHtml5 } from 'react-icons/Ai'
import { TbBrandNextjs } from 'react-icons/Tb'
import { BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoDjango } from 'react-icons/Bi'
import { FaReact, FaGitAlt, FaCss3Alt } from 'react-icons/fa'


export default function SkillSection() {
    return (
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
    )
}