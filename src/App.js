import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import SupplyChainLandingPage from 'views/SupplyChainLandingPage';
import Actor from 'views/Actor';
import './App.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import Header from "components/Header";
import Footer from "components/Footer";
import World from "views/World";
import Login from "views/Login";

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
                      path={'/user/login'}
                      component={Login}
                  />
                  <Route
                      path={['/farmer', '/exporter', '/importer', '/consumer']}
                      component={Actor}
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
