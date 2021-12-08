import styled from 'styled-components'

export const ContainerMenu = styled.div`
    height: 100vh;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.98);
    transition: all .3s ease-in-out;
    position: fixed;
    right: ${props => !props.isOpen ? '0px' : '-300px'};
`

export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    width: 40%;
`

export const IconHamburguer = styled.i`
    position: fixed;
    right: 40px;
    top:20px;
    font-size: 48px;
    transition: all .3s ease-in-out;
    display: ${props => props.isOpen ? 'block' : 'none'};
    opacity: ${props => props.isOpen ? '1' : '0'};  
`

export const IconClose = styled.i`
    color: antiquewhite;
    font-size: 48px;
    position: relative;
    right: 20px;
    opacity: ${props => !props.isOpen ? '1' : '0'};  
`

export const ContainerUserName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    p{
        color: antiquewhite;
    }

`

export const ContainerLinks = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
    

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
        width: 100%;
        text-align: center;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: relative;
        top: 20px;
        
        li{
            font-size: 24px;
            width: 150px;
            border-radius: 3px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            border: 1px solid transparent;
            transition: all .3s ease-in-out;

            :hover{
                border: 1px solid #fff;
            }
            
            a{
                color: antiquewhite;
                letter-spacing: 3px;
            }
        }
    }
`

export const ContainerUserMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`