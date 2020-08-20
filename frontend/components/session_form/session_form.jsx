import React from 'react';
import GreetingContainer from '../greeting/greeting_container';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
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
    return(
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box reg-text">
          <br/>

          <h1 className="auth-title">{this.props.formType} </h1>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input pass"
              />
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>

      <GreetingContainer formType={this.props.formType}/>

      </div>
    );
  }
}



export default SessionForm;
