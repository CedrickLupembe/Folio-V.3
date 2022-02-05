import styled from "styled-components";

export const HeroBlock = styled.section`

    width: 100%;
    height: 95vh;
    position: relative;
    padding: 0 0 70px 0;

    /* Media mobile */

  @media (max-width: 480px){
      height: auto;
      padding: 0 0 25px 0;
  }

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    height: auto;
    padding: 0 0 25px 0;
}

`

export const BannerHero = styled.div`

    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 70px;

    span{
         padding: 10px 20px;
         background-color: var(--secondary);
         font-family: var(--titles);
         border-radius: 5px;
         margin-bottom: 40px;
         font-size: 15px;
    }

    blockquote{
        font-size: 50px;
        font-family: var(--titles);
        line-height: 70px;
        color: var(--secondary-text);
        margin-bottom: 30px;
    }

    p{
        font-size: 20px;
        color: var(--primary-text);
        width: auto;
    }

    a{
        margin-top: 40px;
        color: var(--secondary);
        font-size: 20px;
    }

    /* Media mobile */

  @media (max-width: 480px){
        flex-direction: column;
        padding: 20px 0;
  }

  //   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    flex-direction: column;
    padding: 20px 0;
}


`
export const LeftHero = styled.div`

    width: 50%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 20px 20px 20px 60px;


/* Media mobile */
@media (max-width: 480px){
            
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 10px 25px;
            margin-top: 20px;


            span{
                font-size: 12px;
                padding: 10px;
                border-radius: 3px;
            }

            blockquote{
                font-size: 35px;
                line-height: 50px;
                margin-bottom: 30px;
            }

            p{
                font-size: 20px;
                color: var(--primary-text);
            }

            a{
                margin-top: 40px;
                color: var(--secondary);
                font-size: 20px;
            }

}

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

            width: 100%;
            height: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 10px 30px;
            margin-top: 20px;
}

`


export const RightHero = styled.div`


    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img{
        width: 420px;
        height: auto;
        object-fit: cover;
    }


       /* Media mobile */

  @media (max-width: 480px){

    width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 20px;
    overflow: visible;

    img{
        width: 300px;
        height: 300px;
    }

  }

  //   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 20px;
    overflow: visible;

    img{
        width: 300px;
        height: auto;
    }

}

`

export const Experience = styled.div`

    width: 100%;
    height: 15%;
    padding: 0 100px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: -12px;
    
    /* Media mobile */

  @media (max-width: 480px){

    margin-top: 0;
    width: 100%;
    height: auto;
    padding: 0 30px;

  }

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    margin-top: 0;
    width: 100%;
    height: auto;
    padding: 0 100px;
    justify-content: space-around;
}

`
export const YearsHero = styled.div`
    
    width: 200px;
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;

    blockquote{
        font-size: 35px;
        color: var(--secondary-text);
        margin-right: 10px;
    }

    span{
        color: var(--primary-text);
    }

/* Media mobile */
@media (max-width: 480px){

            height: auto;
            padding: 10px;

        blockquote{
            font-size: 30px;
        }

}

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    height: auto;
    padding: 10px;

}

`

export const ProjectsHero = styled.div`

    width: 200px;
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;

    blockquote{
        font-size: 35px;
        color: var(--secondary-text);
        margin-right: 10px;
    }

    span{
        color: var(--primary-text);
    }


    @media (max-width: 480px){

            height: auto;
            padding: 10px;

        blockquote{
            font-size: 30px;
        }


        }

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    height: auto;
    padding: 10px;


}

`