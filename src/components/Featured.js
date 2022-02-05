import React from 'react'
import { useEffect } from 'react'

import { FeaturedBlock, Titles, Mockup, ImgBlock, Description, Div1, Div2 } from './styles/Featureblock.styled'
import { BiLinkExternal } from 'react-icons/bi'
import feature from '../Images/feature.jpg'
import Media__links from './Medias/Links'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {

        useEffect(() => {

            AOS.init({
                duration: 300
            });
            
        }, []);
        


    return (

        <FeaturedBlock id='Works'>
            
            <Titles data-aos="fade-up">
                <span>Latest Works</span>
                <p>Noteworthy Projects I’ve worked on</p>
            </Titles>

            <Mockup data-aos="fade-up">
                <ImgBlock>
                
                    <img src={feature} alt="" />
                
                </ImgBlock>

                <Description>
                    <span className='Title-feature'>Features projects</span>
                    <h1>AYLF</h1>

                    <Div1>
                        <p>
                            <span>Africa Youth Leadership Forum</span> minimalist landing page built 
                            with extensive <span>user interface research</span> available on the web
                        </p>
                    </Div1>

                    <Div2>
                        <ul>
                            <li>JavaScript</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>Netlify</li>

                        </ul>

                        <a href={Media__links.aylf} target='_blank' rel='noreferrer'><BiLinkExternal /></a>
                    </Div2>

                </Description>
            </Mockup>

        </FeaturedBlock>
    )
}

export default Feature
