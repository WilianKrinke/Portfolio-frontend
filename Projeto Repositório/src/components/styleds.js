import styled, {keyframes, css}from 'styled-components'
// eslint-disable-next-line
import {colors} from '../style/colors'

export const HeaderStyled = styled.header`
    
    height: 10vh;
`

export const MainStyled = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .containerrep{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .containerlist{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }

    .fab{
        font-size: 50px;
        margin-right: 15px;
    }

    .containeralert{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 200px;
        background-color: ${colors.coral};
        border-radius: 5px;
        position: relative; top: 10px;

        span{
            color: white;
        }
    }
`

export const List = styled.ul`

list-style: none;
margin-top: 20px;
width: 100%;

li{
    padding: 15px 0px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    & + li{
        border-top: 1px solid black;
    }
}

    .fa-bars{
        font-size: 20px;
        color: black;        
    }

    .fa-trash-alt{
        font-size: 20px;
        color: black;
        cursor: pointer;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;


    input{
        flex: 1;
        padding: 5px 10px;
        border-color: ${props => (props.error ? '#ff0000' : '#eee')}
    }
`

//criando animação
const animation = keyframes`
    from{
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.Loading
}))`

    background-color: transparent;
    outline: none;
    border: none;
    transition: opacity .3s ease-in-out;

    i{
        font-size: 36px;
        margin-left: 15px;  
    }

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.Loading && 
    css`
        i{
            animation: ${animation} 2s linear infinite;
        }
    `}
`



export const FooterStyled = styled.footer`
    
    height: 10vh;    

`