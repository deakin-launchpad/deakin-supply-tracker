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
      <div className="World bodyDiv">
        <p className="titleText">
          World view
        </p>
        <p className="titleText">
          Supplies
        </p>
        <div className="mainDiv">
          <div className="row">
            <div className="col s9">
              Farmer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.farmer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              Exporter
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.exporter}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              Importer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.importer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              Consumer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              In the World
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.world}
              </div>
            </div>
          </div>
        <div className="divider"></div>
        <p className="titleText center">
          Lifetime
        </p>
        <div className="row">
            <div className="col s9">
              Produced
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.produced}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              Consumed
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.consumed}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default World;
