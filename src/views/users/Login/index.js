import React, { Component } from 'react';
import CenterCard from 'components/CenterCard';
import FlatButton from 'components/FlatButton/index';
import TextInput from 'components/TextInput/index';
import './style.css';
// Import api.js
import importedApi from 'api.js';
const API = new importedApi();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      confirmPassword: ''
    };
  }

  performLogin = () => {
    API.loginUser(this.state);
  }

  handleEmailChange = (emailId) => {
    this.setState({
      emailId: emailId
    });
  }

  handlePasswordChange = (password) => {
    this.setState({
      password: password
    });
  }

  render () {
      return (
          <CenterCard>
                      <div className="card-content white-text">
                          <TextInput 
                            id='email'
                            onChange={this.handleEmailChange}
                          />
                          <TextInput 
                            id='password' 
                            type='password'
                            onChange={this.handlePasswordChange}
                            />
                      </div>
                      <div className="card-action">
                          <FlatButton 
                            text={'LOGIN'}
                            onClick={this.performLogin}
                          />
                          <FlatButton href={'/user/register'} text={'SIGN UP'}/>
                      </div>
          </CenterCard>
      );
  }
}

export default Login;
