import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout}) => {
    const splashNav = () => (
        <nav className="nav-bar">
            <div className="left-bar">
               <h1 id="nightflix-logo">NIGHTFLIX</h1>
            </div>

            <div className="right-bar">
                <Link className="splash-sign-in" to="/login">Sign In</Link>
            </div>
        </nav>
    );
    const homeNav = () => (
        <nav className="nav-bar">
            <div className="left-nav">
                <h1 id="nightflix-logo">NIGHTFLIX</h1>
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Tv Shows</li>
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
