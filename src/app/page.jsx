'use client'
import GlowingCursor from './components/GlowingCursor'
import { Fade } from 'react-awesome-reveal'
import './styles/main.css'


export default function Home() {

  return (
    <main>
      <div id='nav-container'>
        <nav>
          <a className='nav-link' href='#about'>about me</a>
        </nav>
      </div>

      <section id='top'>
        <div id='name'>
          <h2>hi i'm</h2>
          <h1>Cass</h1>
        </div>
        <p id='mid-bio'>
          I am a Software Developer who weaves<br /> 
          code and dreams into tangible realities.
        </p>
      </section>

      <section id='about'>
        <Fade>
          <h3>about me!</h3>
          <div id='about-contents'>
            <p>
                Creativity is at the heart of everything I do. I see programming 
                as an artistic medium and, when I write code, I approach it with 
                the mindset of creating a piece of art. I strive to write clean 
                and elegant code that is not only functional but also readable.
            </p>
            <p>
                Continuous learning is the north star of my Software Development 
                journey. I’m always eager to explore new technologies, tools, 
                and techniques. I believe there’s always room for improvement and 
                growth with anything in life. This drives me to always seek new 
                ways to enhance my skills and understanding. 
            </p>
            <p>
                Beyond the code, I am also an artist who loves expressing myself 
                through digital mediums. I also enjoy getting out into nature,
                spending quality time with my dog, and diving into the immersive 
                worlds of video games when it’s time to unwind.  
            </p>
            </div>
          </Fade>
      </section>
        <GlowingCursor />
    </main>
  )
}
