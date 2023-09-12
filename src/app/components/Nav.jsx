import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/Ai';


export default function Nav() {
    return (
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
    )
}