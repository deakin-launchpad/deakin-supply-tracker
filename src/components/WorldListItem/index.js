import React, { Component } from 'react';
import FlatButton from "../FlatButton";
import "./style.css";

class WorldListItem extends Component {
    render() {
        return (
            <div className={"world-list-item-container"}>
                <p>{this.props.text} <FlatButton/></p>
            </div>
        );
    }
}

export default WorldListItem;
