//IMPORTAR USOS DO FIREBASE, AUTH para autenticação de usuarios adms, Storage para armazenamento de imagens, DATABASE para armazenamento de informações de publicações e APP para referenciar o proprio firebase
import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


//INICIALIZAÇÃO DO FIREBASE
let firebaseConfig = {
    apiKey: "AIzaSyAxIMRATLJba9jouGA5hS_ltNqFU0Tn1HQ",
    authDomain: "reactapp-c7b46.firebaseapp.com",
    databaseURL: "https://reactapp-c7b46-default-rtdb.firebaseio.com",
    projectId: "reactapp-c7b46",
    storageBucket: "reactapp-c7b46.appspot.com",
    messagingSenderId: "260674678397",
    appId: "1:260674678397:web:c4cba227d07a00c7850b14",
    measurementId: "G-8S6PLBJ7MX"
  };
  // Initialize Firebase
  
class Firebase{
    constructor(){
        //VERIFICAÇÃO SE A CONEXÃO COM BANCO DE DADOS DO FIREBASE JÁ EXISTE;
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);            
        }
        this.app = app.database();
        this.storage = app.storage();
    }

    //METODOS DE AUTENTICAÇÃO DO FIREBASE, É USADO FORA DO ARQUIVO; 

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    logout(){
        return app.auth().signOut()
    }

    async register(nome, email, password){
        //metodo de registtro é uma promise, pois só registra se os dados foram recebidos, Porem está função não está sendo usada, pois não há componente de registro de novo usuario, apenas de novo post
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;
        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve)
        })
    }

    getCurrent(){
        //VERIFICAÇÃO EM IF DE UMA LINHA
        //Verifica se há algum usuario logado dentro do firebase
        return app.auth().currentUser && app.auth().currentUser.email
    }

    currentUid(){
        //VERIFICAÇÃO EM IF DE UMA LINHA
        return app.auth().currentUser && app.auth().currentUser.uid
    }
}

export default new Firebase();
//EXPORTAÇÃO DA CLASSE CRIADA