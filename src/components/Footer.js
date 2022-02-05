import React from 'react'
import { useEffect } from 'react'
import { Container, Div1 } from './styles/Footerblock.styled'
import memoji from '../Images/memoji.svg'
import Media__links from './Medias/Links'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
    
        AOS.init({
            duration: 300
        });

    }, []);

    return (

        <Container id='Contact'>
            <span data-aos="fade-up"><img src={memoji} alt="memoji avatar" /></span>
            <h1 data-aos="fade-up">Let’s make something amazing together.</h1>
            <h1 data-aos="fade-up">Start by <a href={Media__links.Gmail}>saying hi</a></h1>

            <Div1>
                <h3><strong>Cedrick</strong> Lupembe</h3>
                <span className='privacy'>© 2022. All Rights Reserved</span>
                <span>
                    <a href={Media__links.Github} target='_blank' rel='noreferrer'><FiGithub /></a>
                    <a href={Media__links.Twitter} target='_blank' rel='noreferrer' className='Links'><FiTwitter /></a>
                    <a href={Media__links.Linkedin} target='_blank' rel='noreferrer' className='Links'><FiLinkedin /></a>

                </span>
            </Div1>
            <h2><a href={Media__links.Gmail}>cedricklupembe91@gmail.com</a></h2>
        </Container>
    )
}

export default Footer
