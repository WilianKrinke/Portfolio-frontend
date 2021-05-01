import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {colors} from '../../style/colors'

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Container = styled.div`

    max-width: 700px;
    border-radius: 4px;
    box-shadow: 0 0 20px ${colors.darkTransparent};
    margin: 80px auto;
    padding: 30px;
`

export const BackBtn = styled(Link)`
    font-size: 50px;
    i{
        color: black;
    }
`

export const Owner = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    img{
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    h1{
        font-size:50px;
        margin-bottom: 20px;
        letter-spacing: 4px;
    }
`


export const FilterList = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;

        .divbtns{
            width: 50%;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            margin-top: 5px;

            button{
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                width: 70px;
                padding: 5px 10px;
                border-radius: 5px;
                background-color: #666;
                color: ${colors.primaria};
                outline: transparent;
                border: none;

                &:nth-child(${props => props.active + 1}){
                    background-color: #222 ;
                }
            }
        }


`

export const IssuesStyled = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid;

    li{
        display: flex;
        padding: 15px 10px;

        & + li{
            margin-top: 12px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #0d2636;
        }

        div{
            flex: 1;
            margin-left: 12px;

            p{
                margin-top: 10px;
                font-size: 12px;
                color: #000;
            }
        }

        strong{
            font-size: 15px;            

            a{
                text-decoration: none;
                color: #222;
                transition: color .3s ease-in-out;

                &:hover{
                    color: #0071db
                }
            }

            span{
                background-color: #222;
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 4px 7px;
                margin-left: 10px;
            }
        }
    }
`

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        outline: 0;
        border: 0;
        background-color: #222;
        padding: 5px 10px;
        border-radius: 5px;
        color: ${colors.primaria};

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`



