import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class Header extends Component {
  constructor(props) {
    super(props);
  }

  logout=()=>{
    
    AppHelper.logoutUser(this.props.logout)
  }
  render() {

    console.log('props',this.props)
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">{this.props.title}</a>
            <ul className="right hide-on-med-and-down">
             <li> <a onClick={this.logout } className="waves-effect waves-light btn">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
