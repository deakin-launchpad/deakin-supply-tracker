import React, { Component } from 'react';
import "./style.css";
import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class Actor extends Component {
  render() {
    if (AppHelper.isUserLoggedIn()) {
      let windowLocationUserRole = window.location.href.substr(window.location.href.lastIndexOf('/'));
      console.log("location: " + windowLocationUserRole);
      if (windowLocationUserRole !== "/" + AppHelper.getUserRole()) {
        window.location.replace("/" + AppHelper.getUserRole());
        return null;
      }
    } else {
      window.location.replace("/");
      return null;
    }
    return (
        <div className="red-text">

        </div>
    );
  }
}

export default Actor;
