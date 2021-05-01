import React,{ Fragment, Component} from 'react';
import firebase from '../../firebase'
import { withRouter} from 'react-router-dom';
import {ListaStyled, Lista, ContainerAllStyled} from '../styleds'

class CriarLista extends Component {
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            task: [],
            update: '',
            showinput: false
        }
        this.enviar = this.enviar.bind(this);
        this.showlistdb = this.showlistdb.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this)
    }

    async enviar(e){
        e.preventDefault();
        try {
            const state = this.state;
            if (state.tarefa === '' || null) {
                alert('Preecha o campo para adicionar um item na lista')
            } else {
                const refer = firebase.app.ref('list').push() 
                const key = refer.key   
                await firebase.app.ref('list').child(key).set(state.tarefa) 
            }         
    
            this.showlistdb(e);
        } catch (error) {
            alert(error)
        }
    }

    showlistdb(e){
        e.preventDefault();
        firebase.app.ref('list').on('value', (snapshot) => {
            const state = this.state;
            state.task = []
            snapshot.forEach(childItem => {
                state.task.push({
                    key: childItem.key,
                    tarefa: childItem.val()
                })
            })
            state.tarefa = ''
            this.setState(state);
        })        
    }

    async delete(e, keyitem){
        e.preventDefault();
        await firebase.app.ref('list').child(keyitem).remove();
    }

    async update(e, keyitem){
        e.preventDefault();

        try {
            const state = this.state
            if (state.tarefa === '' || null) {
                alert('Preencha o campo para mudar o item da Lista')
            } else {
                await firebase.app.ref('list').child(keyitem).set(state.tarefa);            
            }
            
            state.tarefa = ''
            this.setState(state)
        } catch (error) {
            alert(error)
        }       
        
    }

    componentDidMount(){
        if (!firebase.getCurrent() && !firebase.isInitialized()) {
            this.props.history.replace('/login')
            return null
        }

        firebase.app.ref('list').on('value', (snapshot) => {
            const state = this.state;
            state.task = []
            snapshot.forEach(childItem => {
                state.task.push({
                    key: childItem.key,
                    tarefa: childItem.val()
                })
            })
            this.setState(state);
        })    
    }

    render() {
        return (
            <Fragment>
                <ContainerAllStyled>                    
                <ListaStyled>
                    <div className="containerdolist">
                        <h1>Crie sua Lista</h1>
                        <div className="containerinputtxt">
                            <input autoFocus type='text' value={this.state.tarefa} onChange={e => this.setState({tarefa: e.target.value})}/>
                            <button type='button' onClick={this.enviar}>Insert</button>
                        </div>
                    </div>
                    <div className="containerviewlist">
                        <Lista>
                            {this.state.task.map((item) => {
                                return(
                                    <div key={item.key} className="containerenderlist">
                                        <div className="containerupdate" onClick={e => this.update(e, item.key)}>
                                            <i className="fas fa-exchange-alt" ></i>
                                            <span>Update</span>
                                        </div>
                                        <li >{item.tarefa}</li>
                                        <div className="containertrash" onClick={e => this.delete(e, item.key)}>
                                            <i className="fas fa-times" ></i>
                                            <span>Delete</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </Lista>
                    </div>
                </ListaStyled>
                </ContainerAllStyled>
            </Fragment>
        );
    }
}



export default withRouter(CriarLista);
