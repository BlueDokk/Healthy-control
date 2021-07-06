import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import logoPng2x from '../../assets/images/logo@2x.png';
import logoWebp from '../../assets/images/logo.webp';
import logoWebp2x from '../../assets/images/logo@2x.webp';

export const Navbar = () => {
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
                            <img src={logoPng} alt="Logo Beesic" />
                        </picture>

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                        </ul>
                    </div>
                </div>


                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto position-absolute top-0 end-0">

                        <li className="nav-item whitout-hover">
                            <span className="nav-link whitout-hover">
                                Javier Velasquez
                            </span>
                        </li>

                        <li className="nav-item">
                            <button
                                className="nav-link btn"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}