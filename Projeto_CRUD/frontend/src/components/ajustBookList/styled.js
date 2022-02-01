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
    border: 1px solid ${props => props.darkMode ? "#F9FFF9" : "rgba(0, 0, 0, 0.1)"};

    label {
        position: relative;
        bottom: 2px
    }

    select {
        outline: none;
        border: none;
        background-color: transparent; 
    }  

    @media screen and (max-width: 808px) {
        label{
            font-size: 20px;
            position: relative;
            bottom: 3px
        }

        select {
            font-size: 18px;
            font-weight: 200;
        }

        width: 100%;
    }

    @media screen and (max-width: 440px) {
        label{
            font-size: 20px;
            position: relative;
            bottom: 3px
        }

        select {
            font-size: 18px;
            font-weight: 200;
        }

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
    border: 1px solid ${props => props.darkMode ? "#F9FFF9" : "rgba(0, 0, 0, 0.1)"};
    transition: all .7s ease-in-out;

    label {
        position: relative;
        bottom: 2px
    }

    select {
        outline: none;
        border: none;
        background-color: transparent;
    } 

    @media screen and (max-width: 808px) {
        label{
            font-size: 20px;
            position: relative;
            bottom: 3px
        }

        select {
            font-size: 18px;
            font-weight: 200;
        }
        
        width: 100%;
    }
    
    @media screen and (max-width: 440px) {

        label{
            font-size: 20px;
            position: relative;
            bottom: 3px
        }

        select {
            font-size: 18px;
            font-weight: 200;
        }
        
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

    select{
        background: #F9FFF9;
    }

    @media screen and (max-width: 808px) {
        width: 100%;   
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
    span{
        font-size: 35px;
        letter-spacing: 5px;
        position: relative;
        left: 3px
    }
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