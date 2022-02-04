import styled from 'styled-components'

export const HomeMain = styled.main`
    max-width: 100vw;
    min-height: calc(74vh - 5px);
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;

    @media screen and (max-width: 750px) {
        flex-direction: column-reverse;
    }
`
export const InfoCard = styled.section`
    width: 55%;
    height: 60vh;
    padding: 10px;
    border-radius: 5px 0px 0px 5px;
    border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
    border-top: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
    border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
    transition: all .3s ease-in-out;

    @media screen and (max-width: 750px) {
       width: 100%;
       border-radius: 0px 0px 5px 5px;
       border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
       border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
       border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
    }
`
export const SectForm = styled.section`
    width: 45%;
    height: 60vh;
    padding: 10px;
    background-color: #FE6B0A;
    border-radius: 0px 5px 5px 0px;
    border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-top: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    transition: all .3s ease-in-out;
    
    @media screen and (max-width: 750px) {
       width: 100%;
       border-radius: 5px 5px 0px 0px;
       border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
       border-top: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
       border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    }

    @media screen and (max-width: 470px) {
        height: 70vh;

    }
`

export const ArticleCrud = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    flex-direction: column;
    padding-left: 50px;
    border: 1px solid rgba(0, 0, 0, 0.3);


    @media screen and (max-width: 400px) {
        padding-left: 0px;
        align-items: center;
    }
    
    p{
        display: block;
        font-family: 'Cormorant Garamond', serif;
        font-weight: 600;
        margin: 2px;
        letter-spacing: 3px;
        font-size: 70px;
    }
`

export const ArticleLogin = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
`

export const ArticleSignUp = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);    
`