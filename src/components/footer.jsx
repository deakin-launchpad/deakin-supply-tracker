import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer page-footer">
        <div className = "row">
            <h5>Supplies {this.props.worldSupplies}</h5>
        </div>
        <div className = "footer-copyright">
            <div className = "container">
              <a href="/world" className="waves-effect waves-light btn center">World State</a> 
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
