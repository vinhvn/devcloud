import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className='right'>
            <li>
                <NavLink to={'/login'}>Login</NavLink>
            </li>
            <li>
                <NavLink
                    to={'/register'}
                    className={
                        'waves-effect waves-light btn-small no-uppercase'
                    }
                >
                    Sign Up
                </NavLink>
            </li>
        </ul>
    );
};

export default SignedOutLinks;
