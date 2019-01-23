import React, { Component } from 'react';
import API from 'helpers/api.js';
import bodyLogo from "images/farmer.png";

class Importer extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    console.log('Importer ', this.props)
    return (
      <div className="Importer">
        <p className="main-title">
          Importer
        </p>
        <img className="image" src={bodyLogo} alt="importer-img"/>
        <div className="view-container">
          <div className="row">
            <div className="col s12">
              <b> Supplies </b>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> At Exporter </span> <br/>
              <span className="container-sub-heading"> Supplies currently at the exporter </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.exporter}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> Warehouse </span> <br />
              <span className="container-sub-heading"> Supplies currently in Warehouse </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.userGoods}
              </div>
            </div>
          </div>
          <div className="row center-align hide">
            <div className="col s12">
              <button className="waves-effect submitBtn waves-light btn" id="buy-from-importer-button" onClick={this.buyItems}>Buy From Exporter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Importer;
