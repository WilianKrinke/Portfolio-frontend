import styled from 'styled-components'

export const CardStyled = styled.div`
    height: 400px;
    width: 350px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #CCFFCB;
    transition: all .5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    :hover{
        background-color: #C2F7BE;
    }
`
export const ContainerMoldCard = styled.div`
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '85%' : '95%'};;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
`

export const ContainerToLike = styled.div`
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '15%' : '5%'};
    height: 100%;
    border-radius: 0px 5px 5px 0px;
    background-color: #CCFFCB;
    display: flex;
    justify-content: ${props => props.isOpen ? 'space-evenly' : 'center'};
    align-items: center;
    flex-direction: column;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    
`
export const IconToRight = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80px;
    display: ${props => props.isOpen ? 'none' : 'static'};
    cursor: ${props => !props.isOpen && 'pointer'};
`

export const IconLike = styled.i`
display: flex;
justify-content: center;
align-items: center;
    cursor: pointer;
    font-size: 24px;
    height: 80px;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`

export const IconLendItem = styled.i`
display: flex;
justify-content: center;
align-items: center;
    font-size: 24px;
    cursor: pointer;
    height: 80px;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`
