import React, { Fragment, Component} from 'react';
import { withRouter } from 'react-router-dom';
import {MainStyledForm, Form} from '../styleds'
import firebase from '../../firebase'

class CreateList extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.entrar = this.entrar.bind(this)
    }

    async entrar(e){
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await firebase.login(email, password)
                .catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        alert('Este Usuario Não Existe')
                        this.props.history.replace('/login')
                    } else {
                        alert(`Código de Erro: ${error.code}`)
                        this.props.history.replace('/login')
                        return null
                    }
                });
                
                this.props.history.replace('/criarlista')
        } catch (error) {
            alert(error.message)
            this.props.history.replace('/login')
        }
    }

    componentDidMount(){
        if (firebase.getCurrent() && firebase.isInitialized()) {
            return this.props.history.replace('/criarlista')
        } 
    }

    render() {
        return (
            <Fragment>
            <MainStyledForm>
                <h1>Login</h1>
                <Form onSubmit={this.entrar}>
                    <label>E-mail:</label>
                <input type='text' value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>

                    <label>Senha:</label>
                    <input type='password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                    <button type="submit">Submit</button>
                </Form>
            </MainStyledForm>            
        </Fragment>
        );
    }
}




    
    

export default withRouter(CreateList);
