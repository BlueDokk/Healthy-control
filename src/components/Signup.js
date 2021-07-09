import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validateForm from '../utils/validateForm';
import { Form } from '../hooks/useForm.js';
import { Footer } from './common/Footer';
import { Banner } from './Banner';
import { useDispatch } from 'react-redux';
import { registerWithEmailPasswordName } from '../actions/auth';

export const SignUp = ({ history }) => {

    const dispatch = useDispatch();

    const [userState, setUserState] = useState({
        username: '',
        lastname: '',
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
        }
        else delete errorState[target.name];

        // Set user information.
        setUserState({
            ...userState,
            [target.name]: target.value.trim(),
        })

    };

    const onSignUp = (e) => {

        e.preventDefault();

        const {email, password, username, lastname } = userState;
        const name = `${username} ${lastname}`; 
        const errors = Object.keys(errorState).length;

        if (errors === 0) {
            
            dispatch(registerWithEmailPasswordName(email, password, name));

        }else toast.error('Error: please complete the fields correctly');

    }

    const onLogin = () => {
        history.push('/login');
    }

    // Rendering methods of the Custom Hook userForm
    const { renderInput, renderButton } = Form();

    return (
        <div className="row">
            <div className="col-lg-5 block-login animate__animated animate__fadeIn">
                <h1 className="title-form">SignUp</h1>
                <hr className="line-title" />
                <form className="mt-5 mb-3">
                    {
                        renderInput(
                            'username',
                            'Name',
                            'text',
                            handleChange,
                            errorState['username'] || null
                        )
                    }
                    {
                        renderInput(
                            'lastname',
                            'Lastname',
                            'text',
                            handleChange,
                            errorState['lastname'] || null
                        )
                    }
                    {
                        renderInput(
                            'email',
                            'Email address',
                            'email',
                            handleChange,
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
                                'Create New Account',
                                'btn btn-primary btn-lg',
                                'submit', onSignUp
                            )
                    }
                    {
                        renderButton(
                                'Log In',
                                'btn btn-secondary btn-lg',
                                'submit',
                                onLogin
                            )
                    }
                </form>
                <Footer classes="footer-form" />
            </div>

            <Banner />

        </div>
    )
}
