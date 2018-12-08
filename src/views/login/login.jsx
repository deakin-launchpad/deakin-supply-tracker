import React, { Component } from 'react';
import AppHelper from "helpers/AppHelper.js";
import { connect } from 'react-redux';
import { requestLogin, setUserRole } from 'actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      isLoggedIn: false,
      error: false,
    };
  }

  errorMessage = () => {
    if(this.state.error) {
      return (
        <p><b>Invalid credentials!</b></p>
      )
    }
  }

  handleEmailChange=(e)=> {
    this.setState({
      emailId: e.target.value
    });
  }

  handlePasswordChange=(e)=> {
    this.setState({
      password: e.target.value
    });
  }

  validationCheck = () => {
    let email = this.state.emailId
    let password = this.state.password
    if ((email.length > 0) && (password.length > 0)) {
      this.performLogin()
    } else {
      this.setState({
        error: true
      })
    }
  }

  performLogin = () => {
    this.props.dispatchLogin(this.state).then((response) => {
      const userRole = response.payload.data.data.userDetails.role.toLowerCase();
      const accessToken = response.payload.data.data.accessToken;
      AppHelper.loginUser(true, userRole, accessToken);
      this.props.dispatchSetUserRole(userRole);
    });
    // API.loginUser(this.state,this.props.parentProps.parentStateHandler)
  }

  render() {
    return (
      <div className="Login">
        <h1>
          {this.props.parentState.title}
        </h1>
        <div className='row'>
          <div className='row'>
            <div className='col s6 offset-s3'>
              <input placeholder="Email" id="email" type="email" className="validate" onChange={this.handleEmailChange} />
              <input placeholder="Password" id="password" type="password" className="validate" onChange={this.handlePasswordChange} />
              {this.errorMessage()}
              <a className="waves-effect waves-light btn" onClick={this.validationCheck} href="#!"> Login </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin  : (data) => dispatch(requestLogin(data)),
    dispatchSetUserRole : (userRole) => dispatch(setUserRole(userRole))
  }
}

export default connect(null, mapDispatchToProps)(Login);
