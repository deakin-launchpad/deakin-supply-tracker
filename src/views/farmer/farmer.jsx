import React, { Component } from 'react';

class Farmer extends Component {
  render() {
    console.log('farmer ', this.props)
    return (
      <div className="Farmer">
        <h1>
          Farmer {this.props.user.counter}
        </h1>

      </div>
    );
  }
}

export default Farmer;
