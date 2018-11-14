import React, { Component } from 'react';
import CenterCard from 'components/CenterCard';
import FlatButton from 'components/FlatButton/index';
import TextInput from 'components/TextInput/index';
import './style.css';
// Import api.js
import importedApi from 'api.js';
import ImportedAppHelper from "helpers/AppHelper.js";
const API = new importedApi();
const AppHelper = new ImportedAppHelper();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      confirmPassword: '',
      loggedIn: false,
      loginRole: ''
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
    if (AppHelper.isUserLoggedIn() && AppHelper.getUserRole() !== null) {
      window.location.replace("/" + AppHelper.getUserRole());
      return null;
    }
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
