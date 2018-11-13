// Import all libraries
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// Materialize
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'

// Import components
import Header from "components/Header";
import Footer from "components/Footer";
// Import views
import SupplyChainLandingPage from 'views/SupplyChainLandingPage';
import World from "views/World";
import Login from "views/Login";
import Actor from 'views/Actor';
// Import local style sheet
import './App.css';

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
