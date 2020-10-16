import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const SplashNav = ({ location }) => {

    return(
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
    )
};

export default withRouter(SplashNav);
