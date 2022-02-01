import styled from 'styled-components'

export const AjustBookList = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    height: 100px;

    @media screen and (max-width: 808px) {
        height: 200px;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
    
    @media screen and (max-width: 440px) {        
        height: 180px;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
`

export const DivSelectCategory = styled.div`
    width: 30%;    
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: transparent;
    transition: all .7s ease-in-out;
    padding: 10px;
    border: 1px solid ${props => props.darkMode ? "rgba(84, 84, 84, 0.4)" : "rgba(0, 0, 0, 0.1)"};  

    @media screen and (max-width: 808px) {
        width: 95%;
    }

    @media screen and (max-width: 440px) {
        width: 100%;
    }
`

export const DivSelectQnt = styled.div`
    width: 30%;    
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid ${props => props.darkMode ? "rgba(84, 84, 84, 0.4)" : "rgba(0, 0, 0, 0.1)"};
    transition: all .7s ease-in-out;

    @media screen and (max-width: 808px) {        
        width: 95%;
    }
    
    @media screen and (max-width: 440px) {        
        width: 100%;    
    }
`

export const DivChangePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 33%; 
    position: relative;
    bottom: 2px;

    @media screen and (max-width: 808px) {
        width: 80%;   
    }

    @media screen and (max-width: 440px) {        
        width: 100%;    
    }
`

export const IconBack = styled.i`
    font-size: 45px;
    cursor: pointer;
    position: relative;
    top: 5px;
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};      
    transition: all .7s ease-in-out;
`

export const InfoPagination = styled.div`
`

export const IconForward = styled.i`
    font-size: 45px;
    cursor: pointer;
    position: relative;
    top: 5px;
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};      
    transition: all .7s ease-in-out;

`

export const Span = styled.span`
    font-size: 35px;
    letter-spacing: 5px;
    position: relative;
    left: 3px;
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};      
    transition: all .7s ease-in-out;
`

export const Label = styled.label`
    position: relative;
    bottom: 2px;
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};
    transition: all .7s ease-in-out;

    @media screen and (max-width: 808px) {
        font-size: 20px;
        position: relative;
        bottom: 3px;
    }

    @media screen and (max-width: 440px) {        
        font-size: 20px;
        position: relative;
        bottom: 3px;        
    }
`

export const Select = styled.select`
    outline: none;
    border: none;
    background-color: transparent; 
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};

    @media screen and (max-width: 808px) {
        font-size: 18px;
        font-weight: 200;
    }
`

export const Option = styled.option`
    background-color: ${props => props.darkMode ? "#0e1324" : "#F9FFF9"};
    color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};   
    transition: all .7s ease-in-out;
`