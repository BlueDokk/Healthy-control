import { db } from '../firebase/firebase-config';
import { toast } from 'react-toastify';
import 'firebase/firestore';


const firestoreService = {

    sendData(data, id) {

        db.collection("users").doc(id).set({ ...data })
            .then(() => {
                console.log("User added successfully");
            })
            .catch((error) => {
                toast.error("Error adding user: ", error);
            });
    },

    saveRecord(records, id) {

        db.collection("users").doc(id)
            .update({
                records
            })
            .then(() => {
                console.log("Document successfully updated!");
            }).catch(error=>{
                console.log(error);
            })
    },

    getDataUser(userId) {

        return db.collection("users").doc(userId)
            .get()

    },

    async getRecords(userId) {

        const records = await db.collection("users").doc(userId)
            .get();

        return records;
    },

    deleteUser(userId) {
        db.collection("users").doc(userId).delete().then(() => {
            toast("Your account has been successfully deleted");
        }).catch((error) => {
            toast.error("Error deleting account: ", error);
        });
    }
}

export default firestoreService;