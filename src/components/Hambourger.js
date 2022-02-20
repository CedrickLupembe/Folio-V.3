import React from 'react'
import { useState } from 'react'

import { Span, MenuMobile, Overlay, List, BurgerMenu } from './styles/Hambourgermenu.styled'
import resume from '../Documents/resume-cedrick-lupembe.pdf'

const Hambourger = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [open, setOpen] = useState(false);


    const Allclose = () => {
        setShowMenu(false)
        setOpen(false)
    }

    let Menu
    let MenuMask
    let Burger

    if(showMenu){

        // Menu mobile
        Menu = <MenuMobile onClick={() => setOpen(false) }>

                    <List>
                      <a href="#Hero">Home</a>
                      <a href="#About">About</a>
                      <a href="#Works">Works</a>
                      <a href="#Contact">Contact</a>
                    </List>

                    <span><a href={resume} target='_blank' rel='noreferrer' download='resume-cedrick-lupembe'>Resume</a></span>

              </MenuMobile>

        MenuMask = <Overlay onClick={Allclose}></Overlay>
    }

    Burger = <BurgerMenu open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerMenu>


  return (

    <Span onClick={() => setShowMenu(!showMenu)}>
        {Burger}
        {Menu}
        {MenuMask}
    </Span>

  )
}

export default Hambourger;
