import styled from "styled-components";

export const Span = styled.div`
  color: white;
  display: none;
  transition: all 0.7s ease-in-out;

  /* Media mobile */
  @media (max-width: 768px) {
    display: block;
    transition: all 0.7s ease-in-out;
  }
`;

export const MenuMobile = styled.section`
  position: fixed;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--secondary-bg);
  top: 0;
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  transition: all 0.7s ease-in-out;

  span {
    width: 100%;
    height: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      padding: 13px 30px;
      border: 1px solid var(--secondary);
      color: var(--secondary);
      border-radius: 3px;
    }
  }

  /* Media mobile */
  @media (max-width: 768px) {
    display: flex;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  }
`;

export const List = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;

  a {
    color: var(--primary-text);
    text-decoration: none;
    padding: 18px 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  z-index: 4;
  transition: all 0.7s ease-in-out;
  /* display: none; */
`;

export const BurgerMenu = styled.div`
  position: relative;
  width: 25px;
  cursor: pointer;
  z-index: 960 !important;
  height: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: auto;
    height: 2px;
    background-color: ${({ open }) =>
      open ? "var(--secondary)" : "var(--secondary)"};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-11px, 4px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-5px, -9px)" : "rotate(0)"};
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #3c4d5e;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  /* flex: 50% 16% 16% 16%; */

  div {
    border-right: 1px solid #3c4d5e;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-text);

    a {
      color: var(--primary-text);
      transition: all 0.7s ease-in-out;

      :hover {
        color: var(--secondary);
      }
    }
  }
`;
