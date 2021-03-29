import React, { Component } from 'react';


import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  incrementCounter = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  
  render(){
    return(
      <div className="App">
        <button onClick={this.incrementCounter}>Click</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
export default App;
