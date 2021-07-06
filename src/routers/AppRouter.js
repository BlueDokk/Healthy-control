import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';
import { Login } from './../components/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { Footer } from '../components/common/Footer';

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
