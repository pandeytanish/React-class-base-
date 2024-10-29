import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tanish'
    }
  }
  componentDidMount() {
    console.warn("componentDidMount")
  }
  render() {
    console.warn("render")
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
        <h1>My Name is {this.state.name}</h1>

        <button onClick={() => { this.setState({ name: 'Trishal' }) }}>Update</button>
      </div>
    )
  }
}
