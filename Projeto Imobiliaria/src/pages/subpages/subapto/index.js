import React, { Component,Fragment } from 'react';
import Colunas from '../../../assets/Colunas-Corintia-Alpha.png'
import {ApSubMain, AllSubSections} from '../../styled'
import firebase from '../../../firebase'

class Subaptos extends Component {
    constructor(props){
        super(props);
        this.state = {
            ref: decodeURIComponent(this.props.match.params.id),
            datas: []
        };
        this.buscar = this.buscar.bind(this);
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
                            <p>{data.andar}º Andar</p>
                            <span className="carrousel_imagens">Imagens do banco de dados</span>
                            <div className="container_info">
                                <div className="container_descr">
                                    <p>{data.descricao}</p>
                                </div>
                                <p>{data.preco}</p>
                            </div>
                        </AllSubSections>
                    <img className='colunaEsquerda' src={Colunas} alt='Colunas Corintias'></img>
                </ApSubMain>
            </Fragment>            
        );
    }
}

export default Subaptos;
