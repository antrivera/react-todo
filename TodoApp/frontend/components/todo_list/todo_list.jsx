import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const todos = this.props.todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} toggle={this.props.toggleTodo}
        destroy={this.props.destroyTodo} />
    ));

    return (
      <div>
        <ul>
          {todos}
        </ul>

        <h2>Create Todo!</h2>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }

}

export default TodoList;
