import styled from "styled-components";


export const Introduction = styled.section`

    width: 100%;
    height: auto;
    background-color: var(--primary-bg);
    display: flex;
    position: relative;
    padding: 50px 100px;
    overflow: hidden;


      /* Media mobile */
        @media (max-width: 480px){

            flex-direction: column;
            padding: 5px 15px;

        }

        /* Media tablette */
        @media (min-width: 481px) and (max-width: 768px){
            flex-direction: column;
            padding: 5px 15px;
        }

`
export const ServiceBlock = styled.div`

    width: 50%;
    height: auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;


        /* Media mobile */

        @media (max-width: 480px){

            width: 100%;
            padding: 10px 0;
            
        }

        /* Media tablette */
        @media (min-width: 481px) and (max-width: 768px){
            width: 100%;
            padding: 10px 25px;
        }

`

export const FrontEnd = styled.div`

    width: 100%;
    height: 200px;
    background-color: var(--secondary-bg);
    border-radius: 10px;
    padding: 30px;
    position: relative;

    p{
        color: var(--primary-text);
        margin-top: 30px;
        font-size: 20px;
    }

    a{
        margin-top: 25px;
        color: var(--secondary-text);
    }


            /* Media mobile */
            @media (max-width: 480px){

               height: 150px;
               border-radius: 8px;
               padding: 20px;
               

               p{
                    margin-top: 15px;
                    font-size: 18px;
                }

                a{
                    margin-top: 15px;
                    font-size: 12px;
                }

            }

            /* Media tablette */
            @media (min-width: 481px) and (max-width: 768px){
               height: 200px;
               border-radius: 8px;
               padding: 20px;
               margin-top: 20px;
               

               p{
                    margin-top: 20px;
                    font-size: 23px;
                }

                a{
                    margin-top: 40px;
                    font-size: 14px;
                }
            }

`


export const Design = styled.div`

    width: 100%;
    height: 200px;
    background-color: var(--secondary-bg);
    border-radius: 20px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 30px;
    position: relative;

    p{
        color: var(--primary-text);
        margin-top: 30px;
        font-size: 20px;
    }

    a{
        margin-top: 25px;
        color: var(--secondary-text);
    }


      /* Media mobile */

      @media (max-width: 480px){

            height: 150px;
            border-radius: 8px;
            padding: 20px;
            margin-top: 10px;

        p{
            margin-top: 15px;
            font-size: 18px;
        }

        a{
            margin-top: 15px;
            font-size: 12px;
        }

        }

    /* Media tablette */
    @media (min-width: 481px) and (max-width: 768px){
               
            height: 200px;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
               

            p{
                margin-top: 20px;
                font-size: 23px;
            }

            a{
                margin-top: 40px;
                font-size: 14px;
            }
        }

`
export const Blogger = styled.div`

    width: 100%;
    height: 200px;
    background-color: var(--secondary-bg);
    border-radius: 20px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 30px;
    position: relative;

    p{
        color: var(--primary-text);
        margin-top: 30px;
        font-size: 20px;
    }

    a{
        margin-top: 25px;
        color: var(--secondary-text);
    }


      /* Media mobile */

      @media (max-width: 480px){

            height: 150px;
            border-radius: 8px;
            padding: 20px;
            margin-top: 10px;

        p{
            margin-top: 15px;
            font-size: 18px;
        }

        a{
            margin-top: 15px;
            font-size: 12px;
        }

    }

     /* Media tablette */
     @media (min-width: 481px) and (max-width: 768px){
               
               height: 200px;
               border-radius: 8px;
               padding: 20px;
               margin-top: 20px;
                  
   
               p{
                   margin-top: 20px;
                   font-size: 23px;
               }
   
               a{
                   margin-top: 40px;
                   font-size: 14px;
               }
           }

`



// childs
export const Title = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font-family: var(--titles);
        font-size: 23px;
        color: var(--secondary-text);


        .react-icons{
                    vertical-align: middle;
                    
                }
    }

    .Active{
        color: var(--secondary);
    }

     /* Media mobile */

     @media (max-width: 480px){

           span{
                font-size: 20px;
            }

    }

`


// About section
export const AboutBlock = styled.div`

    width: 50%;
    height: auto;
    padding: 20px 20px 20px 70px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    span{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: var(--primary-text);
        margin-bottom: 30px;

        img{
            width: 30px;
            height: auto;
            object-fit: cover;
            margin-top: -10px;
            margin-left: 10px;
        }
    }

    h1{
        width: 431px;
        font-size: 40px;
        font-family: var(--titles);
        color: var(--secondary-text);
        line-height: 50px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    p{
        color: var(--primary-text);
        font-size: 20px;
        line-height: 25px;
        margin-top: 20px;

        a{
            color: var(--secondary);
            font-size: 20px;
        }

    }




/* Media mobile */

@media (max-width: 480px){

        width: 100%;
        padding: 25px 0;

        span{
            justify-content: center;

        img{
            margin-left: 5px;
        }
    }

    h1{
        width: auto;
        font-size: 30px;
        line-height: 40px;
        font-weight: 500;
        margin-bottom: 5px;
        text-align: center;
    }



}

     /* Media tablette */
     @media (min-width: 481px) and (max-width: 768px){
           
        
        width: 100%;
        padding: 25px 25px;
        margin-top: 30px;

        span{
            justify-content: center;

        img{
            margin-left: 5px;
        }
              

    }



    h1{
        width: auto;
        font-size: 30px;
        line-height: 40px;
        font-weight: 500;
        margin-bottom: 5px;
    }

}
`

export const TechoSection = styled.div`

    width: 100%;
    height: auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 170px;


    li{

        padding-left: 20px;
        margin-top: 10px;
        font-family: var(--titles);
        font-size: 14px;
        color: var(--secondary-text);

        ::before{
          content: '▹';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--secondary);
        }
    }


         /* Media mobile */

         @media (max-width: 480px){

           justify-content: space-between;
           padding-right: 70px;
           
           li{
               font-size: 13px;
           }

    }

        /* Media tablette */
        @media (min-width: 481px) and (max-width: 768px){
           
            justify-content: space-between;
            padding-right: 350px;

   
   }
    

`