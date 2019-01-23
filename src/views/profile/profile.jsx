import React, { Component } from 'react';
import API from 'helpers/api.js';
import LoadingComponent from 'components/loading/loading.jsx';
import farmerLogo from "images/farmer_logo.png";
import exporterLogo from "images/exporter_logo.png";
import importerLogo from "images/importer_logo.png";
import consumerLogo from "images/consumer_logo.png";
import transporterLogo from "images/transporter_logo.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusCode: '',
      profileData: ''
    }
  }

  stateHandler = (temp) => {
    this.setState(temp)
  }

  getMarketRequest = () => {
    API.getProfileRequest(this.stateHandler);

  }

  capitalizeString = (string) => {
    return string.charAt(0) + string.slice(1).toLowerCase();
}

  displayProfileImage = (userRole) => {
    if (userRole === "CONSUMER") {
      return (
        <img className="profile-image" src={consumerLogo} alt="consumerLogo" />
      )
    }
    else if (userRole === "IMPORTER") {
      return (
        <img className="profile-image" src={importerLogo} alt="importerLogo" />
      )
    }
    else if (userRole === "EXPORTER") {
      return (
        <img className="profile-image" src={exporterLogo} alt="exporterLogo" />
      )
    }
    else if (userRole === "TRANSPORTER") {
      return (
        <img className="profile-image" src={transporterLogo} alt="transporterLogo" />
      )
    }
    else {
      return (
        <img className="profile-image" src={farmerLogo} alt="farmerLogo" />
      )
    }
  }

  componentDidMount() {
    this.getMarketRequest();
  }

  componentWillUpdate() {


  }

  componentDidUpdate() {
  }


  render() {
    console.log(">>>>>", this.state)
    if (this.state.statusCode === '') return (<LoadingComponent />);
    return (
      <div className="Farmer">
        <h3>Profile Page</h3>
        <div>{this.displayProfileImage(this.state.profileData.role)}</div>
        <div className="row">
          <div className="profile_section1">
            <div className="col s2"></div>
            <div className="col s8">
              <div className="col m6 s12 center-align">
                <p className="profile-field-label">First Name</p>
                <h5 className="profile-field-data">{this.state.profileData.firstName}</h5>
              </div>
              <div className="col m6 s12 center-align">
                <p className="profile-field-label">Last Name</p>
                <h5 className="profile-field-data">{this.state.profileData.lastName}</h5>
              </div>
            </div>
            <div className="col s2"></div>
            <div className="clear-fix"></div>
          </div>
          <div className="profile_section2">
            <div className="col s2"></div>
            <div className="col s8">
              <div className="col m6 s12 center-align">
                <p className="profile-field-label">Email</p>
                <h5 className="profile-field-data">{this.state.profileData.emailId}</h5>
              </div>
              <div className="col m6 s12 center-align">
                <p className="profile-field-label">User Role</p>
                <h5 className="profile-field-data">{this.capitalizeString(this.state.profileData.role)}</h5>
              </div>
            </div>
            <div className="col s2"></div>
            <div className="clear-fix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
