import React, { useEffect } from 'react'

import { IconContext } from "react-icons";
import { Container, Titles, Div1, Div2, Div3 } from './styles/Archives.styled'
import { FiFolder } from 'react-icons/fi'
import { RiGithubLine } from 'react-icons/ri'
import { GoLinkExternal } from 'react-icons/go'
import Media__links from './Medias/Links'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

const Archive = () => {


    useEffect(() => {

        AOS.init({
            duration: 300
        });
     
    }, []);
    


    return (
        <Container>
            <Titles>

                <h3 data-aos="fade-up" 
                    data-aos-anchor-placement="center-bottom">
                    Other Noteworthy Projects
                </h3>

                <a href="/" 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="center-bottom">
                    view the archive
                </a>

            </Titles>

            <Div1>

                <Div2 data-aos="fade-up">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.DevfindGithub} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href={Media__links.Devfind} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                        <h1><a href={ Media__links.Devfind } target='_blank' rel='noreferrer'>Devfind</a></h1>
                        <p>
                            A single page application for searching github users and repositories. 
                            The app uses the <a href={Media__links.GithubAPI} target='_blank' rel='noreferrer'>Github API</a> to perform searches on Github 
                            
                        </p>

                        <ul>
                            <li>JavaScript</li>
                            <li>Saas</li>
                            <li>Github API</li>
                            <li>Vercel</li>

                        </ul>
                </Div2>

                <Div2 className='Active' data-aos="fade-up" data-aos-duration="650">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.Github} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href="/">
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                        <h1><a href="/">Weather app</a></h1>

                        <p>
                            Weatherapp is a simple weather forecast app, which uses some 
                            APIs to fetch 5 day / 3 hour forecast 
                            data from the <a href={Media__links.OpenWeatherAPI} target='_blank' rel='noreferrer'>OpenWeatherMap</a> and to fetch places 
                        </p>

                        <ul>
                            <li>JavaScript</li>
                            <li>Saas</li>
                            <li>OpenWeatherMap</li>
                            <li>Netlify</li>

                        </ul>
                </Div2>

                <Div2 className='Active' data-aos="fade-up" data-aos-duration="750">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.TaskManagerGithub} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href={Media__links.TaskManager} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                       <h1><a href={Media__links.TaskManager} target='_blank' rel='noreferrer'>Track-me</a></h1>

                        <p>
                            Track-me is a task managing Web-Application 
                            to help its users to stay organized for their day to day activities.
                        </p>

                        <ul>
                            <li>JavaScript</li>
                            <li>Saas</li>
                            <li>Github</li>


                        </ul>
                </Div2>

                <Div2 data-aos="fade-up">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.Github} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href="/">
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                        <h1><a href="/">Lyrics app</a></h1>

                        <p>
                            It’s a simple app that can save all your song's lyrics offline after 
                            reading your phone's library. Web app that instantly fetches 
                            your lyrics for you.
                        </p>

                        <ul>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                            <li>Ginius API</li>
                            <li>Heroku</li>

                        </ul>
                </Div2>

                <Div2 className='Active' data-aos="fade-up" data-aos-duration="650">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.Github} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href="/">
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                        <h1><a href="/">Expense tracker</a></h1>

                        <p>
                            The app was build with the intention of providing 
                            a clean and simple responsive web app for entering 
                            and managing expenses.
                        </p>

                        <ul>
                            <li>React</li>
                            <li>Styled Components</li>
                            <li>Chart.js</li>
                        </ul>
                </Div2>

                <Div2 className='Active' data-aos="fade-up" data-aos-duration="750">
                    <Div3>

                        <IconContext.Provider value={{size: "1.8rem", className: "react-icons" }}>
                            <FiFolder />
                        </IconContext.Provider>

                        <span>

                            <a href={Media__links.FolioV1Github} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <RiGithubLine />
                                </IconContext.Provider>
                            </a>

                            <a href={Media__links.FolioV1} target='_blank' rel='noreferrer'>
                                <IconContext.Provider value={{size: "1.2rem", className: "react-icons-link" }}>
                                    <GoLinkExternal />
                                </IconContext.Provider>
                            </a>

                        </span>
                    </Div3>

                        <h1><a href={Media__links.FolioV1} target='_blank' rel='noreferrer'>Folio V.1</a></h1>

                        <p>
                            First iteration of my personal website.
                            I had a lot of fun creating it and I plan 
                            to add transitions and animations along the line.
                        </p>

                        <ul>
                            <li>Html</li>
                            <li>css</li>
                            <li>Bootstrap</li>
                            <li>Github</li>
                        </ul>
                </Div2>


            </Div1>
        </Container>
    )
}

export default Archive