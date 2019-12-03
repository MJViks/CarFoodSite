import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const config = {
    apiKey: "AIzaSyDecfjkte78sM7DsyKEqZHJ_jif6AoHnlU",
    authDomain: "carfoodsite.firebaseapp.com",
    databaseURL: "https://carfoodsite.firebaseio.com",
    projectId: "carfoodsite",
    storageBucket: "carfoodsite.appspot.com",
    messagingSenderId: "619940298294", 
    appId: "1:619940298294:web:f72f99345f22024e4d2297", 
    measurementId: "G-94JTTJLEFH"
}

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.database();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }

    login(email, password) {
        return this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {

            this.auth.signInWithEmailAndPassword(email, password);

        });
         
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        });
    }

    isInitialized() {
        return this.auth.currentUser;
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    } 

    getStateuser(nameUser) {
        return this.auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user.displayName)
               nameUser(user.displayName)
            } else {
                console.log("No Auth")
            }
        })
    }

    
}

export default new Firebase()