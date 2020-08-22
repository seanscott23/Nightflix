import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout, location}) => {
    const splashNav = () => (
        <nav className="nav-bar">
            <div className="left-bar">
               <h1 id="nightflix-logo">NIGHTFLIX</h1>
            </div>
        {(location.pathname !== '/login') ?
            <div className="right-bar">
                <Link className="splash-sign-in" to="/login">Sign In</Link>
            </div>
            : null}
        </nav>
    );
    const homeNav = () => (
        <nav className="home-nav-bar">
            <div className="left-nav">
                <h1 id="nightflix-logo">NIGHTFLIX</h1>
                <ul className="home-tabs">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="right-nav">
                <button className="logout-button" onClick={logout}>Log Out</button>
            </div> 

        </nav>
    );

    return currentUser ? homeNav() : splashNav();
};

export default NavBar;
