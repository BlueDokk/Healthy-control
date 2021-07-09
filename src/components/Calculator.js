import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import firestoreService from './../firebase/firestoreServices';
import { lastBmi, saveRecord } from '../actions/ui';
import { selectCalculatorImage } from '../utils/selectCalculatorImage';

export const Calculator = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmiScore, setBmiScore] = useState(0);
    const [bmiImage, setBmiImage] = useState(selectCalculatorImage(bmiScore));

    const dispatch = useDispatch();
    const { records } = useSelector(state => state.ui);
    const { uid: userId } = useSelector(state => state.auth);


    useEffect(() => {

        // Every time the records change it is stored in the fireStore database.
        if (height > 0 || weight > 0) { firestoreService.saveRecord(records, userId) }
        setBmiImage(selectCalculatorImage(bmiScore));

    }, [bmiScore, dispatch, records, userId, height, weight])


    const handleChange = ({ target }) => {

        if (target.id === 'inputWeight') {
            setWeight(target.value);
        }
        if (target.id === 'inputHeight') {
            setHeight(target.value);
        }

    };

    const calculateBMI = (weight, height) => {

        const normalizedWeight = parseFloat(weight);
        const normalizeHeight = parseFloat(height) / 100;

        const result = (typeof normalizedWeight === 'number' && typeof normalizeHeight === 'number') ?
            (normalizedWeight / (normalizeHeight * normalizeHeight)).toFixed(1)
            : 0;

        if (height > 0 || weight > 0) {
            setBmiScore(result);
            dispatch(lastBmi(weight, height, result));
        } else {
            toast.error('Invalid height or weight values');
        }

    };

    const handleSaveRecord = () => {

        if (height > 0 || weight > 0){
            calculateBMI(weight, height);
            dispatch(saveRecord());
        }else {
            toast.error('Invalid height or weight values');
        }

    }

    return (
        <div className="calculator__body row animate__animated animate__fadeInLeft">

            <div className="col-12 col-md-6">
                {bmiImage}
            </div>

            <div className="col-12 col-md-6">
                <h2 className="calculator__number">{bmiScore}</h2>
                <h3 className="text-center" >BMI</h3>
                <hr />
                <div className="calculator__controls">

                    <div className="row calculator__group">
                        <label htmlFor="inputWeight" className="calculator__label">Weight (kg):</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputWeight"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row calculator__group">
                        <label htmlFor="inputHeight" className="calculator__label">Height (cm):</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputHeight"
                            onChange={handleChange}

                        />
                    </div>

                    <div className="calculator__buttons">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={() => { calculateBMI(weight, height) }}
                        >
                            Calculate
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary btn-lg"
                            onClick={handleSaveRecord}
                        >
                            Save log
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
