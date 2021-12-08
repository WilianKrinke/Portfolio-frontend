/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import pattern_colors from '../../colors'
import { MainStyled,HeaderStyled } from '../../primeComponents'

export const HeaderBookList = styled(HeaderStyled)`
    min-height: 22vh;
`


export const BookListMain = styled(MainStyled)`
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #F3BEF7;
    background-color: ${pattern_colors.section_bg};
    padding: 10px;   
`

export const BookListSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid
    
`

export const BookListArticle = styled.article`
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    
    table{
        width: 100%;
        text-align: center;

        tbody > tr{
            border-bottom: 1px solid transparent;
            transition: all .3s ease-in-out;
            cursor: pointer;
        }

        tbody > tr:hover{
            border-bottom: 1px solid rgba(0, 0, 0, 0.68);
        }

        td{
            text-align: center;
        }

        td > i {
            font-size: 40px;
            cursor: pointer;
        }
    }

`

export const AjustBookList = styled.section`
    width: 100%;
    border: 1px solid black;
    height: 100px;
`



