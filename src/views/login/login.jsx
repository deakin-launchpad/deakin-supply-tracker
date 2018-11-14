import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import importedApi from 'helpers/api.js';
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
    console.log(e.target.id)
    this.setState({
      password: e.target.value
    });
  }

 

  performLogin = () => {
   // console.log('login state',this.props.user.user.isLoggedIn)
   
    API.loginUser(this.state,this.props.user.handler)
    
    

    //this.props.user.user.handler('hello')
    //API.loginUser(this.state);
  }

  render() {
    console.log('propsmkmk',this.props)
    return (
      <div className="Login">
        <h1>
          {this.props.user.user.title}
        </h1>
        <div className='row'>

          <div className='row'>
                <div className='col s6 offset-s3'>
                <input placeholder="Placeholder" id="email" type="email" className="validate" onChange={this.handleChange} />
                <input placeholder="Placeholder" id="password" type="password" className="validate" onChange={this.handleChange} />
                <a className="waves-effect waves-light btn" onClick={this.performLogin}><i className="material-icons left">cloud</i>Login</a>


                </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
