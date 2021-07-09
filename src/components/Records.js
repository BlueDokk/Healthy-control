import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteSVG from '../assets/images/delete.svg';
import { getRecordsFromFirestore, updateRecords } from './../actions/ui';

export const Records = () => {

    const dispatch = useDispatch();
    const { records } = useSelector(state => state.ui);

    useEffect(()=>{
        dispatch(getRecordsFromFirestore())
        
    }, [dispatch]);

    const handleDeleteRecord = ({currentTarget})=>{

        const recordId = Number(currentTarget.id);

        const recordsFiltered = records.filter(record => record.recordId !== recordId );
        dispatch(updateRecords(recordsFiltered));

    }

    return (
        <div className="row records__body animate__animated animate__fadeInRight">
            <table className="table table-records">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Height</th>
                        <th scope="col">BMI</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {records?.map((record, key) => {
                        return (
                            <tr key={key}>
                                <th scopr="row">{key+1}</th>
                                <td>{record.weight}</td>
                                <td>{record.height}</td>
                                <td>{record.bmiScore}</td>
                                <td id= {record.recordId} onClick={handleDeleteRecord}><img className="delete-icon" src={DeleteSVG} alt="" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}
