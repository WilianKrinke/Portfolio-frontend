import styled from 'styled-components'
import { GoArrowUp } from "react-icons/go";

export const ScrollArrow = styled(GoArrowUp)`
    position: fixed;
    right: 25px;
    bottom: 42px;
    font-size: 42px;
    cursor: pointer;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

export const Phrase = styled.p`
    position: fixed;
    right: 35px;
    bottom: 35px;
    font-size: 12px;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

