import Image from 'next/image'
import TagOps from '../../../public/images/tagops.png'
import Chirp from '../../../public/images/chirp.png'
import VintageVault from '../../../public/images/vintagevault.png'
import PlantCollector from '../../../public/images/plantcollector.png'
import Mancala from '../../../public/images/mancala.png'
import TicTacToe from '../../../public/images/tictactoe.png'
import { CgArrowsExpandUpRight } from 'react-icons/Cg'
import { BsCodeSlash } from 'react-icons/Bs'


export default function ProjectsSection() {
    return (
        <section id='projects' className='content-area'>
            <h3 id='projects-title'>projects</h3>

            <div className='project-card-container'>

                <div className='project-card'>
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={TagOps} className='project-img' />
                            <h4>Tag Operations</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={TagOps} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Designed and developed a modern, user-friendly website for Tag Ops, 
                                a company specializing in operational support. Implemented responsive 
                                design, clear pricing structures, and seamless user engagement features 
                                to help them connect with their audience.
                            </p>

                            <a className='project-link-container' href='' target='_blank'>
                                <h4 className='project-link'>Tag Operations</h4>
                                <CgArrowsExpandUpRight />
                            </a>

                            <div className='project-card-bottom'>
                                <div className='tech-container'>
                                    <p className='tech-label'>React</p>
                                    <p className='tech-label'>JavaScript</p>
                                    <p className='tech-label'>CSS</p>
                                    <p className='tech-label'>Heroku</p>
                                </div>

                                <a className='repo-link' href='' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
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
                                frustrations.
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

                <div className='project-card'>
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={VintageVault} className='project-img' />
                            <h4>Vintage Vault</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={VintageVault} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Vintage Vault is a dynamic online app that seamlessly connects fashion buyers and 
                                sellers, creating a marketplace for uniquefashion pieces. With Vintage Vault, users 
                                have the power to give their previously loved clothing a new life by easily creating listings.
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

                                <a className='repo-link' href='https://github.com/hicass/chirp' target='_blank'>
                                    <p className='repo-label'>view repo</p>
                                    <BsCodeSlash />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={PlantCollector} className='project-img' />
                            <h4>Plant Collector</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={PlantCollector} className='project-img project-img-back darken' />
                            <p className='project-description'>
                                Plant Collector is a minimalist Python project that helps users manage 
                                their house plants effectively. It utilizes the Django framework for fast 
                                application development and a PostgreSQL database for data storage. 
                            </p>

                            <a className='project-link-container' href='' target='_blank'>
                                <h4 className='project-link'>Vintage Vault</h4>
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
                
                <div className='project-card'>
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={Mancala} className='project-img' />
                            <h4>Mancala</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={Mancala} className='project-img project-img-back' />
                            <p className='project-description'>
                                A digital adaptation of the ancient board game. Two players take turns 
                                strategically distributing the number of pebbles contained inside each 
                                of the pits counter-clockwise around the board, until there is a winner.
                            </p>

                            <a className='project-link-container' href='https://hicass.github.io/mancala/' target='_blank'>
                                <h4 className='project-link'>Mancala</h4>
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

                <div className='project-card'>
                    <div className='project-card-content'>
                        <div className='project-card-front'>
                            <Image src={TicTacToe} className='project-img' />
                            <h4>Tic Tac Toe</h4>
                        </div>

                        <div className='project-card-back'>
                            <Image src={TicTacToe} className='project-img project-img-back' />
                            <p className='project-description'>
                                A modern electronic rendition of the classic board game, Tic Tac Toe.
                                he objective is to be the first to form a horizontal, vertical, or diagonal 
                                line of three of your markers, thereby securing victory.
                            </p>

                            <a className='project-link-container' href='https://hicass.github.io/mancala/' target='_blank'>
                                <h4 className='project-link'>Mancala</h4>
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

            </div>
        </section>
    )
}