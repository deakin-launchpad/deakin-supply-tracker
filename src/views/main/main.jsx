import React, { Component } from 'react';
import Login from 'views/login/login.jsx'
import { Switch, Route, Redirect} from 'react-router-dom'
import Farmer from 'views/farmer/farmer.jsx'
import Importer from 'views/importer/importer.jsx'
import Exporter from 'views/exporter/exporter.jsx'
import Consumer from 'views/consumer/consumer.jsx'
import World from 'views/world/world.jsx';
import AppHelper from "helpers/AppHelper.js";

class Main extends Component {
  render() {
    // console.log('routes',this.props)
    return (
      <div className="Main container">
       <Switch>
            <Route exact path='/' render={ (props) => (
              // Next line is failsafe
              // this.props.parentState.loggedIn || AppHelper.isUserLoggedIn() ? (<Login {...props} parentProps={this.props}/>) : (<Login {...props} parentProps={this.props}/>)
              // Next line is what needs to be always working
              this.props.parentState.loggedIn ? (<Redirect to={'/' + AppHelper.getUserRole() }/>) : (<Login {...props} parentProps={this.props}/>)
            )}/>
            <Route exact path='/farmer' render={ (props) =>
              (this.props.parentState.loggedIn && AppHelper.getUserRole() === 'farmer' ? (<Farmer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/exporter' render={ (props) =>
              (this.props.parentState.loggedIn && AppHelper.getUserRole() === 'exporter' ? (<Exporter {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/importer' render={ (props) =>
              (this.props.parentState.loggedIn && AppHelper.getUserRole() === 'importer' ? (<Importer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/consumer' render={ (props) =>
              (this.props.parentState.loggedIn && AppHelper.getUserRole() === 'consumer' ? (<Consumer {...props} parentProps={this.props}/>) : (<Redirect to='/'/>))}
            />
            <Route exact path='/world' render={ (props) =>
              <World parentProps={this.props}/> } //Renamed user to parentProps in world.jsx as well
            />
            
        </Switch>
      </div>
    );
  }
}

export default Main;
