import styled from 'styled-components'

export const MyDataMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    transition: all .7s ease-in-out;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
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

export const ArticleContainer = styled.article`
    width: 100%;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding: 10px;
    
`