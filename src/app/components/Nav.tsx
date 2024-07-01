import { FC } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Nav: FC = () => {
  return (
    <div id="nav-container">
      <nav>
        <a className="nav-link" href="#about">
          about me
        </a>
        <a className="nav-link" href="#tech">
          tech
        </a>
        <a className="nav-link" href="#projects">
          projects
        </a>
        <a className="nav-link" href="#contact">
          contact
        </a>
      </nav>

      <div id="socials-container">
        <a href="https://github.com/hicass" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/cass-walters/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Nav;