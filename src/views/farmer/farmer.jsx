import React, { Component } from 'react';
import API from 'helpers/api.js';
import Modal from 'components/modal.jsx';
import bodyLogo from "images/farmer.png";

class Farmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: 0,
      price: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  renderModal = () => {
    return (
      <Modal title="Create items" id='modal1'>
        <div className="input-field col s6">
          <input placeholder="Name" id="name" type="text" 
            className="validate" onChange={this.handleChange} value={this.state.name}/>
          <input placeholder="Amount" id="amount" type="text" 
            className="validate" onChange={this.handleChange} value={this.state.amount}/>
          <input placeholder="Price" id="price" type="text" 
            className="validate" onChange={this.handleChange} value={this.state.price}/>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-light btn-flat">Cancel</a>
          <a href="#!" className="modal-close waves-effect waves-light btn-flat" 
            onClick={this.increaseSupplies}>Submit</a>
        </div>
      </Modal>
    );
  }

  increaseSupplies = () => {
    API.createItems(this.state)
  }
  render() {
    return (
      <div className="Farmer bodyDiv">
        <p className="titleText">
          Farmer
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
              <span className="text1"> At Consumer </span> <br/>
              <span className="text2"> Supplies currently at the consumer </span>
            </div>
            <div className="col s3 ">
              <div className="valueBox"> 
              {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <span className="text1"> Warehouse </span> <br />
              <span className="text2"> Supplies currently in your personal inventory </span>
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.farmer}
              </div>
            </div>
          </div>
          <div className="row center-align">
            <button className="waves-effect submitBtn waves-light btn modal-trigger" data-target="modal1">Increase Supplies</button>
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Farmer;
