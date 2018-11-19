import React, { Component } from 'react'
import Main from 'views/main/main.jsx'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'
import openSocket from 'socket.io-client';
import ImportedAppHelper from "helpers/AppHelper.js";
import Footer from 'components/footer.jsx';
const AppHelper = new ImportedAppHelper();
const socket = openSocket('http://35.163.217.253:8000');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      title: 'Deakin Supply',
      worldState: {}
    };
  }
  // Used to handle state from children
  stateHandler = (state) => {
    console.log(state)
    this.setState(
      state
    )
  }

  initSocket() {
    console.log('initSocket()')
    socket.on('connect', () => {
      console.log('Client connected!')
      socket.emit('worldstate');
    })

    socket.on('message', (data) => {
      // console.log(data.message.data);
      switch (data.message.type) {
        case "worldstate":
          this.setState({worldState: data.message.data});
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
    this.initSocket()
  }

  render() {
    return (
      <div className="App">
        {AppHelper.isUserLoggedIn() ? <Header title={this.state.title} logout={this.stateHandler}/> : ''}
        <Main  parentState={this.state} parentStateHandler={this.stateHandler}/>
        {AppHelper.isUserLoggedIn() ? <Footer worldSupplies={this.state.worldState.world}/> : ''}
      </div>
    );
  }
}

export default App;
