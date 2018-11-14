import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
    handleChange=()=>{
        console.log(e.target.value)

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
      return(
          <div className='row'>
                <div>
                <input placeholder="Placeholder" id="email" type="email" class="validate" onChange={this.handleChang()} />
                <input placeholder="Placeholder" id="password" type="password" class="validate" onChange={this.handleChang()} />
                </div>
          </div>
      )
      
    }
  }

export default Login;
