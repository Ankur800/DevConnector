import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    // props.setAlert
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            //console.log('Success');
            register({ name, email, password });
        }
    };

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <Fragment>
            <div className='register-div'>
                <div className='logo'>
                    <img
                        className='logo-img'
                        src='./images/icon.png'
                        alt='logo'
                    />
                </div>
                <div className='title'>A Developers Community</div>
                <div className='sub-title'>By ReAnk Studio</div>
                <div className='fields'>
                    <form className='form' onSubmit={(e) => onSubmit(e)}>
                        <div className='row'>
                            <div
                                className='username col-lg-5'
                                style={{ marginRight: 120 }}
                            >
                                <svg
                                    className='svg-icon'
                                    fill='#999'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z'></path>
                                </svg>
                                <input
                                    type='username'
                                    className='user-input'
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className='username col-lg-5'>
                                <svg
                                    className='svg-icon'
                                    fill='#999'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z'></path>
                                </svg>
                                <input
                                    type='email'
                                    className='user-input'
                                    placeholder='Email Address'
                                    name='email'
                                    value={email}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div
                                className='password col-lg-5'
                                style={{ marginRight: 120 }}
                            >
                                <svg
                                    className='svg-icon'
                                    fill='#999'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'></path>
                                </svg>
                                <input
                                    type='password'
                                    className='pass-input'
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className='password col-lg-5'>
                                <svg
                                    className='svg-icon'
                                    fill='#999'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878'></path>
                                </svg>
                                <input
                                    type='password'
                                    className='pass-input'
                                    placeholder='Confirm Password'
                                    name='password2'
                                    value={password2}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                        </div>
                        <button className='signin-button'>Login</button>
                    </form>
                    <div className='create-account'>
                        <p className='my-1'>
                            Already have an account?{' '}
                            <Link className='link-register' to='/login'>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
