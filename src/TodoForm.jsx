import React, { Component } from 'react';

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
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <div>
        <h2>New Todo</h2>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="newItem"
            placeholder="New Todo"
            value={this.state.newItem}
            onChange={this.changeHandler}
          />
          <button>ADD ITEM</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
