import React, { Component,Fragment } from 'react';
import Colunas from '../../../assets/Colunas-Corintia-Alpha.png'
import {ApMain, AllSubSections} from '../../styled'
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
                <ApMain>
                    <img className='colunaDireita' src={Colunas} alt='Colunas Corintias'></img>
                        <AllSubSections>
                            <h1>{data.nome_do_condominio}</h1>
                        </AllSubSections>
                    <img className='colunaEsquerda' src={Colunas} alt='Colunas Corintias'></img>
                </ApMain>
            </Fragment>            
        );
    }
}

export default Subaptos;
