import { Fade } from 'react-awesome-reveal'


export default function AboutSection() {
    return (
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
    )
}