import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;

> section {
  width: 100%;
  margin-top: 5rem;
  display: flex;
  gap: 1.5rem;

  padding-bottom:0;
 

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
    padding: 1rem;
    padding-top: 2.5rem;
    height: 10rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    max-width: 19rem;

    transition: 0.5s;

    h1 {
      color: #fff;
      font-size: 5rem;
      margin-bottom: 1.5rem;
      margin-right:1rem;
    }

   

    p {
      color: #fff;
      font-size:1.8rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

    

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;


      p {
        font-size: 1.8rem;
      }
    }
  }
`;