import React, { Component } from 'react';
import IncreaseSuppliesModal from 'components/modal/increaseSuppliesModal.jsx';
import bodyLogo from "images/farmer.png";

class Farmer extends Component {
  renderModal = () => {
    return (
      <IncreaseSuppliesModal title="Create items" id='modal1'/>
    );
  }

  render() {
    return (
      <div className="Farmer">
        <p className="main-title">
          Farmer
        </p>
        <img className="image" src={bodyLogo} alt="farmer-img"/>
        <div className="view-container">
          <div className="row">
            <div className="col s12">
              Supplies
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> At Consumer </span> <br/>
              <span className="container-sub-heading"> Supplies currently at the consumer </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
              {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="container-heading"> Warehouse </span> <br />
              <span className="container-sub-heading"> Supplies currently in your personal inventory </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.userGoods}
              </div>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s12">
              <button className="waves-effect submitBtn waves-light btn modal-trigger" id="increase-supplies-button" data-target="modal1">Increase Supplies</button>
            </div>
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Farmer;
