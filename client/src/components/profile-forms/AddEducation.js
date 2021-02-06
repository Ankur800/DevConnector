import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
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
                <h1 className='dashboard-heading'>Add Your Education</h1>
            </div>
            <h3 className='add-education-des'>
                <i className='fas fa-graduation-cap edu-icon'></i>
                Add any school, bootcamp, etc that you have attended
            </h3>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addEducation(formData, history);
                }}
            >
                <div className='add-education-div'>
                    <small>* = required field</small>
                    <br />
                    <input
                        className='add-education-input'
                        name='school'
                        type='text'
                        placeholder='* School or Bootcamp'
                        value={school}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className='add-education-input'
                        name='degree'
                        type='text'
                        placeholder='* Degree or Certificate'
                        value={degree}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className='add-education-input'
                        name='fieldofstudy'
                        type='text'
                        placeholder='Field Of Study'
                        value={fieldofstudy}
                        onChange={(e) => onChange(e)}
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
                        <h5 className='add-edu-checkbox-des'>
                            Current School or Bootcamp
                        </h5>
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
                            placeholder='Program Description'
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
