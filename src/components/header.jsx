import React, { Component } from 'react';
import AppHelper from "helpers/AppHelper.js";
import { connect } from 'react-redux';
import { requestLogout } from 'actions';
import M from "materialize-css";
import farmerLogo from "images/farmer_logo.png";
import exporterLogo from "images/exporter_logo.png";
import importerLogo from "images/importer_logo.png";
import consumerLogo from "images/consumer_logo.png";
import transporterLogo from "images/transporter_logo.png";

class Header extends Component {
  
  displayProfileImage = (userRole) => {
    if (userRole === "consumer" || userRole === "Consumer") {
      return (
        <img className="profile-image-header" src={consumerLogo} alt="consumerLogo" />
      )
    }
    else if (userRole === "importer" || userRole === "Importer") {
      return (
        <img className="profile-image-header" src={importerLogo} alt="importerLogo" />
      )
    }
    else if (userRole === "exporter" || userRole === "Exporter") {
      return (
        <img className="profile-image-header" src={exporterLogo} alt="exporterLogo" />
      )
    }
    else if (userRole === "transporter" || userRole === "Transporter") {
      return (
        <img className="profile-image-header" src={transporterLogo} alt="transporterLogo" />
      )
    }
    else {
      return (
        <img className="profile-image-header" src={farmerLogo} alt="farmerLogo" />
      )
    }
  }
  logout = (e) => {
    e.preventDefault();
    this.props.dispatchLogout()
    AppHelper.logoutUser()
  }
  componentDidMount(){
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }

  render() {
    return (
      <header>
        <ul className="sidenav" id="mobile-demo">
          <li>{this.displayProfileImage(this.props.userRole || AppHelper.getUserRole())}</li>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/market">Request Market</a></li>
          <li><a href="/myBids">My Bids</a></li>
          <li><a href="/myRequests">My Pending Requests</a></li>
          <li><a href="/ongoingRequests">My Ongoing Requests</a></li>
        </ul>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">{this.props.title}</a>
              <ul className="left">
                <li><a href="#!" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a></li>
              </ul>
              <ul className="right">
                <li><a onClick={this.logout} className="waves-effect waves-light right logout-button" id="logout-button" href="#!"><i className="material-icons right">exit_to_app</i><span className="hide-on-small-only">Logout</span></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogout: () => dispatch(requestLogout())
  }
}

export default connect(null, mapDispatchToProps)(Header);
