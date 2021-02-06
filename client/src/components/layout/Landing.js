import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div className='index-body'>
            <div className='loader'>
                <h2>DevConnector</h2>
            </div>
            <div className='index-des'>
                <h3>
                    Create a developer profile/portfolio, share posts and get
                    help from other developers
                </h3>
            </div>
            <Link className='index-links' to='/register'>
                <button className='index-signup-btn'>Sign Up</button>
            </Link>

            <Link className='index-links' to='/login'>
                <button className='index-login-btn'>Login</button>
            </Link>
        </div>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
