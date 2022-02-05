import styled from "styled-components";


export const Navigation = styled.nav`
    width: auto;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    font-family: var(--titles);
    color: var(--secondary-text);
    transition: all 0.4s ease-out;

    h1{
        font-size: 27px;
        font-weight: 700;
        font-family: var(--paragraph);

        a{
            color: var(--secondary-text);
        }
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;

        li{
            margin-left: 40px;

            .Active{
                color: var(--secondary);
            }

            a{
                font-size: 15px;
                color: var(--secondary-text);

                &:hover{
                    color: var(--secondary);
                }
            }
        }
    }



    /* Media mobile */        
  @media (max-width: 480px){

    padding: 0 25px;

    ul{
        display: none !important;
    }


  }

  
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    padding: 0 30px;

    ul{
        display: none;
    }

}

`

export const Media = styled.div`

    width: 300px;
    height: auto;
    display: flex;
    align-items: center;
    margin-right: 30px;
  

    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        font-size: 14px;
        margin-left: 35px;
        color: var(--secondary-text);

        a{
            color: var(--secondary-text);

            &:hover{
                color: var(--secondary);
            }

            
            .react-icons{
                    vertical-align: middle;
                }
        }
    }

    .Btn-mail{
        
        margin-left: 30px;

        .mail{
        color: var(--secondary);
        padding: 10px 13px;
        font-size: 16px;
        border-radius: 50px;
        background-color: var(--mail-btn);
    }

    }


 /* Media mobile */
@media (max-width: 480px){
        display: none;
  }


/* Media Tablette */
@media (min-width: 481px) and (max-width: 768px){

    display: none;

}

`