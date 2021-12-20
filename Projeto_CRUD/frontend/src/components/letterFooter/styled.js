import styled from 'styled-components'

export const ContainerName = styled.div`
    height: 40px;
    text-align: center;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    border-radius: 3px;
    

    div{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h4{
            color: #757575;
            font-weight: 200;
            transition: all .3s ease-in-out;
        }
    }
`