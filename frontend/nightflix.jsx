import React from 'react';
import ReactDom from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';
import {signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.signup = signup;
    ReactDom.render(<h1>React isn't broken</h1>, root);
})