import styled from 'styled-components';



export const Container = styled.div`
  > a {
    background: rgb(26,18,155);
    background: linear-gradient(90deg, rgba(26,18,155,1) 0%, rgba(20,96,215,1) 100%);
    padding: 0;
    padding-top: 0;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 30rem;

    transition: 0.5s;
    img{
      margin:0;
      padding: 0;
    }


    h2 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
     
      padding: 0.8rem;
    }

    p {
      color: #111;
      font-size: 1.2rem;
      font-weight: 300;
      padding: 0.8rem;
    }
    span{
        color: #696969;
        margin-top: 0.5rem;
        font-size: 1rem;
        padding: 0.8rem;
    }
  }
  &:hover > a {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }



  @media (max-width: 1000px) {
    > a {
      height:0;
      padding-top:0;
     

      h1 {
        font-size: 1.2rem;
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

  @media (max-width: 700px) {
    &:nth-child(even) > a {
      margin-top: 0;
    }

    &:hover > a {
      transform: translateY(0);
    }

    > a {
      height: auto;
      padding: 0;
      max-width: 100%;
      

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
