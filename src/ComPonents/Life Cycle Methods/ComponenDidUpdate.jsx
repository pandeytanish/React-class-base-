import React, { Component } from 'react'

export default class ComponenDidUpdate extends Component {

    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    componentDidUpdate (prevProps,prevState,snapshot) {
        console.log("componentDidUpdate",prevState.count, this.state.count)
        // if(prevState.count == this.state.count){
        //     alert("Data Same")
        // }
        // this.setState({count : this.state.count + 1}) Infinite State because we have not given any condition
        
        if (this.state.count<10) {
            this.setState({count : this.state.count + 1})
        }
    }
  render() {
    return (
      <div>
        <h1>Hello Count is {this.state.count}</h1>
        <button onClick={()=> this.setState({count : 1})}>Update</button>
      </div>
    )
  }
}
