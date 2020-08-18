import React from 'react';
import ReactDom from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    ReactDom.render(<h1>React isn't broken</h1>, root);
})