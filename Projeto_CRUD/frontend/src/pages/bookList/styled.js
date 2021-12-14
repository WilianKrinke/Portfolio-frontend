/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { MainStyled,HeaderStyled, FooterStyled } from '../../primeComponents'

export const HeaderBookList = styled(HeaderStyled)`
    min-height: 22vh;
`


export const BookListMain = styled(MainStyled)`
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    
`

export const BookListSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #F3BEF7;
    border-radius: 5px;
    padding: 10px;

    
`

export const BookArticle = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: all .3s ease-in-out;
    opacity: ${props => props.fadeIn ? '1' : '0'}
    

    
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

export const AjustBookList = styled.section`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
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

export const IconForward = styled.i`
    font-size: 35px;
    cursor: pointer;
    position: relative;
    top: 5px;
    transition: all .1s ease-in-out;

    :hover{
        transform: scale(1.3);
    }
`

export const IconBack = styled.i`
    font-size: 35px;
    cursor: pointer;
    position: relative;
    top: 5px;
    transition: all .1s ease-in-out;

    :hover{
        transform: scale(1.3);
    }
`

export const InfoPagination = styled.div`
    span{
        font-size: 35px;
        letter-spacing: 5px;
        position: relative;
        left: 3px
    }
`

export const BookListFooter = styled(FooterStyled)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px;
`




