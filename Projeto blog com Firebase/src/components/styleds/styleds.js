import styled from 'styled-components';
//FICOU UMA BAGUNÇA, TENTAREI SEPARAR AS CORES EM OUTRO ARQUIVO DEPOIS IMPORTA-LAS, FAREI O MESMO COM AS LARGURAS E ALTURAS E TAMANHO DE FONTES, E USAR O CSS DOS MESMOS COMPONENTES EM DIVERSOS OUTROS COMPONENTES PARA POUPAR LINHAS; E usar menos CLASSNAMES;

export const Headerstyled = styled.header`
    background-color: #AA7878;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18vh;

    .login{
        font-size: 0.8em;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: none;    
        color: #000000;
        position: absolute;
        right: 30px;
    }

    .blogdeculinaria{
        font-size: 0.8em;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
    }


    @media screen and (max-width: 47em) {
    /* Moto G4 */
        flex-direction: column;
        .login{
            position: relative;
            right: 0px;
            top: 22px;
        }        
    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */

        flex-direction: column;
        .login{
            position: relative;
            right: 0px;
            top: 11px;
        }        
    }
`

export const HomeStyled = styled.main`
background-color: rgba(170, 120, 120, 0.38);
height: 78vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

a{
    font-size: 0.8em;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000000;
    position: relative;
    top: -8px;
    font-weight: 100;
}

.imgcontainer{
    width: 100%;
    height: 85%;
    overflow: hidden;
}

i{
    font-size: 0.8em;
    position: relative;
    top: -8px;
    left: -5px;
}

.containeradm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #AA7878;
        width: 100%;
        height: 85%;
}

@media screen and (max-width: 47em) {
    /* Moto G4 */
    height: calc(100vh - 10vh - 18vh);

    .containeradm{
        i{
            font-size: 0.5em;
        }
        a{
            font-size: 0.4em;
            letter-spacing: 3px;
        }
    }

}

@media screen and (max-width: 320px) {
    /* IPHONE4 */
    height: calc(100vh - 10vh - 18vh);

    .containeradm{
        i{
            font-size: 0.5em;
        }
        a{
            font-size: 0.4em;
            letter-spacing: 3px;
        }
    }

}

`

export const FooterStyled = styled.footer`

background-color: #AA7878;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: 0.4em;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 5px;
}

    .paineladm{
        text-transform: uppercase;
        text-decoration: line;
        color: #000000;
        position:absolute;
        right: 30px;
        font-size: 0.4em;    
        font-weight: 200;
        letter-spacing: 5px;
    }

    @media screen and (max-width: 47em) {
        /* Moto G4 */
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .paineladm{
            position: relative;
            right: 0px;
        }
    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .paineladm{
            position: relative;
            right: 0px;
        }

        p{
            letter-spacing: 3px;
        }  
    }
`

export const SectionStyled = styled.section`
    background-color: rgba(170, 120, 120, 0.38);
    height: 78vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p:first-child{
        font-size: 0.8em;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
        position: relative;
        top: -8px;
        font-weight: 100;
    }

    .containerartigos{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 85%;
        width: 100%;
        
    }

    .ingredientes{
        background-color: #AA7878;        
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .divimgart{
        height: 100%;
        width: 60%;
        background-color: #fff;
        overflow: hidden;
    }


`

export const LoadStyled = styled.div`
    border: 15px solid #e5e5e5;
    border-top-color: #000;
    height: 200px;
    width: 200px;
    animation: is-rotating 1s infinite;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    right: 42.5%;
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    };

    @media screen and (max-width: 47em) {
        /* Moto G4 */
        height: 100px;
        width: 100px;
        position: absolute;
        top: 40%;
        right: 36%;
    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */
        height: 100px;
        width: 100px;
        position: absolute;
        top: 40%;
        right: 32%;
    }

`

export const MainListaSty = styled.main`
    background-color: rgba(170, 120, 120, 0.38);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;


    

    

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 2% 2%;
        background-color: #AA7878;
    }

    .divimg{
        height: 391px;
        width: 60vw;
        overflow: hidden;
        border-radius: 5px;
    }

    .divingre{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 0px 20px;        
        width: calc(100vw - 60vw - 20px);
        height: 300px;        

        .divpingre{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 11%;
        }

        .divpingrelink{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 89%;
        }

    }

    .divtit{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

         p{
            margin: 10px 0px;
        }

               
    }

    .containerprep{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px 20px;
        margin-bottom: 50px;
        background-color: #AA7878;

        .divpprep{
            text-align: center;
            margin: 10px 0px;
        }

        .divplinkprep{
            text-align: justify;
        }
    }   

    a{
        color: black;
        font-style: italic;
    }

    hr{
        height: 1px;
        margin: 0px auto;
        width: 96%
    }

    @media screen and (max-width: 47em) {
    /* Moto G4 */

    p{
            font-size: 0.8em;
            margin: 0px;
        }

        section{            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .divimg{
            height: 391px;
            width: 100vw;
            overflow: hidden;
        }

        .divingre{
            padding: 0px;
            width: 100vw;
            height: 10%;
            .divpingrelink{
                margin: 10px 0px;
            }
        }

        .containerprep{
            padding: 0px;
        }

    }

    @media screen and (max-width: 320px) {
    /* IPHONE4 */

        p{
            font-size: 0.8em;
            margin: 0px;
        }

        section{            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .divimg{
            height: 391px;
            width: 100vw;
            overflow: hidden;
        }

        .divingre{
            padding: 0px;
            width: 100vw;
            height: 10%;
            .divpingrelink{
                margin: 10px 0px;
            }
        }

        .containerprep{
            padding: 0px;
        }
    }
`

export const Formstyled = styled.main`
    background-color: rgba(170, 120, 120, 0.38);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 78vh;

    .avisos{
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 700px;    
            p{
                font-size: 12px;
                letter-spacing: 5px;
                color: rgba(0, 0, 0, 0.5);
                margin-top: 2px;
            }
        }
    }

    a{
        font-size: 0.8em;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
        position: relative;
        top: -8px;
        font-weight: 100;
    }

    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #AA7878;
        width: 100%;
        height: 85%;

        .entrarcad{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .btn{
                font-size: 16px;
                margin-top: 20px;
                width: 269px;
                height: 30px;
                font-weight: bold;
                
            }

            a{
                font-size: 16px;
                text-decoration: none;
                color: black;
            }
        }

        input{
            outline: none;
            border: none;
            position: relative;top: -2px;
            
            :nth-child(5){
                width: 188px;
            }
        }

        
    }

    @media screen and (max-width: 47em) {
    /* Moto G4 */
        height: calc(100vh - 10vh - 18vh);

    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */

        height: calc(100vh - 10vh - 18vh);

    }
`

export const NewPostStyled = styled.main`
    background-color: rgba(170, 120, 120, 0.38);    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a{
        font-size: 0.8em;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;
        font-weight: 100;
    }   

    .btnback{
        a{
            font-size: 0.8em;
            letter-spacing: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000000;
            position: relative;
            top: -200px;
            font-weight: 100;
        }
    }

    .divform{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #AA7878;
        width: 100%;
    }

    .formcontainer{    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 85%;
        

        form{
            width: 100%;
        }

        input{
            width: 100%;
            background-color: whitesmoke;
            outline: transparent;
            border: none;
            height: 20px;
        }

        .inputfile{
            width: 30%;
        }

        textarea{
            height: 150px;
            width: 100%;
            resize: none; 
            background-color: whitesmoke;           
        }
        
        .btn{
            width: 100%;
            height: 40px;
            position: relative;
            top: -10px;
            color: white;
            font-size: 0.8em;
            letter-spacing: 5px;
            background-color: #472D2D;
            text-transform:uppercase;
            cursor: pointer;
        }

        .containerimagem{
            height: 123px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;

            

            img{
                width: 150px;
                height: 100%;
            }

            .regrasimg{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
                width: 30%;
            }
        }  

        .containerprep{

        }  
    }

    span{
        color: #ff0045;
        transition: all .3s ease-in-out;
    }

    @media screen and (max-width: 47em) {
        /* Moto G4 */

        background-color: rgba(170, 120, 120, 0.38);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        label{
            font-size: 0.8em;
        }

        h6{
            font-size: 0.6em;
        }

        a{
            font-size: 0.8em;
            letter-spacing: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000000;
            position: relative;
            top: 2px;
            font-weight: 100;
        }

    .btnback{
        a{
            font-size: 0.8em;
            letter-spacing: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000000;
            position: relative;
            top: -200px;
            font-weight: 100;
        }
    }

    .divform{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #AA7878;
        width: 100%;
        height: 100%;
    }

    .formcontainer{    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

        form{
            width: 100%;
            height: 100%;
        }

        input{
            width: 100%;
            background-color: whitesmoke;
            height: 20px;
        }

        .inputfile{
            width: 100%;
        }

        textarea{
            height: 150px;
            width: 100%;
            resize: none; 
            background-color: whitesmoke;           
        }
        
        .btn{
            width: 100%;
            height: 40px;
            position: relative;
            top: -10px;
            color: white;
            font-size: 0.6em;
            letter-spacing: 5px;
            background-color: #472D2D;
            text-transform:uppercase;
            cursor: pointer;
        }

        .containerimagem{
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            margin: 10px 0px;

            .labelimg{
                position: absolute;
                left: 0px;
            }

            img{
                width: 150px;
                height: 100%;
            }

            .regrasimg{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        }    
    }

    span{
        color: #ff0045;
    }

        
        
    }

    @media screen and (max-width: 320px) {
        
        /* IPHONE4 */

        background-color: rgba(170, 120, 120, 0.38);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        label{
            font-size: 0.8em;
        }

        h6{
            font-size: 0.6em;
        }

        a{
            font-size: 0.8em;
            letter-spacing: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000000;
            position: relative;
            top: 2px;
            font-weight: 100;
        }

    .btnback{
        a{
            font-size: 0.8em;
            letter-spacing: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000000;
            position: relative;
            top: -200px;
            font-weight: 100;
        }
    }

    .divform{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #AA7878;
        width: 100%;
        height: 100%;
    }

    .formcontainer{    
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

        form{
            width: 100%;
            height: 100%;
        }

        input{
            width: 100%;
            background-color: whitesmoke;
            height: 20px;
        }

        .inputfile{
            width: 100%;
        }

        textarea{
            height: 150px;
            width: 100%;
            resize: none; 
            background-color: whitesmoke;           
        }
        
        .btn{
            width: 100%;
            height: 40px;
            position: relative;
            top: -10px;
            color: white;
            font-size: 0.6em;
            letter-spacing: 5px;
            background-color: #472D2D;
            text-transform:uppercase;
            cursor: pointer;
        }

        .containerimagem{
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            margin: 10px 0px;

            .labelimg{
                position: absolute;
                left: 0px;
            }

            img{
                width: 150px;
                height: 100%;
            }

            .regrasimg{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        }    
    }

        span{
            color: #ff0045;
        }       
    }
`

export const ScrollTopStyled = styled.div`
    background-color: #AA7878;
    position: fixed;
    right: 10px;
    bottom: 40px;
    height: 50px;
    width: 50px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media screen and (max-width: 47em) {
        /* Moto G4 */
        position: fixed;
        right: 3px;
        bottom: 65px;
        height: 40px;
        width: 40px;
        background-color: #AA7878;

    }

    @media screen and (max-width: 320px) {
        /* IPHONE4 */
        position: fixed;
        right: 3px;
        bottom: 52px;
        height: 40px;
        width: 40px;
        background-color: #AA7878;

        

    }


`