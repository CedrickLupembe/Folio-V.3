import React from 'react'
import { useEffect } from 'react'

import { Introduction, ServiceBlock, FrontEnd, Design, Blogger, Title, AboutBlock, TechoSection } from './styles/Introduction.styled'
import emoji from '../Images/emoji.svg'
import Media__links from './Medias/Links'

import { IconContext } from 'react-icons'
import { FaFigma } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { SiWritedotas } from 'react-icons/si'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {

    useEffect(() => {
    
        AOS.init({
            duration: 300
        });

    }, []);


    return (
        <Introduction id='About'>
            
            <ServiceBlock>

                {/* Front end block */}
                <FrontEnd data-aos="fade-up">

                    <Title>
                        <span className='Active'>Front-End</span>

                        <IconContext.Provider value={{ className: 'react-icons', size: '1.5rem', color: '#6EF3A5' }}>
                            <HiCode />
                        </IconContext.Provider>
                    </Title>

                    <p>I develop front-end with coding super smooth</p>

                    <a href="#Works">PROJECTS</a>

                </FrontEnd>

                {/* Design block */}
                <Design data-aos="fade-up" data-aos-duration="650">
                    <Title>
                            <span>Design</span>

                            <IconContext.Provider value={{ className: 'react-icons', size: '1.5rem', color: '#6EF3A5' }}>
                                <FaFigma />
                            </IconContext.Provider>
                        </Title>

                        <p>Create digital products with unique ideas</p>

                        <a href="#Works">PROJECTS</a>
                </Design>


                {/* Blog block */}
                <Blogger data-aos="fade-up" data-aos-duration="750">
                        <Title>
                            <span>Blogger</span>

                            <IconContext.Provider value={{ className: 'react-icons', size: '1.5rem', color: '#6EF3A5' }}>
                                <SiWritedotas />
                            </IconContext.Provider>
                        </Title>

                        <p>Explain everything I know about specific topics</p>

                        <a href={Media__links.Blog}>BLOG</a>
                </Blogger>


            </ServiceBlock>

            <AboutBlock>

                <span data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    Introduce
                    <img src={emoji} alt="" />
                </span>

                <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">Hi, I’m Cedrick</h1>

                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    A Front-End Software Engineer.
                    <br />
                    I help companies and organizations build modern, 
                    resilient, and inclusive Web user interfaces with a strong 
                    focus on responsive design, performance, and accessibility.
                </p>

                <p data-aos="fade-up">
                    Well-organised person, problem solver, independent employee 
                    with high attention to detail.
                    
                </p>

                <p data-aos="fade-up">
                    I talk about my journey on <a href={Media__links.Twitter} target='_blank' rel='noreferrer'>
                        Twitter</a>, 
                    commit code to <a href={Media__links.Github} target='_blank' rel='noreferrer'>
                        Github</a>, 
                    and network on <a href={Media__links.Linkedin} target='_blank' rel='noreferrer'>
                        Linkedin..</a>
                </p>

                <p data-aos="fade-up">Technologies I’m working with:</p>

                <TechoSection>
                    
                    <ul data-aos="fade-up">
                        <li>HTML</li>
                        <li>CSS/Sass</li>
                        <li>JavaScript(ES6+)</li>
                        <li>Git/Github</li>
                    </ul>
                        
                    <ul className='Active' data-aos="fade-up">
                        <li>React(Next)</li>
                        <li>Node.js</li>
                        <li>Tailwind</li>
                        <li>Firebase</li>
                    </ul>

                </TechoSection>

            </AboutBlock>


        </Introduction>
    )
}

export default Intro
