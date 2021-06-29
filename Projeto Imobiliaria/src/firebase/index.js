import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYKW_E09XzSO7uDUIMa1tcr1A6xzzrFbM",
    authDomain: "eximob-89486.firebaseapp.com",
    databaseURL: "https://eximob-89486-default-rtdb.firebaseio.com",
    projectId: "eximob-89486",
    storageBucket: "eximob-89486.appspot.com",
    messagingSenderId: "124871397333",
    appId: "1:124871397333:web:70094279eefdb57b79b75c",
    measurementId: "G-TY27PYLQ1B"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);            
}

export default firebase;