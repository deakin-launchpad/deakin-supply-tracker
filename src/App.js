import React, { Component } from 'react'
import Main from 'views/main/main.jsx'
import './App.css'
import './views/view.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'
import openSocket from 'socket.io-client';
import AppHelper from "helpers/AppHelper.js";
import Footer from 'components/footer.jsx';
import LoadingComponent from 'components/loading/loading.jsx';
import { connect } from 'react-redux';
import { requestAccessTokenLogin, setUserRole, setUserGoods } from 'actions';
import Login from 'views/login/login.jsx';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
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
      setInterval(function () {
        socket.emit('worldstate');
      }, 60000);
    })



    socket.on('message', (data) => {
      // console.log(data.message.data);
      switch (data.message.type) {
        case "worldstate":
          this.setState({ worldState: data.message.data });
          break;
        case "newItenRequest":
          NotificationManager.info('New Item Request');
          break;
        case "newBidCreated":
          NotificationManager.info('New Bid created for your request');
          break;
        case "bidCreatedSelf":
          NotificationManager.success('Your bid was succesfull');
          break;
        case "itemCreated":
          NotificationManager.success('Your items were successfully created');
          break;
        case "itemRequestSelf":
          NotificationManager.success('Your items request was successfully created');
          break;
        case "bidAcceptedSucess":
          NotificationManager.success('You successfully accepted this bid');
          break;
        case "bidAccepted":
          NotificationManager.info('Your bid was accepted by the Orderer');
          break;
          case "noCropsSelf":
          NotificationManager.error('You dont have sufficient crops');
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

  authenticateSocket(userToken) {
    socket.emit('authenticate', userToken);
  }

  componentDidMount() {
    this.initSocket();

    let token = ''
    if ((token = AppHelper.isUserLocalStorageLoggedIn())) {
      this.props.dispatchAccessTokenLogin(token)
        .then((response) => {
          const userRole = response.payload.data.data.userDetails.role.toLowerCase();
          const userGoods = response.payload.data.data.userDetails.warehouse;
          this.authenticateSocket(token);
          this.props.dispatchSetUserRole(userRole);
          this.props.dispatchSetUserGoods(userGoods);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    if (this.props.loading) return (<LoadingComponent />);
    else return (
      <div className="App">
        {this.props.loggedIn ? <Header title={this.state.title} logout={this.stateHandler} parentProps={this.props} /> : ''}
        {this.props.loggedIn ? <Main parentState={this.state} parentStateHandler={this.stateHandler} /> : <Login parentState={this.state} parentProps={this.props} />}
        {this.props.loggedIn ? <Footer worldSupplies={this.state.worldState.world} /> : ''}
        {this.props.loggedIn ? <NotificationContainer /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginStatus.loggedIn,
    loading: state.loginStatus.loading,
    loginStatus: state.loginStatus
    // Very strange behavior if I remove the above line, 
    // even though loginStatus hasn't been used anywhere! Upon removing, the app
    // wouldn't load Main component on first load
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAccessTokenLogin: (token) => dispatch(requestAccessTokenLogin(token)),
    dispatchSetUserRole: (userRole) => dispatch(setUserRole(userRole)),
    dispatchSetUserGoods: (userGoods) => dispatch(setUserGoods(userGoods))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
