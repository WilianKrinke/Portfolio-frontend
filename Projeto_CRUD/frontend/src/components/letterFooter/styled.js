import styled from 'styled-components'
import pattern_colors from '../../colors'

export const ContainerFooter = styled.div`
    max-width: 100vw;
    min-height: 10vh;
    background-color: ${pattern_colors.prime_compoments_bg};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px;    

    div{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .h4{       
        color: rgba(0, 0, 0, 0.7);
        font-weight: 200;
        
        @media screen and (max-width: 570px) {
            font-size: 18px;
        }
    }
`