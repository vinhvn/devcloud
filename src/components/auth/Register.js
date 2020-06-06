import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../store/actions/authActions';

class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state);
    };

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to={'/dashboard'} />;
        return (
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id={'email'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id={'password'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            id={'firstName'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            id={'lastName'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='input-field'>
                        <button className='btn light-blue darken-2 z-depth-0 no-uppercase'>
                            Register
                        </button>
                        <div className='red-text center'>
                            {authError ? <h6>{authError}</h6> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
