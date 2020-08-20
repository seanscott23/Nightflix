import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
