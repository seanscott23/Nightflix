import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';


const HomeNav = ({ currentUser, logout, props, location}) => {


        if(!currentUser){
            return null
        }
        return (
      
        <nav className="home-nav-bar">
            <div className="left-nav">
                <h1 id="nightflix-logo">NIGHTFLIX</h1>
                <ul className="home-tabs">
                        <li> <Link className="home-link" onClick={() => history.goBack()}>Home</Link></li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="right-nav">
                    <div className="search-box"> <input className="search-bar-home" type="text" placeholder="Search" /></div>
               
                <button className="logout-button" onClick={logout}>Log Out</button>
            </div> 
        </nav>
        )

    };

export default withRouter(HomeNav);
