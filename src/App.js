import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import SupplyChainLandingPage from 'views/SupplyChainLandingPage';
import User from 'views/User';
import './App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import Header from "components/Header";
import Footer from "components/Footer";
import World from "views/World";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="blank-header">
              <Header/>
          </div>
          <div className="blank-body">
              <Switch>
                  <Route
                      exact path='/'
                      component={SupplyChainLandingPage}
                  />
                  <Route
                      path={['/farmer', '/exporter', '/importer', '/consumer']}
                      component={User}
                  />
                  <Route
                      path='/world'
                      component={World}
                  />

              </Switch>
          </div>
          <div className="blank-footer">
              <Footer/>
          </div>

      </div>
    );
  }
}

export default App;
