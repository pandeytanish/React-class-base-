import React, { Component } from 'react';

class TODOList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingIndex: null,
      editingTask: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  }

  handleEditInputChange = (event) => {
    this.setState({ editingTask: event.target.value });
  }

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: ''
      }));
    }
  }

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task, i) => i !== index)
    }));
  }

  startEditing = (index) => {
    this.setState({
      editingIndex: index,
      editingTask: this.state.tasks[index]
    });
  }

  saveTask = () => {
    if (this.state.editingTask.trim() !== '') {
      this.setState((prevState) => {
        const tasks = [...prevState.tasks];
        tasks[prevState.editingIndex] = prevState.editingTask;
        return {
          tasks,
          editingIndex: null,
          editingTask: ''
        };
      });
    }
  }

  cancelEditing = () => {
    this.setState({
      editingIndex: null,
      editingTask: ''
    });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={this.state.editingTask}
                    onChange={this.handleEditInputChange}
                  />
                  <button onClick={this.saveTask}>Save</button>
                  <button onClick={this.cancelEditing}>Cancel</button>
                </div>
              ) : (
                <div>
                  {task}
                  <button onClick={() => this.startEditing(index)}>Edit</button>
                  <button onClick={() => this.removeTask(index)}>Remove</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TODOList;
