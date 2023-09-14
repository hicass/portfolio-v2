import Image from 'next/image'
import TagOps from '../../../public/images/tagops.png'
import Chirp from '../../../public/images/chirp.png'
import VintageVault from '../../../public/images/vintagevault.png'
import PlantCollector from '../../../public/images/plantcollector.png'
import Mancala from '../../../public/images/mancala.png'
import TicTacToe from '../../../public/images/tictactoe.png'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'


export default function ProjectsSection() {
    return (
        <section id='projects' className='content-area'>
            <h3 id='projects-title'>projects</h3>

            <p>
                Here's a collection of the web development projects I've crafted and designed—a 
                journey through my skills, creativity, and growth as a developer. Explore my work 
                and witness the evolution of my digital creations.
            </p>

            <div className='project-card-container'>
                <div className='project-card'> {/* Tag Ops */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={TagOps} className='project-img' />
                            <h4>Tag Operations</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={TagOps} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Currently designing and developing a modern, user-friendly website for Tag Ops, 
                                a company specializing in operational support. Implementing responsive 
                                design, clear pricing structures, and seamless user engagement features. 
                            </p>

                            <a className='project-link-container' href='' target='_blank'>
                                <h4 className='project-link'>Tag Operations</h4>
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>React</p>
                                    <p className='tech-label'>JavaScript</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>Heroku</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/tag-ops' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'> {/* Chirp */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={Chirp} className='project-img' />
                            <h4>Chirp</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={Chirp} className='project-img project-img-back' />
                            <p className='project-description'>
                                Chirp is a Twitter mock app designed specifically for complaining. 
                                It uses an emotion analysis API to accept or reject posts based on 
                                complaint-like sentiments, providing a dedicated space for venting 
                                frustrations. I developed and designed this project during my coding 
                                bootcamp, conquering the challenge of building it in just five days.
                            </p>

                            <a className='project-link-container' href='https://chirpcw.herokuapp.com/' target='_blank'>
                                <h4 className='project-link'>Chirp</h4>
                                <CgArrowsExpandUpRight />
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>JavaScript</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>Heroku</p>
                                    <p className='tech-label'>MongoDB</p>
                                    <p className='tech-label'>Express.js</p>
                                    <p className='tech-label'>Node.js</p>
                                    <p className='tech-label'>Twinword API</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/chirp' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'> {/* Vintage Vault */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={VintageVault} className='project-img' />
                            <h4>Vintage Vault</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={VintageVault} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Vintage Vault seamlessly connects fashion buyers and 
                                sellers, creating a marketplace for uniquefashion pieces. Users 
                                can give their previously loved clothing a new life by easily creating listings.
                                Working in collaboration with two other developers during my coding bootcamp, we successfully 
                                built this project within a week.
                            </p>

                            <a className='project-link-container' href='https://vintagevault.herokuapp.com/' target='_blank'>
                                <h4 className='project-link'>Vintage Vault</h4>
                                <CgArrowsExpandUpRight />
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>Python</p>
                                    <p className='tech-label'>Django</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>Heroku</p>
                                    <p className='tech-label'>PostgreSQL</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/vintagev' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'> {/* Plant Collector */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={PlantCollector} className='project-img' />
                            <h4>Plant Collector</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={PlantCollector} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Plant Collector is a minimalist Python project that helps users manage 
                                their house plants effectively. Completed in less than a week during my 
                                coding bootcamp, this project showcases my ability to learn quickly and 
                                deliver under tight deadlines.
                            </p>

                            <a className='project-link-container' href='' target='_blank'>
                                <h4 className='project-link'>Plant Collector</h4>
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>Python</p>
                                    <p className='tech-label'>Django</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>Heroku</p>
                                    <p className='tech-label'>PostgreSQL</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/plantcollector' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='project-card'> {/* Mancala */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={Mancala} className='project-img' />
                            <h4>Mancala</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={Mancala} className='project-img project-img-back' />
                            <p className='project-description'>
                                This project, Mancala, was my second endeavor in web development, demonstrating 
                                my growing expertise and passion for crafting interactive experiences. Two players 
                                take turns strategically distributing the number of pebbles contained inside each 
                                of the pits counter-clockwise around the board, until there is a winner.
                            </p>

                            <a className='project-link-container' href='https://hicass.github.io/mancala/' target='_blank'>
                                <h4 className='project-link'>Mancala</h4>
                                <CgArrowsExpandUpRight />
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>HTML</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>JavaScript</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/mancala' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'> {/* Tic Tac Toe */}
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={TicTacToe} className='project-img' />
                            <h4>Tic Tac Toe</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={TicTacToe} className='project-img project-img-back' />
                            <p className='project-description'>
                                This was my inaugural project, a Tic Tac Toe game that marked the beginning of my 
                                web development journey. A modern electronic rendition of the classic board game,
                                the objective is to be the first to form a horizontal, vertical, or diagonal 
                                line of three of your markers, thereby securing victory.
                            </p>

                            <a className='project-link-container' href='https://hicass.github.io/Tic-Tac-Toe/' target='_blank'>
                                <h4 className='project-link'>Tic Tac Toe</h4>
                                <CgArrowsExpandUpRight />
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>HTML</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>JavaScript</p>
                                </div>

                                <a className='repo-link' href='https://github.com/hicass/Tic-Tac-Toe' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}