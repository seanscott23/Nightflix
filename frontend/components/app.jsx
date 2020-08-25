import React from "react";

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './Splash_Container/splash_container';
import {
    Route
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './Nav-bar/nav_bar_container';
import HomePageContainer from "./home_page/home_page_container";
import VideosContainer from './videos/videos_container';

const App = () => (
    <div>
        <div className="netflix-img">
            <NavBarContainer />
          
              
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/home" component={HomePageContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/videos/:videoId" component={VideosContainer}/>
        </div>
    </div>
);

export default App;