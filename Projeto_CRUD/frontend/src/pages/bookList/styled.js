/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import pattern_colors from '../../colors'
import { MainStyled } from '../../primeComponents'

export const BookListMain = styled(MainStyled)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const BookListSection = styled.section`
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${pattern_colors.section_bg};
`

export const BookListArticle = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid;
    margin:10px;
    cursor: pointer;

    :hover{
        background-color: ${pattern_colors.strong_color};
    }
`

