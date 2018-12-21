import React, { Component } from 'react';
import API from 'helpers/api.js';
import M from "materialize-css";

class CreateItemRequestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemAmount: '',
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
    var elems = document.querySelectorAll('.dateOfDelivery');
    M.Datepicker.init(elems, {selectMonths: true});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  createItemRequest = () => {
    API.createItemRequest(this.state.itemName, this.state.itemAmount)
  }

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id ="modal1" className="modal">
        <div className="modal-content">
          <p>Create Item Request</p>
          <div className="divider"></div>
            <form>
              <div className="input-field col s12">
                <input id="itemName" type="text" className="validate" onChange={this.handleChange} value={this.state.itemName}/>
                <label className="active" htmlFor="itemName">Name of Item</label>
              </div>
              <div className="input-field col s12">
                <input id="itemAmount" type="number" className="validate" onChange={this.handleChange} value={this.state.itemAmount}/>
                <label className="active" htmlFor="priceOffered">Number of Items</label>
              </div>
            </form>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-light btn-flat left">Cancel</button>
          <button className="modal-close waves-effect waves-light btn-flat right" onClick={this.createItemRequest}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CreateItemRequestModal;
