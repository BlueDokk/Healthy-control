import { firebase } from '../firebase/firebase-config';
import { toast } from 'react-toastify';
import 'firebase/auth';

const authService = {

    currentUser(callback) {

        return firebase.auth().onAuthStateChanged(callback);
    },

    logOut() {
        return firebase.auth().signOut();
    },

    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    register(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    deleteAccount() {
        const user = firebase.auth().currentUser;

        user.delete().then(function () {
            toast("Your account has been successfully deleted");
        }).catch(function (error) {
            toast.error("Error deleting account: ", error);
        });
    }

}

export default authService;