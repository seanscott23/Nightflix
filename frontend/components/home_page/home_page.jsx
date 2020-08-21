// create a separate nav bar component just for the home page
//then import that there


import React from 'react';
import GreetingContainer from '../greeting/greeting_container';


class HomePageForm extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

   

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <nav>
                <div>
                    < GreetingContainer/>
                </div>
            </nav>
        );
    }
}



export default HomePageForm;
