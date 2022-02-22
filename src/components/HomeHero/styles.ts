import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  height: 22rem;

  @media (max-width: 500px) {
    display: none;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }
`;
