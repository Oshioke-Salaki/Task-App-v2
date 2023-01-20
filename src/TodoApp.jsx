import React, { Component } from 'react';
import TodoForm from './TodoForm.jsx';
import Todo from './Todo.jsx';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
        return { ...todo, newItem: updatedTask };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>Todo List! <span>A simple todo application!</span></h1>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.newItem}
              completed={todo.completed}
              removeTodo={this.removeHandler}
              updateTodo={this.update}
              toggleTodo={this.toggleCompletion}
            />
          ))}
        </ul>
        <TodoForm addTodo={this.addHandler} />
      </div>
    );
  }
}

export default TodoApp;
