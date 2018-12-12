import React, { Component } from 'react';
import AppHelper from "helpers/AppHelper.js";
import { connect } from 'react-redux';
import { requestLogin, setUserRole, setUserGoods } from 'actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      isLoggedIn: false,
      error: false,
      errorMsg: ""
    };
  }

  errorMessage = () => {
    if (this.state.error) {
      return (
        <p><b>{this.state.errorMsg}</b></p>
      )
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      emailId: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  validationCheck = () => {
    let email = this.state.emailId
    let password = this.state.password
    if ((email.length > 0) && (password.length > 0)) {
      return true;
    }
    else {
      this.setState({
        error: true,
        errorMsg: "Email or password must not be empty!"
      })
      return false
    }
  }


  performLogin = (e) => {
    e.preventDefault();
    if(!this.validationCheck()) return;
    this.props.dispatchLogin(this.state).then((response) => {
      if (response.error !== undefined && response.error.response.data.statusCode !== 200) {
        console.log(response.error.response.data.message);
        this.setState({
          error: true,
          errorMsg: response.error.response.data.message
        })
        return
      }
      const userRole = response.payload.data.data.userDetails.role.toLowerCase();
      const accessToken = response.payload.data.data.accessToken;
      const userGoods = response.payload.data.data.userDetails.warehouse;
      AppHelper.loginUser(true, userRole, accessToken);
      this.props.dispatchSetUserRole(userRole);
      this.props.dispatchSetUserGoods(userGoods);
    }).catch((error) => {
      console.log(error)
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
              <a className="waves-effect waves-light btn" onClick={this.performLogin} href="#!"> Login </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: (data) => dispatch(requestLogin(data)),
    dispatchSetUserRole: (userRole) => dispatch(setUserRole(userRole)),
    dispatchSetUserGoods: (userGoods) => dispatch(setUserGoods(userGoods))
  }
}

export default connect(null, mapDispatchToProps)(Login);

