import styled from 'styled-components'

export const ContainerMenu = styled.div`
    height: 100vh;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.98);
    transition: all .3s ease-in-out;
    position: fixed;
    right: ${props => props.isOpen ? '0px' : '-400px'};
    z-index: 100
`

export const ContainerUserAndIcon = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;  
`

export const IconHamburguer = styled.i`
    position: fixed;
    right: 40px;
    top:20px;
    font-size: 48px;
    position: fixed;
    right: ${props => props.isOpen ? '-50px' : '35px'};
`

export const IconClose = styled.i`
    color: antiquewhite;
    font-size: 52px;
    position: relative;
    bottom: 10px;
    right: 38px;
    opacity: ${props => props.isOpen ? '1' : '0'}; 
   
`

export const ContainerUserName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    left: 20px;
    

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
        
        li{
            width: 100%;
            font-size: 24px;
            border-radius: 3px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all .1s ease-in-out;

            :hover{
                transform: scale(1.3);
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