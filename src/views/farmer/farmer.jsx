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
      <div className="Farmer bodyDiv">
        <p className="heading">
          Farmer
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
              <span className="text"> At Consumer </span> <br/>
              <span className="subText"> Supplies currently at the consumer </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
              {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text"> Warehouse </span> <br />
              <span className="subText"> Supplies currently in your personal inventory </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.userGoods}
              </div>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s6">
              <button className="waves-effect submitBtn waves-light btn modal-trigger" data-target="modal1">Increase Supplies</button>
            </div>
            <div className="col s6 left-align">
              <a href="/market" className="waves-effect submitBtn waves-light btn">Go To Market</a>
            </div>
            <div className="col s12 center-align">
              <a href="/myBids" className="waves-effect submitBtn waves-light btn">My Bids</a>
            </div>
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Farmer;
