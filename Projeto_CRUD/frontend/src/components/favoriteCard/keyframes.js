import { keyframes } from "styled-components";

export const heartBrokenAnimation = keyframes`
    from{
        opacity: 1;
    }


    90%{
        opacity: 0;
    }

    to{
       opacity: 0;
       transform: translateY(-50px)
    }
`