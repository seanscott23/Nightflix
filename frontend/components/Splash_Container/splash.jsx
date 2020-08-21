import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="splash-page">
                <div className="ad-text">
                    <h1>Unlimited movies, TV</h1>
                    <h1>shows, and more.</h1>
                    <span>Watch anywhere. Cancel anytime.</span>
                </div>
            </div>
        )
    }
}

export default SplashForm;