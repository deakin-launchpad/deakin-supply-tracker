import React, { Component } from 'react';

class Consumer extends Component {
  render() {
    return (
      <div className="Consumer">
        <h1>
          Consumer
        </h1>
        <h2>Supplies</h2>
        <h3>At Importer {this.props.parentProps.parentState.worldState.importer}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.consumer}</h3>
        <a className="waves-effect waves-light btn" href="#!">Buy From Exporter</a>
        <a className="waves-effect waves-light btn" href="#!">Consume Supplies</a>
      </div>
    );
  }
}

export default Consumer;
