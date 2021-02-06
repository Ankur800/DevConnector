import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = (props) => {
    return (
        <div className='dashboard-div-welcome'>
            <h2>
                <i className='fas fa-user edu-icon'></i> Welcome {props.name}
            </h2>
            <div className='row'>
                <div className='col-lg-4'>
                    <Link to='/edit-profile'>
                        <button className='dashboard-welcome-btn'>
                            <i className='fas fa-user-circle edu-icon'></i> Edit
                            Profile
                        </button>
                    </Link>
                </div>
                <div className='col-lg-4'>
                    <Link to='/add-experience'>
                        <button className='dashboard-welcome-btn'>
                            <i className='fab fa-black-tie edu-icon'></i> Add
                            Experience
                        </button>
                    </Link>
                </div>
                <div className='col-lg-4'>
                    <Link to='/add-education'>
                        <button className='dashboard-welcome-btn'>
                            <i className='fas fa-graduation-cap edu-icon'></i>{' '}
                            Add Education
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardActions;
