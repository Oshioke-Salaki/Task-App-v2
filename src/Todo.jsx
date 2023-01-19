import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Todo">
        {this.props.content}
        <div className="Todo-buttons">
          <button onClick={this.toggleForm}>
            <i class="fas fa-pen" />
          </button>
          <button onClick={this.handleRemove}>
            <i class="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
