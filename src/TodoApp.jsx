import React, { Component } from 'react';
import TodoForm from './TodoForm.jsx';
import Todo from './Todo.jsx';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  render() {
    return (
      <div>
        <div className="heading">
          <h1>Todo List!</h1>
          <h3>A simple todo application!</h3>
        </div>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo content={todo.newItem} />
          ))}
        </ul>
        <TodoForm addTodo={this.addHandler} />
      </div>
    );
  }
}

export default TodoApp;
