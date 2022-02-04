import styled from 'styled-components'

export const FavoriteMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    transition: all .7s ease-in-out;
`


export const SectionContainer = styled.section`
    max-width: 100vw;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    padding: 10px;
`