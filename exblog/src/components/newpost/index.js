import React, { Component } from 'react';
import Header from '../header'
import Footer from '../footer'
import {NewPostStyled} from '../styleds/styleds'
import {Link,withRouter} from 'react-router-dom'
import firebase from '../../firebase/firebase'

//ESTE COMPONENTE FAZ O CADASTRO DE POST E IMAGEM NO BANCO DE DADOS firebase;

class NewPost extends Component {
    //PRIMEIRO CRIAMOS AS STATES QUE VÃO SER USADAS, para inseri-las no banco de dados;
    //imagem como nulo pois é arquivo não string, e progress porque vai ser numero para a barra de carregamento de imagem, cm metodos matematicos;
    constructor(props){
        super(props);
        this.state = {
            imagem: null,
            ingredientes: '',
            preparo : '',
            titulo: '',
            alert: '',
            url: '',
            progress: 0
        }

        //BIND EM TODOS OS METODOS;
        this.cadastrar = this.cadastrar.bind(this)
        this.handlefile = this.handlefile.bind(this)
        this.handleUpLoad = this.handleUpLoad.bind(this)
    }


    async cadastrar(e){//FUNÇÃO MARCADA COMO ASYNC
        //PREVINE O COMPORTAMENTO PADRÃO DE CARREGAMENTO DA PAGINA APOS SER SUBMETIDO O FORMULARIO;
        e.preventDefault();

        //VERIFICAÇÃO DE STATES, SE NÃO HÁ CAMPO VAZIO, OU NULO; OBS: DEVE TER ALGUM JEITO DE REFATORAR ISSO
        if (this.state.titulo !== '' && this.state.imagem !== '' && this.state.ingredientes !== '' && this.state.url !== '' && this.state.imagem !== null && this.state.preparo !== '') {
            //referencia a pasta que os itens serão armazenados dentro do banco de dados
            const posts = firebase.app.ref('posts')

            //referencia uma chave aleatoria ligada ao post
            const chave = posts.push().key

            await posts.child(chave).set({//ISTO É UMA PROMISE, POR ISSO DO AWAIT
                imagem: this.state.url,
                titulo: this.state.titulo,
                ingredientes: this.state.ingredientes,
                preparo: this.state.preparo
            })
            this.props.history.push('/dashboard')
        } else {
            this.setState({alert: 'Preencha Todos os Campos'})
        }        
    }

    async handlefile(e){
        if (e.target.files[0]) {
            const image = e.target.files[0]
            //Verificação de há imagens do tipo certo
            if (image.type === 'image/png' || image.type === 'image/jpeg') {
                this.setState({imagem: image})
                await this.handleUpLoad()
            } else {
                alert('Envie uma imagem do tipo JPG ou PNG')
                this.setState({imagem: null})
                return null;
            }            
        }
    }

    async handleUpLoad(){
        //PEGA A IMAGEM ATUALIZADA NO STATE E ARMAZAENA ELA NUMA CONSTANTE DE MESMO NOME;
        const {imagem} = this.state

        //Pega o currentUid do banco de dadso gerado aleatoriamente;
        const currentUid = firebase.currentUid();

        //Armazena dentro do storage, na pasta images, na pasta do currentUid, a propria imagem com o nome dela mesmo;
        const upLoadTask = firebase.storage
            .ref(`images/${currentUid}/${imagem.name}`)
            .put(imagem);


            //FICA MNITORANDO O PROCESSO DE TRANFERENCIA DA IMAGEM PARA O BANCO DE DADOS E SALVA O PROGRESSO EM TEMPO REAL NA STATE PROGRESS;
            await upLoadTask.on('state_changed',(snapshot) => {
            //progress ou observer
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})

        }, (error) => {
            //error
            console.log(`Error de imagem: ${error}`);

        }, () => {
            //sucesso ou complete
            //CASO SUCESSO ARMAZENA EM URL, A URL DA IMAGEM NO STORAGE; que depois serve para mostrar em renderização condicional no JSX;Não no post;
            firebase.storage.ref(`images/${currentUid}`).child(imagem.name).getDownloadURL()
                .then(url => {
                    this.setState({url: url})
                })
        })
    }

    componentDidMount(){//metodo que verifica se está logado, no caso é uma negativa;
        if (!firebase.getCurrent()) {
            this.props.history.replace('/login')
            return null
        }
    }

    render() {
        return (
            <div>
                <Header />
                    <NewPostStyled>
                        <Link to='/artigos'>Artigos</Link>
                        <span>{this.state.alert}</span>
                        <div className='divform'>                            
                            <div className='formcontainer'>
                                <form onSubmit={this.cadastrar}> 

                                    <div className="containertitulo">                                        
                                        <label>
                                            Titulo:
                                        </label><br/>                                    
                                        <input type='text' value={this.state.titulo} autoFocus
                                                onChange={(e) => this.setState({titulo: e.target.value})}/>
                                        <br/>
                                    </div>                                   

                                        <div className="containerimagem">
                                            <label className="labelimg">
                                                Imagem:
                                            </label><br/>                                    
                                            <input className="inputfile" type='file' onChange={this.handlefile}/>
                                            {/* RENDERIZAÇÃO CONDICIONAL , SE ESTIIVER CARREGADA TOTALMENTE APARECE A IMAGEM, SE NÃO APARECE BARRA DE CARREGAMENTO; */}
                                                {this.state.url !== '' ? 
                                                    <img  alt="Imagem" src={this.state.url}/>
                                                    :
                                                    <progress value={this.state.progress} max="100"/>                                
                                                }
                                            <div className="regrasimg">
                                                <h6>Regras de Imagem:</h6>
                                                <h6>*Imagens acima de 1200x900</h6>
                                                <h6>*Somente arquivos JPG ou PNG</h6>                                                
                                            </div>
                                        </div>
                                    
                                    <div className="containeringred">
                                        <label>
                                            Ingredientes:
                                        </label><br/>                                    
                                        <textarea className="inputingr" type='text' value={this.state.ingredientes} 
                                                onChange={(e) => this.setState({ingredientes: e.target.value})}/><br/>
                                    </div>
                                    <div className="containerprep">
                                        <label>
                                            Modo de Preparo:
                                        </label><br/>                                    
                                        <textarea className="inputprep" type='text' value={this.state.preparo} 
                                                onChange={(e) => this.setState({preparo: e.target.value})}/><br/>
                                        <button className="btn">Criar Novo Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </NewPostStyled>
                <Footer />
            </div>
        );
    }
}

//withRouter da acesso À este: this.props.history.replace('/login')
export default withRouter(NewPost);
