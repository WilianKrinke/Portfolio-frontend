import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom'
import Colunas from '../../../assets/Colunas-Corintia-Alpha.png'
import {ApSubMain, AllSubSections,ButtonShowDescr, DivDescription, ButtonHideDescr, DivFullImg, SetaUm, SetaDois} from '../../styled'
import firebase from '../../../firebase'

class Subaptos extends Component {
    constructor(props){
        super(props);
        this.state = {
            ref: decodeURIComponent(this.props.match.params.id),
            datas: [],
            objPhotos: null,
            arrPhotos: [],
            showIt: false,
            showBtn: true,
            imgOnBoard: false,
            fullFoto: null
        };
        this.buscar = this.buscar.bind(this);
        this.buscarFotos = this.buscarFotos.bind(this);
        this.showDescr = this.showDescr.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
        this.toTheLeft = this.toTheLeft.bind(this);
        this.toTheRight = this.toTheRight.bind(this);
        this.fullImage = this.fullImage.bind(this);
        this.imgOff = this.imgOff.bind(this);
    }
    
    async buscarFotos(){
        await firebase.firestore().collection('apartamentos').doc(`${this.state.ref}`).collection('Fotos').doc('fotos').get().then(snapshot => {
            this.setState({objPhotos: snapshot.data()})
            console.log(this.state.objPhotos)
        }).catch(err => console.log(err))

        let valores = Object.values(this.state.objPhotos);
        valores.forEach(valor => {
            this.state.arrPhotos.push(valor)
        })      
        console.log(this.state.arrPhotos)
    }

    async buscar(){
        await firebase.firestore().collection('apartamentos').doc(`${this.state.ref}`).get()
        .then(snapshot => {
            this.setState({datas: snapshot.data()})
        }).catch(err => console.log(err))
    }

    showDescr(e){
        e.preventDefault();
        this.setState({showIt: true, showBtn: false})
    }

    hideInfo(e){
        e.preventDefault();
        this.setState({showIt: false, showBtn: true})
    }


    toTheLeft(e){
        e.preventDefault();        
        const divCarr = document.querySelector('.carrousel_imagens');
        divCarr.scrollLeft -= 350; 
    }

    toTheRight(e){
        e.preventDefault();     
        const divCarr = document.querySelector('.carrousel_imagens');
        divCarr.scrollLeft += 350;
    }

    fullImage(e, foto){
        e.preventDefault();
        this.setState({imgOnBoard: true, fullFoto: foto})
    }

    imgOff(e){
        e.preventDefault();
        this.setState({imgOnBoard: false})
    }
    

    componentDidMount(){
        this.buscarFotos();
        this.buscar();
    }

    render() {
        let data = this.state.datas;
        return (
            <Fragment>
                <ApSubMain>
                    <img className='colunaDireita' src={Colunas} alt='Colunas Corintias'></img>
                        <AllSubSections>
                            {
                                this.state.imgOnBoard &&
                                <DivFullImg imgOnBoard={this.state.imgOnBoard}>
                                    <div className="container_contentimg">
                                        <img alt="Foto" src={this.state.fullFoto}></img>
                                    </div>
                                    <div className="container_close" imgOnBoard={this.state.imgOnBoard} onClick={e => this.imgOff(e)}>
                                        <SetaUm imgOnBoard={this.state.imgOnBoard}></SetaUm>
                                        <SetaDois imgOnBoard={this.state.imgOnBoard}></SetaDois>
                                    </div>
                                </DivFullImg>
                            }
                            <h1>Edifício {data.nome_do_condominio}</h1>
                            <h6>Apartamento {data.apto}</h6>
                                <i className="fas fa-angle-left" onClick={e => this.toTheLeft(e)}></i>                                
                                <div className="carrousel_imagens">
                                    {
                                        this.state.arrPhotos.map(foto => {
                                            return(
                                                <div className="fotoCard" key={foto} onClick={e => this.fullImage(e, foto)}>
                                                    <img alt="fotos imoveis" src={foto} loading="lazy"></img>
                                                    <center></center>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <i className="fas fa-angle-right" onClick={e => this.toTheRight(e)}></i> 
                            <div className="container_res_info">                                
                                <p>{data.andar}º Andar</p>
                                <p>Descrição do Imóvel {data.descricao}</p>
                                <p>Área Total: {data.area_total}</p>
                                <p>Área Útil: {data.area_util}</p>
                                <p>IPTU: R$ {data.iptu}</p>
                                <p>Condomínio: R$ {data.valor_condominio}/mês</p>                               
                                <p>Valor: R$ {data.preco}</p>
                                <p>Refêrencia: {data.ref}</p>
                            </div>
                            {this.state.showBtn && 
                            <ButtonShowDescr onClick={e => this.showDescr(e)} showIt={this.state.showIt}>
                                <div className="setadireita"></div>
                                <div className="setaesquerda"></div>
                            </ButtonShowDescr>                            
                            }
                            <DivDescription showIt={this.state.showIt}>
                                <p>Sala(s): {data.qtd_salas}</p>
                                <p>Cozinha(s): {data.qtd_cozinhas}</p>
                                <p>Quarto(s): {data.qtd_quartos}</p>
                                <p>Banheiro(s): {data.qtd_banheiro}</p>
                                <p>Sacadas: {data.sacadas ? "Sim" : "Não"}</p>
                                <p>Duplex: {data.duplex ? "Sim" : "Não"}</p>
                                <p>Hidromassagem: {data.hidromassagem ? "Sim" : "Não"}</p>
                                <p>Sauna: {data.sauna ? "Sim" : "Não"}</p>                               
                                <p>Lavabo: {data.lavabo ? "Sim" : "Não"}</p>
                                <p>Piscina Privativa: {data.piscina_privativa ? "Sim" : "Não"}</p>
                                <p>Piscina Condomínio: {data.piscina_condominio ? "Sim" : "Não"}</p>
                                <p>Pé-Direito: {data.pe_direito}</p>
                                <p>Garagem: {data.garagem ? "Sim" : "Não"}</p>
                                {data.garagem && <p>Quantidade de Vagas de garagem: {data.qtd_vagas_garagem}</p>}
                                {data.garagem && <p>Metragem da Vaga de garagem: {data.metragem_garagem}</p>}
                                <p>Salão de Festas no Condomínio: {data.salao_de_festas_condominio ? "Sim" : "Não"}</p>
                                <p>Salão de Festas Privativo: {data.salao_de_festas_condominio ? "Sim" : "Não"}</p>
                                <p>Churrasqueira: {data.churrasqueira ? "Sim" : "Não"}</p>                               
                                <ButtonHideDescr onClick={e => this.hideInfo(e)}>
                                    <div className="setadireita"></div>
                                    <div className="setaesquerda"></div>
                                </ButtonHideDescr>    
                            </DivDescription>
                            <div className="container_links_menu">
                                <ul>
                                    <li><Link to='/apartamentos'>Apartamentos</Link></li>
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
                        </AllSubSections>
                    <img className='colunaEsquerda' src={Colunas} alt='Colunas Corintias'></img>
                </ApSubMain>
            </Fragment>            
        );
    }
}

export default Subaptos;
