import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:0.5rem;
    border-bottom: 5px solid #fff;
    

    h1{
        color:#fff;
        font-size:4.5rem;
       
    }

    @media(max-width:1000px){
        h1{
            font-size:2.4rem;
        }
    }
    @media(max-width:500px){
        h1{
            font-size:1.8rem;
        }
    }
`;
