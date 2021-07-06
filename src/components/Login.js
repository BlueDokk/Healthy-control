import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validateForm from '../utils/validateForm';
import { Form } from '../hooks/useForm.js';

export const Login = () => {

    // Set initial state of errors.
    const [errorState, setErrorState] = useState({});

    // Set the current state of form fields
    const handleChange = ({ target }) => {

        // Fields validation.
        const error = validateForm(target);

        // Save or delete errors.
        if (error) {
            setErrorState({
                ...errorState,
                [target.name]: error
            });
        }
        else delete errorState[target.name];

    };

    const onSubmit = (e)=>{

        e.preventDefault();

        console.log('submit');
    }

    // Rendering methods of the Custom Hook userForm
    const { renderInput, renderButton } = Form();

    return (
        <div>
            <h1 className="title-form">Login</h1>
            <hr className="line-title" />

            <form className="mt-5 mb-3">
                {renderInput('email', 'Email address', 'email', handleChange, errorState['email'] || null)}
                {renderInput('password', 'Password', 'password', handleChange, errorState['password'] || null)}
                {renderButton('Log In', 'btn btn-primary btn-lg m-2', 'submit', onSubmit)}

            </form>
        </div>
    )
}
