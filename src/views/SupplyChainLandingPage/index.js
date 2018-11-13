import React, { Component } from 'react';
import CenterCard from "components/CenterCard";
import FlatButton from "components/FlatButton";
import "./style.css";

class SupplyChainLandingPage extends Component {
    render() {
        return (
          <CenterCard>
              <div className="container">
                  <FlatButton className="item" href={"/farmer"} text={"Farmer"}/>
                  <FlatButton className="item" href={"/exporter"} text={"Exporter"}/>
                  <FlatButton className="item" href={"/importer"} text={"Importer"}/>
                  <FlatButton className="item" href={"/consumer"} text={"Consumer"}/>
              </div>
          </CenterCard>
        );
    }
}

export default SupplyChainLandingPage;
