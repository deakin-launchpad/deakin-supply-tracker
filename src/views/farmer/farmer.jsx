import React, { Component } from 'react';

class Farmer extends Component {
  render() {
    return (
      <div className="Farmer">
        <h1>
          Farmer
        </h1>
        <h2>Supplies</h2>
        <h3>At Consumer {this.props.parentProps.parentState.worldState.consumer}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.farmer}</h3>
        <a className="waves-effect waves-light btn" href={"javascript:;"}>Increase supplies</a>
      </div>
    );
  }
}

export default Farmer;
