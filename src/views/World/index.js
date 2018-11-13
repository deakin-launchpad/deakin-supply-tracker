import React, { Component } from 'react';
import "./style.css";
import WorldListItem from "../../components/WorldListItem";


class World extends Component {
    render() {
        return (
            <div className={"world-container"}>
                <WorldListItem text={"Farmer"}/>
                <WorldListItem text={"Importer"}/>
                <WorldListItem text={"Exporter"}/>
                <WorldListItem text={"Consumer"}/>
            </div>
        );
    }
}

export default World;
