import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #0275d8;

  padding: 14.5px 64px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 200px;
      padding: none;

      @media(max-width: 500px) {
        width: 120px;
      }
    }

    > nav {
      display: flex;
      margin-top:1.2rem;
      margin-left:2rem;
      gap: 1rem;

      a {
        font-size: 30px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: #2957a4;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }

  
    .mobile {
      display: none;
    }

    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 14.5px 16px;
  }
`;