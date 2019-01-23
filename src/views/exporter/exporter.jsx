import React, { Component } from 'react';
import API from 'helpers/api.js';
import bodyLogo from "images/farmer.png";

class Exporter extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    console.log('Exporter ', this.props)
    return (
      <div className="Exporter">
        <p className="main-title">
          Exporter
        </p>
        <img className="image" src={bodyLogo} alt="exporter-img"/>
        <div className="view-container">
          <div className="row">
            <div className="col s12">
              <b> Supplies </b>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> At Farmer </span> <br/>
              <span className="container-sub-heading"> Supplies currently at the farmer </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.farmer}
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
              <button className="waves-effect submitBtn waves-light btn" onClick={this.buyItems} id="buy-from-exporter-button">Buy From Farmer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exporter;
