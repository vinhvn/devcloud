import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import landscape from './landscape-sb.png';

const SignedInLinksSide = (props) => {
    const { profile } = props;
    return (
        <ul className={'sidenav light-blue darken-4'} id={'slide-out'}>
            <li>
                <div className='user-view'>
                    <div className='background'>
                        <img src={landscape} alt='mountains' />
                    </div>
                    <NavLink
                        to={'/dashboard'}
                        className={'btn btn-floating light-blue darken-2'}
                    >
                        {profile.initials}
                    </NavLink>
                    <span className='white-text email'>
                        {profile.firstName} {profile.lastName}
                    </span>
                </div>
            </li>
            <li>
                <NavLink to={'/dashboard'} className={'btn-flat white-text'}>
                    devCloud
                </NavLink>
            </li>
            <li>
                <NavLink to={'/create'} className={'btn-flat white-text'}>
                    New Project
                </NavLink>
            </li>
            <li>
                <Link
                    to={'#'}
                    onClick={props.logout}
                    className={'btn-flat white-text'}
                >
                    Log Out
                </Link>
            </li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinksSide);
