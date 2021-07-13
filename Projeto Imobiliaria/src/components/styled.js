import styled from 'styled-components'
import {patterns} from '../patterns.styleds'

export const HeaderStyled = styled.header`

    min-height: 20vh;
    min-width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;

    h1{
        letter-spacing: 5vw;
        font-family: ${patterns.font_titulos};
        font-size: 6em;
        position: relative;left:10px;
    }

`
export const AsideStyled = styled.aside`
    .colunaesquerda{
        height: 100vh;
        z-index: 30;
        position: absolute;
        top: 0px;
        left: 0px;        
    }
    .colunadireita{
        height: 100vh;
        z-index: 30;
        position: absolute;
        top:0px;
        right: 0px;        
    }
    
`

export const FooterStyled = styled.footer`    
    background-color: white;
    min-height: 9vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    z-index: 30;

    .socialcont{
        width: 300px;
        display: flex;
        justify-content: space-between;
        position: relative;
        right: 75px;

        a{
            text-decoration: none;
            color: black;
            i{
                font-size: 25px;
                color: #4a4a4a
            }
        }
    }

    .contactcont{
        position: relative;
        left: 80px;
        text-align: center;    

        a{
            color: black;
            text-decoration: none;
            text-transform: uppercase;
            font-size: ${patterns.font_size_links};
            letter-spacing: 5px;
        }
    }
`
