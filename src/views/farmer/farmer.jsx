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
        <div className="row">
          <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input placeholder="Name" id="name" type="text" className="validate" onChange={this.handleChange} value={this.state.name}/>
                  <label className="active" htmlFor="name">Name</label>
                </div>
              </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">attach_money</i>
                <input placeholder="Price" id="price" type="number" className="validate" onChange={this.handleChange} value={this.state.price}/>
                <label className="active" htmlFor="price">Price</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">shop</i>
                <input id="amount" type="number" className="validate" onChange={this.handleChange} value={this.state.amount}/>
                <label className="active" htmlFor="amount">Amount</label>
              </div>
            </div>
          </form>
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
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Farmer;
