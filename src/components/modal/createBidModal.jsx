import React, { Component } from 'react';
import API from 'helpers/api.js';
import M from "materialize-css";
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: this.props.requestId,
      amountOfItems: 0,
      priceOffered: 0,
      dateOfDelivery: '',
      bidView: '',
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
  
  createBid = () => {
    API.createBid(this.state)
  }

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id ="modal1" className="modal">
        <div className="modal-content">
          <p>{this.props.title}</p>
          <div className="divider"></div>
            <form>
              <div className="input-field col s12 left-align">
                <p>Please select date of delivery:</p>
                <DayPickerInput onDayChange={day => this.setState({ dateOfDelivery: day.toISOString()})}/>
              </div>
              <div className="left-align input-field col s12">
                <p>Please select bid type:</p>
                <p>
                  <label>
                    <input name="bidView" id="public" type="radio" onChange={(e) => this.setState({ bidView: (e.target.id).toUpperCase()})} />
                    <span>Public</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="bidView" id="private" type="radio" onChange={(e) => this.setState({ bidView: e.target.id})} />
                    <span>Private</span>
                  </label>
                </p>
              <div className="input-field col s12">
                <input id="amountOfItems" type="number" className="validate" onChange={this.handleChange} value={this.state.amountOfItems}/>
                <label className="active" htmlFor="amountOfItems">Number of Items</label>
              </div>
              </div>
              <div className="input-field col s12">
                <input id="priceOffered" type="number" className="validate" onChange={this.handleChange} value={this.state.priceOffered}/>
                <label className="active" htmlFor="priceOffered">Price offered</label>
              </div>
            </form>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-light btn-flat left">Cancel</button>
          <button className="modal-close waves-effect waves-light btn-flat right" onClick={this.createBid}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Modal;
