/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import pattern_colors from '../../colors'
import { MainStyled,HeaderStyled } from '../../primeComponents'

export const HeaderBookList = styled(HeaderStyled)`
    min-height: 22vh; 

    @media screen and (max-width: 900px) {
      text-align: center;
      position: relative;
      top: 50px;
      margin-bottom: 40px;
    }
`

export const BookListMain = styled(MainStyled)`
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;

    @media screen and (max-width: 440px) {
        padding: 10px 0px;
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
    
    table{
        width: 75%;
        text-align: center;
        border-collapse: collapse;

        th{
            height: 50px;
        }

        thead > tr{
            border-bottom: 2px solid transparent;
            text-transform: uppercase;
            letter-spacing: 3px;
            
        }

        tbody > tr{
           border-bottom: 2px solid transparent;           
           transition: all .3s ease-in-out;
           letter-spacing: 3px;

           :hover{
                border-bottom: 2px solid;
           }
        }

        td{
            width: 100px;
            height: 50px;
        }

        tbody > tr > td:last-child{
            border-bottom: 2px solid transparent;
        }

        i{
            cursor: pointer;
            font-size: 24px;
            position: relative;
            top: 10px;
        }
    }
`

export const LendButton = styled.div`
    background-color: rgba(89, 198, 255, 0.61);
    border-radius: 5px;
    transition: all .3s ease-in-out;
    width: 150px;
    margin: 0px auto;
    cursor: pointer;

    :hover {
        background-color: #2D5CFF;
    }
`




