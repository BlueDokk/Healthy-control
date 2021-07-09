import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Loader from "react-loader-spinner";
import { ToastContainer } from 'react-toastify';
import { Login } from './../components/Login';
import { SignUp } from '../components/Signup';
import { DashboardRoutes } from './DashboardRoutes';
import 'react-toastify/dist/ReactToastify.css';
import authService from './../firebase/authServices';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        authService.currentUser((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));

                localStorage.setItem('user', user.uid);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })


    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (<div className="block-loading">

            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
            <h1>Loading...</h1>

        </div>)
    }

    return (
        <Router>

            <div>
                <ToastContainer className="error" />
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={Login}
                        isAuthenticated={isLoggedIn}
                    />
                    <PublicRoute
                        exact
                        path="/signup"
                        component={SignUp}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={DashboardRoutes}
                    />



                </Switch>
            </div>

        </Router>
    )
}
