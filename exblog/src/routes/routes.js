//importação dos componentes do react e firebase
import React, { Component, Fragment } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import firebase from '../firebase/firebase'


//importação dos componentes do site 
import Home from '../components/home'
import ListadeArtigos from '../components/listadeartigos'
import Login from '../components/login'
import Loading from '../components/loading'
import Dashboard from '../components/dashboard'
import NewPost from '../components/newpost'



class routes extends Component {

    constructor(props){
        super(props);
        this.state = {
            firebaseInitialized: false
        }
    }  

    //VERIFICAÇÃO DE A CONEXÃO COM O BANCO DE DADOS FIREBASE FOI INICIALIZADA
    componentDidMount(){

        //INVOCAÇÃO DE METODO CRIADO EM FIREBASE.JS
        firebase.isInitialized()
            .then(res => {
                //mudando a state para true, se conexão foi estabelecida
                this.setState({
                    firebaseInitialized: res
                })
            })
    }


    render() {
        //Renderização condicionada a verificação da conexão do firebase;Se true exibe os componentes, Se false Exibe o Componente Loading;
        return this.state.firebaseInitialized !== false ? (
            <Fragment>
                <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/artigos" component={ListadeArtigos}/>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/dashboard/newpost" component={NewPost} />

                        </Switch>
                </BrowserRouter>                
            </Fragment>
        ) : (
            <Loading />
        );
    }
}

export default routes;
