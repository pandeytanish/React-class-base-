import React, { Component } from 'react'



export default class ShouldComponentUpdate extends Component {
  constructor(){
    super();
    this.state={
      count : 0
    }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate",this.state.count)
    if(this.state.count>5 && this.state.count<10){
      return true ;
    }
  }
  render() {
    return (
      <>
          <div>ShouldComponentUpdate</div>
          <h1>{this.state.count}</h1>
          <button onClick={() => {this.setState({count : this.state.count +1})}}>Counter</button>
      </>
  
    )
  }
}
