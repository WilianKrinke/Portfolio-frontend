import styled from 'styled-components'
import {MainStyled} from '../../primeComponents/index'

export const HomeMain = styled(MainStyled)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
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
`

export const Article1 = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    flex-direction: column;
    padding-left: 50px;
    border: 1px solid;
    
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

export const Article2 = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border: 1px solid;

    form{
        width: 40%;
    }
`