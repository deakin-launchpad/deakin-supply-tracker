import React, { Component } from 'react';
import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class Header extends Component {
  logout = () => {
    AppHelper.logoutUser(this.props.logout)
  }
  render() {

    // console.log('props',this.props)
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">{this.props.title}</a>
            <ul className="right">
             <li> <a onClick={this.logout } className="waves-effect waves-light btn" href="#!">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
