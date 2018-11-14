import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Supply Chain</a>
            <ul id="nav-mobile" className="right">
              <li><Link to={this.props.loggedIn ? "/user/logout" : "/user/login"}>{this.props.loggedIn ? "Logout" : "Login"}</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
