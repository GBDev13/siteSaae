import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    gap: 3rem;

    padding-bottom: 8rem;
   

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;

      
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: rgb(26,18,155);
    background: linear-gradient(90deg, rgba(26,18,155,1) 0%, rgba(20,96,215,1) 100%);
    padding: 0;
    padding-top: 0;
    height: 28rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 30rem;

    transition: 0.5s;
   
    img{
      height: 300px;
      margin:0;
      padding: 0;
    }


    h2 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
      padding: 0.8rem;
    }

    p {
      color: #696969;
      font-size: 1.5rem;
      font-weight: 300;
      padding: 1rem;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }



  @media (max-width: 1000px) {
    > div {
      height:0;
      padding-top:0;
      display: flex;
      flex-direction: row;
     

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
    &:nth-child(even) 
    > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 0;
      max-width: 100%;
      display: flex;
      flex-direction: row;
      a{
      
    }
      

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
      img{
      height: 150px;
      margin:0;
      padding: 0;
    }
    }
  }
`;
