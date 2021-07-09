import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import logoPng2x from '../../assets/images/logo@2x.png';
import logoWebp from '../../assets/images/logo.webp';
import logoWebp2x from '../../assets/images/logo@2x.webp';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, startLogout } from './../../actions/auth';

export const Navbar = () => {

    const { username } = useSelector(state => state.auth);
    const { uid: userId } = useSelector(state => state.auth);

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout());
        localStorage.clear();
    };

    const handleDeleteAccount = ()=>{

        dispatch(deleteAccount(userId));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <picture>
                            <source type="image/webp"
                                srcSet={`${logoWebp} 1x, ${logoWebp2x} 2x`} />
                            <source type="image/png"
                                srcSet={`${logoPng} 1x, ${logoPng2x} 2x`} />
                            <img src={logoPng} alt="logo Healthy Control" />
                        </picture>

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item d-lg-none whitout-hover">
                                <span
                                    className="nav-link whitout-hover"
                                >
                                    {username}
                                </span>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    exact
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    exact
                                    to="/about"
                                >
                                    About BMI
                                </NavLink>
                            </li>
                            <li className="nav-item d-lg-none">
                                <span
                                    className="nav-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </span>
                            </li>
                            <li className="nav-item d-lg-none">
                                <span
                                    className="nav-link"
                                    onClick={handleDeleteAccount}
                                >
                                    Delete Account
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto position-absolute top-0 end-0">

                        <li className="nav-item whitout-hover">
                            <span className="nav-item nav-link whitout-hover">
                                {username}
                            </span>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-item nav-link btn"
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-item nav-link btn"
                                type="button"
                                onClick={handleDeleteAccount}
                            >
                                Delete Account
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
