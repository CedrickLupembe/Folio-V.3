import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: auto;
    background-color: var(--secondary-bg);
    padding: 50px 70px 30px 70px;
    position: relative;

    img{
        width: 130px;
        height: auto;
        object-fit: cover;
        margin-left: 30px;
    }

    h1{
        margin: 20px 30px;
        color: var(--secondary-text);
        font-family: var(--titles);
        font-size: 25px;
        font-weight: 400;

        a{
            text-decoration: underline;
            color: var(--secondary);
        }
    }

    h2{
        font-weight: 400;
        font-size: 15px;
        font-family: var(--titles);
        position: absolute;
        top: 0;
        right: 35px;
        writing-mode: vertical-lr;

        
        
        a{
            color: var(--primary-text);
            transition: var(--transition);
            font-size: 15px;
            margin-top: 40px;

            &:hover{
                color: var(--secondary);
                margin-left: 10px;
            }

        }
    }


    /* Media mobile */
  @media (max-width: 480px){

    padding: 30px 20px 20px 20px;
    background-color: var(--primary-bg);

    img{
        width: 90px;
        margin-left: 0;
    }

    h1{
        margin: 20px 0;
        font-size: 23px;
    }

    h2{
        display: none;
    }

  }

  //   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    padding: 30px 50px;
    background-color: var(--primary-bg);

    img{
        width: 90px;
        margin-left: 0;
    }

    h1{
        margin: 20px 0;
        font-size: 23px;
    }

    h2{
        display: none;
    }

}

`

export const Div1 = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 110px;
    margin-left: 30px;

    h3{
        font-size: 21px;
        font-family: var(--titles);
        color: var(--primary-text);

        strong{
            color: var(--secondary-text);
        }
    }

    span{
        font-family: var(--titles);
        font-size: 12px;
        color: var(--primary-text);
        display: flex;
        align-items: center;

        a{
            margin-left: 25px;
            color: var(--secondary-text);
            font-size: 20px;

            &:hover{
                color: var(--secondary);
            }
        }
    }


    
    /* Media mobile */
  @media (max-width: 480px){

    margin-top: 50px;
    margin-left: 0;

    h3{
        display: none;
    }
    .privacy{
        display: none;
    }
    span{
        a{
            margin-left: 0;
        }

        .Links{
                margin-left: 20px;
            }
    }

}

  //   Media Tablette
  @media (min-width: 481px) and (max-width: 768px){

    margin-top: 50px;
    margin-left: 0;

    h3{
        display: none;
    }
    span{
        a{
            margin-left: 0;
        }

        .Links{
                margin-left: 20px;
            }
    }

}


`