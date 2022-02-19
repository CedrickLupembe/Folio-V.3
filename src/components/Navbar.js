import React from 'react'
import { useEffect, useState } from 'react'
import { Navigation, Media } from './styles/Navbar.styled'

import { IconContext } from 'react-icons'
import { GrTwitter } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'

import Hambourger from './Hambourger'
import Media__links from './Medias/Links'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
    
        AOS.init({
            duration: 200
        });

    }, []);
    

    // Scroll navbar change
    const [change, setChange] = useState(false)

        const ChangeNavbarFixed = () => {
            if (window.scrollY >= 80) {
                setChange(true)
            }
            else{
                setChange(false);
              }
        }

        window.addEventListener('scroll', ChangeNavbarFixed)

    return (

        <Navigation id='Navigation' className={change ? 'navbar colorChange' : 'none'}>
            
            <h1><a href="#Hero">Cedrick</a></h1>

            <ul>
                <li data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">

                    <a className='Active' href="#Hero">Home</a>
                </li>

                <li data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200">

                    <a href="#About">About</a>
                </li>

                <li data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1400">
                    <a href="#Works">Work</a>
                </li>

                <li data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1600">
                    <a href="#Contact">Contact</a>
                </li>

            </ul>

            <Media>
                
            <IconContext.Provider value={{ className: 'react-icons', size: 15 }}>
                
                <span data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000">

                    <a href={Media__links.Twitter} target='_blank' rel='noreferrer'><GrTwitter /> Twitter</a>
                </span>


                <span data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="1400">

                    <a href={Media__links.Github} target='_blank' rel='noreferrer'><AiFillGithub /> Github</a>
                </span>

            </IconContext.Provider>

                <span className='Btn-mail' data-aos="fade-left"
                                            data-aos-easing="linear"
                                            data-aos-duration="1600">
                    <a className='mail' href={Media__links.Gmail}><GoMail /></a>
                </span>

            </Media>

            <Hambourger />

        </Navigation>
    )
}

export default Navbar
