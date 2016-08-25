import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selector';
import { requestTodos, createTodo, updateTodo, destroyTodo }
  from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  toggleTodo: (todo) => dispatch(updateTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
