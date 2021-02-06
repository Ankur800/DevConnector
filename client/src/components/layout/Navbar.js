import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import auth from '../../reducers/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to='/dashboard'>
                    <i className='fas fa-user'></i>{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link onClick={logout} className='nav-link' to='#!'>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to='#!'>
                    Developers
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                    Register
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                    Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar navbar-expand-lg navbar-dark nav-bg'>
            <Link className='navbar-brand brand-font' to='/'>
                <i className='fas fa-code'></i> DevConnector
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                {!loading && (
                    <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                    </Fragment>
                )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
