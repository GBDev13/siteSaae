import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 5rem;

    > h1{
        color:#111;
        font-size: 4rem;
        font-weight: bold;
        
    }

    h2{
        color:#333;
        margin-top: 2rem;
    }
    span{
        color: #333;
        margin-top:3rem;

    }
    p{
        margin-top: 3rem;
    }

    @media (max-width: 1000px) {
  
    >h1 {
        font-size: 1.4rem;
        margin-top: 0;
      }

      h2 {
        font-size: 1rem;
      }
      span{
          font-size:0.8rem ;
      }

      p {
        font-size: 0.9rem;
      }
    }
  

  
  @media (max-width: 500px) {
    > div {
      height:0;
      padding-top:0;

      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
   
 
`;
