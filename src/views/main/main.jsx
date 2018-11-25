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

const actors = {
  farmer: Farmer,
  exporter: Exporter,
  importer: Importer,
  consumer: Consumer
}
class Main extends Component {
  
  renderConditionalActor = (actorName, props) => {
    var MyComponent = actors[actorName];
    return (this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn()) ? 
      (
        (this.props.userRole || AppHelper.getUserRole()) === actorName ? 
        (<MyComponent {...props} parentProps={this.props}/>)
        : (<Redirect to={'/' + (this.props.userRole || AppHelper.getUserRole()) }/>)
      )
    : (<Redirect to='/'/>)
  }

  blah = () => {
    return (
      <div className="Main container">
       <Switch>
            <Route exact path='/' render={ (props) => (

              this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? (<Redirect to={'/' + (this.props.userRole || AppHelper.getUserRole()) }/>) : (<Login {...props} parentProps={this.props}/>)
            )}/>
            <Route exact path='/farmer' render={ (props) => this.renderConditionalActor('farmer', props)}/>
            <Route exact path='/exporter' render={ (props) => this.renderConditionalActor('exporter', props)}/>
            <Route exact path='/importer' render={ (props) => this.renderConditionalActor('importer', props)}/>
            <Route exact path='/consumer' render={ (props) => this.renderConditionalActor('consumer', props)}/>
            
            <Route exact path='/world' render={ (props) => <World {...props} parentProps={this.props}/> }
            />
            
        </Switch>
      </div>
    );
  }

  render() {
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
