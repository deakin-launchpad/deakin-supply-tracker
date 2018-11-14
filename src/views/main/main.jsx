import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Home from 'views/home/home.jsx'
import Team from 'views/team/team.jsx'
import Login from 'views/login/login.jsx'
import { Switch, Route } from 'react-router-dom'
import Farmer from 'views/farmer/farmer.jsx'
import Importer from 'views/importer/importer.jsx'
import Exporter from 'views/exporter/exporter.jsx'
import Consumer from 'views/consumer/consumer.jsx'


class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Main container">
       <Switch>
            <Route exact path='/' render={ (props) =><Login {...props} user={this.props}/>}/>
            <Route exact path='/exporter' component={Exporter}/>
            <Route exact path='/importer' component={Importer}/>
            <Route exact path='/consumer' component={Consumer}/>
            
        </Switch>
      </div>
    );
  }
}

export default Main;
