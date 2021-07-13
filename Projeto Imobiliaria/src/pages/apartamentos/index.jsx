import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import {ApMain,AllSections, FlechaDireita, FlechaEsquerda} from '../styled'
import Colunas from '../../assets/Colunas-Corintia-Alpha.png'
import firebase from '../../firebase'

export default class Apartamentos extends Component{
    //Nesta página é exibida apenas as fotos com links de cada coleção no banco de dados e suas respectivas fotos;
    constructor(props){
        super(props);
        this.state = {
            datas: [],
        }
        this.buscar = this.buscar.bind(this);
        this.moveright = this.moveright.bind(this);
        this.moverleft = this.moverleft.bind(this);
        this.toOtherPage = this.toOtherPage.bind(this);
    }

    async buscar(){        
        await firebase.firestore().collection('apartamentos').get().then((snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nome_do_condominio: doc.data().nome_do_condominio,
                    andar: doc.data().andar,
                    apto: doc.data().apto,
                    ref: doc.id,
                    imagemPrincipal: doc.data().imagemPrincipal
                    })
                })
                this.setState({
                    datas: lista
            })
        }).catch(err => {
            alert(err)
        })
    }
    
    toOtherPage(e ,url){
        this.props.history.push(url)
    }

    componentDidMount(){        
        this.buscar()
    }

    moveright(){        
        const carrousel = document.querySelector('.container_showup');
        const carrouselgiga = document.querySelector('.giga_Word');

        let move = setInterval((cont = 0) => {
            cont++
            carrousel.scrollBy({
                top: 0,
                left: cont,
                behavior: 'smooth'
            })
        }, 4);

        let movegiga = setInterval((cont = 0) => {
            cont++
            carrouselgiga.scrollBy({
                top: 0,
                left: cont,
                behavior: 'smooth'
            })
        }, 6);

        document.querySelector('.arrow_right').addEventListener('mouseleave', () => {
            clearInterval(move)
        });
        document.querySelector('.arrow_right').addEventListener('mouseleave', () => {
            clearInterval(movegiga)
        });
    }

    moverleft(){
        const carrousel = document.querySelector('.container_showup');
        const carrouselgiga = document.querySelector('.giga_Word');

        let move = setInterval((cont = 0) => {
            cont--
            carrousel.scrollBy({
                top: 0,
                left: cont,
                behavior: 'smooth'
            })
        }, 4);

        let movegiga = setInterval((cont = 0) => {
            cont--
            carrouselgiga.scrollBy({
                top: 0,
                left: cont,
                behavior: 'smooth'
            })
        }, 6);
          
        document.querySelector('.arrow_left').addEventListener('mouseleave', () => {
            clearInterval(move)
        });
        document.querySelector('.arrow_right').addEventListener('mouseleave', () => {
            clearInterval(movegiga)
        });
    }   

    render(){
        return(
            <Fragment>
                <ApMain>
                    <img className='colunaDireita' src={Colunas} alt='Colunas'></img>
                        <AllSections>
                            <FlechaDireita onMouseEnter={e => this.moveright()} className='arrow_right'>
                                <div className="setup"></div>
                                <div className="setdown"></div>
                            </FlechaDireita>
                                    <h1>Apartamentos</h1>
                                    <div className='giga_Word'>
                                        <span>WKV</span>
                                    </div>
                                    <div className="container_showup">
                                        {this.state.datas.map(data => {
                                            return(
                                                <div key={data.id} className="imob_cards" onClick={e => this.toOtherPage(e, `apartamentos/${encodeURIComponent(data.ref)}`)}>
                                                    <h3>Edifício {data.nome_do_condominio}</h3>
                                                    <div className="imov_pic">
                                                        <img src={data.imagemPrincipal} alt="imagem do imóvel"/>
                                                    </div>
                                                    <div className="imov_resume">
                                                        <h3>Apto {data.apto}</h3>
                                                        <h4>{data.andar === 0 ? 'Piso' : `${data.andar}º andar`}</h4>
                                                        <h4>Ref: {data.ref}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })}                           
                                        </div>
                                    <div className="container_links_menu">
                                        <ul>
                                            <li><Link to='/sobrados'>Sobrados</Link></li>
                                            <li><Link to='/casas'>Casas</Link></li>
                                            <li><Link to='/terrenos'>Terrenos</Link></li>
                                            <li><Link to='/chacaras'>Chácaras/Fazendas</Link></li>
                                        </ul>
                                    </div>
                                    <div className="container_links">
                                        <Link to="/contato">Contato</Link>
                                        <Link to="/">Home</Link>
                                    </div>                                      
                            <FlechaEsquerda onMouseEnter={e => this.moverleft()} className='arrow_left'>
                                <div className="setup"></div>
                                <div className="setdown"></div>
                            </FlechaEsquerda>
                        </AllSections>
                    <img className='colunaEsquerda' src={Colunas} alt='Colunas Corintias'></img>
                        
                </ApMain>                
            </Fragment>
        )
    }
}

