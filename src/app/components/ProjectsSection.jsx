import Image from 'next/image';
import TagOps from '../../../public/images/tagops.png';
import Chirp from '../../../public/images/chirp.png';
import VintageVault from '../../../public/images/vintagevault.png';
import Mancala from '../../../public/images/mancala.png';
import TicTacToe from '../../../public/images/tictactoe.png';
import { Fade } from 'react-awesome-reveal';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';

export default function ProjectsSection() {
  return (
    <section id="projects" className="content-area">
      <h3 id="projects-title">projects</h3>

      <p>
        Here's a collection of the web development projects I've crafted and
        designed—a journey through my skills, creativity, and growth as a
        developer.
      </p>

      <div className="project-card-container">
        <Fade>
          <div className="project-card">
            {' '}
            {/* Tag Ops */}
            <div className="project-card-left">
              <Image
                src={TagOps}
                className="project-img"
                alt="Screenshot of Tag Ops"
                placeholder="blur"
              />
              <div className="tech-container">
                <p className="tech-label">React</p>
                <p className="tech-label">JavaScript</p>
                <p className="tech-label">CSS</p>
                <p className="tech-label">Heroku</p>
              </div>
            </div>
            <div>
              <div className="project-card-right-top">
                <a
                  className="project-link-container project-link"
                  href="https://github.com/hicass/tag-ops"
                  target="_blank"
                >
                  Tag Operations
                </a>
                <p className="project-description">
                  Currently designing and developing a modern, user-friendly
                  website for Tag Ops, a company specializing in operational
                  support. Implementing responsive design, clear pricing
                  structures, and seamless user engagement features.
                </p>
              </div>

              <div className="project-card-bottom">
                <p className="project-date">Aug 2023 - present</p>
                <a
                  className="repo-link"
                  href="https://github.com/hicass/tag-ops"
                  target="_blank"
                >
                  <p className="repo-label">view repo</p>
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="project-card">
            {' '}
            {/* Vintage Vault */}
            <div className="project-card-left">
              <Image
                src={VintageVault}
                className="project-img"
                alt="Screenshot of Vintage Vault"
                placeholder="blur"
              />
              <div className="tech-container">
                <p className="tech-label">Python</p>
                <p className="tech-label">Django</p>
                <p className="tech-label">CSS</p>
                <p className="tech-label">Heroku</p>
                <p className="tech-label">PostgreSQL</p>
              </div>
            </div>
            <div>
              <div className="project-card-right-top">
                <a
                  className="project-link-container project-link"
                  href="https://vintagevault.herokuapp.com/"
                  target="_blank"
                >
                  Vintage Vault
                  <CgArrowsExpandUpRight />
                </a>
                <p className="project-description">
                  Vintage Vault seamlessly connects fashion buyers and sellers,
                  creating a marketplace for unique fashion pieces. Users can
                  give their previously loved clothing a new life by easily
                  creating listings. Working in collaboration with two other
                  developers during my coding bootcamp, we successfully built
                  this project within a week.
                </p>
              </div>

              <div className="project-card-bottom">
                <p className="project-date">June 2023</p>
                <a
                  className="repo-link"
                  href="https://github.com/hicass/vintagev"
                  target="_blank"
                >
                  <p className="repo-label">view repo</p>
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="project-card">
            {' '}
            {/* Chirp */}
            <div className="project-card-left">
              <Image
                src={Chirp}
                className="project-img"
                alt="Screenshot of Chirp"
                placeholder="blur"
              />
              <div className="tech-container">
                <p className="tech-label">JavaScript</p>
                <p className="tech-label">CSS</p>
                <p className="tech-label">Heroku</p>
                <p className="tech-label">MongoDB</p>
                <p className="tech-label">Express.js</p>
                <p className="tech-label">Node.js</p>
                <p className="tech-label">Twinword API</p>
              </div>
            </div>
            <div>
              <div className="project-card-right-top">
                <a
                  className="project-link-container project-link"
                  href="https://chirpcw.herokuapp.com/"
                  target="_blank"
                >
                  Chirp
                  <CgArrowsExpandUpRight />
                </a>
                <p className="project-description">
                  Chirp is a Twitter mock app specifically for complaining. It
                  uses an emotion analysis API to accept or reject posts based
                  on complaint-like sentiments. I developed and designed this
                  project during my coding bootcamp, conquering the challenge of
                  building it in just five days.
                </p>
              </div>

              <div className="project-card-bottom">
                <p className="project-date">May 2023</p>
                <a
                  className="repo-link"
                  href="https://github.com/hicass/chirp"
                  target="_blank"
                >
                  <p className="repo-label">view repo</p>
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="project-card">
            {' '}
            {/* Mancala */}
            <div className="project-card-left">
              <Image
                src={Mancala}
                className="project-img"
                alt="Screenshot of Mancala"
                placeholder="blur"
              />
              <div className="tech-container">
                <p className="tech-label">JavaScript</p>
                <p className="tech-label">HTML</p>
                <p className="tech-label">CSS</p>
              </div>
            </div>
            <div>
              <div className="project-card-right-top">
                <a
                  className="project-link-container project-link"
                  href="https://hicass.github.io/mancala/"
                  target="_blank"
                >
                  Mancala
                  <CgArrowsExpandUpRight />
                </a>
                <p className="project-description">
                  This project was my second endeavor in web development,
                  demonstrating my growing expertise and passion for crafting
                  interactive experiences. Two players take turns strategically
                  distributing the number of pebbles contained inside each of
                  the pits counter-clockwise around the board, until there is a
                  winner.
                </p>
              </div>

              <div className="project-card-bottom">
                <p className="project-date">April 2023</p>
                <a
                  className="repo-link"
                  href="https://github.com/hicass/mancala"
                  target="_blank"
                >
                  <p className="repo-label">view repo</p>
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="project-card">
            {' '}
            {/* Tic Tac Toe */}
            <div className="project-card-left">
              <Image
                src={TicTacToe}
                className="project-img"
                alt="Screenshot of Tic Tac Toe"
                placeholder="blur"
              />
              <div className="tech-container">
                <p className="tech-label">JavaScript</p>
                <p className="tech-label">HTML</p>
                <p className="tech-label">CSS</p>
              </div>
            </div>
            <div>
              <div className="project-card-right-top">
                <a
                  className="project-link-container project-link"
                  href="https://hicass.github.io/Tic-Tac-Toe/"
                  target="_blank"
                >
                  Tic Tac Toe
                  <CgArrowsExpandUpRight />
                </a>
                <p className="project-description">
                  This was my inaugural project, a Tic Tac Toe game that marked
                  the beginning of my web development journey. A modern
                  electronic rendition of the classic board game, the objective
                  is to be the first to form a horizontal, vertical, or diagonal
                  line of three of your markers, thereby securing victory.
                </p>
              </div>

              <div className="project-card-bottom">
                <p className="project-date">April 2023</p>
                <a
                  className="repo-link"
                  href="https://github.com/hicass/Tic-Tac-Toe"
                  target="_blank"
                >
                  <p className="repo-label">view repo</p>
                  <BsCodeSlash />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
