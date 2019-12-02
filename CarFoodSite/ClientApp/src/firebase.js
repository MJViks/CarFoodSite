import app from "firebase/app"
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
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    login(email, password) {
        return this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL).then(() => {
            
            return this.auth.signInWithEmailAndPassword(email, password).then(() => {
                return localStorage.setItem('authUser', this.getCurrentUsername());

            })
                
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

    
}

export default new Firebase()