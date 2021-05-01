import React, { Component, Fragment } from 'react';
import firebase from 'firebase'

// botão para subir ao topo rapidamente
import {MainListaSty, ScrollTopStyled} from '../styleds/styleds'
import Header from '../header'
import Footer from '../footer'

class index extends Component {

    constructor(props){
        super(props);
        this.state = {
            // artigos links é um array e is visible é uma condição de exibição do botao scrolltop
            artigoslinks: [],
            is_visible: false
        }

        // referenciando o Nó 'posts' de dentro da base de dados, armezenando o state em variavel. Fazendo um foreach em snapshot que é a informação que há em 'posts' dentro da base de dados, INSERINDO através do metodo PUSH dentro da state ARTIGOSLINKS, cada nó contido em 'posts', cada nó sendo armazenado em sua state correnspondente dentro de ARTIGOS LINKS, depois disso ARTIGOS LINKS está com varios objetos.
        //METODO ON do firebase, fica monitorando em tempo real os objetos dentro da base de dados;
        //Depois do processo, é invertido o estado dos objetos e atualizados nas states, com o metodo setState;
        firebase.database().ref('posts').on('value', (snapshot) => {
            let state = this.state;
            state.artigoslinks = [];
            snapshot.forEach(childItem => {
                state.artigoslinks.push({
                    key: childItem.key,
                    imagem: childItem.val().imagem,
                    titulo: childItem.val().titulo,
                    ingredientes: childItem.val().ingredientes,
                    preparo: childItem.val().preparo                
                })
            });
            state.artigoslinks.reverse()
            this.setState(state)
        })

        //BIND NS METODOS DE EXIBIÇÃO DO BOTÃO SCROLLTOP
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
    } 

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        //VERIFICAÇÃO SE A TELA DA PAGINA FOI MOVIDA ABAIXO DE 950PX, para atualização do state is visible;
        if (window.pageYOffset > 950) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
    }

    scrollToTop() {
        //ação do botão após ser clicado;
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    render() {
        const { is_visible } = this.state;
        //pegando a state is visible e armazenando em constante com o mesmo nome.
        return(
            <Fragment>
                <Header />
                <MainListaSty>
                    {/* Com as states atualizadas, fazer METODO DE ARRAY MAP, para exibição dos itens da lista do banco de dados NOSQL, renderizar de acordo com o callback feito no MAP .nome da state em ARTIGOSLINKS, Não esquecer da key*/}
                    {this.state.artigoslinks.map((links) => {
                        return( 
                            <div key={links.key} className="divcontrol">
                                <div className="divtit">
                                    <p>{links.titulo}</p>
                                </div>
                                    <section>
                                        <div className="divingre">
                                            <div className="divpingre">
                                                <p>Ingredientes:</p>
                                            </div>
                                            <div className="divpingrelink">
                                                <p>{links.ingredientes}</p>
                                            </div>
                                        </div>
                                            <div className="divimg">
                                                <img alt="imagem post" src={links.imagem}></img>
                                            </div>
                                    </section>
                                    <div className="containerprep">
                                        <div className="divpprep">
                                            <p>Modo de Preparo:</p>
                                        </div>
                                        <div className="divplinkprep">
                                            <p>{links.preparo}</p>
                                        </div>
                                    </div>
                                <hr />
                            </div>                             
                        )
                    })}
                </MainListaSty>
                
                {/* RENDERIZAÇÃO CONDICIONAL DE IF DE UMA LINHA, PARA EXIBIÇÃO OU NÃO DO BOTÃO SCROLLTOP */}
                {is_visible && (
                    <ScrollTopStyled onClick={() => this.scrollToTop()}>
                        <i class="fas fa-angle-double-up"></i>
                    </ScrollTopStyled>
                )}
                <Footer/>
            </Fragment>            
        ) 
    }
}

export default index;
