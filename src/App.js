import React, { Component } from 'react'
import logo from './images/deakin-logo.svg'
import simpleHelper from './helpers/simpleHelper'
import Main from './views/main/main.jsx'
import './App.css'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'



let randomN=new simpleHelper()
console.log(randomN.generateRandomNumber())
console.log(randomN.generateRandomInt(10,1000))
/*fetch('/api/hello').then((response)=>response.json()).then((responseJson)=>{
  console.log('done')
})*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      loggedIn:false ,
      loginRole:'',
      accessToken:'',
      title:'Deakin Supply'
       };
     this.handler=this.handler.bind(this)  
     this.updateCounter=this.updateCounter.bind(this)
  }
  handler(state){
    console.log(state)
    this.setState(
      {loggedIn:state}
    )
  }
  
  updateCounter(){
    console.log(this.state.counter)
    this.setState(
      {counter:this.state.counter+1}
    )
  }
  componentDidMount(){
      
    setInterval(this.updateCounter,1000)
  }
  render() {
    return (
      <div className="App" >
        {this.state.loggedIn ? <Header title={this.state.title}/>:''}
        <Main  user={this.state} handler={this.handler} counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
