import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer page-footer">
        <div className = "footer-copyright">
            <div className = "container">
              <p className="left">Supplies {this.props.worldSupplies}</p>
              <a href="/world" className="waves-effect waves-light btn center">World State</a> 
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
