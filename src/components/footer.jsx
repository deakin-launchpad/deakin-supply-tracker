import React, { Component } from 'react';
import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <a href="/world" className="waves-effect waves-light btn">World State</a>
            Supplies {this.props.worldSupplies}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
