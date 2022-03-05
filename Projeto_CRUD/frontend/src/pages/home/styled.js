import styled from 'styled-components'

export const HomeMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
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
       height: 400px;
       border-radius: 0px 0px 5px 5px;
       border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
       border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
       border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};;
    }

    @media screen and (max-width: 525px) {
       height: 500px;       
    }

    @media screen and (max-width: 440px) {       
        height: 700px;    
    }

    @media screen and (max-width: 350px) {       
        height: 800px;    
    }

    @media screen and (max-width: 300px) {       
        height: 850px;    
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

    @media screen and (max-width: 525px) {
       height: 450px;       
    }

    @media screen and (max-width: 440px) {       
        height: 500px;    
    }

    @media screen and (max-width: 350px) {       
        height: 510px;    
    }
`

export const ArticleCrud = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 20px;

    @media screen and (max-width: 400px) {
        align-items: center;
    }
`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;
    font-size: 16px;      
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`

export const A = styled.a`
    transition: all .7s ease-in-out;
    font-size: 16px;
    color: #2e46ff;     
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
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

export const DivTutorial = styled.div`
    position: relative;
    bottom: 35px;
    left: 130px;
    

    @media screen and (max-width: 750px) {
        
    }

`