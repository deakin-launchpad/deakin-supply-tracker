import React, { Component } from 'react';
import API from 'helpers/api.js';

class Importer extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    console.log('Importer ', this.props)
    return (
      <div className="Importer">
        <h1>
          Importer
        </h1>
        <h2>Supplies</h2>
        <h3>At Exporter {this.props.parentProps.parentState.worldState.exporter}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.importer}</h3>
        <a className="waves-effect waves-light btn" href="#!" onClick={this.buyItems}>Buy From Exporter</a>
      </div>
    );
  }
}

export default Importer;
