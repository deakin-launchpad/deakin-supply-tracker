import React, { Component } from 'react';
import API from 'helpers/api.js';
import Modal from 'components/modal.jsx';

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
      <div className="Farmer">
        <h1>
          Farmer
        </h1>
        <h2>Supplies</h2>
        <h3>At Consumer {this.props.parentProps.parentState.worldState.consumer}</h3>
        <h3>Warehouse {this.props.parentProps.parentState.worldState.farmer}</h3>
        <button className="waves-effect waves-light btn modal-trigger" 
          data-target="modal1">Increase Supplies</button>
        {this.renderModal()}
      </div>
    );
  }
}

export default Farmer;
