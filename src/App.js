import React, { Component } from 'react';

import './App.css';
var count = 0
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count: 0
    }
  }
  countUp = ()=>{
    count++
     this.setState({
       count: count
     })
  }
  countDown = () => {
    count--
    this.setState({

      count : count
    })
  }
  render() {
    return (
      <div className="container">
      <button onClick={this.countDown} className="btn btn-primary">&#8681;</button>
      <input className="textbox" type="text" name="countNumberTextBox" value={this.state.count}/>
      <button onClick={this.countUp} className="btn btn-primary">&#8679;</button>
      </div>
    );
  }
}

export default App;
