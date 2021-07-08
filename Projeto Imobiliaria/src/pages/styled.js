import styled from 'styled-components'
import { patterns } from '../patterns.styleds'

export const HomeStyled = styled.main`
    min-height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .containerimob{
        text-align: center;
        z-index: 20;
        background-color: white;
        cursor:pointer;

        h3{
            font-size: 80px;
            font-family: ${patterns.font_titulos};
            font-weight: 200;
            letter-spacing:50px;
            text-transform: uppercase;
            padding: 0;
            margin: 0 auto;
            position: relative;
            top: -10px;
            left:27px;
            cursor:pointer;
        }
    }

    .containervideo{
        height: 340px;
        width: 76.5vw;
        border-radius: 2px;
        box-shadow: 0px 0px 5px 2px #000000;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;        
        position: absolute;
        left: 161px;
        top: 225px;
        overflow: hidden;
        z-index: 10;        
    }
`

export const DivMenu = styled.div`        
        height: ${props => (props.open ? '340px' : '0px')};
        width: 76.5vw; /* 1044.99px  */ 
        background-color: rgba(0, 0, 0, 0.95);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        transition: all .15s ease-in;
        overflow: ${props => (props.open ? 'visible' : 'hidden')};
        position:absolute;
        left: 161px;
        top: 225px;
        z-index: 20;

        ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
            z-index: 20;
        }

        li{            
            margin-bottom: 30px;
            position: relative;
            top:15px;
            z-index: 20;

            a{
                text-decoration: none;
                color: white;
                font-size: 20px;
                text-transform: uppercase;
                letter-spacing: 15px;
                transition: opacity .5s ease-in-out;
                transition-delay: 0.15s;                 
                opacity: ${props => (props.open ? '1' : '0')};
                z-index: 20;
            }
        }
`

export const FormSecStyled = styled.section`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;

    a{
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: ${patterns.font_size_links};
        z-index: 20px;
        position: absolute;
        bottom: 20px;
        right: 180px;  
    }

    img{
        height: 99.8vh;
    }

    .colunaDireita{
        position: absolute;
        right: 0px;
        z-index: 120;
    }

    .colunaEsquerda{
        position: absolute;
        left: 0px;
        z-index: 10;
    }

    .divForm{
        width: 80.5vw;
        height:70vh;
        display: flex;
        flex-direction: row;

        .divInfo{    
            width: 50vw;
            text-align: justify;
            padding: 30px;            
        }

        form{    
            display: flex;
            flex-direction: column;
            padding: 30px;
            width: 50vw;

            .file{
                position: relative;
                top: 20px;
            }

            textarea{
                width: 100%;
                height: 180px;
                position: relative;
                resize: none;
                top: 20px;
            }
        }        
    }

    .divContato{
        width: 80.5vw;
        height:29.9vh;
        padding: 50px;
        text-align: center;

        p{
          text-transform: uppercase;
          font-style: normal;
          color: #5e5b5b;
          letter-spacing: 5px;
          font-weight: 500;
          font-size: 20px;  
        }        
    }
`
export const Button = styled.button`
    height:50px;
    width: 150px;
    position: relative;
    left: 175px;
    top: 30px;
    text-transform: uppercase;
    letter-spacing:5px;
    border-radius: 5px;
    border: 1px solid #e7d8d8;
    background-color: ${props => (props.doit ? '#fff' : '#9eff8b')};
    transition: background-color .7s ease;
`

export const ApMain = styled.main`
    img{
        height: 100vh;
    }

    .colunaDireita{
        position: absolute;
        right: 0px;
        z-index: 110;
    }

    .colunaEsquerda{
        position: absolute;
        left: 0px;
        z-index: 110;
    }
`

export const ApSubMain = styled.main`
    img{
        height: 100vh;
    }

    .colunaDireita{
        position: fixed;
        right: 0px;
        z-index: 110;
    }

    .colunaEsquerda{
        position: fixed;
        left: 0px;
        z-index: 110;
    }
`

export const AllSections = styled.section`    
    min-height: 100vh;
    min-width: 1080px;
    z-index: 9;
    position: absolute;
    left: 10.5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction:row;
    overflow: hidden;

    .container_links{
        width: 200px;
        position: absolute;
        bottom: 20px;
        right: 42px;    
        z-index: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    a{
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: ${patterns.font_size_links};
    }

    h1{
        position: absolute;
        left: 130px;
        top: 15px;
        font-size: 3em;
        letter-spacing: 0.8em;
        text-transform: uppercase;
        font-family: ${patterns.font_titulos};
        font-weight: 200;
    }

    .giga_Word{    
        background-color: #fff;
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction:row;
        height: 450px;
        min-width: 72vw;        
        overflow-x: hidden;
        overflow-y: hidden;
        position: absolute;
        top: 95px;
        z-index: 90;

        span{
            color:  rgba(0,0,0,0.08);
            font-size: 42em;
            position: absolute;
            top:-179.5px;
            z-index: 90;
        }
    }

    .container_showup{
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction:row;
        height: 450px;
        max-width: 72vw;        
        overflow-x: hidden;
        overflow-y: hidden;
        position: absolute;
        top: 95px;
        z-index: 100;       

        .imob_cards{
            height: 447px;
            min-width: 350px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction:column;
            margin-left: 10px;
            margin-right: 10px;
            box-shadow: 0px 0px 5px 2px #000000;
            border: 1px outset rgba(0,0,0,0.51);
            border-radius: 2px;            
            z-index: 110;
            cursor: pointer;

            h3{
                position: relative;
                top: 5px;
            }

            .imov_pic{
                border: 1px solid rgba(0,0,0,0.4);
                height: 300px;
                width: 100%;
                background-color: #ccc;
                border-radius: 2px;

                img{
                    width: 100%;
                    height: 300px;
                    border-radius: 2px;
                }
            }

            .imov_resume{
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items:center;
                position: relative;
                top: -5px;

                h3{
                    position: relative;
                    bottom: 0px;
                }

                a{
                    position: relative;
                    right: 0px;
                    top: 0px;
                    letter-spacing: 0px;
                }
            }
        }
    }
`

export const AllSubSections = styled.section`
    border: 1px solid;    
    min-height: 100vh;
    width: 1080px;
    z-index: 9;
    position: absolute;
    left: 10.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    h1{
        position: relative;
        left: 15px;
        font-size: 2.6em;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        font-family: ${patterns.font_titulos};
        font-weight: 200;
        margin-top: 25px;
    }

    h6{
        font-family: ${patterns.font_titulos};
        font-weight: 200;
        font-size: 1.6em;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        margin: 20px 0px;
    }

    .carrousel_imagens{
        border: 1px solid;
        width: 87%;
        height: 350px;
    }

    .container_res_info{
        display: flex;
        justify-content: justify;
        text-align: justify;
        align-items: center;
        flex-direction: column;
        width: 70%;       

        p{
            letter-spacing: 1px;
        }

        &:first-child{
            margin-top: 15px;
        }
    }
`

export const DivDescription = styled.div`
    border: 1px solid;
    width: 70%;
    height: ${props => (props.showIt ? '935px' : '0px')};
    overflow-y: ${props => (props.showIt ? 'visible' : 'hidden')};
    display: flex;
    justify-content: justify;
    text-align: justify;
    align-items: center;
    flex-direction: column;
`

export const ButtonShowDescr = styled.button`
    height: 50px;
    width: 150px;
`


export const FlechaDireita = styled.span`   
    position: absolute;
    right: -10px;
    bottom: 145px;
    height: 320px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 20;

    .setup{
        border: 1px solid black;
        position: relative;
        bottom: -3px;
        height: 160px;
        width: 5.5px;
        border-radius: 0px 100% 5px 0px;
        background-color: black;
        transform: rotate(-8deg);
    }

    .setdown{
        border: 1px solid black;
        position: relative;
        top: -3px;
        height: 160px;
        width: 5.5px;
        border-radius: 0px 5px 100% 0px;
        background-color: black;
        transform: rotate(8deg);
    }    
`

export const FlechaEsquerda = styled.span`
    position: absolute;
    left: -10px;
    bottom: 145px;
    height: 320px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;

    .setup{
        border: 1px solid black;
        position: relative;
        bottom: -3px;
        height: 160px;
        width: 5.5px;
        border-radius: 100% 0px 0px 5px;
        background-color: black;
        transform: rotate(8deg);
    }

    .setdown{
        border: 1px solid black;
        position: relative;
        top: -3px;
        height: 160px;
        width: 5.5px;
        border-radius: 5px 0px 0px 100%;
        background-color: black;
        transform: rotate(-8deg);
    }
`



