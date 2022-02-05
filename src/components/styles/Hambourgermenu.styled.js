import styled from "styled-components";


export const Span = styled.div`

    color: white;
    display: none;
    transition: all 0.7s ease-in-out;


        /* Media mobile */
  @media (max-width: 768px){

    display: block;

}

`

export const MenuMobile = styled.section`

    position: fixed;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: var(--secondary-bg);
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;


    span{
        width: 100%;
        height: auto;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        a{
            padding: 13px 30px;
            border: 1px solid var(--secondary);
            color: var(--secondary);
            border-radius: 3px;

        }
    }

`

export const List = styled.div`

    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;

        a{
                color: var(--primary-text);
                text-decoration: none;
                padding: 18px 0;
        }

`

export const Overlay = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100vh;
    z-index: 4;
    /* display: none; */
    
` 

export const BurgerMenu = styled.div`

    position: relative;
    width: 25px;
    cursor: pointer;
    z-index: 960 !important;
    height: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div{
        width: auto;
        height: 2px;
        background-color: ${({ open }) => open ? 'var(--secondary)' : 'var(--secondary)'};
        border-radius: 5px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'rotate(45deg) translate(-11px, 4px)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg) translate(-5px, -9px)' : 'rotate(0)'};
        }
    }

`