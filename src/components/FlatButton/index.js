import React, { Component } from 'react';
import './style.css';
class FlatButton extends Component {
    render() {
        return (
            <a href={this.props.href} className="black waves-effect waves-light btn-flat white-text">{this.props.text}</a>
        );
    }
}

export default FlatButton;
