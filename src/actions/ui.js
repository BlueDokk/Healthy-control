import { types } from "../types/types";
import { startLoading, finishLoading } from "./loading";
import firestoreService from './../firebase/firestoreServices';

export const lastBmi = (lastWeight, lastHeight, lastBmi) => ({
    type: types.lastBmi,
    payload: {
        lastWeight,
        lastHeight,
        lastBmi
    }
})

export const saveRecord = () => ({
    type: types.saveRecord
})


export const getRecordsFromFirestore = () => {

    return (dispatch) => {
        dispatch(startLoading());

        const userId = localStorage.getItem('user');
        firestoreService.getDataUser(userId)
            .then((doc) => {
                const records = doc.data().records;
                dispatch(updateRecords(records));
                dispatch(finishLoading());
            });

    }
}

export const updateRecords = (records) => ({
    type: types.updateRecords,
    payload: {
        records
    }
})