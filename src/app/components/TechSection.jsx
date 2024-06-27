import { Slide } from 'react-awesome-reveal';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';

export default function TechSection() {
  return (
    <section id="tech" className="content-area">
      <Slide direction="left" triggerOnce="true" fraction="1">
        <h3>tech</h3>
      </Slide>

      <Slide direction="right" triggerOnce="true" fraction="1">
        <div className="skill-icon-container">
          <div className="react-icon icon-container">
            <FaReact />
            <p className="icon-name">React</p>
          </div>

          <div className="next-icon icon-container">
            <TbBrandNextjs className="skill-icon" />
            <p className="icon-name">Next.js</p>
          </div>

          <div className="git-icon icon-container">
            <FaGitAlt className="skill-icon" />
            <p className="icon-name">Git</p>
          </div>

          <div className="node-icon icon-container">
            <BiLogoNodejs className="skill-icon" />
            <p className="icon-name">Node.js</p>
          </div>

          <div className="mongo-icon icon-container">
            <SiTypescript className="skill-icon" />
            <p className="icon-name">TypeScript</p>
          </div>

          <div className="icon-container">
            <SiTailwindcss className="skill-icon" />
            <p className="icon-name">Tailwind CSS</p>
          </div>
        </div>
      </Slide>
    </section>
  );
}
