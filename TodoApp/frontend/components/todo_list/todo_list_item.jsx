import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.todo.done };
  }

  handleToggleClick() {
    const done = this.state.done ? false : true;
    console.log(this.props.todo);
    this.setState({ done });
    const todo = Object.assign({}, this.props.todo, { done });
    this.props.toggle(todo);
  }

  handleDestroyClick() {
    this.props.destroy(this.props.todo);
  }

  render() {
    const done = this.state.done ? "done" : "";

    return (
      <div>
        <li className={done}>{this.props.todo.title}</li>
        <button onClick={this.handleToggleClick.bind(this)}>
          Complete
        </button>
        <button onClick={this.handleDestroyClick.bind(this)}>
          Destroy
        </button>
      </div>
    );
  }
}

export default TodoListItem;
