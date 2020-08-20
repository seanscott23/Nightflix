import React from "react";

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {
    Route
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <div class="netflix-img">
        <header>
           <h1 id="nightflix-logo">NIGHTFLIX</h1>
           <div></div>
        </header>
            <div class="sign-in-block">
                
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
          
                {/* <Route path="/" component={LoginFormContainer} /> */}
            </div>
        </div>
    </div>
);

export default App;