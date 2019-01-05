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
        <p className="heading">
          World view
        </p>
        <p className="subHeading">
          Supplies
        </p>
        <div className="view-container">
          <div className="row">
            <div className="col s9 pad-top">
              Farmer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.farmer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 pad-top">
              Exporter
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.exporter}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 pad-top">
              Importer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.importer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 pad-top">
              Consumer
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.consumer}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 pad-top">
              In the World
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.world}
              </div>
            </div>
          </div>
        <div className="divider"></div>
        <p className="subHeading center customStyle">
          Lifetime
        </p>
        <div className="row">
            <div className="col s9 pad-top">
              Produced
            </div>
            <div className="col s3">
              <div className="valueBox">
                {this.props.parentProps.parentState.worldState.produced}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 pad-top">
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
