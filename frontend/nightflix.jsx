import React from 'react';
import ReactDom from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDom.render(<h1>React isn't broken</h1>, root);
})