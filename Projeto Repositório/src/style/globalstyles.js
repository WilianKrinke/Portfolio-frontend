import {createGlobalStyle} from 'styled-components'
import {colors} from './colors'

export const GlobalStyleds = createGlobalStyle`

body{
    margin: 0;
    padding: 0;
    background: ${colors.primaria};
}

html, body, #root{
    min-height: 100%;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: geometricPrecision;
}

button{
    cursor: pointer;
}


`

