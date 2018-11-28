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
        <p className="titleText">
          Importer
        </p>
        <img className="bodyImg" src={bodyLogo} alt="Farmer"/>
        <div className="mainDiv">
          <div className="row">
            <div className="col s12 boldFont">
              Supplies
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text1"> At Exporter </span> <br/>
              <span className="text2"> Supplies currently at the exporter </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.exporter}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text1"> Warehouse </span> <br />
              <span className="text2"> Supplies currently in Warehouse </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.importer}
              </div>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect submitBtn waves-light btn" onClick={this.buyItems}>Buy From Exporter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Importer;
