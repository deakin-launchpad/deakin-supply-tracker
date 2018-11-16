import React, { Component } from 'react';

class World extends Component {
  componentDidMount() {
    // console.log("world componentDidMount(): " + this.props.parentProps.worldstate);
  }

  componentWillMount() {
    // console.log("world componentWillMount()");
  }

  componentDidUpdate() {
    // console.log("world componentDidUpdate() ");
  }

  render() {
    return (
      <div className="World">
        <h1>World view</h1>
        <h2>Supplies</h2>
        <h3>Farmer {this.props.parentProps.parentState.worldState.farmer}</h3>
        <h3>Exporter {this.props.parentProps.parentState.worldState.exporter}</h3>
        <h3>Importer {this.props.parentProps.parentState.worldState.importer}</h3>
        <h3>Consumer {this.props.parentProps.parentState.worldState.consumer}</h3>
        <br/>
        <h2>In the World {this.props.parentProps.parentState.worldState.world}</h2>
        <hr></hr>
        <h2>Lifetime</h2>
        <h3>Produced {this.props.parentProps.parentState.worldState.produced}</h3>
        <h3>Consumed {this.props.parentProps.parentState.worldState.consumed}</h3>
      </div>
    );
  }
}

export default World;
