import React from 'react';

import { Calculator } from './Calculator';
import { Records } from './Records';


export const Home = () => {
    return (
        <>
            <div className="container-fluid row">
                <div className="block-calculator col-lg-7">
                    <header className="calculator__header">
                        <h1 className="title" >BMI calculator</h1>
                    </header>
                    <Calculator />
                </div>
                <div className="block-records col-lg-5">
                    <header className="records__header">
                        <h1 className="title" >Your records</h1>
                    </header>
                    <Records />
                </div>
            </div>
        </>


    )
}
