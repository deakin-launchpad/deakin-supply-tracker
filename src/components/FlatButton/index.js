import React, { Component } from 'react';
import './style.css';
class FlatButton extends Component {
    render() {
        return (
            <a href={this.props.href} className="waves-effect waves-red btn-flat white-text">{this.props.text}</a>
        );
    }
}

export default FlatButton;
