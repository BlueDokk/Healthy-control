import { types } from "../types/types";
import authService from "../firebase/authServices";
import { toast } from 'react-toastify';
import { startLoading, finishLoading } from "./loading";
import firestoreService from './../firebase/firestoreServices';



export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        authService.login(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());

                toast.success('Successful login');
            }).catch(error => {
                toast.error(`Error: ${error}`);
                dispatch(finishLoading());
            });

    }
}

export const registerWithEmailPasswordName = (email, password, name) => {

    const dataUser = {
        username: name,
        email,
        records:[]
    }

    return (dispatch) => {

        dispatch(startLoading());

        authService.register(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });
                
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());

                firestoreService.sendData(dataUser, user.uid);

                toast.success('Successful registration')

            }).catch(error => {
                toast.error(`Error: ${error}`);
                dispatch(finishLoading());
            });;

    }

}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const logout = ()=>({
    type: types.logout
})

export const startLogout = ()=>{

    return async ( dispatch ) =>{
        
        await authService.logOut();
        dispatch( logout() );
    }

}

export const deleteAccount = (userId)=>{

    return ( dispatch ) =>{
    
        firestoreService.deleteUser(userId);
        authService.deleteAccount(userId);
        localStorage.clear();
        dispatch( logout() );
    }

}