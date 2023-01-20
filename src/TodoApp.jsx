import React, { Component } from 'react';
import TodoForm from './TodoForm.jsx';
import Todo from './Todo.jsx';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.update = this.update.bind(this);
  }

  addHandler(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  removeHandler(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
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
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.newItem}
              removeTodo={this.removeHandler}
            />
          ))}
        </ul>
        <TodoForm addTodo={this.addHandler} />
      </div>
    );
  }
}

export default TodoApp;
