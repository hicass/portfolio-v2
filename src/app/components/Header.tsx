import Image from 'next/image';
import boops from '../../../public/images/boops.png';
import tendrils1 from '../../../public/images/wave-tendrils.png';
import tendrils2 from '../../../public/images/tendrils.png';

import { FC } from 'react';

const Header: FC = () => {
  return (
    <section id="top">
      <Image
        src={boops}
        priority={true}
        className="parallax-boops"
        id="parallax-top-boops"
        alt="Little dots floating whimsicaly whimsically"
      />
      <Image
        src={tendrils1}
        priority={true}
        className="parallax-boops"
        id="parallax-top-tendrils1"
        alt="Smoke like lines appear behind the floating dots in a wavy pattern"
      />
      <Image
        src={tendrils2}
        priority={true}
        className="parallax-boops"
        id="parallax-top-tendrils2"
        alt="Smoke like lines appear behind the wavy lines in a more steady fashion"
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
  );
};

export default Header;
