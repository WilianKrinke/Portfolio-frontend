import styled from 'styled-components'

export const BorrowMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    transition: all .7s ease-in-out;
`

export const SectionContainer = styled.section`
    max-width: 100vw;
    min-height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    padding: 10px;
`