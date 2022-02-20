import React from 'react'
import { useEffect } from 'react'

import { HeroBlock, 
         BannerHero, 
         LeftHero, 
         RightHero, 
         Experience,
         YearsHero,
         ProjectsHero  
        } from './styles/Heroblock.styled'

import me from '../Images/me.svg'
import resume from '../Documents/resume-cedrick-lupembe.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {


    useEffect(() => {
    
        AOS.init({
            duration: 200
        });

    }, []);


    return (

        <HeroBlock id='Hero'>

            <BannerHero>

                <LeftHero>
                    <span data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Front-End UI Developer</span>

                    <blockquote data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="600">
                        Talk is cheap. <br /> Show me the code
                    </blockquote>

                    <p  data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="800">
                        I design and code beautifully simple things and I love what I do.

                    </p>

                    <a href={resume} target='_blank' rel='noreferrer' download='resume-cedrick-lupembe'
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000">
                        Get Resume
                    </a>


                </LeftHero>


                <RightHero data-aos="fade-up">
                    <img src={me} alt="" />
                </RightHero>

            </BannerHero>

        <Experience data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000">

            <YearsHero>
                <blockquote>2+</blockquote>
                <span>
                    Years <br /> Experience
                </span>
            </YearsHero>

            <ProjectsHero>
                <blockquote>15+</blockquote>
                <span>
                    Projects <br /> Completed
                </span>
            </ProjectsHero>
        </Experience>

        </HeroBlock>
    )
}

export default Hero
