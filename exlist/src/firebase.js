import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: "AIzaSyAwwJPUsso4W1csofdovWb0SltT6p2yDCE",
    authDomain: "reactexlist.firebaseapp.com",
    databaseURL: "https://reactexlist-default-rtdb.firebaseio.com",
    projectId: "reactexlist",
    storageBucket: "reactexlist.appspot.com",
    messagingSenderId: "833274524284",
    appId: "1:833274524284:web:c0ae165142eb9c85ff8ff9",
    measurementId: "G-1W44ZMYS3D"
  };
  
class Firebase {
    //uma class importa funções para outros modulos;
    constructor(){
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);            
    }
        this.app = firebase.database();
    }

    login(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    logout(){
        return firebase.auth().signOut()
    }

    async register(nome, email, password){
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        const uid = firebase.auth().currentUser.uid;
        return firebase.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            firebase.auth().onAuthStateChanged(resolve)
        })
    }

    getCurrent(){
        return firebase.auth().currentUser && firebase.auth().currentUser.email
    }

    currentUid(){
        return firebase.auth().currentUser && firebase.auth().currentUser.uid
    }
}

export default new Firebase();
