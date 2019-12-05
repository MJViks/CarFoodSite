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
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }

    login(email, password) {
        return this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => this.auth.signInWithEmailAndPassword(email, password))

    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        alert(`Аккаунт ${email} успешно зарегестрирован!`)
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

    async getStateuser(SetNameUser) {
        return await this.auth.onAuthStateChanged(user => {
            if (user) {
                SetNameUser(user.displayName);
            } else {
                console.log("No Auth");
            }
        });
    }
    

    readFeedback() {
        return this.db.ref('feedback').once('value')
            .then(snapshot => { return JSON.stringify(snapshot.val()) })
            .then((val) => this.feedbackCallback(val));

    }

    feedbackCallback(val) {
        this.feedback = val;
    }

    async writeFeedback(text, select) {
        return await this.db.ref('feedback/' + this.getCurrentUsername()).set({
            email: this.auth.currentUser.email,
            text: text,
            select: select
        }).then(() => alert('Спасибо за ваш отзыв)')).catch(err => console.log(err.message));
    }
}

export default new Firebase()