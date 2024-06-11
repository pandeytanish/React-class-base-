import React, { Component } from 'react'
import Student from './Student';


export default class ComponentWillUnmount extends Component {
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
  render() {
    return (
        <>
            <div>ComponentWillUnmount</div>
            {
               this.state.show ?  <Student/>: <h1>Child Component Removed</h1> 
            }
            
            <button onClick={() => this.setState({show : !this.state.show})}>Toggle Child Component</button>
        </>
  
    )
  }
}
