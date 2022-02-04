import styled from 'styled-components';

export const DivLoading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`