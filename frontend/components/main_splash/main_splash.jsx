import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SplashContainer from '../Splash_Container/splash_container';
import SplashNav from '../Nav-bar/splash_nav';
import {AuthRoute} from '../../util/route_util'
import { withRouter } from 'react-router-dom';
import HomeNav from '../Nav-bar/home_nav'
class MainSplash extends React.Component {

    render() {
        if(this.props.currentUser){
            return(
                <div>
                 {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
                <AuthRoute exact path="/" component={SplashContainer} /> 
                <HomeNav/>
                </div>
            )
        }else{
        return (
            <div className=" netflix-img">
                <SplashNav />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
            </div>
        )
    }
    }
}

export default MainSplash;