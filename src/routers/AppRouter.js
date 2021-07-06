import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from './../components/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { Footer } from '../components/common/Footer';
import 'react-toastify/dist/ReactToastify.css';


export const AppRouter = () => {
    return (
        <Router>

            <div>
                <ToastContainer className="error" />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
