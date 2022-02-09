import { GoArrowUp } from "react-icons/go";
import styled from 'styled-components';

export const ScrollArrow = styled(GoArrowUp)`
    position: fixed;
    right: 14px;
    bottom: 25px;
    font-size: 42px;
    cursor: pointer;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

export const Phrase = styled.p`
    position: fixed;
    right: 23px;
    bottom: 15px;
    font-size: 12px;
    cursor: pointer;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

