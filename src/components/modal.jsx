import React, { Component } from 'react';
import M from "materialize-css";

class Modal extends Component {
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

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id ="modal1" className="modal">
        <div className="modal-content">
          <h4>{this.props.title}</h4>
          <div className="divider"></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
