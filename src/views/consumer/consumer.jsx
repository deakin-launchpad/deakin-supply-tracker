import React, { Component } from 'react';
import API from 'helpers/api.js';
import bodyLogo from "images/farmer.png";

class Consumer extends Component {
  buyItems = () => {
    API.buyItems()
  }

  render() {
    return (
      <div className="Consumer">
        <p className="main-title">
          <b> Consumer </b>
        </p>
        <img className="image" src={bodyLogo} alt="consumer-img"/>
        <div className="view-container">
          <div className="row">
            <div className="col s12">
              <b> Supplies </b>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> At Importer </span> <br/>
              <span className="container-sub-heading"> Supplies currently at the importer</span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
                {this.props.parentProps.parentState.worldState.importer}
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
          <div className="row center">
            <button className="waves-effect submitBtn waves-light btn" id="buy-from-consumer-button" onClick={this.buyItems}>Buy From Importer</button>
            <br/>
            <button className="waves-effect submitBtn waves-light btn margin-top" id="consume-supplies-button">Consume Supplies</button>
            <br/>
            <a href="/market" className="waves-effect submitBtn waves-light margin-top btn" id="market-button">Go To Market</a>
            <br/>
            <a href="/myBids" className="waves-effect submitBtn waves-light btn" id="bid-button">My Bids</a>
            <br/>
            <a href="/myRequests" className="waves-effect submitBtn waves-light btn" id="request-button">My Requests</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Consumer;
