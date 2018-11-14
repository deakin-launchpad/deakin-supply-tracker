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
import World from "views/World";
import Login from "views/users/Login";
import UserRegister from "views/users/Register";
import Actor from 'views/Actor';
// Import local style sheet
import './App.css';
import ImportedAppHelper from "helpers/AppHelper.js";
const AppHelper = new ImportedAppHelper();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  loginUser = () => {
    this.setState({
      loggedIn: true
    });
  }

  logoutUser = () => {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="blank-header">
          <Header loggedIn={this.state.loggedIn}/>
        </div>
        <div className="blank-body">
          <Switch>
            <Route
              exact path='/'
              component={Login}
            />
            <Route
              path={'/user/login'}
              component={(props) => <Login logoutUser={this.logoutUser()}/>}
            />
            <Route
              path={'/user/logout'}
              render={() => {
                AppHelper.logoutUser();
              }}
            />
            <Route
              path={'/user/register'}
              component={UserRegister}
            />
            <Route
              path={'/farmer'}
              component={Actor}
            />
            <Route
              path={'/exporter'}
              component={Actor}
            />
            <Route
              path={'/importer'}
              component={Actor}
            />
            <Route
              path={'/consumer'}
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
