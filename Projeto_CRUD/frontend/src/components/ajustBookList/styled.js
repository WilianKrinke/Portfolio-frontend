import styled from 'styled-components'

export const AjustBookList = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    height: 100px;

    @media screen and (max-width: 808px) {
        height: 240px;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
    
    @media screen and (max-width: 440px) {        
        height: 240px;
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
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: #CCFFCB;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    label {
        position: relative;
        bottom: 2px
    }

    select {
        outline: none;
        border: none;
        background-color: #CCFFCB; 
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
    background-color: #CCFFCB;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    label {
        position: relative;
        bottom: 2px
    }

    select {
        outline: none;
        border: none;
        background-color: #CCFFCB;
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