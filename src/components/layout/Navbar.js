import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedInLinksSide from './SignedInLinksSide';
import SignedOutLinks from './SignedOutLinks';
import SignedOutLinksSide from './SignedOutLinksSide';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = (props) => {
    useEffect(() => {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, []);
    const { auth, profile } = props;
    const logo = auth.uid ? (
        <Link to={'/dashboard'} className={'brand-logo'}>
            devCloud
        </Link>
    ) : (
        <Link to={'/'} className={'brand-logo'}>
            devCloud
        </Link>
    );
    const links = auth.uid ? (
        <SignedInLinks profile={profile} />
    ) : (
        <SignedOutLinks />
    );
    const sideLinks = auth.uid ? (
        <SignedInLinksSide profile={profile} />
    ) : (
        <SignedOutLinksSide />
    );
    return (
        <div>
            <nav className='nav-wrapper light-blue darken-4'>
                <div className='container'>
                    {logo}
                    <Link
                        to={'#'}
                        data-target='slide-out'
                        className='sidenav-trigger'
                    >
                        <i className='material-icons'>menu</i>
                    </Link>
                    {links}
                </div>
            </nav>
            {sideLinks}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
