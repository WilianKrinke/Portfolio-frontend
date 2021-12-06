import styled from 'styled-components'
import {MainStyled,FooterStyled} from '../../primeComponents/index'

export const HomeMain = styled(MainStyled)`
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
    background-color: ${props => props.onhover ? '#FE6B0A' : '#CCFFCB'}  ;
    border-radius: 5px 0px 0px 5px;
    border-bottom: 1px solid #F3BEF7;
    border-top: 1px solid #F3BEF7;
    border-left: 1px solid #F3BEF7;
    transition: all .3s ease-in-out;

    @media screen and (max-width: 750px) {
       width: 100%;
    }
`
export const SectForm = styled.section`
    width: 45%;
    height: 60vh;
    padding: 10px;
    background-color: #CCFFCB;
    border-radius: 0px 5px 5px 0px;
    border-bottom: 1px solid #F3BEF7;
    border-top: 1px solid #F3BEF7;
    border-right: 1px solid #F3BEF7;
    transition: all .3s ease-in-out;
    
    :hover{
        background-color: #FE6B0A;
    }
    
    @media screen and (max-width: 750px) {
       width: 100%;
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
    border: 1px solid;


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
    }
    
    p:first-child{
        font-size: 70px;
    }

    p:nth-child(2){
        font-size: 70px;
    }

    p:nth-child(3){
        font-size: 70px;
    }

    p:last-child{
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
    border: 1px solid;
    transition: all .3s ease-in-out;
    opacity: ${props => props.isVisible ? '1' : '0'};
    display: ${props => props.isVisible ? 'flex' : 'none'};

    
`

export const ArticleSignUp = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid;
    transition: all .3s ease-in-out;
    opacity: ${props => props.isVisible ? '0' : '1'};
    display: ${props => props.isVisible ? 'none' : 'flex'};
`

export const HomeFooter = styled(FooterStyled)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px;
`

export const ButtonChangeForm = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 54px;
  left: 85px;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #f9fff9;
   }

   @media screen and (max-width: 470px) {
    position: relative;
    top: 0px;
    left: 0px;
  }
`

export const ButtonBackToLogin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 17px;
  left: 85px;

  :hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #f9fff9;  
}

@media screen and (max-width: 470px) {
    position: relative;
    top: 20px;
    left: 0px;
  }
`