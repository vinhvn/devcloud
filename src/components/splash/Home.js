import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const { auth } = props;
    if (auth.uid) return <Redirect to={'/dashboard'} />;
    return (
        <div className='valign-wrapper white home'>
            <div className='container grey-text text-darken-3'>
                <p className='flow-text'>Welcome to</p>
                <h2 className='title'>devCloud</h2>
                <blockquote className={'flow-text'}>
                    Click a button below to get started.
                </blockquote>
                <div className={'home-buttons'}>
                    <Link
                        to={'/login'}
                        className={
                            'waves-effect waves-teal btn grey darken-3 no-uppercase'
                        }
                    >
                        Login
                    </Link>
                    <Link
                        to={'/register'}
                        className={
                            'waves-effect waves-teal btn light-blue darken-2 no-uppercase'
                        }
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(Home);
