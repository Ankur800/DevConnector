import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'; // withRouter for history
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        bio: '',
        status: '',
        githubusername: '',
        skills: '',
        youtube: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            bio: loading || !profile.bio ? '' : profile.bio,
            status: loading || !profile.status ? '' : profile.status,
            githubusername:
                loading || !profile.githubusername
                    ? ''
                    : profile.githubusername,
            skills: loading || !profile.skills ? '' : profile.skills,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            instagram:
                loading || !profile.social ? '' : profile.social.instagram,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        });
    }, [loading]);

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history, true);
    };

    return (
        <Fragment>
            <div className='create-prof-head'>
                <div className='logo-dashboard'>
                    <img
                        className='logo-img'
                        src='./images/icon.png'
                        alt='logo'
                    />
                </div>
                <h1 className='dashboard-heading'>Create Your Profile</h1>
            </div>
            <h3 className='create-prof-des'>
                <i className='fas fa-user edu-icon'></i> Let's get some
                information to make your profile stand out
            </h3>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className='add-education-div'>
                    <small className='create-prof-small'>
                        * = required field
                    </small>
                    <br />
                    <select
                        className='create-profile-dropdown'
                        name='status'
                        value={status}
                        onChange={(e) => onChange(e)}
                    >
                        <option className='options' value='0'>
                            * Select Professional Status
                        </option>
                        <option value='Developer'>Developer</option>
                        <option value='Junior Developer'>
                            Junior Developer
                        </option>
                        <option value='Senior Developer'>
                            Senior Developer
                        </option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>
                            Student or Learning
                        </option>
                        <option value='Instructor'>
                            Instructor or Teacher
                        </option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='create-prof-small'>
                        Give us an idea of where you are at in your career
                    </small>
                    <input
                        className='create-prof-input'
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='create-prof-small'>
                        Could be your own company or one you work for
                    </small>
                    <input
                        className='create-prof-input'
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='create-prof-small'>
                        Could be your own or a company website
                    </small>
                    <input
                        className='create-prof-input'
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='create-prof-small'>
                        City & state suggested (eg. Boston, MA)
                    </small>
                    <input
                        className='create-prof-input'
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='create-prof-small'>
                        Please use comma separated values
                        (eg.HTML,CSS,JavaScript,PHP)
                    </small>
                    <input
                        className='create-prof-input'
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='create-prof-small'>
                        If you want your latest repos and a Github link, include
                        your username
                    </small>
                    <textarea
                        className='create-prof-input'
                        placeholder='A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                    <small className='create-prof-small'>
                        Tell us a little about yourself
                    </small>
                </div>

                <div className='create-prof-mid'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        className='create-prof-social-btn'
                        type='button'
                    >
                        Add Social Network Links
                    </button>
                    <span className='create-prof-span'>Optional</span>
                </div>

                {displaySocialInputs && (
                    <Fragment>
                        <div className='add-education-div'>
                            <div className='create-prof-social'>
                                <i className='fab fa-twitter fa-2x social-icon'></i>
                                <input
                                    className='create-prof-social-input'
                                    type='text'
                                    placeholder='Twitter URL'
                                    name='twitter'
                                    value={twitter}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className='create-prof-social'>
                                <i className='fab fa-facebook fa-2x social-icon'></i>
                                <input
                                    className='create-prof-social-input'
                                    type='text'
                                    placeholder='Facebook URL'
                                    name='facebook'
                                    value={facebook}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className='create-prof-social'>
                                <i className='fab fa-youtube fa-2x social-icon'></i>
                                <input
                                    className='create-prof-social-input'
                                    type='text'
                                    placeholder='YouTube URL'
                                    name='youtube'
                                    value={youtube}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className='create-prof-social'>
                                <i className='fab fa-linkedin fa-2x social-icon'></i>
                                <input
                                    className='create-prof-social-input'
                                    type='text'
                                    placeholder='Linkedin URL'
                                    name='linkedin'
                                    value={linkedin}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className='create-prof-social'>
                                <i className='fab fa-instagram fa-2x social-icon'></i>
                                <input
                                    className='create-prof-social-input'
                                    type='text'
                                    placeholder='Instagram URL'
                                    name='instagram'
                                    value={instagram}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                        </div>
                    </Fragment>
                )}

                <div className='create-prof-button-div'>
                    <input type='submit' className='add-edu-btn' />
                    <Link to='/dashboard'>
                        <button className='add-edu-btn-back'>Go Back</button>
                    </Link>
                </div>
            </form>
        </Fragment>
    );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
);
