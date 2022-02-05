import styled from "styled-components";


export const Container = styled.section`

    width: 100%;
    height: auto;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    align-items: center;
    background-color: var(--primary-bg);


`

export const Titles = styled.div`

    width: 88%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3{
        font-family: var(--titles);
        font-size: 20px;
        font-weight: 700;
        color: var(--secondary-text);
    }

    a{
        color: var(--secondary);
        margin-top: 15px;
        font-size: 18px;
    }

    /* Media mobile */
  @media (max-width: 480px){
        width: 100%;
        margin-top: 50px;
  }

  //   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

        width: 100%;
        margin-top: 50px;
}

`

export const Div1 = styled.div`

    width: 88%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    padding: 30px 0;

       /* Media mobile */
  @media (max-width: 480px){
    width: 100%;
    padding: 10px 20px;
    flex-direction: column;
    margin-top: 20px;
    
  }

   //   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

    width: 100%;
    padding: 10px 20px;
}

`

export const Div2 = styled.div`

    width: 27%;
    height: 320px;
    margin-left: 15px;
    background-color: var(--secondary-bg);
    margin-top: 15px;
    position: relative;



    h1{
        font-family: var(--titles);
        font-size: 20px;
        font-weight: 700;
        padding: 20px 30px;
        color: var(--secondary-text);

        a{
            color: var(--secondary-text);
            &:hover{
                color: var(--secondary);
            }
        }
    }

    p{
        padding: 10px 30px;
        color: var(--primary-text);
        font-size: 18px;

        a{
            color: var(--secondary);
        }
    }

    ul{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 20px;
        padding: 0 10px;

        li{
            margin-left: 20px;
            font-size: 13px;
            color: var(--primary-text);
        }
    }

@media (max-width: 480px){
        
        width: 100%;
        margin-left: 0;
        margin-top: 15px;
  }

//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){

        width: 45%;
        margin-left: 10px;
        margin-top: 10px;
}

`

export const Div3 = styled.div`

    width: 100%;
    height: 70px;
    padding: 20px 30px 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: var(--secondary-text);
        margin-left: 20px;

        .react-icons-link{
            color: var(--secondary-text);
            transition: var(--transition);

            &:hover{
                color: var(--secondary);
            }
        }
    }

    .react-icons{
        color: var(--secondary);
        vertical-align: middle;
    }

`

