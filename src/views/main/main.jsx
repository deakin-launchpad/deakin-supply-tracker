import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'views/login/login.jsx';
import { Switch, Route, Redirect} from 'react-router-dom';
import Farmer from 'views/farmer/farmer.jsx'
import Importer from 'views/importer/importer.jsx'
import Exporter from 'views/exporter/exporter.jsx'
import Consumer from 'views/consumer/consumer.jsx'
import World from 'views/world/world.jsx';
import AppHelper from "helpers/AppHelper.js";

class Main extends Component {
  blah = () => {
    return (
      <div className="Main container">
       <Switch>
            <Route exact path='/' render={ (props) => (
              // Next line is failsafe
              // this.props.parentState.loggedIn || AppHelper.isUserLoggedIn() ? (<Login {...props} parentProps={this.props}/>) : (<Login {...props} parentProps={this.props}/>)
              // Next line is what needs to be always working
              this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? (<Redirect to={'/' + (this.props.userRole || AppHelper.getUserRole()) }/>) : (<Login {...props} parentProps={this.props}/>)
            )}/>
            <Route exact path='/farmer' render={ (props) =>
              ((this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn()) && ((this.props.userRole || AppHelper.getUserRole()) === 'farmer') ? (<Farmer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/exporter' render={ (props) =>
              ((this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn()) && ((this.props.userRole || AppHelper.getUserRole()) === 'exporter') ? (<Exporter {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/importer' render={ (props) =>
              ((this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn()) && ((this.props.userRole || AppHelper.getUserRole()) === 'importer') ? (<Importer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/consumer' render={ (props) =>
              ((this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn()) && ((this.props.userRole || AppHelper.getUserRole()) === 'consumer') ? (<Consumer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/world' render={ (props) =>
              <World parentProps={this.props}/> } //Renamed user to parentProps in world.jsx as well
            />
            
        </Switch>
      </div>
    );
  }

  render() {
    if (this.props.loading) return (<div></div>);
    return this.blah();
  }
}

const mapStateToProps = (state) => {
  return {
      loggedIn : state.loginStatus.loggedIn,
      loading : state.loginStatus.loading,
      userRole : state.loginStatus.userRole
  }
}

export default connect(mapStateToProps)(Main);
