import React from 'react';
import { Link } from 'react-router-dom';


const HomeNav = ({ currentUser, logout, location}) => {


        if(!currentUser){
            return null
        }
        return (
      
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
                    <button>
                        <i className="fas fa-search">
                            <input type="text" placeholder="Search" />
                        </i>
                    </button>
                <button className="logout-button" onClick={logout}>Log Out</button>
            </div> 
        </nav>
        )

    };

export default HomeNav;
