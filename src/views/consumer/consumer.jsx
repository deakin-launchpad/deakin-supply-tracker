import React, { Component } from 'react';
import API from 'helpers/api.js';

class Consumer extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    return (
      <div className="Consumer">
        <h1>
          Consumer
        </h1>
        <h2>Supplies</h2>
        <h3>At Importer {this.props.parentProps.parentState.worldState.importer}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.consumer}</h3>
        <a className="waves-effect waves-light btn" href="#!" onClick={this.buyItems}>Buy From Exporter</a>
        <a className="waves-effect waves-light btn" href="#!">Consume Supplies</a>
      </div>
    );
  }
}

export default Consumer;
