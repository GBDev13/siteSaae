import styled from "styled-components"

export const NoticiaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
   

    > main{
        display: flex;

        margin-top: 5rem;
        flex-direction: column;
        h1{
            font-size:5rem;
            
        }
        h2{
            font-size:1.5rem;
            color:#e8eaea ;
            font-weight: none;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        time{
            font-size: 1.2rem;
            
            color: #9b9c9c;
        }
        .time{
            display: flex;
            align-items:start;
            flex-direction: column;
            border-bottom: 1.5px solid #9b9c9c ;
            padding-bottom: 3rem;

            span{
                color:#9b9c9c;
                font-weight: bold;
            }


        }

        .content{
            margin-top: 3rem;
        }

    @media (max-width: 1000px) {
      h1{
          font-size: 2rem;
          
      }
      h2{
          font-size: 1.5rem;
      }
      time{
            font-size: 1rem;
            
            color: #9b9c9c;
        }
      .time{
            display: flex;
            align-items:start;
            flex-direction: column;
            border-bottom: 1px solid #9b9c9c ;
            padding-bottom: 1.5rem;

            span{
                color:#9b9c9c;
                font-weight: bold;
            }


        }
    }

    @media (max-width: 700px) {
     
        h1{
          font-size: 1.5rem;
          
      }
      h2{
          font-size: 1rem;
      }
      
    }
        
    }


`;

