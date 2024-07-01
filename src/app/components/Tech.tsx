import { FC } from 'react';

import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoNodejs } from 'react-icons/bi';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

type Tech = {
  name: string;
  icon: IconType;
};

const TechList: Tech[] = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: BiLogoNodejs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const TechSection: FC = () => {
  return (
    <section id="tech" className="content-area">
      <h3>tech</h3>

      <div className="skill-icon-container">
        {TechList.map((tech, idx) => (
          <div className="react-icon icon-container">
            <tech.icon />
            <p className="icon-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
