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
      <div className="Importer bodyDiv">
        <p className="heading">
          Importer
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
              <span className="text"> At Exporter </span> <br/>
              <span className="subText"> Supplies currently at the exporter </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.exporter}
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
            <button className="waves-effect submitBtn waves-light btn" onClick={this.buyItems}>Buy From Exporter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Importer;
