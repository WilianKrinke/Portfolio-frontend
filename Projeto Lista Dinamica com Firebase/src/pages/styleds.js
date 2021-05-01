import styled from 'styled-components'

export const MainStyled = styled.main`
    border: 1px solid;
    min-height: 80vh;
    display: flex;
    justify-content:center;
    align-items: center;

    a{
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width: 47em) {
    /* Moto G4 */
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
    }

    
`

export const MainStyledForm = styled.main`
    border: 1px solid;
    min-height: 80vh;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    button{
        width: 177px;
    }
`
export const ContainerAllStyled = styled.main`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

`

export const LinkLayoutStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;

    a{
        color: black;
        text-decoration: none;
    }
`

export const ListaStyled = styled.div`
    min-height: calc(80vh - 20px);
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    

    .containerviewlist{
        width: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;       
    }

    .containerdolist{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`

export const Lista = styled.ol`
    padding: 0px;
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;  

    li{
        text-decoration: none;
        margin: 15px 0px;
    }

    .containerenderlist{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 50%;
        
        .containertrash{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer; 
              
        }

        .containerupdate{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            border-radius: 5px;

        }
    }

    .containercheckbox{
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        li{
            list-style: none;
        }        
    }
`

