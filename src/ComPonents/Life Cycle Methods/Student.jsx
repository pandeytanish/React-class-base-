import React, { Component } from 'react'

export default class Student extends Component {
    componentWillUnmount() {
        alert("componentwillunmount called")
    }
  render() {
    return (
      <div>
        <h1>Studenet Component</h1>
      </div>
    )
  }
}
