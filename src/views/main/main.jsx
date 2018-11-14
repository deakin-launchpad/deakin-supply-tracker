import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Login from 'views/login/login.jsx'
import { Switch, Route , Redirect} from 'react-router-dom'
import Farmer from 'views/farmer/farmer.jsx'
import Importer from 'views/importer/importer.jsx'
import Exporter from 'views/exporter/exporter.jsx'
import Consumer from 'views/consumer/consumer.jsx'


class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    //console.log('routes',this.props.user.loggedIn)
    return (
      <div className="Main container">
       <Switch>
            <Route exact path='/' render={ (props) =><Login {...props} user={this.props}/>}/>
            <Route exact path='/farmer' render={ (props) =>
              (this.props.user.loggedIn?(<Farmer {...props} user={this.props}/>):(<Redirect to='/'/>))}
            />
            <Route exact path='/exporter' component={Exporter}/>
            <Route exact path='/importer' component={Importer}/>
       
            
        </Switch>
      </div>
    );
  }
}

export default Main;
