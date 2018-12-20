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
      <div className="Exporter bodyDiv">
        <p className="heading">
          Exporter
        </p>
        <img className="bodyImg" src={bodyLogo} alt="Farmer"/>
        <div className="containerDiv">
          <div className="row">
            <div className="col s12 boldFont">
              Supplies
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text"> At Farmer </span> <br/>
              <span className="subText"> Supplies currently at the farmer </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.farmer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text"> Warehouse </span> <br />
              <span className="subText"> Supplies currently in Warehouse </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.userGoods}
              </div>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s6">
              <button className="waves-effect submitBtn waves-light btn" onClick={this.buyItems}>Buy From Farmer</button>
            </div>
            <div className="col s6 left-align">
              <a href="/market" className="waves-effect submitBtn waves-light btn">Go To Market</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exporter;
