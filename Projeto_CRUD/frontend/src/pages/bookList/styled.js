import styled from 'styled-components'

export const BookListMain = styled.main`
    max-width: 100vw;
    min-height: 300px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    
    @media screen and (max-width: 440px) {
        padding: 10px 0px;
        border: 1px solid transparent;
    }  
`

export const BookListSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;    
`

export const BookArticle = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .3s ease-in-out;
    opacity: ${props => props.fadeIn ? '1' : '0'};
`

export const BookListArticle = styled.article`
    min-height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
`




