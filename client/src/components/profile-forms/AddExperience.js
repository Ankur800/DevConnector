import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false); //if working there

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <div className='add-education-head'>
                <div className='logo-dashboard'>
                    <img
                        className='logo-img'
                        src='./images/icon.png'
                        alt='logo'
                    />
                </div>
                <h1 className='dashboard-heading'>Add An Experience</h1>
            </div>
            <h3 className='add-education-des add-exp-des'>
                <i className='fas fa-code-branch'></i> Add any
                developer/programming positions that you have had in the past
            </h3>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addExperience(formData, history);
                }}
            >
                <div className='add-education-div'>
                    <small>* = required field</small>
                    <br />
                    <input
                        className='add-education-input'
                        type='text'
                        placeholder='* Job Title'
                        name='title'
                        value={title}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        className='add-education-input'
                        type='text'
                        placeholder='* Company'
                        name='company'
                        value={company}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        className='add-education-input'
                        type='text'
                        placeholder='Location'
                        value={location}
                        onChange={(e) => onChange(e)}
                        name='location'
                    />
                    <h5>From Date</h5>
                    <input
                        className='add-education-input'
                        type='date'
                        name='from'
                        value={from}
                        onChange={(e) => onChange(e)}
                    />
                    <label className='add-education-label'>
                        <input
                            className='add-education-checkbox'
                            name='current'
                            type='checkbox'
                            value={current}
                            checked={current}
                            onChange={(e) => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                        />
                        <i
                            className='fa-class fa fa-check'
                            aria-hidden='true'
                        ></i>
                        <h5 className='add-edu-checkbox-des'>Current Job</h5>
                    </label>
                    <h5>To Date</h5>
                    <input
                        className='add-education-input'
                        type='date'
                        name='to'
                        value={to}
                        onChange={(e) => onChange(e)}
                        disabled={toDateDisabled ? 'disabled' : ''}
                    />
                    <div className='add-edu-textarea'>
                        <textarea
                            name='description'
                            cols='30'
                            rows='5'
                            placeholder='Job Description'
                            value={description}
                            onChange={(e) => onChange(e)}
                        ></textarea>
                    </div>
                    <input type='submit' className='add-edu-btn' />
                    <Link to='/dashboard'>
                        <button className='add-edu-btn-back'>Go Back</button>
                    </Link>
                </div>
            </form>
        </Fragment>
    );
};

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
