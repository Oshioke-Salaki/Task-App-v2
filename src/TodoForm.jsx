import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: '' };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid() });
    this.setState({ newItem: '' });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="newItem">New Todo</label>
        <input
          id="newItem"
          type="text"
          name="newItem"
          placeholder="New Todo"
          value={this.state.newItem}
          onChange={this.changeHandler}
        />
        <button>ADD ITEM</button>
      </form>
    );
  }
}

export default TodoForm;
