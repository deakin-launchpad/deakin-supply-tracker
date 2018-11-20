import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer page-footer">
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
