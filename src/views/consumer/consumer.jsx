import React, { Component } from 'react';
import API from 'helpers/api.js';
import bodyLogo from "images/farmer.png";

class Consumer extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    return (
      <div className="Consumer bodyDiv">
        <p className="heading">
          Consumer
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
              <span className="text"> At Importer </span> <br/>
              <span className="subText"> Supplies currently at the importer</span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.importer}
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
                {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row center">
            <button className="waves-effect submitBtn waves-light btn" onClick={this.buyItems}>Buy From Importer</button>
            <br />
            <button className="waves-effect submitBtn waves-light btn margin-top">Consume Supplies</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Consumer;
