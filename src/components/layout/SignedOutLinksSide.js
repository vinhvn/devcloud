import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinksSide = () => {
    return (
        <ul className={'sidenav light-blue darken-4'} id={'slide-out'}>
            <li>
                <NavLink to={'/'} className={'btn-flat white-text'}>
                    devCloud
                </NavLink>
            </li>
            <li>
                <NavLink to={'/login'} className={'btn-flat white-text'}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to={'/register'} className={'btn-flat white-text'}>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    );
};

export default SignedOutLinksSide;
