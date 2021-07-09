import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { toast } from 'react-toastify';
import validateForm from '../utils/validateForm';
import { Form } from '../hooks/useForm.js';
import { Footer } from './common/Footer';
import { Banner } from './Banner';
import { loginWithEmailPassword } from '../actions/auth';

export const Login = ({ history }) => {

   const dispatch =  useDispatch();

    // Set initial state of form fields.
    const [userState, setUserState] = useState({
        email: '',
        password: '',
    });

    const [errorState, setErrorState] = useState({});

    // Set the current state of form fields
    const handleChange = ({ target }) => {

        const error = validateForm(target);

        if (error) {
            setErrorState({
                ...errorState,
                [target.name]: error
            });
            // dispatch(setError(error))
        }
        else delete errorState[target.name];

        // Set user information.
        setUserState({
            ...userState,
            [target.name]: target.value.trim(),
        })

    };

    const onLogin = (e) => {

        e.preventDefault();

        const {email, password} = userState;
        const errors = Object.keys(errorState).length;

        if (errors === 0) {
        dispatch( loginWithEmailPassword(email, password) );
        }else toast.error('Error: please complete the fields correctly');

    }

    const onSignUp = () => {
        history.push('/signup');
    }

    // Rendering methods of the Custom Hook userForm
    const { renderInput, renderButton } = Form();

    return (
        <div className="row ">
            <div className="col-lg-5 block-login animate__animated animate__fadeIn">
                <h1 className="title-form">Login</h1>
                <hr className="line-title" />
                <form className="mt-5 mb-3">
                    {
                        renderInput(
                            'email',
                            'Email address',
                            'email', handleChange,
                            errorState['email'] || null
                        )
                    }
                    {
                        renderInput(
                            'password',
                            'Password',
                            'password',
                            handleChange,
                            errorState['password'] || null
                        )
                    }

                    {
                        renderButton(
                            'Log In',
                            'btn btn-primary btn-lg',
                            'submit', onLogin
                        )
                    }
                    {
                        renderButton(
                            'Sign Up',
                            'btn btn-secondary btn-lg',
                            'button', onSignUp
                        )
                    }
                </form>
                <Footer classes="footer-form" />
            </div>

            <Banner />

        </div>
    )
}
