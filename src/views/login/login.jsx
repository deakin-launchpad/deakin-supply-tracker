import React, { Component } from 'react';
import importedApi from 'helpers/api.js';
const API = new importedApi();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false,
      loginRole: ''
    };
  }

  handleEmailChange=(e)=>{
    console.log(e.target.id)
    this.setState({
      emailId: e.target.value
    });
  }

  handlePasswordChange=(e)=>{
    this.setState({
      password: e.target.value
    });
  }

  performLogin = () => {
    API.loginUser(this.state,this.props.parentProps.parentStateHandler)
  }

  render() {
    return (
      <div className="Login">
        <h1>
          {this.props.parentProps.parentState.title}
        </h1>
        <div className='row'>
          <div className='row'>
            <div className='col s6 offset-s3'>
              <input placeholder="Email" id="email" type="email" className="validate" onChange={this.handleEmailChange} />
              <input placeholder="Password" id="password" type="password" className="validate" onChange={this.handlePasswordChange} />
              <a className="waves-effect waves-light btn" onClick={this.performLogin}>
                <i className="material-icons left">cloud</i>Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
