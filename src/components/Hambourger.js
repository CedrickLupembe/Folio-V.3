import React from "react";
import { useState } from "react";

import {
  Span,
  MenuMobile,
  Overlay,
  List,
  BurgerMenu,
  Footer,
} from "./styles/Hambourgermenu.styled";
import resume from "../Documents/resume-cedrick-lupembe.pdf";

import Media__links from "./Medias/Links";

// Icons
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Hambourger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);

  // Block scroll on menu open
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const Allclose = () => {
    setShowMenu(false);
    setOpen(false);
  };

  let Menu;
  let MenuMask;
  let Burger;

  if (showMenu) {
    // Menu mobile
    Menu = (
      <MenuMobile onClick={() => setOpen(false)}>
        <List>
          <a href="#Hero">Home</a>
          <a href="#About">About</a>
          <a href="#Works">Works</a>
          <a href="#Contact">Contact</a>
        </List>

        <span>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="resume-cedrick-lupembe"
          >
            Resume
          </a>
        </span>

        <Footer>
          <div>
            <p>Find me in:</p>
          </div>
          <div>
            <a
              href={Media__links.Linkedin}
              target="_blank"
              rel="noreferrer"
              className="Links"
            >
              <FiLinkedin />
            </a>
          </div>
          <div>
            <a
              href={Media__links.Twitter}
              target="_blank"
              rel="noreferrer"
              className="Links"
            >
              <FiTwitter />
            </a>
          </div>
          <div>
            <a href={Media__links.Github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          </div>
        </Footer>
      </MenuMobile>
    );

    MenuMask = <Overlay onClick={Allclose}></Overlay>;
  }

  Burger = (
    <BurgerMenu open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerMenu>
  );

  return (
    <Span onClick={() => setShowMenu(!showMenu)}>
      {Burger}
      {Menu}
      {MenuMask}
    </Span>
  );
};

export default Hambourger;
