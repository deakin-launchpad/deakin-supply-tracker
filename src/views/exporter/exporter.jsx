import React, { Component } from 'react';

class Exporter extends Component {
  render() {
    console.log('Exporter ', this.props)
    return (
      <div className="Exporter">
        <h1>
          Exporter
        </h1>
        <h2>Supplies</h2>
        <h3>At Farmer {this.props.parentProps.parentState.worldState.farmer}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.exporter}</h3>
        <a className="waves-effect waves-light btn" href="#!">Buy From Farmer</a>
      </div>
    );
  }
}

export default Exporter;
