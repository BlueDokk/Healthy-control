import React from 'react';
import DeleteSVG from '../assets/images/delete.svg';

export const Records = () => {
    return (
        <div className="row records__body">
            <table class="table table-records">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>68 kg</td>
                        <td>1.77 cm</td>
                        <td>21.0</td>
                        <td><img className="delete-icon" src={DeleteSVG} alt="" /></td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>68 kg</td>
                        <td>1.77 cm</td>
                        <td>21.0</td>
                        <td><img className="delete-icon" src={DeleteSVG} alt="" /></td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>68 kg</td>
                        <td>1.77 cm</td>
                        <td>21.0</td>
                        <td><img className="delete-icon" src={DeleteSVG} alt="" /></td>

                    </tr>
                </tbody>
            </table>


        </div>
    )
}
