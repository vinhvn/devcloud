import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    const { profile } = props;
    return (
        <ul className={'right hide-on-med-and-down'}>
            <li>
                <NavLink to={'/create'}>New Project</NavLink>
            </li>
            <li>
                <Link to={'#'} onClick={props.logout}>
                    Log Out
                </Link>
            </li>
            <li>
                <NavLink
                    to={'/dashboard'}
                    className={'btn btn-floating light-blue darken-2'}
                >
                    {profile.initials}
                </NavLink>
            </li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
