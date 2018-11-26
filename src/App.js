import React, { Component } from 'react'
import Main from 'views/main/main.jsx'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'
import openSocket from 'socket.io-client';
import AppHelper from "helpers/AppHelper.js";
import Footer from 'components/footer.jsx';
import LoadingComponent from 'components/loading/loading.jsx';
import { connect } from 'react-redux';
import { requestAccessTokenLogin, setUserRole } from 'actions';
import Login from 'views/login/login.jsx';
const socket = openSocket(process.env.REACT_APP_BASE_URL);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Deakin Supply',
      worldState: {}
    };
  }

  // Used to handle state from children
  stateHandler = (state) => {
    // console.log(state)
    this.setState(
      state
    )
  }

  initSocket() {
    socket.on('connect', () => {
      socket.emit('worldstate');
      setInterval(function(){
        socket.emit('worldstate');
      }, 60000);
    })

    socket.on('message', (data) => {
      // console.log(data.message.data);
      switch (data.message.type) {
        case "worldstate":
          this.setState({worldState: data.message.data});
          break;
        default:
          break;
      }
      // console.log("THIS BITCH WORKS: " + this.state.worldState.consumed);
      // console.log(this.state.worldState);
    })
    
    socket.on('disconnect', () => {
      console.log('Client connected!')
    })

  }

  componentDidMount() {
    this.initSocket();

    let token = ''
    if ((token = AppHelper.isUserLocalStorageLoggedIn())) {
      this.props.dispatchAccessTokenLogin(token)
      .then((response) => {
        const userRole = response.payload.data.data.userDetails.role.toLowerCase();
        this.props.dispatchSetUserRole(userRole);
      })
      .catch ((error) => console.log(error));
    }
  }

  render() {
    if (this.props.loading) return (<LoadingComponent/>);
    else return (
      <div className="App">
        {this.props.loggedIn ? <Header title={this.state.title} logout={this.stateHandler}/> : ''}
        {this.props.loggedIn ? <Main parentState={this.state} parentStateHandler={this.stateHandler}/> : <Login parentState={this.state} parentProps={this.props}/>}
        {this.props.loggedIn ? <Footer worldSupplies={this.state.worldState.world}/> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      loggedIn : state.loginStatus.loggedIn,
      loading : state.loginStatus.loading,
      loginStatus : state.loginStatus
      // Very strange behavior if I remove the above line, 
      // even though loginStatus hasn't been used anywhere! Upon removing, the app
      // wouldn't load Main component on first load
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAccessTokenLogin : (token) => dispatch(requestAccessTokenLogin(token)),
    dispatchSetUserRole : (userRole) => dispatch(setUserRole(userRole))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
