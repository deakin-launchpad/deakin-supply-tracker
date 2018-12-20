import React, { Component } from 'react';
import API from 'helpers/api.js';
import M from "materialize-css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: 0,
      price: 0
    }
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      startingTop: "4%",
      endingTop: "10%",
      dismissible: true
    };
    M.Modal.init(this.Modal, options);
  }


  increaseSupplies = () => {
    API.createItems(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id ="modal1" className="modal">
        <div className="modal-content">
          <h4>{this.props.title}</h4>
          <div className="divider"></div>
        </div>
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
      </div>
    );
  }
}

export default Modal;
