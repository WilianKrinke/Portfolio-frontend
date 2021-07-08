import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom'
import Colunas from '../../../assets/Colunas-Corintia-Alpha.png'
import {ApSubMain, AllSubSections,ButtonShowDescr, DivDescription, ButtonHideDescr} from '../../styled'
import firebase from '../../../firebase'

class Subaptos extends Component {
    constructor(props){
        super(props);
        this.state = {
            ref: decodeURIComponent(this.props.match.params.id),
            datas: [],
            showIt: false,
            showBtn: true
        };
        this.buscar = this.buscar.bind(this);
        this.showDescr = this.showDescr.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }

    async buscar(){
        await firebase.firestore().collection('apartamentos').doc(`${this.state.ref}`).get()
        .then(snapshot => {
            console.log(snapshot.data())
            this.setState({datas: snapshot.data()})
        }).catch(err => {
            console.log(err)
        })
    }

    showDescr(e){
        e.preventDefault();
        this.setState({showIt: true, showBtn: false})
    }

    hideInfo(e){
        e.preventDefault();
        this.setState({showIt: false, showBtn: true})
    }

    componentDidMount(){
        this.buscar();
    }

    render() {
        let data = this.state.datas;
        return (
            <Fragment>
                <ApSubMain>
                    <img className='colunaDireita' src={Colunas} alt='Colunas Corintias'></img>
                        <AllSubSections>
                            <h1>Edifício {data.nome_do_condominio}</h1>
                            <h6>Apartamento {data.apto}</h6>
                            <span className="carrousel_imagens">Imagens do banco de dados</span>
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
                            <ButtonShowDescr onClick={e => this.showDescr(e)} showIt={this.state.showIt}>Descrição Completa<i class="fas fa-angle-down"></i></ButtonShowDescr>                            
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
                                <ButtonHideDescr onClick={e => this.hideInfo(e)}><i class="fas fa-angle-up"></i></ButtonHideDescr>    
                            </DivDescription>
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
