import React from 'react';
import BMImage from '../assets/images/normal.png';
import BMImage2x from '../assets/images/normal@2x.png';
import BMImageWebp from '../assets/images/normal.webp';
import BMImageWebp2x from '../assets/images/normal@2x.webp';

export const Calculator = () => {
    return (
        <div className="calculator__body row">

            <div className="col-12 col-md-6">
                <picture>
                    <source type="image/webp"
                        srcSet={`${BMImageWebp} 1x, ${BMImageWebp2x} 2x`} />
                    <source type="image/png"
                        srcSet={`${BMImage} 1x, ${BMImage2x} 2x`} />
                    <img className="calculator__image" src={BMImage} alt="BMI calculator" />
                </picture>
            </div>

            <div className="col-12 col-md-6">
                <h2 className="calculator__number">21.0</h2>
                <h3 className="text-center" >BMI</h3>
                <hr />
                <div className="calculator__controls">

                    <div className="row calculator__group">
                        <label htmlFor="inputWeight" className="calculator__label">Weight (kg):</label>
                        <input type="number" className="form-control" id="inputWeight" />
                    </div>
                    <div className="row calculator__group">
                        <label htmlFor="inputHeight" className="calculator__label">Height (cm):</label>
                        <input type="number" className="form-control" id="inputHeight" />
                    </div>

                    <div className="calculator__buttons">
                        <button className="btn btn-primary btn-lg" >Calculate</button>
                        <button className="btn btn-secondary btn-lg" >Save log</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
