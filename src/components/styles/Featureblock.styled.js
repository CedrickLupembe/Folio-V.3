import styled from "styled-components";

export const FeaturedBlock = styled.section`

    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 50px 0;
    flex-direction: column;
    background-color: var(--primary-bg);


    /* Media mobile */

  @media (max-width: 480px){
      height: 500px;
  }

`


export const Titles = styled.div`

    width: 85%;
    height: 100px;
    padding: 20px 200px;
    margin-bottom: 30px;

    span{
        font-size: 30px;
        font-family: var(--titles);
        color: var(--secondary-text);

    }

    p{
        font-size: 20px;
        color: var(--primary-text);
        margin-top: 10px;
    }

/* Media mobile */
  @media (max-width: 480px){
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 50px 0 10px 0;


    span{
        font-size: 25px;
    }

    p{
        font-size: 18px;
    }
  }

    /* Media tablette */
    @media (min-width: 481px) and (max-width: 768px){
           
        text-align: center;

        span{
            font-size: 30px;
        }

        p{
            font-size: 18px;
        }
               
    }

`

export const Mockup = styled.div`

    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    position: relative;

 /* Media mobile */
 @media (max-width: 480px){
    width: 100%;
    flex-direction: column;
    padding: 5px 20px;
    height: 430px;
  }
  
      /* Media tablette */
      @media (min-width: 481px) and (max-width: 768px){
           
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 30px;
                  
       }

`

export const ImgBlock = styled.div`

    width: 50%;
    height: 350px;
    position: relative;
    z-index: 1;

    ::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(110, 243, 165,0.7);
        width: 100%;
        height: 100%;

    }

    img{
        width: 100%;
        height: 100%;
        z-index: 2;
        object-fit: cover;
    }

    /* Media mobile */
  @media (max-width: 480px){
    width: 100%;
    height: 300px;

  }

  /* Media tablette */
  @media (min-width: 481px) and (max-width: 768px){
           
    width: 60%;
    height: 300px;
    position: relative;
    z-index: 1;
                     
}


`



export const Description = styled.div`

    width: 50%;
    height: 350px;
    text-align: right;
    padding: 20px 30px;
    z-index: 3;

    span{
        color: var(--secondary);
        font-size: 18px;
    }

    h1{
        color: var(--secondary-text);
        font-size: 35px;
        margin: 20px 0;
    }

    /* Media mobile */
  @media (max-width: 480px){
    width: 100%;
    height: 280px;
    text-align: left;

    .Title-feature{
        display: none;
    }
    h1{
        display: none;
    }



  }

    /* Media tablette */
    @media (min-width: 481px) and (max-width: 768px){
           
        width: 50%;
        height: 300px;
        text-align: right;
        padding: 5px 10px;
        z-index: 9;                
       }

`

export const Div1 = styled.div`

    width: 120%;
    margin-left: -95px;
    height: auto;
    background-color: var(--secondary-bg);
    padding: 50px;
    text-align: right;
    border-radius: 5px;
    z-index: 9;

    p{
        font-size: 18px;
        color: var(--primary-text);
    }

/* Media mobile */
  @media (max-width: 480px){
    width: 100%;
    margin-left: 0;
    text-align: left;
    padding: 30px;
    margin-top: -100px;

    p{
        font-size: 18px;
    }
  }

   /* Media tablette */
   @media (min-width: 481px) and (max-width: 768px){
           
        width: 120%;
        margin-left: 0;
        text-align: right;
        padding: 30px;
        margin-top: -10px;
        margin-left: -70px;
        z-index: 3;

        p{
            font-size: 18px;
            padding: 15px 0;
            z-index: 3;
        }
                   
}

`




export const Div2 = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 30px;
    padding: 0 10px;


    ul{
        display: flex;
        text-align: right;
        align-items: flex-end;
        justify-content: flex-end;

        li{
            margin-left: 30px;
            text-align: right;
            color: var(--secondary-text);
            font-family: var(--titles);
            font-size: 12px;
        }
    }

    a{
        color: var(--secondary-text);
        margin-top: 25px;
        
            &:hover{
            color: var(--secondary);
            }
    }


/* Media mobile */
  @media (max-width: 480px){
      padding: 10px;
      margin-top: 5px;

      a{
          font-size: 20px;
      }

      ul{
          padding: 7px;

          li{
              font-size: 10px;
          }
      }
  }

  
   /* Media tablette */
   @media (min-width: 481px) and (max-width: 768px){
           
      padding: 10px;
      margin-top: 0px;
                      
   }

`