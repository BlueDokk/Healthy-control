import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './../components/common/Navbar';
import { Home } from './../components/Home';
import { About } from '../components/About';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />

                    <Redirect to="/home" />
                </Switch>

            </div>


        </>
    )
}
