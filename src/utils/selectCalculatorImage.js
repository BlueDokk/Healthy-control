import React from 'react';

import BMInormal from '../assets/images/normal.png';
import BMInormal2x from '../assets/images/normal@2x.png';
import BMInormalWebp from '../assets/images/normal.webp';
import BMInormalWebp2x from '../assets/images/normal@2x.webp';

import BMIunderweight from '../assets/images/underweight.png';
import BMIunderweight2x from '../assets/images/underweight@2x.png';
import BMIunderweightWebp from '../assets/images/underweight.webp';
import BMIunderweightWebp2x from '../assets/images/underweight@2x.webp';

import BMIoverweight from '../assets/images/overweight.png';
import BMIoverweight2x from '../assets/images/overweight@2x.png';
import BMIoverweightWebp from '../assets/images/overweight.webp';
import BMIoverweightWebp2x from '../assets/images/overweight@2x.webp';

import BMIobese from '../assets/images/obese.png';
import BMIobese2x from '../assets/images/obese@2x.png';
import BMIobeseWebp from '../assets/images/obese.webp';
import BMIobeseWebp2x from '../assets/images/obese@2x.webp';

import BMIextremlyobese from '../assets/images/extremly-obese.png';
import BMIextremlyobese2x from '../assets/images/extremly-obese@2x.png';
import BMIextremlyobeseWebp from '../assets/images/extremly-obese.webp';
import BMIextremlyobeseWebp2x from '../assets/images/extremly-obese@2x.webp';


export const selectCalculatorImage = (bmi) => {

    if (bmi <= 18.4) {
        return (
            <picture>
                <source type="image/webp"
                    srcSet={`${BMIunderweightWebp} 1x, ${BMIunderweightWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${BMIunderweight} 1x, ${BMIunderweight2x} 2x`} />
                <img className="calculator__image" src={BMIunderweight} alt="BMI calculator" />
            </picture>
        );
    };
    if (18.5 < bmi && bmi <= 24.9) {
        return (
        <picture>
            <source type="image/webp"
                srcSet={`${BMInormalWebp} 1x, ${BMInormalWebp2x} 2x`} />
            <source type="image/png"
                srcSet={`${BMInormal} 1x, ${BMInormal2x} 2x`} />
            <img className="calculator__image" src={BMInormal} alt="BMI calculator" />
        </picture>
        );
    };
    if (25 < bmi && bmi <= 29.9) {
        return (
            <picture>
                <source type="image/webp"
                    srcSet={`${BMIoverweightWebp} 1x, ${BMIoverweightWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${BMIoverweight} 1x, ${BMIoverweight2x} 2x`} />
                <img className="calculator__image" src={BMIoverweight} alt="BMI calculator" />
            </picture>
        );
    };
    if (30 < bmi && bmi <= 34.9) {
        return (
            <picture>
                <source type="image/webp"
                    srcSet={`${BMIobeseWebp} 1x, ${BMIobeseWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${BMIobese} 1x, ${BMIobese2x} 2x`} />
                <img className="calculator__image" src={BMIobese} alt="BMI calculator" />
            </picture>
        );
    };
    if (35 <= bmi) {
        return (
            <picture>
                <source type="image/webp"
                    srcSet={`${BMIextremlyobeseWebp} 1x, ${BMIextremlyobeseWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${BMIextremlyobese} 1x, ${BMIextremlyobese2x} 2x`} />
                <img className="calculator__image" src={BMIextremlyobese} alt="BMI calculator" />
            </picture>
        );
    };


}