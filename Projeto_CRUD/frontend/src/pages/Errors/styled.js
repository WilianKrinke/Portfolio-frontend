import styled from 'styled-components'
import { Pulse } from '../../components/Buttons/keyframes'

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 650px) {
        flex-direction: column;
        height: 150px;
    }

    p{
        width: 150px;
        height: 40px;
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 16px;

        :hover{
                background: #030103;
                border: 1px solid rgba(0, 0, 0, 0.1);
                color: #fff;
                animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
        }
    }
`